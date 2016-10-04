---
layout: page
category: news
published: true
isThereTitle: true
title: Transit around Truckee and Lake Tahoe, California
---

## Rural transit provides rides for residents and tourists

#### by [Steven Vance](https://twitter.com/stevevance)

!["TART bus standing at Tahoe Transit Center"](/images/truckee-transit/24723469619_tahoe_transit_center.jpg)
<p class='caption'>A Tahoe Truckee Area Regional Transit bus standing at the new Tahoe City Transit Center. Photo by <a href="https://www.flickr.com/photos/placercounty/24723469619/" target="_blank">Placer County</a>.</p>

I've written about all kinds of different transit systems in the world, including a [quirky mode in West Virginia](https://transit.land/news/2016/08/16/morgantown-prt.html), bus rapid transit (BRT) [in Rio de Janeiro](https://transit.land/news/2016/08/11/transit-in-rio-olympics-copy.html), Brazil, and [integrated bus, tram, and rail networks in Germany](https://transit.land/news/2016/09/09/rhein-neckar-public-transport.html). Today I'm going small by exploring a rural transit system near Lake Tahoe in California. 

The first thing I do when starting a new blog post about an unfamiliar transit system is to look at the geographic coverage area of that system. I also do this each time I review transit feeds for inclusion in the Transitland [Feed Registry](https://transit.land/feed-registry/). 

After looking at the coverage area for Tahoe Truckee Area Regional Transit, or [TART](http://www.placer.ca.gov/Departments/Works/Transit/TART.aspx), I can quickly see that it covers a mountainous area around the city of Truckee in Nevada county, California, and Tahoe City in Placer county, north of Lake Tahoe. 

Grabbing an operator service area's map is a piece of cake. The "view" link on its Feed Registry page opens a map immediately in geojson.io. I can also include the GeoJSON returned from the Transitland Datastore API on a Tangram map: 

<iframe width="100%" style="height: 65vh;"
src="https://tangrams.github.io/tangram-frame/?noscroll&url=https://transit.land/images/truckee-transit/scene.yaml#10.2878/39.1949/-120.1148"></iframe>

*[Edit this map yourself](https://mapzen.com/tangram/play/?scene=http%3A%2F%2Ftransit.land%2Fimages%2Ftruckee-transit%2Fscene.yaml#10.2878/39.1949/-120.1148) in Tangram Play.*

 The route shapes come from three calls to the [Transitland Datastore API](https://transit.land/documentation/datastore/api-endpoints.html), which are returned as GeoJSON. The yellow line is the North Lake Tahoe Express shuttle from the airport in Reno, Nevada. The red lines are TART's routes, and the blue line is TART's very long "Mainline" route. Green lines are routes run by BlueGo. 

**Historic city**

Truckee is a city of just over 16,000 people that started as a railroad town, and later developed a ski resort. [Amtrak stops in Truckee](https://www.amtrak.com/servlet/ContentServer?c=am2Station&pagename=am%2Fam2Station%2FStation_Page&p=1237405732508&cid=1229726270115) on its California Zephyr route between Chicago and Emeryville, California, which is across the bay from San Francisco. 

<!-- more -->

TART operates a long "Mainline" route (the blue line on the map) between Incline Village, Nevada, and Tahoma, California, population 1,200, on Lake Tahoe's northern shoreline. It's 119 miles long! TART's other routes are red.

The Donner Party, pioneers traveling from Springfield, Illinois, to find gold in California, [camped](http://www.truckeecalifornia.net/donner-party.php) in what would become Coburn Station and then Truckee during a rough winter. 

Tahoma was the site of cross-country skiing and the biathlon in the 1960 winter Olympics that were hosted in Squaw Valley, [prior to which](https://en.wikipedia.org/wiki/1960_Winter_Olympics) was a "struggling ski resort with minimal facilities". A vacationer nowadays can use TART to travel between the Amtrak station&mdash;its [Onestop ID](https://transit.land/documentation/onestop-id-scheme/) is [`s-9qfx9p7evw-truckeeamtrak`](https://transit.land/api/v1/stops?bbox=-120.21351814270018,39.28621695173898,-120.12434005737305,39.35261775357705&onestop_id=s-9qfx9p7evw-truckeeamtrak)&mdash;and Lake Tahoe's north shore beaches.

The GTFS feed for TART's transit data, listed on the [Feed Registry](https://transit.land/feed-registry/operators/o-9qfx-tahoeareametroaltransit), packages routes from two other transit agencies.

Additionally, TART routes link up with other transit systems in Placer county: transit operated by the county government, one route of which heads to the light rail transit network in Sacramento; Dial-A-Ride for door-to-door service; and Placer Commuter Express, a coach bus service on weekdays from western Placer county to downtown Sacramento. These aren't included in the same feed as TART. 

**Fixed route, but reservations are required**

[BlueGo](http://www.tahoetransportation.org/transit) operates routes (the green lines) in Lake Tahoe's South Shore area. The other, [North Lake Tahoe Express](https://www.northlaketahoeexpress.com/), is a shuttle service (shown with yellow lines) that requires reservations and picks up travelers from the Reno Tahoe International airport. It has three fixed routes, with fixed stop times, reaching dozens of ski resorts. Since it requires reservations, it shouldn't allow a potential passenger to assume they can hop on. 

!["BlueGo bus in Kings Beach, Caliornia"](/images/truckee-transit/9473930715_bluego_bus.jpg)
<p class='caption'>A BlueGo bus on a highway in Kings Beach, California. Photo by <a href="https://www.flickr.com/photos/southerncalifornian/9473930715/" target="_blank">So Cal Metro</a>.</p>

GTFS is all about standardizing transit data into a single format, so how do you highlight this important difference?

Agencies communicate this unique service requirement by adding a descriptive phrase to its name in the `agency.txt` file. Transitland captures the name "North Lake Tahoe Express - 24 hour advance reservations required" and shows it on its [public Feed Registry entry](https://transit.land/feed-registry/operators/o-9qfx-northlaketahoeexpress~24houradvancereservationsrequired) and when [viewing it as JSON](https://transit.land/api/v1/routes?operated_by=o-9qfx-northlaketahoeexpress~24houradvancereservationsrequired) from on our API.

It's up to an app maker to decide if they want that name to show publicly, but it at least forces app makers to acknowledge and accommodate differences in transit service.

The Tahoe area has a lot of transit to carry residents in the region, but also to [reduce pollution and congestion](http://kunr.org/post/how-hard-it-catch-bus-lake-tahoe-depends) caused by all the driving from 3 million annual tourists. The [Tahoe Transportation District](http://www.tahoetransportation.org/about/what-is-ttd) and the Truckee North Tahoe Transportation Management Association operate and coordinate transit in the region to provide more transportation options for locals and visitors alike. 

Riders can also bring their bikes onboard for multi-modal&mdash;or mountain biking&mdash;trips; either on the front of transit buses, like most bus services in the United States, or in the luggage compartment underneath the passenger cabin of the coach buses to Sacramento. 

Transitland's Feed Registry and Datastore API make it easy to discover additional transit systems in a region, whether it has dozens of operators working together&mdash;as in Germany&mdash;or in a town of 16,000. 
