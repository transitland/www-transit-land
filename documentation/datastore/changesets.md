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

## Quality checks
The changeset application process will conduct checks on the qualitative characteristics of the incoming data. If certain standards are not met, the checks will generate [quality issues](quality_issues.md). These standards correspond to the quality issue category and type listed in on the Quality Issues page. Once quality checks are complete, the changeset application process also handles the deprecation - logging and deleting records and associations - of old issues in addition to writing the new issues.   

## Changesest issue resolution

The submission of changesets with create, edit, and delete actions is also the means to formally resolve quality issues created by previous changesets. A changeset resolving an issue will contain a field named "issuesResolved" that must contain an array of issue integer ids as such:

```json
{
"change_payload": {
  "payload": {
    "changes": [
      {
        "action": "createUpdate",
        "issuesResolved": [1,2,3],
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

When a changeset is applied, automatic verification is done to ensure that the issues specified in the "issuesResolved" are actually being resolved. An error occurs otherwise, and the changeset is not applied. This can happen when the changeset did not include all of the entities associated with the issues, or the quality checks performed during the changeset application produced equivalent issues to the ones being resolved.


## Sticky Attributes
Changesets can fall into two broad types: those automatically generated and applied from feed version imports, and all others (non-import changesets). The distinction comes into play as entity attribute values (e.g. stop coordinates) can be left unmodified from import changesets.
This can happen if:  
1.  The entities have been imported from an initial import.
2.  The changing attributes have been flagged to allow values to remain unmodified, or "sticky" as Transitland calls them. The full list of attributes   is enumerated in the table below.
3.  A non-import changeset has been submitted, and it includes sticky attributes

| Model | Sticky Attributes |
|-----------|------|
| `Stop` | `geometry`,`name`, `wheelchair_boarding` |
| `Route` | `geometry`, `name`, `color`, `vehicle_type` |
| `RouteStopPattern` | `geometry` |
| `Operator` | `short_name`, `country`, `metro`, `state`, `website` |
