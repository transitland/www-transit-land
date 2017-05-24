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
| `changesets_imported_from_this_feed` | Changesets | Changesets created from Feed |

## Feed versions

Approximately once per day, the URL for each Feed is checked. When a new version of the Feed is found, a Feed Version is created. The ID for each Feed Version is the SHA1 checksum of the GTFS archive.

| Attribute             | Type         | Description                       |
|-----------------------|--------------|-----------------------------------|
| `sha1`                | SHA1         | SHA1 checksum of the GTFS archive |
| `md5`                 | MD5          | MD5 checksum of GTFS archive      |
| `feed`                | Onestop ID   | Parent Feed Onestop ID            |
| `fetched_at`          | DateTime     | Time was originally fetched       |
| `url`                 | URL          | URL when fetched                  |
| `download_url`        | URL          | Archived copy of Feed Version, if allowed |
| `feedvalidator_url`   | URL          | Archived Google FeedValidator report |
| `earliest_calendar_date` | Date      | First day of scheduled service    |
| `latest_calendar_date` | Date        | Last day of scheduled service     |
| `imported_at`         | DateTime     | Time Feed Version was imported    |
| `import_level`        | Integer      | Import level (0-4)                |
| `import_status`       | Enum         | Import status, e.g. `most_recent_succeeded` |
| `feed_version_imports`| IDs          | Feed Version Import IDs           |
| `feed_version_infos`  | IDs          | Feed Version Info IDs             |
| `is_active_feed_version` | Boolean   | `true` if Feed Version is active  |
| `changesets_imported_from_this_feed_version` | Changesets | Changesets created from Feed Version |

## Feed version imports

## Feed version reports
