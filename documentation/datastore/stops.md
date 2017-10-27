---
title: Stops
layout: documentation
---

Transitland represents each place a person may board or exit a transit vehicle as a `Stop`. Generally, these are imported from [GTFS](https://en.wikipedia.org/wiki/General_Transit_Feed_Specification) feeds, but Transitland also allows users to create `Stops` that are not associated with a `Feed`.

### Stop data model

Each Transitland `Stop` has a unique `onestop_id`, such as `s-9q9p1bbfkc-lakemerritt`; the [Onestop ID](https://transit.land/documentation/onestop-id-scheme/) (link) format includes an `s` prefix, a geohash encoding the approximate location, and a short identifier.

Basic `Stop` attributes include `name`, a simple name for the station that would be used on printed schedules, and `timezone` for the local timezone. The `wheelchair_boarding` attribute contains accessibility information: when `true`, the location is generally wheelchair accessible, when `false` it is known not to be accessible, and when `null` the accessibility is not known.

The `geometry` attribute may be either a single point or a polygon containing the station extent. In either case, the `geometry_centroid` attribute will always be a point that represents a single location. The centroid is set by 1) the `geometry_reversegeo` attribute if available 2) `geometry` if it is a point, or 3) the calculated centroid of `geometry` if it is a polygon. The location is also referenced by the `osm_way_id` attribute, which is the closest pedestrian-accessible [OpenStreetMap way](http://wiki.openstreetmap.org/wiki/Way) to the Stop. The `osm_way_id` is checked and updated periodically, approximately once every 48 hours, to reflect any changes to OpenStreetMap; `last_conflated_at` is the timestamp of the last check.

The `Stops` API also returns several relations to `Operators` and `Routes` for convenience. `routes_serving_stop` is an array of objects, one for each `Route` that visits the stop, and includes `route_onestop_id` and `route_name` as well as the `operator_onestop_id` and `operator_name` for the route's operator. Similarly, `operators_serving_stop` includes the `operator_onestop_id` and `operator_name` for each `Operator` that serves the stop. `served_by_vehicle_types` is the aggregated `vehicle_type` of all the `Routes` that visit the stop.


| Attribute                 | Type         | Description                      |
|---------------------------|--------------|----------------------------------|
| `onestop_id`              | Onestop ID   | Stop Onestop ID                  |
| `geometry`                | Geometry     | Stop geometry; can be point or polygon |
| `name`                    | String       | Stop name |
| `timezone`                | String       | Stop timezone |
| `osm_way_id`              | Integer      | Conflated OSM way ID |
| `last_conflated_at`       | Datetime     | Timestamp of last time `osm_way_id` was checked |
| `served_by_vehicle_types` | Array        | Vehicle types that visit this Stop |
| `wheelchair_boarding`     | Boolean      | Wheelchair accessible |
| `geometry_reversegeo`     | Geometry     | Alternate geometry; always a point |
| `geometry_centroid`       | Geometry     | Stop centroid; always a point |
| `operators_serving_stop`  | Object array | Operators serving this Stop |
| `routes_serving_stop`     | Object array | Routes serving this Stop |
| `tags`                    | Object       | Tags |

### Stops API

Endpoint: `/api/v1/stops`

Standard entity query parameters:

| Query parameter           | Type         | Description | Example |
|---------------------------|--------------|-------------|---------|
| `onestop_id`              | Onestop ID(s)   | Onestop ID | [Lake Merritt BART](http://transit.land/api/v1/stops/s-9q9p1bbfkc-lakemerritt) |
| `lat`                     | Float           | Latitude   | [Near a point](http://transit.land/api/v1/stops?lon=-122.26518&lat=37.797027) |
| `lon`                     | Float           | Longitude  | [Near a point](http://transit.land/api/v1/stops?lon=-122.26518&lat=37.797027) |
| `r`                       | Float           | Radius (meters) for `lat`/`lon` | [Within 1km of a point](http://transit.land/api/v1/stops?lon=-122.26518&lat=37.797027&r=1000) |
| `bbox`                    | Bounding box    | Bounding box: ymin, xmin, ymax, xmax | [Downtown Oakland](http://transit.land/api/v1/stops?bbox=-122.283282,37.791897,-122.256181,37.814666) |
| `updated_since`           | Datetime        | Entity has been modified since | [Updated in 2017](http://transit.land/api/v1/stops?updated_since=2017-01-01) |
| `imported_from_feed`      | Onestop ID      | Imported from Feed | [Imported from BART](http://transit.land/api/v1/stops?imported_from_feed=f-9q9-bart) |
| `imported_from_feed_version`        | Feed Version | Imported from Feed Version | [Imported from a specific BART version](http://transit.land/api/v1/stops?imported_from_feed_version=0846cbbd00c0c63bb95c621091c4beaae1f2b359) |
| `imported_with_gtfs_id`   | String(s)       | Associated with GTFS entity | [Imported from BART with GTFS ID "LAKE"](http://transit.land/api/v1/stops?imported_from_feed=f-9q9-bart&imported_with_gtfs_id=LAKE) |
| `tag_key`                 | String          | Tag key | [Includes tag "stop_url"](http://transit.land/api/v1/stops?tag_key=stop_url) |
| `tag_value`               | String          | Tag value | [Tag "zone_id" is "1"](http://transit.land/api/v1/stops?tag_key=zone_id&tag_value=1) |
| `include`                 | String(s)       | Include in response: issues, geometry, imported_from_feeds   | [Include Issues and import data](http://transit.land/api/v1/stops?include=issues,imported_from_feeds) |
| `exclude`                 | String(s)       | Exclude from response: issues, geometry, imported_from_feeds | [Exclude geometry](http://transit.land/api/v1/stops?exclude=geometry) |

Plus:

| Query parameter           | Type | Description | Example |
|---------------------------|------|-------------|---------|
| `served_by`               | Onestop ID(s) | Served by Operator or Route | [Served by BART or AC Transit Line 1](http://transit.land/api/v1/stops?served_by=o-9q9-bart,r-9q9n-1) |
| `served_by_vehicle_types` | String(s)     | Served by vehicle types     | [SFMTA light rail stops](http://transit.land/api/v1/stops?served_by_vehicle_types=tram&served_by=o-9q8y-sfmta) |
| `wheelchair_boarding`     | Boolean    | Wheelchair accessible       | [Accessible BART stations](http://transit.land/api/v1/stops?served_by=o-9q9-bart&wheelchair_boarding=true) |

### Stop import process

When a new GTFS feed is imported, existing Transitland `Stops` are matched with GTFS `stops.txt` stops based on the GTFS `stop_id` used in the last import. If a match is found, the existing Transitland `Stop` is updated; if a match is not found, a new Transitland `Stop` is created.

## Stations

Several `Stops` can be grouped together into a `StopStation` complex. A `StopStation` can have several `StopPlatforms`, each representing a platform where a transit vehicle can stop, and several `StopEgresses`, where pedestrians may enter or exit a station.

### Stations data model

The `StopStation`, `StopPlatforms` and `StopEgresses` models are very similar to the plain `Stop` model.

The significant differences are that a `StopStation` will include nested `StopPlatforms` in `stop_platforms` and `StopEgresses` in `stop_egresses`. Additionally, the top-level `StopStation` will include `operators_serving_stop_and_platforms`, `routes_serving_stop_and_platforms`, and `vehicle_types_serving_stop_and_platforms` instead of the similarly named `Stop` relations.

A `StopEgress` includes an additional `directionality` attribute to note if a pedestrian can `enter` (street-to-station), `exit` (station-to-street), or `both` enter and exit the station. A `StopEgress` does not include `operators_serving_stop` and `routes_serving_stop`, since it is not visited by trips.

A `StopPlatform` does not include `osm_way_id`, `last_conflated_at`, or `directionality`, since it does not connect to the street network.

### StopStations API

Endpoint: `/api/v1/stop_stations`

The `StopStations` endpoint has the same query parameters as the `Stop` endpoint, plus:

| Query parameter        | Type | Description | Example |
|------------------------|------|-------------|---------|
| `min_platforms`        | Integer | Minimum number of `StopPlatforms` | [At least 10 platforms](http://transit.land/api/v1/stop_stations/?min_platforms=10) |
| `min_egresses`         | Integer | Minimum number of `StopEgresses` | [At least 1 egress](http://transit.land/api/v1/stop_stations/?min_egresses=1) |

### Generated platforms and egresses

By default, the `StopStations` endpoint will include a generated `StopEgress` or `StopPlatform` if none exist, using the values from the `StopStation`. Any generated entity will have a `generated` attribute with a value of `true`. This commonly happens when a regular `Stop` with no platforms or egresses defined is accessed through the `StopStations` endpoint. This behavior can be disabled by setting the `exclude` query parameter to `generated`.
