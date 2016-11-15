---
title: Issues
layout: documentation
---

<script src="https://cdn.rawgit.com/knsv/mermaid/0.3.5/dist/mermaid.full.js"></script>

## Background

Transit data specifications have rules for data field types and referential integrity between those fields,
but often their values do not accurately reflect the geographical, temporal, or other characteristic of the data content. For example, GTFS Shape points may be accidentally stored in reverse, or a Feed URL may be invalid. In other words, quality is
a concern outside of validation.


Transitland's Datastore offers a mechanism to check the quality, create records of issues if found, and a way to
resolve those issues through Changesets.


## Issue Data Model

An Issue instance represents a single occurrence of an issue type. This typically means the issue is
associated with one entity, such as a Route or Feed, although sometimes the issue type can cover the interrelationship
between two entities. For example, an issue flagging an unusual stop distance from a route would be associated
with both those particular Route and Stop instances.

| Attribute | Type | Description |
|-----------|------|---------|
| `id`      | Number | ID |
| `issue_type` | String | Category |
| `details` | String | Automatic or Manual text that describes issue |
| `created_by_changeset_id` | Number | Changeset, if any, that produced Issue |
| `resolved_by_changeset_id` | Number | Changeset, if any, that resolved Issue |
| `open` | Boolean | The issue is not resolved or is no resolution action is necessary. |

Issues are connected to entities through the join table represented by the model EntityWithIssues.

| Attribute | Type | Description |
|-----------|------|---------|
| `id`      | Number | ID |
| `entity_id` | Number | Entity Foreign Key |
| `entity_type` | String | Entity Type |
| `entity_attribute` | String | Attribute Field having the issue |
| `issue_id` | Number | Issue Foreign Key |

## Issue Life Cycle and Deprecation
It is important to distinguish between different types of Changesets when understanding the issue life cycle.
Changesets are created and applied on import and through client-side API requests (link). And within the context of
issues, API changesets can come in the form of those resolving issues and those adding, updating, or deleting data.

Furthermore, issues can come into being outside of the Changeset process, either through backend services or
through an Issue API endpoint (link) separate from that of Changesets. On the backend, two examples of services where issues are created are in the Stop conflation service and the Feed fetcher service.

### Changesets and Issues

<div class="mermaid">
sequenceDiagram
    Changeset->>apply
    John-->>Alice: Great!
</div>
