---
title: Query schedules using the Datastore API
layout: documentation
---

The Transitland Datastore schedule API collapses the many elements of a schedule into an entity. Transitland models each trip between two stops as an edge, called a `ScheduleStopPair` (SSP). Each SSP contains an origin stop, a destination stop, a route, an operator, and arrival and departure times. Each edge also includes a service calendar, describing which days a trip is possible. Accessibility information for wheelchair and bicycle riders is included, if available.

Some of this data is normally split across multiple GTFS tables, but is here denormalized for simpler access: each edge contains enough information to get from one stop to another, to another, and finally to your destination.

![GTFS schematic](/images/schedule-api/ScheduleAPI_Chart_Final1.png)

## ScheduleStopPair Data Model

These are the attributes and data types of a ScheduleStopPair.

| Attribute | Type | Description |
|-----------|------|---------|
| `feed_onestop_id`               | Onestop ID | Feed |
| `feed_version_sha`              | String | Feed Version |
| `route_onestop_id`             | Onestop ID | Route |
| `route_stop_pattern_onestop_id` | Onestop ID | Route Stop Pattern |
| `operator_onestop_id`         | Onestop ID | Operator |
| `origin_onestop_id`            | Onestop ID | Origin stop |
| `origin_timezone`              | String | Origin stop timezone |
| `origin_arrival_time`          | Time | Time vehicle arrives at origin from previous stop |
| `origin_departure_time`        | Time | Time vehicle leaves origin |
| `origin_timepoint_source`      | Enum | Origin timepoint source |
| `origin_dist_traveled`         | Number | Distance in meters along the associated Route Stop Pattern line geometry |
| `destination_onestop_id`       | Onestop ID | Destination stop |
| `destination_timezone`         | String | Destination stop timezone |
| `destination_arrival_time`     | Time | Time vehicle arrives at destination |
| `destination_departure_time`   | Time | Time vehicle leaves destination for next stop |
| `destination_timepoint_source` | Enum | Destination timepoint source |
| `destination_dist_traveled`    | Number | Distance in meters along the associated Route Stop Pattern line geometry |
| `window_start`                 | Time | The previous known exact timepoint |
| `window_end`                   | Time | The next known exact timepoint |
| `trip`                         | String | A text label for a sequence of edges |
| `trip_headsign`                | String | A human-friendly description of the ultimate destination |
| `trip_short_name`              | String | A commonly known human-readable trip identifier, such as a train number |
| `block_id`                     | String | A block of trips made by the same vehicle |
| `service_start_date`           | Date | Date service begins |
| `service_end_date`             | Date | Date service ends |
| `service_days_of_week`         | Boolean Array | Scheduled service, in ISO order (Monday to Sunday) |
| `service_added_dates`          | Date Array | Array of additional dates service is scheduled |
| `service_except_dates`         | Date Array | Array of dates service is not scheduled (for example, holidays) |
| `wheelchair_accessible`        | Boolean | Wheelchair accessible: true, false, or null (unknown) |
| `bikes_allowed`                | Boolean | Bike accessible: true, false, or null (unknown) |
| `drop_off_type`                | Enum | Passenger drop-off |
| `pickup_type`                  | Enum | Passenger pickup |
| `frequency_type`               | Enum | Frequency-based schedule |
| `frequency_headway_seconds`    | Integer | Frequency-based schedule headway, in seconds |
| `frequency_start_time`         | Time | Start of frequency-based schedule |
| `frequency_end_time`           | Time | End of frequency-based schedule |


## Data types

Times can be specified with more than 24 hours, as indicated by GTFS. For example, 25:10 is 1:10am the day after the trip begins.

### Timepoint source

 * `gtfs_exact`: An exact timepoint in the GTFS
 * `gtfs_interpolated`: An interpolated timepoint in the GTFS
 * `transitland_interpolated_linear`: Interpolated based on linear stop sequence
 * `transitland_interpolated_geometric`: Interpolated based on straight-line distance
 * `transitland_interpolated_shape`: Interpolated based on shape_dist_traveled

### Pickup (origin) and drop-off (destination)

 * `null`: Regularly scheduled pickup and drop-off
 * `unavailable`: Pickup or drop-off not available
 * `ask_driver`: Ask the driver for pickup or drop-off
 * `ask_agency`: Phone the agency to schedule in advance

### Frequency-based schedules

A frequency-based schedule runs at an interval, instead of at specific departure and arrival times. When `frequency_type` is present, the trip is repeated every `frequency_headway_seconds` beginning at `frequency_start_time` and ending at `frequency_end_time`. See the [GTFS documentation for frequencies.txt](https://developers.google.com/transit/gtfs/reference/frequencies-file) for more information.

The values for `frequency_type` are:

 * `exact`: service is exactly scheduled.
 * `not_exact`: service repeats, but timepoints are not exact

## Query parameters

The main ScheduleStopPair API endpoint is [/api/v1/schedule_stop_pairs](http://transit.land/api/v1/schedule_stop_pairs). It accepts the following query parameters, which may be freely combined.

| Query parameter        | Type | Description | Example |
|------------------------|------|-------------|---------|
| `origin_onestop_id`        | Onestop ID | Origin Stop. Accepts multiple separated by commas. | [from Embarcadero BART](http://transit.land/api/v1/schedule_stop_pairs?origin_onestop_id=s-9q8znb12j1-embarcadero) |
| `destination_onestop_id`   | Onestop ID | Destination Stop. Accepts multiple separated by commas. | [to Montgomery St. BART](http://transit.land/api/v1/schedule_stop_pairs?destination_onestop_id=s-9q8yyxq427-montgomeryst)
| `route_onestop_id`         | Onestop ID | Route. Accepts multiple separated by commas. | [on Muni N](http://transit.land/api/v1/schedule_stop_pairs?route_onestop_id=r-9q8y-n) |
| `route_stop_pattern_onestop_id` | Onestop ID | Route Stop Pattern. Accepts multiple separated by commas. | [with Route Stop Pattern](http://transit.land/api/v1/schedule_stop_pairs?route_stop_pattern_onestop_id=r-9q8y-n-21866a-06d86d) |
| `operator_onestop_id`      | Onestop ID | Operator. Accepts multiple separated by commas. | [on BART](http://transit.land/api/v1/schedule_stop_pairs?operator_onestop_id=o-9q9-bart) |
| `date`             | Date | Service operates on a date | [valid on 2015-10-26](http://transit.land/api/v1/schedule_stop_pairs?date=2015-10-26) |
| `service_from_date`        | Date | Service operates on a date, or in the future | [valid on and after 2015-10-26](http://transit.land/api/v1/schedule_stop_pairs?service_from_date=2015-10-26) |
| `service_before_date`      | Date | Service operates up to and including date | [valid on and before 2015-11-30](http://transit.land/api/v1/schedule_stop_pairs?service_before_date=2015-11-30) |
| `origin_departure_between` | Time,Time | Origin departure time between two times | [departing between 07:00 - 09:00](http://transit.land/api/v1/schedule_stop_pairs?origin_departure_between=07:00:00,09:00:00) |
| `trip`                     | String | Trip identifier | [on trip '03SFO11SUN'](http://transit.land/api/v1/schedule_stop_pairs?trip=03SFO11SUN) |
| `bbox`                     | Lon1,Lat1,Lon2,Lat2 | Origin Stop within bounding box | [in the Bay Area](http://transit.land/api/v1/schedule_stop_pairs?bbox=-123.057,36.701,-121.044,38.138)

The `date` and `origin_departure_between` query parameters accept special values.

 * `date=today`: Use the current local date.
 * `time=now`: Use the current time. You can also specify `now+<seconds>` or `now-<seconds>`. Example: `time=now-600,now+600`.

 For both of these options, a local timezone must be specified by providing one of the following parameters: `origin_onestop_id`, `destination_onestop_id`, or `operator_onestop_id`.

Note: When you query `schedule_stop_pair`, the origin and destination must be directly connected without any stops between them. For example, you can query stops that are next to each other or are coupled as an express route. To find all the trips that travel between certain stops, use the [Mapzen Turn-by-Turn API](https://mapzen.com/documentation/turn-by-turn/api-reference/) with multimodal costing, which can extract the intermediate stops and do route planning.

## Response format

```json
{
	"schedule_stop_pairs": [{
		"origin_onestop_id": "s-69y7pexjtx-plazademayo<1076s",
		"destination_onestop_id": "s-69y7pesyw0-perú<1075s",
		"route_onestop_id": "r-69y7n-a",
		"route_stop_pattern_onestop_id": "r-69y7n-a-f48841-3c4d66",
		"operator_onestop_id": "o-69y7-sbase",
		"feed_onestop_id": "f-69y7-recursosdatabuenosairesgobar",
		"feed_version_sha1": "95742a1a65826abfa23f5aeaeeb082e45f066801",
		"origin_timezone": "America/Argentina/Buenos_Aires",
		"destination_timezone": "America/Argentina/Buenos_Aires",
		"trip": "A01",
		"trip_headsign": "San Pedrito",
		"block_id": null,
		"trip_short_name": null,
		"wheelchair_accessible": null,
		"bikes_allowed": null,
		"pickup_type": null,
		"drop_off_type": null,
		"shape_dist_traveled": 0.34,
		"origin_arrival_time": "05:00:00",
		"origin_departure_time": "05:00:24",
		"destination_arrival_time": "05:00:58",
		"destination_departure_time": "05:01:22",
		"origin_dist_traveled": 58.7,
		"destination_dist_traveled": 343.2,
		"service_start_date": "2014-03-01",
		"service_end_date": "2017-12-31",
		"service_added_dates": [],
		"service_except_dates": ["2015-01-01", "2015-02-16"],
		"service_days_of_week": [true, true, true, true, true, false, false],
		"window_start": "05:00:24",
		"window_end": "05:00:58",
		"origin_timepoint_source": "gtfs_exact",
		"destination_timepoint_source": "gtfs_exact",
		"frequency_start_time": "05:00:00",
		"frequency_end_time": "05:56:00",
		"frequency_headway_seconds": 480,
		"frequency_type": "exact",
		"created_at": "2017-02-22T03:42:22.827Z",
		"updated_at": "2017-02-22T03:42:22.827Z"
	}],
	"meta": {
		"sort_key": "id",
		"sort_order": "asc",
		"offset": 0,
		"per_page": 1,
		"next": "https://transit.land/api/v1/schedule_stop_pairs?feed_onestop_id=f-69y7-recursosdatabuenosairesgobar&offset=1&per_page=1&sort_key=id&sort_order=asc"
	}
}
```
