---
title: Datastore entity quick reference
layout: documentation
---

The Transitland Datastore is built on a flexible data model that can represent transit networks and schedules imported from [GTFS](TODO) feeds or created in a piecemeal fashion using [changesets](TODO). Transitland entities roughly match the files in a GTFS feed, but we've abstracted certain aspects of the data model to allow for a wider range of queries and increased performance. Transitland Datastore entities also provide more flexibility than GTFS and can be used to represent transit networks and schedules that a GTFS feed alone cannot represent.

## Transitland Datastore entities and corresponding GTFS feed files 

| Transitland entity name | Corresponding GTFS feed files | Lifecycle | Documentation |
| ----------------------- | ----------------------------- | --------- | ------------- |
| `Feed`                  | `agency.txt`, `feed_info.txt` | [<i class="fa fa-external-link"></i>](feeds.html) |
| `Operator`              | `agency.txt` | [<i class="fa fa-external-link"></i>](operators.html) |
| `Stop`                  | `stops.txt` | [<i class="fa fa-external-link"></i>](stops.html) |
| `Route`                 | `routes.txt`, `shapes.txt` | [<i class="fa fa-external-link"></i>](routes-and-route-stop-patterns.html) |
| `RouteStopPattern`            | `routes.txt`, `shapes.txt`, `trips.txt` | [<i class="fa fa-external-link"></i>](routes-and-route-stop-patterns.html) |
| `ScheduleStopPair`            | `stop_times.txt`, `trips.txt` | [<i class="fa fa-external-link"></i>](schedules.html) |

## Diagram of Transitland Datastore data model

***TODO: copy in diagram from https://github.com/transitland/transitland-datastore/blob/master/doc/data-model.svg***
