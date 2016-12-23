---
title: Use Transitland Datastore API to make a map of nearby transit stops
layout: documentation
---

Transitland's Datastore API unwraps our vast datastore of transit schedules from around the world&mdash;contributed by many&mdash;which can be included in your apps and maps. It's possible to start in the browser, however, to see the possibilities before you create your map or app. 

This tutorial will walk you through **creating a map of transit stops near a given location** in less than 5 minutes. You can choose any distance, but to show walking distance you'll want to show only those within 400 meters (about a quarter mile) of a starting point. 

After you've made the first map, the tutorial continues with progressively more advanced suggestions to using the Transitland API. 

## Find your starting location

First, you'll need to know the latitude and longitude coordinates of the starting place. If you're starting at [Fontana di Trevi](http://www.openstreetmap.org/way/23322002#map=19/41.90097/12.48328) in Rome, Italy, the latitude is `41.90097` and the longitude is `12.48328`. 

The [Maracanã Stadium](http://www.openstreetmap.org/relation/4587734#map=18/-22.91209/-43.23013) in Rio de Janeiro, Brasil, is at `-22.91210, -43.22919`. 

Find the coordinates for any place in the world on [Mapzen's "I am here" website](https://whosonfirst.mapzen.com/iamhere/#7/38.514/-98.320). 

### Make your first API request

Once you have that information it's easy to create a Transitland API request using the `stops` [endpoint](https://transit.land/documentation/datastore/api-endpoints.html) that looks for all transit stops (no matter the mode) within a specified distance from your given point, where we have coverage. Let's choose the Maracanã Stadium's location. 

````
https://transit.land/api/v1/stops?lat=-22.91210&lon=-43.22919&r=400
# "lat" is short for latitude
# "lon" is short for longitude
# "r" is the attribute for radius, in meters
````

Go ahead and paste that query URL in your web browser's location bar and press "Enter" – [or click here](https://transit.land/api/v1/stops?lat=-22.91210&lon=-43.22919&r=400). A moment later a block of text will appear that looks like this:

````
{"stops":[{"identifiers":["gtfs://f-75cj-fetranspor/s/18232257"]: [...snipped...]
````

This particular call returns seven transit stops in a JSON-formatted response. The `meta` property in the response contains pagination information and describes how your request was sorted, and which "page" of results it contains. 

### Put your results on a map

Now it's time to see what this looks like on a map. To make it, we need to slightly change the query URL so Transitland will output the same data in the **GeoJSON** format. 

Add `.geojson` after the `stops` endpoint parameter in the query URL, like this:

````
https://transit.land/api/v1/stops.geojson?lat=-22.91210&lon=-43.22919&r=400&total=true
````

Insert that URL in the web browser and press "Enter" – or [click here](https://transit.land/api/v1/stops.geojson?lat=-22.91210&lon=-43.22919&r=400&total=true). Safari and Firefox will download a file called `stops.geojson` to your computer. (If you're accessing the API through an app you're building, the file won't be downloaded.)

1. In your web browser, go to [http://geojson.io](http://geojson.io). 
2. Safari and Firefox: Open the downloaded file in a text editor (like Notepad on Windows, or TextEdit on Mac). 
3. Copy the text from the browser (if you used Chrome), or from the text editor (if you used Safari or Firefox). 
4. Delete all the existing text on the right half of *geojson.io* and paste in your text.
5. A map will appear on the left! (This may take longer if you have more than 100 points.)

![screenshot of geojson.io](show_transitland_results_in_geojson.gif "Copying and pasting GeoJSON into *geojson.io*")

### Embed your map
On *geojson.io*, with your transit stops marked, click on the *Share* button above the map. A dialog box will appear with a URL to a full-screen view of your map. Copy that URL and paste it into the embed code below. 

````
<iframe src="insert URL here"></iframe>
````

Now copy this `<iframe>` embed code into the HTML of your website where you want the map to appear and save that page. 

## Try more options

### Create a more advanced API request

By default, the API returns 50 results. You can increase the number of results in a response to 1,000 by adding `&per_page=1000` to the URL. If you request this many results in your web browser, it may be unable to load all of the results. 

Since our API request only returned seven stops, we don't need to increase the `per_page` attribute. 

Another helpful attribute to add when making a request is `total=true`. Add this, preceded by an ampersand, of course, and the JSON response will include a property with the number of results in the response. This can save you the time of having to load the JSON response into a program that can count the results for you. (Note that that total count is not included by default, since it can be slow on queries that return thousands of results. For example, a [schedule query](/documentation/datastore/schedules.html) for trips across many hours.)

Now our query URL looks like this:

````
https://transit.land/api/v1/stops?lat=-22.91210&lon=-43.22919&r=400&total=true
````

There are a couple other parameters we can add to this request that can narrow our results. Some transit operators specify if a stop allows wheelchair boarding. This is most important to transit routes that use trains or bus-rapid transit (BRT) because their stations may not be fully accessible.

Add these parameters to your query URL `&wheelchair_boarding=true`, making the query URL look like this:

````
https://transit.land/api/v1/stops?lat=-22.91210&lon=-43.22919&r=400&total=true&wheelchair_boarding=true
````

These parameters are also from [the `stops` endpoint](https://transit.land/documentation/datastore/api-endpoints.html).

Visit that URL in your web browser and press "Enter" – or [click here](https://transit.land/api/v1/stops?lat=-22.91210&lon=-43.22919&r=400&total=true&wheelchair_boarding=true). It turns out that the response is empty, and returned zero stops! Now, that doesn't mean that none of the stops are wheelchair accessible at this point, because not all operators have applied this property to their transit data. 

However, a `wheelchair_boarding=true` means that this stop *definitely* has wheelchair-accessible boarding. 

Before you move on to trying other filters, remove the `wheelchair_boarding` parameter from the query URL or you might have zero results returned in the next request. 

### Advanced mapping

With the GeoJSON file, you can visualize the transit stops in more maps and applications. 

- Open this file in the open source desktop application [QGIS](http://qgis.org)
- [Add the data to a Leaflet map](http://leafletjs.com/examples/geojson/) to embed on your website
- [Call the Transitland API](https://transit.land/news/2016/08/11/transit-in-rio-olympics-copy.html) with Mapzen's Tangram Play product
- [Use the file](https://www.mapbox.com/help/uploads/) in a [Mapbox map](https://www.mapbox.com/help/creating-new-map/)
- Upload that GeoJSON file directly to [Carto](https://carto.com/blog/github-geojson-and-cartodb/), which requires you to create a free account
