---
title: Glossary of common Transitland terms
layout: documentation
---

### changeset
A group of edits to that need to be applied to the Transitland database, known as the Datastore. Each changeset contains a JSON payload of actions, which could be adding a feed, editing it, or deleting it.

### GTFS
GTFS stands for General Transit Feed Specification. GTFS is a common format of transit operations, including information on the agency, stops, and operations schedule. Transitland lists feeds in the [Feed Registry](/documentation/feed-registry/) and aggregates them using the [Datastore](/documentation/datastore/). Read more about the [history of GTFS on TransitWiki](http://www.transitwiki.org/TransitWiki/index.php?title=General_Transit_Feed_Specification), or for more details, read the [specification itself at developer.google.com](https://developers.google.com/transit/gtfs/reference).

### Onestop ID
a scheme to label and connect data about public transit that are coming from many agencies, around the world. The Onestop ID is an alphanumeric, global, immutable identifier for transit feeds, operators/agencies, stops/stations, and routes provided by authoritative sources that contain timetable and geographic information for transit networks.

### transit agency
the authoritative source that provides the data in the GTFS feed. Transitland makes a distinction between `agency` and `operator`, where `agency` refers to the specific term within GTFS and `operator` is used in a more general sense.

### transit operator
the authoritative source that provides the data in the GTFS feed. Transitland makes a distinction between `agency` and `operator`, where `agency` refers to the specific term within GTFS and `operator` is used in a more general sense.
