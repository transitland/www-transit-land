---
title: Changesets
layout: documentation
---

A changeset is the way to create, edit, and delete data in the Transitland Datastore. Each changeset contains a JSON payload of actions. When the changeset is applied, those actions are carried out on the database. The new records are marked as `current` and given an appropriate `version_number` (incremented one greater than before, in the case of edited records). Destroyed records are soft-deleted from the database. Old records are retained in the database, but they are no longer marked as `current`.

To create, check, and apply a changeset, you can either do each step as a separate HTTP request to the API, or you can try it all at once. Make sure to include an [API key](#api-authentication) in your requests.

## Create and apply a changeset

1. Create an empty changeset: `POST /api/v1/changesets` with JSON in the request body.

    ```json
    {
    "changeset": {
      "notes": "In this changeset, we are creating or editing a stop. If a stop with this Onestop ID already exists, we'll just update its name. If it does not already exist, we will create it."
      }
    }
    ```

2. The response includes an identifier for the changeset.
3. Add changes to a changeset using the `POST /api/v1/changesets/143/change_payloads` endpoint. Here is an example with a returned identifier of `143`:

    ```json
    {
    "change_payload": {
      "payload": {
        "changes": [
          {
            "action": "createUpdate",
            "stop": {
              "onestopId": "s-9q8yt4b-1avhos",
              "name": "1st Ave. & Holloway Street"
            }
          }
        ]
      }
     }
    }
    ```

4. Verify that the changeset can be cleanly applied to the database: `POST /api/v1/changesets/143/check`
5. Apply the changeset: `POST /api/v1/changesets/143/apply`

### Changeset properties

Property | Required | Description
-------- | -------- | -----------
`notes` | - | a few sentences or a paragraph of plain text describing the changes

### Change payload properties

Property | Required | Description
-------- | -------- | -----------
`payload` | yes | see below

### Payload format
The payload is a JSON object. It's an array of change actions:

```json
"changes": []
```

Each payload can contain one or more change actions. The possible actions include `createUpdate` and `destroy`:

```json
"changes": [
  {
    "action": "createUpdate",
    "stop": {
      "onestopId": "s-9q8yt4b-1AvHoS",
      "name": "1st Ave. & Holloway Street"
    },
  },
  {
    "action": "destroy",
    "stop": {
      "onestopId": "s-9q8yt4b-2AvNo"
    }
  }
]
```

Payloads are validated using JSON schemas found in `/app/models/json_schemas`. Note that the API consumes and produces JSON with `"camelCaseKeysInQuotationMarks"`, while internally, the Datastore uses `ruby_symbols_with_underscores`.

## Changesest issue resolution

Submitting changesets is not only the way to create, edit, and delete data, but also to resolve issues with those actions. The next few sections explain the processes a changeset application conducts to verify and complete an issue resolution.

### Definitions
`Deprecation`: A state in which an issue no longer serves any active purpose other than an historical record.  
`Equivalence`: Two issues are equivalent if they share the same issue type, entity associations and entity attribute blame  
`Computed Attribute`: A Transitland-specific entity model attribute that is generated from 1 or more fields of the incoming raw data.  
`Edited Attribute`: An instance array that keeps track of which of the entity's attribute values should not be modified by subsequent imports
`Sticky Attribute`: A class array that specifies which model attributes, if any, are allowed to be marked as an `edited attribute`

### Processes


#### Quality check
The Datastore has a service named `QualityCheck`, composed of independent subclasses, each handling an area of quality, such as geometry. Each subclass has a `check` method which runs a prescribed set of conditions to evaluate
incoming transit data and produce new issues if necessary. An example of one of these conditions is whether a route stop pattern
instance's stop distances are increasing or not. Every changeset conducts quality checks.

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

1.  `Change Payload(s) Apply`. The Change Payloads of the Changeset are each applied, and if there were any issue ids specified in the "issuesResolved" field, those issues will be found, collected, and passed on to `Cycle Issues`. In addition, if entities' attributes are changed, and if there are any issues on those changing entities, those issues will be collected, marked for deprecation, and passed on to `Cycle Issues`. Note: any attribute values that have been marked as "sticky" and have been edited will be ignored and kept intact.
2.  `Update Computed Attributes`. If the Changeset is *not* an import, attributes derived from the incoming data will be computed. This step is not necessary if the Changeset is an import, because GTFSGraph already handles the same computations. Computing the derived attributes will produce issues to deprecate, and those are returned and passed on to `Cycle Issues`.  
3.  `Quality Checks` come next. This is where new issues are generated on the final outcome of both the incoming data and computed attributes. The new issues are passed on to `Cycle Issues`.
4.  `Cycle Issues` is where work is done to ensure issues are resolved, saved, and deprecated appropriately. It takes as input the issues from the previous steps. First, the methods check whether the issues marked by the Changeset for resolution are actually being resolved. It does this by searching for an equivalent issue (see above definition of equivalency) within the new issues generated by the quality checks in step 3. If any equivalent issue exist, an error is thrown and the Changeset does not finish applying. Otherwise, the resolving issues are closed out and deprecated, all new issues are saved, and the issues marked for deprecation are deprecated. Currently, deprecated issues are logged and then destroyed.
