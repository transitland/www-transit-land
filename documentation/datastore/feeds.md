---
title: Feeds and feed versions
layout: documentation
---

Transitland is built on publicly available GTFS data [contributed](/documentation/feed-registry/add-a-feed.html) by our user community. Detailed information is kept on each Feed, and updated whenever a new version of each Feed is discovered. Feed versions are both archived for download (as `.zip` files) and imported into the Transitland Datastore for API querying by operators, stops, [routes](routes-and-route-stop-patterns.html), [schedules](schedules.html), etc.

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
| `license_name`                       | String     | [License](#feed-license-information) name, such as `MIT`  |
| `license_use_without_attribution`    | Enum       | `yes`, `no`, `unknown`    |
| `license_create_derived_product`     | Enum       | `yes`, `no`, `unknown`    |
| `license_redistribute`               | Enum       | `yes`, `no`, `unknown`    |
| `license_attribution_text`           | String     | Required attribution text |
| `license_url`                        | URL        | URL to Feed License       |
| `tags`                | Object       | Tags |
| `feed_versions`       | Feed Versions| Feed Version IDs (SHA1) for this Feed |
| `active_feed_version` | Feed Version | [Active Feed Version ID](#active-feed-version) |
| `operators_in_feed`   | Object array | Mapping of gtfs `agency_id`s to Operators |
| `changesets_imported_from_this_feed` | Changesets | Changesets created from Feed |

### Feeds API

Endpoint: `/api/v1/feeds`

<a name="feed-license-information"></a>

### Feed license information

To learn more about how Transitland classifies the licenses associated with a feed, see [this overview of Transitland legal and licensing issues](/an-open-project/index.html).

## Feed versions

Approximately once per day, the URL for each Feed is checked. When a new version of the Feed is found, a Feed Version is created. The ID for each Feed Version is the [SHA1 checksum](https://en.wikipedia.org/wiki/SHA-1) of the GTFS archive.

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
| `is_active_feed_version` | Boolean   | `true` if Feed Version is [active](#active-feed-version)  |
| `changesets_imported_from_this_feed_version` | Changesets | Changesets created from Feed Version |

### Feed versions API

Endpoint: `/api/v1/feed_versions`

<a name="active-feed-version"></a>

### Active feed version

The most recent version of a feed that has been imported into the Transitland Datastore is marked as active. The [schedule API endpoint](schedules.html) only allows querying of the trips and calendars in the active feed version.

The [FeedMaintenance service](https://github.com/transitland/transitland-datastore/blob/master/app/services/feed_maintenance_service.rb) within Transitland Datastore automatically decides when to import a newly fetched feed version. If no need feed version is available when existing ScheduleStopPairs are about to expire, the FeedMaintenance service will extend them into the future.

### Most recent feed version

Are you looking for the most recently fetched Feed Version? This is not necessarily the Feed Version where `is_active_feed_version=true`.

To query for the most recently fetched version of a feed, use an API query like: `https://transit.land/api/v1/feed_versions?feed_onestop_id=f-9v6-capitalmetro&per_page=1&sort_key=fetched_at&sort_order=desc` (replacing `feed_onestop_id` as appropriate).

To directly download a copy of the most recently fetched version of a feed, use: `https://transit.land/api/v1/feeds/f-9v6-capitalmetro/download_latest_feed_version` (replacing the Onestop ID as appropriate). Note that downloading is not allowed for Feeds where `license_redistribute=no`.

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

## Feed version update statistics

The Feeds API also provides simple statistics characterizing when &amp; how a Feed is updated. This includes the total number of Feed Versions, the average number of service days in each Feed Version schedule, the average number of days between publication of new Feed Versions, and the average number of days of overlapping schedule between subsequent Feed Versions. Note: because the `fetched_at` value is used to sort the Feed Versions, manually uploaded files are excluded from statistics.

 [Example](http://transit.land/api/v1/feeds/f-c2g5-bctransit~kelownaregionaltransitsystem/feed_version_update_statistics)

Endpoint: `/api/v1/feeds/:feed_onestop_id/feed_version_update_statistics`

### Response

| Attribute | Type | Description |
|-----------|------|-------------|
| feed_onestop_id | Onestop ID | Feed Onestop ID |
| feed_versions_total | Integer | Total number of Feed Versions for this feed |
| feed_versions_filtered | Integer | Total, excluding manually updated Feed Versions |
| feed_versions_filtered_sha1 | Feed Versions | Filtered Feed Versions ordered by `fetched_at` |
| fetched_at_frequency | Float | Average days between new Feed Versions |
| scheduled_service_duration_average | Float | Average number of days in each schedule |
| scheduled_service_overlap_average | Float | Average number of days overlap between subsequent schedules |
