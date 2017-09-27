---
title: API endpoints and usage
layout: documentation
---

The Transitland Datastore provides an API for querying its contents. This same API is used to add and edit data, as well as perform administrative tasks. The API is accessed over HTTPS and replies with JSON payloads.

The API is REST-like in that [entities](entity-quick-reference.html) are accessed through their own resource URLs with actions for index/filter, show, delete, and so on. 

All requests to the API begin with the root URL of `https://transit.land/api/v1`. (There are currently no other API versions. This namespacing is simply to "future proof" the API, in case Transitland adds other non-REST interfaces in the future.)

### Transit Data Entity Endpoints
{:#api}
{:#entity-endpoints}
The following endpoints are available to search through transit data [entities](entities.html). Note that most endpoints are [paginated](#pagination) and available in JSON, GeoJSON, and CSV [formats](#formats).

* [`https://transit.land/api/v1/onestop_id/o-9q9-bart`](https://transit.land/api/v1/onestop_id/o-9q9-bart) [GET] to look up any entity by [Onestop ID](/documentation/onestop-id-scheme)
* [`https://transit.land/api/v1/operators`](https://transit.land/api/v1/operators) [GET] to search individual [operators](operators.html)
* [`https://transit.land/api/v1/operators/aggregate`](https://transit.land/api/v1/operators/aggregate) [GET] to aggregate across all [operators](operators.html)
* [`https://transit.land/api/v1/stops`](https://transit.land/api/v1/stops) [GET] to search [stops](stops-and-stations.html)
* [`https://transit.land/api/v1/stations`](https://transit.land/api/v1/stations) [GET] to search [stations](stops-and-stations.html)
* [`https://transit.land/api/v1/routes`](https://transit.land/api/v1/routes) [GET] to search [routes](routes-and-route-stop-patterns.html)
* [`https://transit.land/api/v1/route_stop_patterns`](https://transit.land/api/v1/route_stop_patterns) [GET] to search [route stop patterns](routes-and-route-stop-patterns.html)
* [`https://transit.land/api/v1/schedule_stop_pairs`](https://transit.land/api/v1/schedule_stop_pairs) [GET] to search [schedules](schedules.html)

### Feed Endpoints
{:#feed-endpoints}
The following endpoints are available to work with [feeds](feeds.html), from which the Datastore imports may of its entities. (At present Transitland only imports from GTFS feeds, but in the future it may also import from other formats, like [GTFS-RT](https://github.com/transitland/transitland/issues/77) and [GBFS](https://github.com/transitland/transitland-datastore/issues/310).)

* [`https://transit.land/api/v1/feeds`](https://transit.land/api/v1/feeds) [GET] to search [feeds](feeds.html) currently registered with Transitland
* [`https://transit.land/api/v1/feed_versions`](https://transit.land/api/v1/feed_versions) [GET, POST, PUT, DELETE] to search current and past [feed versions](feeds.html#feed-versions) that have been fetched and archived
* [`https://transit.land/api/v1/feed_version_imports`](https://transit.land/api/v1/feed_version_imports) [GET] to view logs of feeds whose entities have been imported into the Datastore
* [`https://transit.land/api/v1/feeds/fetch_info`](https://transit.land/api/v1/feeds/fetch_info) [POST] to parse a remotely hosted GTFS feed in preparation of making a changeset to register the feed in the Datastore (used by the [Feed Registry](/documentation/feed-registry/add-a-feed.html) app when adding feeds)
* [`https://transit.land/api/v1/feeds/feed_version_infos`](https://transit.land/api/v1/feeds/feed_version_infos) [GET] to see [feed version info reports](feeds.html)

### Internal Data Endpoints
{:#internal-data-processing-endpoints}
The following endpoints are available to work with the Datastore's internal records of data entities created/updated/destroyed and issues with data quality. [API authentication](#api-authentication) is required for actions that will make lasting database changes.

* [`https://transit.land/api/v1/activity_updates`](https://transit.land/api/v1/activity_updates) [GET] to view an overview of data activity across the entire Datastore
* [`https://transit.land/api/v1/changesets`](https://transit.land/api/v1/changesets) [GET, POST, PUT, DELETE] to search, create, edit, check, apply, and delete [changesets](changesets.html)
* [`https://transit.land/api/v1/changesets/1/change_payloads`](https://transit.land/api/v1/changesets/1/change_payloads) [GET, POST, PUT, DELETE] to work with the payloads within an existing [changeset](changesets.html)
* [`https://transit.land/api/v1/issues`](https://transit.land/api/v1/issues) [GET, POST, PUT, DELETE] to search, create, edit, and delete [quality issues](issues.html)

{:#admin-endpoints}
## Admin Endpoints
The following endpoints are used to administer the Datastore. [API authentication](#api-authentication)) is required for all actions.

* [`https://transit.land/api/v1/users`](https://transit.land/api/v1/users) to search, create, update, and destroy user accounts within the Datastore
* [`https://transit.land/api/v1/webhooks/feed_fetcher`](https://transit.land/api/v1/webhooks/feed_fetcher) to manually trigger a [feed fetch](feeds.html)
* [`https://transit.land/api/v1/webhooks/feed_eater`](https://transit.land/api/v1/webhooks/feed_eater) to manually trigger an [import of a feed](feeds.html)

{:#pagination}
### Pagination for JSON endpoints

Most endpoints are paginated:

- `?offset=50` is the index of the first entity to be displayed (starts with 0)
- By default, 50 entities are displayed per page. To change the number, specify `?per_page=1000`.
- To show the total number of results, use `?total=true`

### Max Request Size

If queries have not completed after two minutes, they will be killed and you will receive a timeout response from the Datastore. If your query times out, try reducing the `per_page` count, the bounding box size, etc. Running queries with `?total=true` can be especially expensive; use it selectively. If your query seems as small as is possible and you still encounter timeouts, please [let us know](mailto:transitland@mapzen.com).

### Format

- By default, responses are paginated JSON
- Specify `.geojson` instead for GeoJSON on some endpoints. For example: `/api/v1/stops.geojson?bbox=-122.4183,37.7758,-122.4120,37.7858` and `/api/v1/routes.geojson?operated_by=o-9q9-bayarearapidtransit`
- Specify `.csv` insetad for CSV on some index endpoints. For example: `/api/v1/routes.csv?operated_by=o-9q9-bayarearapidtransit`

## API authentication

Any API calls that involve writing to the database (creating/editing/applying [changesets](changesets.html) or running the Feed Eater data ingestion pipeline) require authentication. Currently authentication is limited to a small number of maintainers, although we're preparing to share editing and moderation authorization with many more outside collaborators in the future.

## In Source Code

The Datastore source code is posted in full on GitHub. Like all web applications built with the Ruby on Rails framework, Its API endpoints are defined in [the `config/routes.rb` file](https://github.com/transitland/transitland-datastore/blob/production/config/routes.rb).
