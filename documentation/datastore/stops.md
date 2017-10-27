---
title: Stops
layout: documentation
---

Transitland represents each place a person may board or exit a transit vehicle as a `Stop`. Generally, these are imported from GTFS feeds, but Transitland also allows users to create and modify `Stops` that are not associated with a `Feed`.

## Stops

The `Stop` data model represents a location, and includes a number of attributes about accessibility and which `Routes` visit.

Each Transitland `Stop` has a unique `onestop_id`; the format is an `s` prefix, a geohash representing the approximate location, and a short identifier.

The `name` attribute is a simple name for the station that would be used on printed schedules. The `timezone` is the local timezone. The `wheelchair_boarding` attribute contains accessibility information. When `true`, the location is generally wheelchair accessible, when `false` it is known not to be accessible, and when `null` the accessibility is not known.

The `geometry` attribute may be either a Point or a Polygon representing the station extent. In either case, the `geometry_centroid` attribute will always be a Point that represents a single location. The centroid is set by 1) `geometry_reversegeo` if available 2) the `geometry` value if it is a Point or 3) the calculated centroid of `geometry` if it is a Polygon. The location is also referenced by `osm_way_id`, which represents the closest pedestrian-walkable OSM Way to the Stop. The `osm_way_id` is checked and updated periodically, approximately once every 48 hours, to reflect any OSM changes.

The `Stops` API endpoint also includes several relations to `Operators` and `Routes` for convenience. `routes_serving_stop` is an array of objects, one for each `Route` that visits the stop, and includes `route_onestop_id` and `route_name` as well as the `operator_onestop_id` and `operator_name` for the route. The `operators_serving_stop` attribute is similar, one for each `Operator` that visits the stop, with `operator_onestop_id` and `operator_name` as values.

### Stop data model

| Attribute                 | Type         | Description                      |
|---------------------------|--------------|----------------------------------|
| `onestop_id`              | Onestop ID   | Stop Onestop ID                  |
| `geometry`                | Geometry     | Stop geometry; can be Point or Polygon |
| `name`                    | String       | Stop name |
| `timezone`                | String       | Stop timezone |
| `osm_way_id`              | Integer      | Conflated OSM way ID |
| `last_conflated_at`       | Datetime     | Timestamp of last time osm_way_id was checked |
| `served_by_vehicle_types` | Array        | Vehicle types that visit this Stop |
| `wheelchair_boarding`     | Boolean      | Wheelchair accessible |
| `geometry_reversegeo`     | Geometry     | Alternate geometry; always a Point |
| `geometry_centroid`       | Geometry     | Stop centroid; always a Point |
| `operators_serving_stop`  | Object array | Operators serving this Stop |
| `routes_serving_stop`     | Object array | Routes serving this Stop |
| `tags`                    | Object       | Tags |


### Stops API

Endpoint: `/api/v1/stops`

Standard entity query parameters (link), plus:

| Query parameter           | Type | Description | Example |
|---------------------------|------|-------------|---------|
| `served_by`               | Onestop ID | Served by Operator or Route | |
| `served_by_vehicle_types` | String     | Served by vehicle types     | |
| `wheelchair_boarding`     | Boolean    | Wheelchair accessible       | |

### Stop import process

When a new GTFS feed is imported, existing Transitland `Stops` are matched with GTFS `stops.txt` stops based on the GTFS `stop_id` used in the last import. If a match is found, the existing Transitland `Stop` is updated; if not found, a new Transitland `Stop` is created.

## Stations

Several `Stops` can be grouped together into a `StopStation` complex. A `StopStation` can have several `StopPlatforms`, each representing a platform where a transit vehicle can stop, and several `StopEgresses`, where pedestrians may enter or exit a station.

### Stations data model

The `StopStation`, `StopPlatforms` and `StopEgresses` models are very similar to the plain `Stop` model.

The significant differences are that a `Station` will include nested `StopPlatforms` in `stop_platforms` and `StopEgresses` in `stop_egresses`. Additionally, the top-level `Station` will include `operators_serving_stop_and_platforms`, `routes_serving_stop_and_platforms`, and `vehicle_types_serving_stop_and_platforms` instead of the similarly named `Stop` relations.

A `StopEgress` includes an additional `directionality` attribute to note if a pedestrian can `enter` (street-to-station), `exit` (station-to-street), or `both` enter and exit the station. A `StopEgress` does not include `operators_serving_stop` and `routes_serving_stop`, since it is not visited by trips.

A `StopPlatform` does not include `osm_way_id`, `last_conflated_at`, or `directionality`, since it does not connect to the street network.

### Stations API

Endpoint: `/api/v1/stop_stations`

| Query parameter        | Type | Description | Example |
|------------------------|------|-------------|---------|
