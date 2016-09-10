---
layout: page
category: news
published: true
isThereTitle: true
title: German transit's tight integration ensures timely connections in small cities
---

## Taking regional trains from a city of 12,000 to a city of 155,000 is a piece of cake

### by [Steven Vance](http://stevevance.net/)

!["Tram in Heidelberg, Germany"](/images/rhein-neckar-transit/tram-at-heidelberg-hauptbahnhof.jpg)
<p class='caption'>Trams and buses run frequently to and from the Heidelberg Hauptbahnhof (main station) in the German state Baden-Württemberg. In the story below, this is the origin of a trip by tram. And it's one of the stations highlighted in an interactive map that you can learn how to make with Transitland's API, the Tangram Play map style editor, and a bit of QGIS too.</p>

<!-- more -->

In June my sister and I traveled to Germany. I went to visit a friend I met in Chicago and it was my sister's first trip in Europe. We stayed with my friend in [Ladenburg](https://en.wikipedia.org/wiki/Ladenburg), a village of about 12,000 people in the state Baden-Württemberg, and equidistant to Mannheim and Heidelberg.

Ladenburg has a [train station](http://www.openstreetmap.org/node/21412509) with three tracks and two platforms. During our stay there the third track was under construction. We visited Heidelberg twice, taking trains from Ladenburg on both days. 

We traveled at the same time each day – between 12:00 and 14:00 – so it caught my attention that the second journey into Heidelberg – a city with a large, well-known university – took a different route than the trip the day before. 

On the second day the same trip – starting in Ladenburg and arriving in Heidelberg – had us taking a different route by requiring a transfer at the Mannheim-Seckenheim station. 

For a city of 12,000, I was impressed that there was regional train service six times per hour between Ladenburg and Heidelberg. Back home, in Chicago, commuter trains come once an hour outside of rush hour periods. 

## Integrated transit service increases frequencies

The train service and connections were so incredibly well-timed and on-time that we waited less than eight minutes between trains. Overall the two-train journey took about 12 minutes longer than the single-train journey the day before, and, owing to good fare integration, cost the same. Two of the train services each hour are 15 minutes, non-stop. Our service, part of two other services each hour, was 27 minutes, including the eight minutes transfer, and the third service with twice-hourly trips takes 37 minutes because of a longer transfer in a different city. 

To further illustrate the level of connectivity on this route, the first train was an inter-regional train of the RegioBahn (RB) class, and the second was an S-bahn class. Different companies operated each. 

This kind of rigid, rider-friendly timing on a two-seat ride wasn't devised by mistake. It's often prohibitively expensive to run transit routes non-stop between every origin and destination. Airlines don't do it exclusively, and though the [Personal Rapid Transit system in Morgantown](/news/2016/08/16/morgantown-prt.html) does that during off-peak hours, it has five stations and only the smaller, less-used PRT at Heathrow airport has been built since.

Running a transit system where vehicles, operated by one or more companies, as in Germany, "meet" each other is a hallmark of a well-integrated system. 

## How local & regional transit are organized

When we arrived in [Heidelberg](https://whosonfirst.mapzen.com/spelunker/id/101748539/#11/49.4058/8.7042) we took a tram from the *Hauptbahnhof* (main station) east to the edge of the historic city center and pedestrian shopping area at Bismarckplatz. Our regional train wasn't necessarily timed with the tram because as a "rapid transit" service coming every few minutes, the need for a timely transfer isn't as great. 

The current organization of public transport in Germany lends itself to high-quality service characteristics like low headways (the time between vehicles at a particular stop) and high frequency, and short waits for a transfer vehicle. German local and regional transit operations are more complex because of the interconnected relationships among governments on all levels, public and private companies, and companies that are simply in charge of scheduling. 

In the USA, there are typically two structures. The first, most commonly found in the largest cities, is that all transit service is provided by a governmental corporation created by authority of the state's legislature. In Chicago, where I live, the [Chicago Transit Authority](https://transit.land/feed-registry/operators/o-dp3-chicagotransitauthority), [Pace](https://transit.land/feed-registry/operators/o-dp3-pace), and [Metra](https://transit.land/feed-registry/operators/o-dp3-metra), are state-owned but independently operated corporations. They were created by the state legislature and can only be dissolved or merged by an action of the state legislature.

The second structure is for the transit agency to be a department of a city or county's transportation or public works department. 

In Germany however, there are multiple layers, and they start with regions, not states. Heidelberg, Ladenburg, and Mannheim, for example, are all in the [Rhine-Neckar Metropolitan Region](https://en.wikipedia.org/wiki/Rhine-Neckar), named after the two rivers that converge in Mannheim. 

## Peeling back the layers of transit organizations in Mannheim & Heidelberg

The *Verkehrsverbund Rhein-Neckar* ([Rhine-Neckar Transport Association](https://en.wikipedia.org/wiki/Verkehrsverbund_Rhein-Neckar), VRN) is a "network" that sets the fares and coordinates routes and timed transfers for transit in the region – including both public and private agencies that operate buses and trains in the area. 

The VRN is singly owned by the *[Zweckverband Verkehrsverbund Rhein-Neckar](http://www.vrn.de/vrn/unternehmen/vrn-verbund/index.html)* (ZRN), a special purpose group specific to Germany that allows local government authorities to form an association. Other examples of zweckverbands in Germany include consortiums that run hospitals and ambulance services and [monitor traffic](http://www.kvs-oberland.de/für-verkehrsteilnehmer/faqs-english-version.html#2-what-is-the-legal-form). The three states, and 24 cities, city districts, and counties in the Rhein-Neckar region make up the ZRN.

The transit operator in this region is a separate company called [Rhein-Neckar-Verkehr](http://www.rnv-online.de/english.html) (RNV). RNV was created and is owned, jointly, by the five former transit operators in the region. On trams in Heidelberg you'll see the RNV logo, but the logo for the old HSB, or Heidelberger Straßen- und Bergbahn, is also there!

RNV, the main transit operator, and the *Unternehmensgesellschaft Verkehrsverbund Rhein-Neckar* (URN), a union of over 50 transit operators, are members of the VRN network. 

!["another tram in Heidelberg, Germany"](/images/rhein-neckar-transit/tram-at-bismarckplatz.jpg)
<p class='caption'>Trams and buses run frequently to and from the <i>haltestelle</i> (stop) at Bismarckplatz at the western end of the pedestrian shopping street. In the story, this is the destination of a trip by tram.</p>

The RNV, like many other operators in Germany, has its own subsidiary company, operating buses in Viernheim, Hesse. John Pucher and Ralph Buehler wrote in their 2010 paper *[Making public transport financially sustainable](http://www.reconnectingamerica.org/assets/Uploads/2010BuehlerPucherPublicTransport.pdf)* that companies use new subsidiaries to control labor costs because employees of the new companies have new contracts, that may have different wages and work rules, but also to grow the company. "Transit agencies are planning to use these new subsidiaries to win bids in future calls for tender in other cities and regions—thus potentially increasing the company’s market share and geographic reach."

!["My sister and I riding a tram in Heidelberg"](/images/rhein-neckar-transit/steven-and-jenny-riding-tram.jpg)
<p class='caption'>Proof that we rode a tram in Heidelberg on the first day. We rode a bus on the next day because it departed first.</p>

At the end of the day, this integrated web of companies, subsidiaries, operators, networks, and schedules doesn’t really matter to the rider: which company operates which route has no bearing on the rider. A single organization – VRN, the "network" company for Heidelberg – is in charge of the timetables, and in providing GTFS feeds for Transitland. VRN is in charge of standardizing fares across and between cities and operators, so costs are the same for similar distance trips, no matter which operator happened to be driving.

!["Pedestrian shopping street in Heidelberg, Germany"](/images/rhein-neckar-transit/heidelberg-pedestrian-street.jpg)
<p class='caption'>A pedestrian shopping street is common to (probably) all municipalities in Germany.</p>

The three agencies in Chicago are moving slowly to have fare integration, but there are no visible efforts to coordinate transfers or consolidate fares. Last year it became possible to use a single online payment account to pay for rides on CTA, Pace, and Metra, although with two fare mediums. Riders use a chip card to ride CTA and Pace, but must have an app to buy Metra tickets using the same electronic fare money. 

## Make a map
The [Rhein-Neckar-Verkehr transit feed](https://transit.land/feed-registry/operators/o-u0y1-rhein%7Eneckar%7Everkehrgmbhrnv) in our Feed Registry covers buses, trams, and [this interurban tram](https://en.wikipedia.org/wiki/Upper_Rhine_Railway_Company). It doesn't include the [S-bahn routes](https://en.wikipedia.org/wiki/Rhine-Neckar_S-Bahn), or the Regionalexpress and Regionalbahn intra and inter-regional routes that make fewer stops. 

Using the [Transitland API](https://transit.land/documentation/datastore/api-endpoints.html) I can find which tram and bus routes would carry my sister and I from the Heidelberg Hauptbahnhof to Bismarckplatz, the start of the pedestrian shopping area. First I need to find the `onestopId` for the two stops. 

Klokan's [BoundingBox](http://boundingbox.klokantech.com) website gives me the coordinates for any rectangular area on the earth, that I can use to call the API to return the stops in that area. 

````
# Standard call:
https://transit.land/api/v1/stops?bbox=8.66272,49.396005,8.704262,49.419237

# Return as GeoJSON:
https://transit.land/api/v1/stops.geojson?bbox=8.66272,49.396005,8.704262,49.419237
````

I used [QGIS](http://qgis.org/en/site/), a free and open source GIS application, to inspect a GeoJSON file of those stops in Heidelberg I fetched using the bounding box

Once I have the stops' [Onestop IDs](https://transit.land/documentation/onestop-id-scheme/) I can plug that into the `route_stop_patterns` API endpoint, like this:

````
# Standard call
https://transit.land/api/v1/route_stop_patterns?stops_visited=s-u0y1j3y5c4-hdhauptbahnhof,s-u0y1jff1q1-bismarckplatz

# Return as GeoJSON
https://transit.land/api/v1/route_stop_patterns.geojson?stops_visited=s-u0y1j3y5c4-hdhauptbahnhof,s-u0y1jff1q1-bismarckplatz
````

That call returns an array of 38 [route stop patterns](https://transit.land/documentation/datastore/routes-and-route-stop-patterns.html), which are a custom identifer that are uniquely defined by a route, a stop pattern, and a line geometry. In the 38 RSPs there are three tram routes. Tram route 23 has two RSPs that service the trip between the Heidelberg Hauptbahnhof and the Bismarckplatz stations; route 9 has four RSPs, and tram route 5 has 32 route stop patterns (its `onestopId` is `r-u0y1-5`). 

Those GeoJSON calls become the source data in [my Play "scene"](https://transit.land/images/rhein-neckar-transit/scene.yaml) that tells the embedded Tangram map what and how to display it. The green line is tram route 5, and the blue line are the other two tram routes. All three carry riders between "HD Hauptbahnhof" and "Bismarckplatz", the only two stops labeled. The tram lines don't follow the rides because [RNV's GTFS feed](https://transit.land/feed-registry/operators/o-u0y1-rhein%7Eneckar%7Everkehrgmbhrnv) doesn't provide the `shapes.txt` file so Transitland has derived the route shape by drawing straight lines between stops. 

<iframe width="100%" style="height: 65vh;"
src="https://tangrams.github.io/tangram-frame/?noscroll&url=https://transit.land/images/rhein-neckar-transit/scene.yaml#15.1624/49.4079/8.6838"></iframe>

[Open this scene in Tangram](https://mapzen.com/tangram/play/?scene=https://transit.land/images/rhein-neckar-transit/scene.yaml) to play around with the data and symbology. 

## Bonus thought on transit integration

DB is a singular authority on transit timetables and routing for the entire country. They have every regional transit operators' schedules available on Bahn.com for routing within and between cities, and even on intercity trains across Europe. Their *DB Navigator* app is [indispensible for local and international travelers](http://www.stevencanplan.com/2016/05/essential-apps-for-traveling-in-parts-of-europe/) – you can even buy certain tickets on it. 

**I've done my best trying to make sense of how regional transit providers in one part of Germany are organized, but if you think I could be more accurate, please email [transitland@mapzen.com](mailto:transitland@mapzen.com).**
