---
title: Issues
layout: documentation
---

Transit data specifications have rules for data field types and referential integrity between those fields,
but often their value do not accurately reflect the geographical, temporal, or other characteristic of the data content. For example, GTFS Shape points may be accidentally stored in reverse, or a Feed URL may be invalid. In other words, quality


Transitland's Datastore offers a mechanism to check the quality, create records of issues if found, and a way to
resolve those issues through changesets.


## Issue Data Model

An Issue instance represents a single occurrence of an issue type. This typically means the issue is
associated with one entity, such as a Route or Feed, although sometimes the type can cover the interrelationship
between two entities. For example, an issue flagging an unusual stop distance from a route would be associated
with that particular Route and Stop.

| Attribute | Type | Description |
|-----------|------|---------|
| `id`      | Number | ID |
| `issue_type` | String | Category |
| `details` | String | Automatic or Manual text that describes issue |
| `created_by_changeset_id` | Number | Changeset, if any, that produced Issue |
| `resolved_by_changeset_id` | Number | Changeset, if any, that resolved Issue |
| `open` | Boolean | The issue is not resolved or is no resolution action is necessary. |

Issues are connected to entities through the join table model EntityWithIssues.

Deprecation
