---
layout: page
category: news
published: true
isThereTitle: true
title: Transit around Truckee and Lake Tahoe
---

## Rural transit provides rides for residents and tourists

#### by [Steven Vance](https://twitter.com/stevevance)

!["TART bus standing at Tahoe Transit Center"](/images/truckee-transit/24723469619_tahoe_transit_center.jpg)
<p class='caption'>A Tahoe Truckee Area Regional Transit bus standing at the new Tahoe City Transit Center. Photo by <a href="https://www.flickr.com/photos/placercounty/24723469619/" target="_blank">Placer County</a>.</p>

I've written about all kinds of different transit systems in the world, including a [quirky mode in West Virginia](https://transit.land/news/2016/08/16/morgantown-prt.html), bus rapid transit (BRT) [in Rio de Janeiro](https://transit.land/news/2016/08/11/transit-in-rio-olympics-copy.html), Brazil, and [integrated bus, tram, and rail networks in Germany](https://transit.land/news/2016/09/09/rhein-neckar-public-transport.html). Today I'm going small by exploring a rural transit system near Lake Tahoe in California. 

Tahoe Truckee Area Regional Transit, or [TART](http://www.placer.ca.gov/Departments/Works/Transit/TART.aspx), covers a mountainous area around the city of Truckee in Nevada county, California, and Tahoe City in Placer county, north of Lake Tahoe. 

**Historic city**

Truckee is a city of just over 16,000 people that started as a railroad town, and later developed a ski resort. [Amtrak stops in Truckee](https://www.amtrak.com/servlet/ContentServer?c=am2Station&pagename=am%2Fam2Station%2FStation_Page&p=1237405732508&cid=1229726270115) on its California Zephyr route between Chicago and Emeryville, California, which is across the bay from San Francisco. 

TART operates a long "Mainline" route between Incline Village, Nevada, and Tahoma, California, population 1,200, on Lake Tahoe's northern shoreline. It's 119 miles long!

The Donner Party, pioneers traveling from Springfield, Illinois, to find gold in California, [camped](http://www.truckeecalifornia.net/donner-party.php) in what would become Coburn Station and then Truckee during a rough winter. 

Tahoma was the site of cross-country skiing and the biathlon in the 1960 winter Olympics that were hosted in Squaw Valley, [prior to which](https://en.wikipedia.org/wiki/1960_Winter_Olympics) was a "struggling ski resort with minimal facilities". A vacationer nowadays can use TART to travel between the Amtrak station – its `onestopId` is [`s-9qfx9p7evw-truckeeamtrak`](https://transit.land/api/v1/stops?bbox=-120.21351814270018,39.28621695173898,-120.12434005737305,39.35261775357705&onestop_id=s-9qfx9p7evw-truckeeamtrak) – and Lake Tahoe's north shore beaches.

TART routes link up with three other transit systems in Placer county: transit operated by the county government, one route of which heads to the light rail transit network in Sacramento; Dial-A-Ride for door-to-door service; and Placer Commuter Express, a coach bus service on weekdays from western Placer county to downtown Sacramento. 

The GTFS feed for TART transit data, which is listed on Transitland's [Feed Registry](https://transit.land/feed-registry/operators/o-9qfx-tahoeareametroaltransit) and our Datastore API for mapping and analysis, packages routes from two other transit agencies.

**Fixed route, but reservations are required**

[BlueGo](http://www.tahoetransportation.org/transit) operates routes in Lake Tahoe's South Shore area. The other, [North Lake Tahoe Express](https://www.northlaketahoeexpress.com/), is a shuttle service that requires reservations and picks up travelers from the Reno Tahoe International airport. It has three fixed routes, with fixed stop times, reaching dozens of ski resorts. Since it requires reservations, it shouldn't allow a potential passenger to assume they can hop on. 

GTFS is all about standardizing transit data into a single format, so how do you highlight this important difference?

Agencies communicate this unique service requirement by adding a descriptive phrase to its name in the `agency.txt` file. Transitland captures the name "North Lake Tahoe Express - 24 hour advance reservations required" and shows it on its [public Feed Registry entry](https://transit.land/feed-registry/operators/o-9qfx-northlaketahoeexpress~24houradvancereservationsrequired) and when [fetching](https://transit.land/api/v1/routes?operated_by=o-9qfx-northlaketahoeexpress~24houradvancereservationsrequired) it on our API.

It's up to an app maker to decide if they want that name to show publicly, but it at least forces app makers to acknowledge and accommodate differences in transit service.

The Tahoe area has a lot of transit to carry residents in the region, but also to [reduce pollution and congestion](http://kunr.org/post/how-hard-it-catch-bus-lake-tahoe-depends) caused by all the driving from 3 million annual tourists. The [Tahoe Transportation District](http://www.tahoetransportation.org/about/what-is-ttd) and the Truckee North Tahoe Transportation Management Association operate and coordinate transit in the region to provide more transportation options for locals and visitors alike. 

Riders can also bring their bikes onboard for multi-modal – or mountain biking – trips; either on the front of transit buses, like most bus services in the United States, or in the luggage compartment underneath the passenger cabin of the coach buses to Sacramento. 

<iframe width="100%" style="height: 65vh;"
src="https://tangrams.github.io/tangram-frame/?noscroll&url=https://transit.land/images/truckee-transit/scene.yaml#14/39.6425/-79.9659"></iframe>

I created this map using Mapzen's Tangram [styled-on-demand](https://mapzen.com/products/tangram/) vector tiles server and the Tangram Play "scene editor". The route shapes come from three calls to the [Transitland API](https://transit.land/documentation/datastore/api-endpoints.html), which are returned as GeoJSON. The yellow line is the North Lake Tahoe Express shuttle from the airport in Reno, Nevada. The red lines are TART's routes, and the blue line is TART's very long "Mainline" route. Green lines are routes run by BlueGo. 

[Edit this interactive map yourself](https://mapzen.com/tangram/play/?scene=https%3A%2F%2Fgist.githubusercontent.com%2Fstevevance%2F08c72ef4c8b19364773bddfbb15febb4%2Fraw%2F641f614002320ed9bc4226b8e377c03827735973%2Ftruckee.yaml#10.2878/39.1949/-120.1148) starting with my "scene" for Truckee. 