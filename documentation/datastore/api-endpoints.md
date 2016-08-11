---
title: Datastore API endpoints
layout: documentation
---

To query the Transitland Datastore API, use the base URL of `https://transit.land/`, appended with the endpoint information below. For example, to find routes operated by the San Francisco Municipal Transportation Agency (SFMTA), you can use this query: `https://transit.land/api/v1/routes?operated_by=o-9q8y-sfmta`.

The following endpoints are available in Transitland Datastore API.

{:#api}
Method | Example URL | Parameters
-------|-------------|-----------
`GET` |  `/api/v1/changesets?applied=false` | changesets that have not yet been applied
`POST` |  `/api/v1/changesets` | include a [changeset payload](changesets.html) in the request body
`PUT` |  `/api/v1/changesets/32`<br/>(a Changeset can only be updated if it hasn't yet been applied)| include a [changeset payload](changesets.html) in the request body ([secured](#api-authentication))
`POST` |  `/api/v1/changesets/1/check` | ([secured](#api-authentication))
`POST` |  `/api/v1/changesets/1/apply` | ([secured](#api-authentication))
`POST` |  `/api/v1/changesets/1/revert` | ([secured](#api-authentication))
`DELETE` |  `/api/v1/changesets/1` | Delete Changeset ([secured](#api-authentication))
`GET` |  `/api/v1/changesets/1/change_payloads` |
`PUT` |  `/api/v1/changesets/1/change_payloads` | Add an additional [changeset payload](changesets.html) to a Changeset ([secured](#api-authentication))
`POST` |  `/api/v1/changesets/1/change_payloads` |
`GET` |  `/api/v1/changesets/1/change_payloads/1` |
`PUT` |  `/api/v1/changesets/1/change_payloads/1` | ([secured](#api-authentication))
`DELETE` |  `/api/v1/changesets/1/change_payloads/1` | ([secured](#api-authentication))
`GET` |  `/api/v1/onestop_id/o-9q8y-SFMTA` | final part of the path can be a Onestop ID for any type of entity (for example, a stop or an operator)
`GET` |  `/api/v1/stops` | none required
`GET` |  `/api/v1/stops?identifier=4973` | `identifier` can be any type of stop identifier
`GET` |  `/api/v1/stops?identifier_starts_with=gtfs://f-9q9` | `identifier_starts_with` can be any type of stop identifier fragment
`GET` |  `/api/v1/stops?lon=-121.977772198&lat=37.413530093&r=100` | `lon` is longitude; `lat` is latitude; `r` is radius of search in meters (if not specified, defaults to 100 meters)
`GET` |  `/api/v1/stops?bbox=-122.4183,37.7758,-122.4120,37.7858` | `bbox` is a search bounding box with southwest longitude, southwest latitude, northeast longitude, northeast latitude (separated by commas)
`GET` |  `/api/v1/stops?served_by=o-9q9-BART,r-9q8y-richmond~dalycity~millbrae` | `served_by` can be any number of Onestop ID's for operators and routes
`GET` |  `/api/v1/stops?tag_key=wheelchair_boarding` | find all stops that have a tag of `tag_key` with any value
`GET` |  `/api/v1/stops?tag_key=wheelchair_boarding&tag_value=1` | find all stops that have a tag of `tag_key` and a value of `tag_value`
`GET` |  `/api/v1/stops?import_level=4` | find all stops with a given import level
`GET` |  `/api/v1/operators` | none required
`GET` |  `/api/v1/operators?identifier=SFMUNI` | `identifier` can be any type of operator identifier
`GET` |  `/api/v1/operators?identifier_starts_with=gtfs://f-9q9` | `identifier_starts_with` can be any type of operator identifier fragment
`GET` |  `/api/v1/operators?lon=-121.977772198&lat=37.413530093&r=100` | `lon` is longitude; `lat` is latitude; `r` is radius of search in meters (if not specified, defaults to 100 meters)
`GET` |  `/api/v1/operators?bbox=-122.4183,37.7758,-122.4120,37.7858` | `bbox` is a search bounding box with southwest longitude, southwest latitude, northeast longitude, northeast latitude (separated by commas)
`GET` |  `/api/v1/operators?tag_key=agency_timezone` | find all operators that have a tag of `tag_key` with any value
`GET` |  `/api/v1/operators?tag_key=agency_timezone&tag_value=America/Los_Angeles` | find all operators that have a tag of `tag_key` and a value of `tag_value`
`GET` |  `/api/v1/operators?import_level=4` | find all operators with a given import level
`GET` |  `/api/v1/routes` | none required
`GET` |  `/api/v1/routes?identifier=19X` | `identifier` can be any type of route identifier
`GET` |  `/api/v1/routes?identifier_starts_with=gtfs://f-9q9` | `identifier_starts_with` can be any type of route identifier fragment
`GET` |  `/api/v1/routes?operated_by=o-9q9-BART` | `operated_by` is a Onestop ID for an operator/agency
`GET` |  `/api/v1/routes?vehicle_type=bus,4` | find all routes with vehicle type(s) by integer or string. Possible values defined by the GTFS spec for [the `route_type` column](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#routestxt) and [the Extended GTFS Route Types](https://support.google.com/transitpartners/answer/3520902). Separate multiple vehicle types by commas.
`GET` |  `/api/v1/routes?bbox=-122.4183,37.7758,-122.4120,37.7858` | `bbox` is a search bounding box with southwest longitude, southwest latitude, northeast longitude, northeast latitude (separated by commas)
`GET` |  `/api/v1/routes?tag_key=route_color` | find all routes that have a tag of `tag_key` with any value
`GET` |  `/api/v1/routes?tag_key=route_color&tag_value=FEF0B5` | find all routes that have a tag of `tag_key` and a value of `tag_value`
`GET` |  `/api/v1/routes?traverses=r-9q9-pittsburg~baypoint~sfia~millbrae-49ae87-5ae164` | find all routes having specified route stop patterns
`GET` |  `/api/v1/routes?import_level=4` | find all routes with a given import level
`GET` |  `/api/v1/route_stop_patterns` | none required
`GET` |  `/api/v1/route_stop_patterns?traversed_by=r-9q8y-richmond~dalycity~millbrae` | find all Route Stop Patterns belonging to route
`GET` |  `/api/v1/route_stop_patterns?bbox=-122.4183,37.7758,-122.4120,37.7858` | `bbox` is a search bounding box with southwest longitude, southwest latitude, northeast longitude, northeast latitude (separated by commas)
`GET` |  `/api/v1/route_stop_patterns?stops_visited=s-dr5rec3weg-whitehallferryterminal,s-dr5r4rn32w-stgeorgeferryterminal` | any one or more stop Onestop IDs, separated by comma. Finds Route Stop Patterns with stops_visited in stop_pattern.
`GET` |  `/api/v1/route_stop_patterns?trips=01SFO10,02SFO10` | any one or more trip ids, separated by comma. Finds Route Stop Patterns with specified trips in trips.
`POST` |  `/api/v1/webhooks/feed_fetcher` | ([secured](#api-authentication)) fetches all feeds
`POST` |  `/api/v1/webhooks/feed_fetcher?feed_onestop_id=f-9q9-caltrain` | ([secured](#api-authentication)) fetches only one feed
`POST` |  `/api/v1/webhooks/feed_eater?feed_onestop_id=f-9q9-caltrain,feed_version_sha1=ab1e6ac73943082803f110df4b0fdd63a1d6b9f7` | ([secured](#api-authentication))
`GET` |  `/api/v1/feeds` | none required
`GET` |  `/api/v1/feeds?tag_key=license` | find all feeds that have a tag of `tag_key` with any value
`GET` |  `/api/v1/feeds?tag_key=license&tag_value=Creative%20Commons%20Attribution%203.0%20Unported%20License` | find all feeds that have a tag of `tag_key` and a value of `tag_value`
`GET` |  `/api/v1/feeds?bbox=-122.4183,37.7758,-122.4120,37.7858` | `bbox` is a search bounding box with southwest longitude, southwest latitude, northeast longitude, northeast latitude (separated by commas)
`GET` |  `/api/v1/feeds/f-9q9-bayarearapidtransit` | none required
`GET` |  `/api/v1/feed_versions?feed_onestop_id=f-9q9-bayarearapidtransit` | filter feed versions based on `feed_onestop_id` (which can be a comma-separated list of multiple Onestop IDs)
`GET` |  `/api/v1/feed_versions/c06b4b6b40815f27c81b4fcf486ac1fd70ab1966` | none required
`PUT` |  `/api/v1/feed_versions/c06b4b6b40815f27c81b4fcf486ac1fd70ab1966` | ([secured](#api-authentication)) update `import_level`
`GET` |  `/api/v1/feed_version_imports?feed_onestop_id=f-9q9-bayarearapidtransit&feed_version_sha1=c06b4b6b40815f27c81b4fcf486ac1fd70ab1966` | filter feed version import records based on `feed_onestop_id` and/or `feed_version_sha1` (both of which can be comma-separated lists of multiple Onestop IDs)
`GET` |  `/api/v1/feed_version_imports/1` | none required
`GET` |  `/api/v1/schedule_stop_pairs` | Find all [Schedule Stop Pairs](schedules.html). All options below can be combined.
`GET` |  `/api/v1/schedule_stop_pairs?origin_onestop_id=s-9q8yyugptw-sanfranciscocaltrainstation` | Find all Schedule Stop Pairs from origin. Accepts multiple Onestop IDs, separated by commas.
`GET` |  `/api/v1/schedule_stop_pairs?destination_onestop_id=s-9q8yyugptw-sanfranciscocaltrainstation` | Find all Schedule Stop Pairs to a destination. Accepts multiple Onestop IDs, separated by commas.
`GET` |  `/api/v1/schedule_stop_pairs?date=2015-08-05` | Find all Schedule Stop Pairs from origin on date
`GET` |  `/api/v1/schedule_stop_pairs?service_from_date=2015-08-05` | Find all Schedule Stop Pairs in effect from a date
`GET` |  `/api/v1/schedule_stop_pairs?service_before_date=2015-10-20` | Find all Schedule Stop Pairs in effect before a date
`GET` |  `/api/v1/schedule_stop_pairs?origin_departure_between=09:00:00,09:10:00` | Find all Schedule Stop Pairs with origin_departure_time in a range
`GET` |  `/api/v1/schedule_stop_pairs?trip=6507768-CT-14OCT-Combo-Weekday-01` | Find all Schedule Stop Pairs by trip identifier
`GET` |  `/api/v1/schedule_stop_pairs?route_onestop_id=r-9q8y-richmond~dalycity~millbrae` | Find all Schedule Stop Pairs by route. Accepts multiple Onestop IDs, separated by commas.
`GET` |  `/api/v1/schedule_stop_pairs?operator_onestop_id=o-9q9-caltrain` | Find all Schedule Stop Pairs by operator. Accepts multiple Onestop IDs, separated by commas.
`GET` |  `/api/v1/schedule_stop_pairs?bbox=-121.0,35.0,-124.0,37.0` | Find all Schedule Stop Pairs originating within a bounding box
`GET` |  `/api/v1/schedule_stop_pairs?active=true` | Schedule Stop Pairs from active FeedVersions
`GET` |  `/api/v1/schedule_stop_pairs?import_level=2` | Schedule Stop Pairs from FeedVersion with a given import_level

### Pagination for JSON endpoints

- `?offset=50` is the index of the first entity to be displayed (starts with 0)
- By default, 50 entities are displayed per page. To change the number, specify `?per_page=1000`.
- To show the total number of results, use `?total=true`

### Max Request Size

If queries have not completed after two minutes, they will be killed and you will receive a timeout response from the Datastore. If your query times out, try reducing the `per_page` count, the bounding box size, etc. If your query seems as small as is possible, [let us know](mailto:transitland@mapzen.com).

### Format

- By default, responses are paginated JSON
- Specify `.geojson` instead for GeoJSON on some endpoints. For example: `/api/v1/stops.geojson?bbox=-122.4183,37.7758,-122.4120,37.7858` and `/api/v1/routes.geojson?operated_by=o-9q9-bayarearapidtransit`

## API authentication

Any API calls that involve writing to the database (creating/editing/applying [changesets](changesets.html) or running the Feed Eater data ingestion pipeline) require authentication. Currently authentication is limited to Mapzen staff, although we're preparing to share editing and moderation authorization with outsider collaborators in the future.
