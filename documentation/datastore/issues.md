---
title: Issues
layout: documentation
---

<script src="https://cdn.rawgit.com/knsv/mermaid/0.3.5/dist/mermaid.full.js"></script>

Transit data specifications have rules for populating data field types and referential integrity between those fields,
but often their values are not accurate with regard to the geographical, temporal, or other more subjective characteristics of the data content. For example, GTFS Shape points may be accidentally stored in reverse, or a Feed URL may not point to a GTFS feed. In other words, the quality of the data content is
a concern outside of format.


Transitland's Datastore offers a mechanism to check the data quality, create records of issues if found, and resolve those issues through Changesets.


## Issue data model

An Issue instance represents a single occurrence of an issue type. This typically means the issue is
associated with one entity and entity attribute, such as a Route's name or Feed's URL. Sometimes, however, the issue type can cover an interrelationship between two or more entities. For example, an issue flagging an unusual distance between a Stop and RouteStopPattern would have an association with both those particular Route and Stop instances.

| Attribute | Type | Description |
|-----------|------|---------|
| `id`      | Number | ID |
| `issue_type` | String | Category |
| `details` | String | Automatic or Manual text that describes issue |
| `created_by_changeset_id` | Number | Changeset, if any, that produced Issue |
| `resolved_by_changeset_id` | Number | Changeset, if any, that resolved Issue |
| `open` | Boolean | The issue is not resolved or no resolution action is necessary. |

Issues are connected to entities through the join table represented by the model EntityWithIssues.

| Attribute | Type | Description |
|-----------|------|---------|
| `id`      | Number | ID |
| `entity_id` | Number | Entity Foreign Key |
| `entity_type` | String | Entity Type |
| `entity_attribute` | String | Attribute field to blame for the issue |
| `issue_id` | Number | Issue Foreign Key |

Example Issue Types

| `issue_type` | Description |
|-----------|------|
| `stop_rsp_distance_gap` | Stop is too far (> 100 meters) from a given RouteStopPattern |
| `distance_calculation_inaccurate` | Stop distances for a given RouteStopPattern are wrong |
| `feed_fetch_invalid_url` | Feed source URL host unavailable (poorly formatted URLs will not be saved on the Feed model ) |
| `feed_fetch_invalid_zip` | Feed source zip file is not structured according to expectations |
| `feed_fetch_invalid_source` | Feed source is not valid according to the GTFS specification |
| `feed_fetch_invalid_response` | Feed fetch on URL returned an HTTP status error |
| `uncategorized` | A catch-all encompassing an Issue type not matching the existing types. |

Through the [Issues API endpoint](https://transit.land/api/v1/issues), an example json response may
look something like this:

```json
{
  issues: [
    {
      id: 227,
      created_by_changeset_id: 1993,
      resolved_by_changeset_id: null,
      imported_from_feed_onestop_id: "f-dre-cdta",
      imported_from_feed_version_sha1: "1c2e1092b1d7efdab4eb68294d85fce8cc08f506",
      details: "Stop s-drescnzve0-racino~sideentrance~canopy and RouteStopPattern r-dret1-875-d0fd5e-9e0c93 too far apart.",
      issue_type: "stop_rsp_distance_gap",
      open: true,
      created_at: "2016-07-23T04:42:35.843Z",
      updated_at: "2016-07-23T04:42:35.843Z",
      entities_with_issues: [
        {
          onestop_id: "s-drescnzve0-racino~sideentrance~canopy",
          entity_attribute: "geometry"
        },
        {
          onestop_id: "r-dret1-875-d0fd5e-9e0c93",
          entity_attribute: "geometry"
        }
      ]
    }
  ]
}
```

## Issue life cycle and deprecation

A consumer of the Issues API may wonder why Issues having a specific numeric id value may disappear sometimes (and reappear with a different id), or how Issues even come into being at all. The rest of this page details the processes in which this creation and deprecation occurs, but first is a summary for readers not needing those details.

Issues are created during Changeset application, including through Feed Version imports and the Changeset API, and directly through the Issues API endpoint. Each Changeset
application will deprecate - log and delete - all existing issues on the Changeset's entities and attributes, if any, and check the data quality of the Changeset's entities for new issues to create. In addition, any Changeset that resolves an Issue can produce new Issues not related to the resolving Issue.

A typical Issue life cycle may work as follows. An import creates an issue, e.g. a Stop is too far from a Route. The next Feed Version import, assuming it has the same two
Stop and Route entities with the same or similar gap, will remove the previous issue record and create a new one. Now suppose someone submits an Issue-Resolving Changeset that moves the Stop location closer to the Route, and closes and deprecates the issue. Stop geometry changes from a non-import Changeset will remain unmodifiable, so the next import
does not produce the same issue again on those specific entities.    

![Issues through Changesets](issues_through_changesets.png)

The next few sections will focus on the issue life cycle within a Changeset, but first some definitions.

### Definitions
`Deprecation`: A state in which an Issue no longer serves any active purpose other than an historical record.  
`Equivalence`: Two Issues are equivalent if they share the same issue type, entity associations and entity attribute blame  
`Computed Attribute`: A Transitland-specific entity model attribute that is generated from 1 or more fields of the incoming raw data.  
`Edited Attribute`: An instance array that keeps track of which of the entity's attribute values should not be modified by subsequent imports
`Sticky Attribue`: A class array that specifies which model attributes, if any, are allowed to be marked as an `edited attribute`

### Processes


#### Quality check
The Datastore has a service named `QualityCheck`, composed of independent subclasses, each handling an area of quality, such as geometry. Each subclass has a `check` method which runs a prescribed set of conditions to evaluate
incoming transit data and produce new issues if necessary. An example of one of these conditions is whether a RouteStopPattern
instance's stop distances are increasing or not. Every Changeset conducts quality checks.

#### Computed attributes
Examples of computed attributes are the RouteStopPattern `stop_distances`, the Operator `bbox`, and the Route `geometry`. All of these attributes need to be updated when the attribute values that produced them have changed. For example, the Operator `bbox` is computed from Stop geometries, and so when a Stop moves outside of that bounding box, the Operator `bbox` has to be expanded. In Changeset, there is a method that handles the computation of attributes derived from attributes of different models. Otherwise, if a model attribute is only derived from attributes of that single model, the computation can be done on the model level.

#### Cycle issues
A process that coordinates saving newly generated issues, resolving specified issues, and deprecating irrelevant issues.

### Changesets and issues sequence

<div class="mermaid">
sequenceDiagram
    participant Apply Change Payloads
    participant Update Computed Attributes
    participant Quality Check
    participant Cycle Issues
    Apply Change Payloads->>Cycle Issues: Issues to Deprecate
    Apply Change Payloads->>Cycle Issues: Issues to Resolve
    Update Computed Attributes->>Cycle Issues: Issues to Deprecate
    Quality Check->>Cycle Issues: New Issues
</div>

Within the application of the Changeset, the sequence of issue generation and deprecation runs as follows:

1.  `Change Payload(s) Apply`. The Change Payloads of the Changeset are each applied, and if there were any issue ids specified in the "issuesResolved" field, those issues will be found, collected, and passed on to `Cycle Issues`. In addition, if entities' attributes are changed,
and if there are any issues on those changing entities, those issues will be collected, marked for deprecation, and passed on to `Cycle Issues`.
2.  `Update Computed Attributes`. If the Changeset is *not* an import, attributes derived from the incoming data will be computed. This step is not necessary if the Changeset is an import, because GTFSGraph already handles the same computations. Computing the derived attributes will produce issues to deprecate, and those are returned and passed on to `Cycle Issues`.  
3.  `Quality Checks` come next. This is where new issues are generated on the final outcome of both the incoming data and computed attributes. The new issues are passed on to `Cycle Issues`.
4.  `Cycle Issues` is where work is done to ensure issues are resolved, saved, and deprecated appropriately. It takes as input the issues from the previous steps. First, the methods check whether the issues marked by the Changeset for resolution are actually being resolved. It does this by searching for an equivalent issue (see above definition of equivalency) within the new issues generated by the quality checks in step 3. If any equivalent issue exist, an error is thrown and the Changeset does not finish applying. Otherwise, the resolving issues are closed out and deprecated, all new issues are saved, and the issues marked for deprecation are deprecated. Currently, deprecated issues are logged and then destroyed.

### Issues outside of changesets

Issues can also come into being outside of the Changeset process, either through backend services or
through an Issue API endpoint separate from that of Changesets. On the backend, two examples of services where issues are created are in the Stop conflation service and the Feed fetcher service. In any case where Issues are created outside of a Changeset, those Issues are expected to be deprecated appropriately, and it is up to the programmer to implement this accordingly when extending Issue functionality.
