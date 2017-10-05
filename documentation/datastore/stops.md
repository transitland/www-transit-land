---
title: Stops
layout: documentation
---

## Stops

### Stop data model

| Attribute                 | Type         | Description                      |
|---------------------------|--------------|----------------------------------|
| `onestop_id`              | Onestop ID   | Stop Onestop ID                  |
| `geometry`                | Geometry     | Stop geometry; can be Point or Polygon |
| `name`                    | String       | Stop name |
| `timezone`                | String       | Stop timezone |
| `osm_way_id`              | Integer      | Conflated OSM way ID |
| `served_by_vehicle_types` | Array        | Vehicle types that visit this Stop |
| `parent_stop_onestop_id`  | Onestop ID   | Parent Station |
| `wheelchair_boarding`     | Boolean      | Wheelchair accessible |
| `geometry_reversegeo`     | Geometry     | Alternate geometry; always a Point |
| `geometry_centroid`       | Geometry     | Stop centroid; always a Point |
| `operators_serving_stop`  | Object array | Opeartors serving this Stop |
| `routes_serving_stop`     | Object array | Routes serving this Stop |
| `tags`                    | Object       | Tags |


### Stops API

Endpoint: `/api/v1/stops`

| Query parameter        | Type | Description | Example |
|------------------------|------|-------------|---------|

### Stop import process

## Stations

### Stations data model

### Stations API

Endpoint: `/api/v1/stop_stations`

| Query parameter        | Type | Description | Example |
|------------------------|------|-------------|---------|
