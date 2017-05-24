---
title: Feeds and feed versions
layout: documentation
---

A Feed represents a unique, publicly accessible GTFS data source. Each Feed has a URL to a publicly accessible GTFS archive, a mapping of GTFS `agency_id` values to Transitland Operators, the geographic extent of the Feed, the details of the Feed's license.

| Attribute             | Type         | Description                      |
|-----------------------|--------------|----------------------------------|
| `onestop_id`          | Onestop ID   | Feed Onestop ID                  |
| `url`                 | URL          | Publicly accessible GTFS archive |
| `feed_format`         | Enum         | Currently: `gtfs`                |
| `geometry`            | Geometry     | Convex hull of Stops in the Feed |
| `last_fetched_at`     | DateTime     | Last time the Feed was retrieved |
| `last_imported_at`    | DateTime     | Last time the Feed was imported  |
| `license_name`                       | String     | License name, e.g. `MIT`  |
| `license_use_without_attribution`    | Enum       | `yes`, `no`, `unknown`    |
| `license_create_derived_product`     | Enum       | `yes`, `no`, `unknown`    |
| `license_redistribute`               | Enum       | `yes`, `no`, `unknown`    |
| `license_attribution_text`           | String     | Required attribution text |
| `license_url`                        | URL        | URL to Feed License       |
| `tags`                | Object       | Tags |
| `feed_versions`       | Feed Version | Feed Version IDs (SHA1) for this Feed |
| `active_feed_version` | Feed Version | Active Feed Version ID              |
| `operators_in_feed`   | Object array | Mapping of gtfs `agency_id`s to Operators |
| `changesets_imported_from_this_feed` | Changeset | Changeset IDs created from Feed |

## Feed versions

## Feed version imports

## Feed version reports
