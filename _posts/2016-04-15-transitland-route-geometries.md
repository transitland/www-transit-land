---
layout: page
category: news
published: true
isThereTitle: true
title: Introducing the RouteStopPattern
---

Think of the last time you hopped on a bus, train, or ferry in a new place. Chances are you came across a map that displayed the right path, using the right route, and maybe just the right time to get from your departure to your destination. But where does that path come from? The need to ask this question may not seem obvious if all transit routes looked something like [this](http://www.actransit.org/pdf/maps/version_31/51A.pdf). But what if the route you needed to take had more than two directions? Or had stops that were not always served after their previous stops? What if the whole route looked something like [this](http://www.cttransit.com/Uploads_RTMaps/nh_Bcongress_map(11).pdf)?

<!-- more -->

## So, what exactly is a route?

Within transit data, the route is front and center. Highly recognizable, [often colorful](https://mapzen.com/blog/targeted-editing-transit-colours/), and physically tangible, routes are used by transit operators to organize service, and by passengers to compartmentalize journeys. Behind the scenes, a transit operator publishing its data using the [General Transit Feed Specification](/documentation/glossary/#gtfs) understands routes in terms of individual components called trips.

Each trip is a sequence of stops with associated arrival and departure times. A trip has an associated geographical line, called a shape, that describes a path connecting one stop with another stop, and wherever else a vehicle might visit (such as a bus yard). A trip may serve any subset of stops within a route, so a stop in a route may be served by one trip, and not another. The true definition of a transit route, then, is a collection of lines within a particular geographical region consistently and cohesively served by trips.

![a diagram of the GTFS and RouteStopPattern data models](/images/transitland-route-geometries/RouteStopPattern_Chart_1.0.png)

## The RouteStopPattern: Transitland Datastore's missing link

Transitland takes GTFS trips and shapes and transforms them into something a little
different: the [RouteStopPattern](/documentation/datastore/routes-and-route-stop-patterns.html). At its core, the RouteStopPattern is the geometric representation of each of the unique combinations, within a single route, of trip stop sequences together with shape lines. Very commonly, multiple trips running at different times of the day will share the exact same stop sequence and single shape, and will therefore be represented by a single RouteStopPattern. Transitland has also made RouteStopPatterns available from its Datastore API. As you can see from [this query](https://transit.land/api/v1/route_stop_patterns.json?onestop_id=r-dr5r7-statenislandferry-b860bb-38447b), RouteStopPatterns contain the `stop_pattern` array, corresponding to the stop sequences present in the original trips, a `geometry` corresponding to the shape line, the `route` which the RouteStopPattern belongs to, and the `identifiers` and `trips` arrays which point back to the GTFS shape and trips.

Within the Transitland data model, RouteStopPatterns are accessible from both [Routes](https://transit.land/api/v1/routes.json?onestop_id=r-dr5r7-statenislandferry) and [ScheduleStopPairs](https://transit.land/api/v1/schedule_stop_pairs.json?route_onestop_id=r-dr5r7-statenislandferry). Since ScheduleStopPairs are derived from a single trip, they will reference only one RouteStopPattern. With these two links, RouteStopPatterns can now be combined to form a whole route, or used individually to show the true path a vehicle might take between stops at certain times.   

For an interactive visualization and mapping that helps understand the Transitland data hierarchy from Operators to Routes to RouteStopPatterns to Stops, head over to: [http://transitland.github.io/route-spotter/](http://transitland.github.io/route-spotter/)

![7-Dunbar routes in Vancouver](/images/transitland-route-geometries/7-dunbar.gif)

## Going the Distance

But there’s more! GTFS also allows a field called `shape_distance_traveled` to be populated by the distance of stops along the associated trip shape line. In general, this value is important in relating a stop to its physical location along the trip, as stops are not always found on the shape line. It is especially useful, however, for routing applications, since the distances between stops can become travel distances or even be used to estimate travel time.

Unfortunately, we have found that the vast majority of GTFS feeds do not have the `shape_dist_traveled` field populated. Therefore Transitland has developed [an algorithm](/documentation/datastore/routes-and-route-stop-patterns.html) to infer these distance values from the shapes and stops given. It is still a work in progress, especially given the complex nature of transit routes (Remember those loops? Turns out they make life complicated for our digital yardstick). In any case you can find the distances in an array named `stop_distances` in the RouteStopPattern, or in ScheduleStopPair as `origin_dist_traveled` and `destination_dist_traveled` for the origin and destination stops.

## Can't Stop Won't Stop

![route animation](/images/transitland-route-geometries/routestop.gif)

The data in GTFS is complex, and as we refine these tools we are working on more visualization techniques, including animations -- these will help clarify complex and overlapping route topologies. Stay tuned!
