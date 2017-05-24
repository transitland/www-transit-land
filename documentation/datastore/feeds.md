---
title: Feeds and feed versions
layout: documentation
---

Transitland is built on publicly available GTFS data contributed by our user community. Detailed information is kept on each Feed, and updated whenever a new version of each Feed is discovered.

## Feeds

A Feed represents a unique GTFS data source. Each Feed has a URL to a publicly accessible GTFS archive, a mapping of GTFS `agency_id` values to Transitland Operators, the geographic extent of the Feed, and the details of the Feed's license.

### Feed data model

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
| `feed_versions`       | Feed Versions| Feed Version IDs (SHA1) for this Feed |
| `active_feed_version` | Feed Version | Active Feed Version ID              |
| `operators_in_feed`   | Object array | Mapping of gtfs `agency_id`s to Operators |
| `changesets_imported_from_this_feed` | Changesets | Changesets created from Feed |

### Feeds API

Endpoint: `/api/v1/feeds`

## Feed versions

Approximately once per day, the URL for each Feed is checked. When a new version of the Feed is found, a Feed Version is created. The ID for each Feed Version is the SHA1 checksum of the GTFS archive.

### Feed versions data model

| Attribute             | Type         | Description                       |
|-----------------------|--------------|-----------------------------------|
| `sha1`                | SHA1         | SHA1 checksum of the GTFS archive |
| `md5`                 | MD5          | MD5 checksum of GTFS archive      |
| `feed`                | Onestop ID   | Parent Feed Onestop ID            |
| `fetched_at`          | DateTime     | Time was originally fetched       |
| `url`                 | URL          | URL when fetched                  |
| `download_url`        | URL          | Archived copy of Feed Version, if allowed |
| `feedvalidator_url`   | URL          | Archived Google feedvalidator.py report |
| `earliest_calendar_date` | Date      | First day of scheduled service    |
| `latest_calendar_date` | Date        | Last day of scheduled service     |
| `imported_at`         | DateTime     | Last time Feed Version was imported    |
| `import_level`        | Integer      | Import level (0-4)                |
| `import_status`       | Enum         | Import status, such as `most_recent_succeeded` |
| `feed_version_imports`| IDs          | Feed Version Import IDs           |
| `feed_version_infos`  | IDs          | Feed Version Info IDs             |
| `is_active_feed_version` | Boolean   | `true` if Feed Version is active  |
| `changesets_imported_from_this_feed_version` | Changesets | Changesets created from Feed Version |

### Feed versions API

Endpoint: `/api/v1/feed_versions`

### Feed version reports

The Transitland Datastore creates a number of validation and statistical reports for each Feed Version. The currently defined types of reports are:

- `FeedVersionInfoStatistics`: General statistics
- `FeedVersionInfoConveyalValidation`: [Conveyal gtfs-lib](https://github.com/conveyal/gtfs-lib) validation results

Additionally, the results of [Google's feedvalidator.py](https://github.com/google/transitfeed/wiki/FeedValidator) HTML output will be stored on the Feed Version as `feedvalidator_url` when available. In the future, this may instead be stored as an additional type of report.

### Feed version report data model

| Attribute             | Type         | Description                       |
|-----------------------|--------------|-----------------------------------|
| `id`                  | Integer      | ID                                |
| `type`                | Enum         | Report type                       |
| `feed_version_sha1`   | Feed Version | Parent Feed Version               |
| `feed_onestop_id`     | Onestop ID   | Parent Feed                       |
| `data`                | JSON         | JSON blob containing report data  |

### Feed version report API

Endpoint: `/api/v1/feed_version_infos`

| Query parameter        | Type | Description | Example |
|------------------------|------|-------------|---------|
| `feed_onestop_id`    | Onestop ID | Filter by Feed | [Caltrain](https://transit.land/api/v1/feed_version_infos/?feed_onestop_id=f-9q9-caltrain) |
| `feed_version_sha1`  | Feed Version | Filter by Feed Version | [Caltrain, single Feed Version](https://transit.land/api/v1/feed_version_infos?feed_version_sha1=36ba71b654ba6ed1e4866822832c11942c4761e5) |
| `type`                 | Enum | Filter by report type | [Caltrain statistics](https://transit.land/api/v1/feed_version_infos/?feed_onestop_id=f-9q9-caltrain&type=FeedVersionInfoStatistics) |

### FeedVersionInfoStatistics reports

This report contains details about the files in the GTFS archive and basic statistics about the CSV columns and values.

- `filenames`: The filenames present in the directory of the archive containing the CSV files.
- `statistics`: Data for each GTFS CSV file and column, with the `total` number of rows with data for that column, the `unique` number of values encountered, as well as the `min` and `max` values.
- `scheduled_service`: Key-value data for the number of seconds of scheduled service for each date the Feed has scheduled trips.

[Example FeedVersionInfoStatistics  report](https://transit.land/api/v1/feed_version_infos/845)

### FeedVersionInfoConveyalValidation reports

This report contains the JSON output of [Conveyal's gtfs-lib](https://github.com/conveyal/gtfs-lib) validator.

[Example FeedVersionInfoConveyalValidation report](https://transit.land/api/v1/feed_version_infos/8115)

### Google feedvalidator.py reports

The HTML output of [Google feedvalidator.py](https://github.com/google/transitfeed/wiki/FeedValidator). Currently, this is stored on the actual Feed Version record as `feedvalidator_url` as a link to a copy of the report stored on S3.

[Example Feed Version with Google feedvalidator.py report](https://transit.land/api/v1/feed_versions/36ba71b654ba6ed1e4866822832c11942c4761e5)
