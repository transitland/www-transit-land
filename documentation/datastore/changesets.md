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

Submitting changesets is not only the way to create, edit, and delete data, but also the means to formally resolve issues with those actions.
A changeset resolving an issue will contain a field named "issuesResolved" that contains an array of Issue integer ids: 

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

When a changeset is applied, verification is done to ensure that the issues specified in the "issuesResolved" are actually being
resolved. An error occurs otherwise, and the changeset is not applied. This can happen when the changeset did not include all of the entities associated with the issues, or the quality checks performed during the changeset application produced equivalent issues to the ones being resolved.

The attribute values of any entities of a changeset that is not an import, which includes the typical issue-resolving changeset, will not be overwritten by subsequent imports. This, however, applies only for a given set of attributes. These include:

| Model | Attributes |
|-----------|------|
| `Stop` | `geometry`,`name`, `wheelchair_boarding` |
| `Route` | `geometry`, `name`, `color`, `vehicle_type` |
| `RouteStopPattern` | `geometry` |
| `Operator` | `short_name`, `country`, `metro`, `state`, `website` |
