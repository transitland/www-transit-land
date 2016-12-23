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
The following endpoints are available to search through transit data [entities](entities.html). Note that most endpoints are [paginated](#pagination) and available in both JSON and GeoJSON [formats](#formats).

* [`https://transit.land/api/v1/onestop_id/o-9q9-bart`](https://transit.land/api/v1/onestop_id/o-9q9-bart) to look up any entity by [Onestop ID](/documentation/onestop-id-scheme)
* [`https://transit.land/api/v1/operators`](https://transit.land/api/v1/operators) to search individual [operators](operators.html)
* [`https://transit.land/api/v1/operators/aggregate`](https://transit.land/api/v1/operators/aggregate) to aggregate across all [operators](operators.html)
* [`https://transit.land/api/v1/stops`](https://transit.land/api/v1/stops) to search [stops](stops.html)
* [`https://transit.land/api/v1/routes`](https://transit.land/api/v1/routes) to search [routes](routes-and-route-stop-patterns.html)
* [`https://transit.land/api/v1/route_stop_patterns`](https://transit.land/api/v1/route_stop_patterns) to search [route stop patterns](routes-and-route-stop-patterns.html)
* [`https://transit.land/api/v1/schedule_stop_pairs`](https://transit.land/api/v1/schedule_stop_pairs) to search [schedules](schedules.html)

### Feed Endpoints
{:#feed-endpoints}
The following endpoints are available to work with GTFS feeds (from which the Datastore imports entities):

* [`https://transit.land/api/v1/feeds`](https://transit.land/api/v1/feeds) to search [feeds](feeds.html) currently registered with Transitland
* [`https://transit.land/api/v1/feed-versions`](https://transit.land/api/v1/feed-versions) to search current and past [feed versions](feeds.html) that have been fetched and archived
* [`https://transit.land/api/v1/feed-version-imports`](https://transit.land/api/v1/feed-version-imports) to view logs of feeds whose entities have been [feed versions](feeds.html) into the Datastore
* [`https://transit.land/api/v1/feeds/fetch_info`](https://transit.land/api/v1/feeds/fetch_info) to parse a remotely hosted GTFS feed in preparation of making a changeset to register the feed in the Datastore (used by the [Feed Registry](/documentation/feed-registry/add-a-feed.html) app when adding feeds)

### Internal Data Endpoints
{:#internal-data-processing-endpoints}
The following endpoints are available to work with the Datastore's internal records of data entities created/updated/destroyed and issues with data quality. [API authentication](#api-authentication) is required for actions that will make lasting database changes.

* [`https://transit.land/api/v1/activity_updates`](https://transit.land/api/v1/activity_updates) to view an overview of data activity across the entire Datastore
* [`https://transit.land/api/v1/changesets`](https://transit.land/api/v1/changesets) to search, create, edit, check, apply, and delete [changesets](changesets.html)
* [`https://transit.land/api/v1/changesets/1/change_payloads`](https://transit.land/api/v1/changesets/1/change_payloads) to work with the payloads within an existing [changeset](changesets.html)
* [`https://transit.land/api/v1/issues`](https://transit.land/api/v1/issues) to search, create, edit, and delete [quality issues](issues.html)

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

## API authentication

Any API calls that involve writing to the database (creating/editing/applying [changesets](changesets.html) or running the Feed Eater data ingestion pipeline) require authentication. Currently authentication is limited to a small number of maintainers, although we're preparing to share editing and moderation authorization with many more outside collaborators in the future.

## In Source Code

The Datastore source code is posted in full on GitHub. Like all web applications built with the Ruby on Rails framework, Its API endpoints are defined in [the `config/routes.rb` file](https://github.com/transitland/transitland-datastore/blob/production/config/routes.rb).
