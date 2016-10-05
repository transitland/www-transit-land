---
title: Tutorial
layout: documentation
---

## Get Transitland data
Transitland is an aggregation data service of transit networks around the world. All of that information from the Feed Registry can be queried using the Datastore using its web API. This tutorial will cover the basics of API calls from the datastore to get your hands on transit data for your app, visualization, or analytics tool.

### Things to know
This tutorial goes over some basic API calls to the Datastore. Some basic understanding of how API [HTTP methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) work and making API calls is helpful, but all queries and results are provided. You can use any internet browser and operating system in this tutorial, but you must keep an internet connection while you are working.

### Make an API call with the Datastore API
In this tutorial, we're going to practice making a few queries using the Datastore API to get information for identifying routes, stops, or schedules for transit agencies in a particular area.

To make a query in the Datastore API, we use a format where the base URL is `https://transit.land/api/v1/{API endpoint}` with the query added after. A complete list of API endpoints is in the [documentation](https://transit.land/documentation/datastore/api-endpoints.html).

#### List all routes in a given area
The first query that we're going to make will return all of the routes in a given area. To do this, we have to create an endpoint that limits our query to a defined geographic area. The Datastore API has a GET method for creating a bounding box, which lets us define a rectangular area with two coordinates, for specifying where we want route information. To use the bounding box, we need the coordinates of the southwest and northeast corners.

For this example, we'll be querying all the operators in Victoria, British Columbia:

[bounding box example](bounding-box.png)

The coordinates for bounding box need to be in a longitude, latitude format with the southwest coordinates first and then the northeast coordinates. Once you have the coordinates, you can write out the API call:

`https://transit.land/api/v1/operators?bbox=-123.4017,48.3993,-123.3275,48.4502`

The query results are returned in a JSON format:

```

```

There are some important features of the query results:
- onestopIDS
- (ask Steve about this)
