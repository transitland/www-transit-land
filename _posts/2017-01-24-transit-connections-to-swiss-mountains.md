---
layout: page
category: news
published: true
isThereTitle: true
title: Swiss transit journey planners can guide you to the top of any mountain
---
### Follow my route on transit from Zurich to the top of Mount Rigi

#### by [Steven Vance](http://stevencanplan.com)

[![Looking almost due west from Mount Rigi-Kulm](/images/switzerland-transit/two_trains_at_mount_rigi.jpg)](https://www.flickr.com/photos/jamesbondsv/31619512643/in/datetaken/ "Looking almost due west from Mount Rigi-Kulm") 

*Looking west from Mount Rigi-Kulm and you can see the cloud layer that prevents you from seeing Lake Lucerne. The two cog railways are parked in the middle.*

A month ago I hopped over to Germany to start a holiday trip over Christmas and the New Year. I flew into Frankfurt but I would be returning to Chicago from Zurich, Switzerland, almost three weeks later. I had spent two hours in Zurich in 2016 on a layover, and I was struck by the city's beauty and their amazing public transport system. I made it a priority to revisit Zurich, to have a proper stay. 

Before I left, I was already working to import the single GTFS transit feed for the whole country into Transitland, so I was aware of some of the transit systems. That work continues because the feed is massive; it has more than 400 operators and I need to add metadata about each of them. 

I arrived the night before my mountain trip to a hotel – a 3 minute walk to the nearest entrance to Zurich's _hauptbahnhof_ (main station) – and I spent that whole evening planning an epic transit and mountain adventure the next day. (I stayed in because it's also pretty expensive to go out in Zurich, so I was also saving my money for what turned out to be an _expensive _ epic trip.) 

**When in Switzerland, I figured, you should spend time outside on a mountain. And there's no exception in the winter.**

[![Steep journey up to Mount Rigi-Kulm from Vitznau looking over Lake Lucerne](/images/switzerland-transit/steep_train.jpg)](https://www.flickr.com/photos/jamesbondsv/32053263100/in/datetaken/ "Steep journey up to Mount Rigi-Kulm from Vitznau looking over Lake Lucerne") 

*It's a cog railway up a Swiss mountain, of course it's going to look steep like this.*

I googled "nearest mountain to Zurich" and found Mount Rigi. I never validated if Mount Rigi is the nearest mountain, but after reviewing details on how to get to the base and how to get to the top ([the mountain has its own website](https://www.rigi.ch)), I could tell it would be possible to go there and return in the same day. 

Mount Rigi has multiple peaks, the tallest of which is Rigi Kulm at 1,798 meters, and you can plan a trip directly there with a single app. 

You can use the Swiss Federal Railways (SBB) [smartphone app](http://www.micro.sbb.ch/mobile/en/home.html?WT.ac=sbb-mobile-weitere-en.html) or [website](http://www.sbb.ch/en/home.html) to plan a trip from anywhere in Switzerland to the cog railway station below the restaurant atop Rigi Kulm. Seriously. 

<!-- more -->

I wanted to use as many modes as possible, and I don't like going on the same route more than once, so I adjusted SBB's recommended route to travel from Zurich to Rigi Kulm via Lucerne and Vitznau. This was my outgoing itinerary:

*   Depart Zurich HB at 10:04 on InterRegio 2637 to Lucerne, arriving at 10:49
*   Depart Luzern Bahnhofquai (train station dock) on a boat across Lake Lucerne at 11:12 to Vitznau at the base of the mountain, arriving at 12:09
*   Depart Vitznau on Rigi-Bahnen 1127 at 12:15, arriving to the peak at 12:47

After spending about five hours on the mountain – I took a small cable car to a second peak – I heaaded down the mountain on a different cog railway to Arth-Goldau, a valley town with InterCity train service direct to Zurich. 

![SBB website trip planner](/images/switzerland-transit/sbb_trip_planner.png "SBB website trip planner")

*The SBB website shows my actual itinerary. This isn't the first recommended itinerary because there are more direct and faster ways to get to Rigi Kulm from Switzerland, but I wanted to ride in a boat so I added the "via" stop in Lucerne.*

**What was more fascinating than the legendary on-time performance and convenient and short connection times of the Swiss public transport network was that I bought trips for the boat, two cog railways, and the return train on a single ticket.**

I could have bought a single ticket for the entire trip back in Zurich before I departed but I was in a hurry to catch that 10:04 train and it takes a bit longer to buy a multi-stop journey from the ticket vending machines. (You can also buy the ticket on the website and app, which quoted 98 Swiss Francs, or $96, without the return from Arth-Goldau.) 

[![Cog railway from Mount Rigi-Kulm to Arth-Goldau](/images/switzerland-transit/blue_train_on_mount_rigi.jpg)](https://www.flickr.com/photos/jamesbondsv/31476795313/in/datetaken/ "Cog railway from Mount Rigi-Kulm to Arth-Goldau")

*The second cog railway I took on this trip, to Arth-Goldau, opened in 1875, four years after the first cog railway of the day from Vitznau. That one opened in 1871, the first cog railway in Europe.*

If I had missed the 10:04 train, there would have been another train leaving for Lucerne less than 30 minutes later, but I would arrive about 30 minutes early for the next boat and cog railway because they run less frequently.

On the day I traveled, Friday, January 6, the journey took 2 hours and 43 minutes. I checked SBB's website for this blog post and they recommend a differently, slightly longer journey on weekends, at 3 hours and 1 minute. And they really mean that 1 minute. 

The [Swiss railway clock's](https://en.wikipedia.org/wiki/Swiss_railway_clock) second hand waits at the 58.5 second mark and proceeds when it receives a "minute impulse" signal from the SBB's master clock. Train operators then depart. 

**Get to know the Swiss timetable** 

The single feed includes the Swiss Federal Railways (SBB), city transit systems, intercity buses like [PostAuto](https://transit.land/feed-registry/operators/o-u0-pagpostautoschweiz), funiculars, cable cars, cog railways, and even chair lifts. 

You can take a _sesselbahn_ (chair/ski lift) from Feldis/Veulden to avoid an uphill hike to Mutta; it's operated by [Sesselbahn und Skilifte Feldis AG](http://www.viamala.ch/winter/wintersport/wintersportgebiete/feldis/betriebszeiten-tarife/betriebszeiten/sesselbahn-und-skilifte-feldis-ag-ssf.html). You can find its two stops and straight route up the mountain [in Transitland's Feed Registry](https://transit.land/feed-registry/operators/o-u0qdny-sfmsesselbahnfeldis~mutta). 

We're working to import all of them into the Transitland datastore, and we'll get there eventually (it takes a lot of time to add metadata like an operator's metropolitan coverage area and canton). For now, though, we've added the stops and routes for 11 operators, including all of the ones that covered my trip to Mount Rigi.

<iframe width="100%" style="height: 65vh;" src="https://tangrams.github.io/tangram-frame/?noscroll&maxbounds=46.891,7.667,47.501,9.198&url=https://transit.land/images/switzerland-transit/scene.yaml#10.6461/47.1304/8.4492"></iframe>

*[Edit this map yourself](https://mapzen.com/tangram/play/?maxbounds=46.891,7.667,47.501,9.198&scene=https://transit.land/images/switzerland-transit/scene.yaml#10.6461/47.2020/8.4729) in Tangram Play. These routes were extracted via [Mobility Explorer](https://mapzen.com/mobility/explorer/#/routes?bbox=8.520240783691406%2C47.36065881870707%2C8.582038879394531%2C47.383590101876045&pin=47.379289429545324%2C8.54101449251175) and its direct connection to the Transitland API and I edited some of them because many of routes in the Swiss feed are very simplified.*

*   [Rigi-Bahnen (RB)](https://transit.land/feed-registry/operators/o-u0q59-rbrigi~bahnen) - operates the two cog railways (shown in green)
*   [Schweizerische Bundesbahnen - SBB CFF FFS (SBB)](https://transit.land/feed-registry/operators/o-u0-sbbschweizerischebundesbahnensbb) - Swiss Federal Railways, which covered the InterRegio trips between Zurich and Lucerne, and Zurich and Arth-Goldau (red)
*   [Schifffahrtsgesellschaft des Vierwaldstättersees (SGV) ](https://transit.land/feed-registry/operators/o-u0q5-sgvvierwaldst%C3%A4ttersee)- operates the boats on Lake Lucerne (light blue)
*   [Luftseilbahn Kräbel-Rigi Scheidegg (LKR)](https://transit.land/feed-registry/operators/o-u0q5d4-lkrkräbel~rigischeidegg) - the operator of the cable car shuttle between the cog railway station at Kräbel and the Mount Rigi peak of Scheidegg, which was briefly mentioned in my story (the short teal line)
*   [Verkehrsbetriebe Zürich (VBZ)](https://transit.land/feed-registry/operators/o-u0qj-vbzverkehrsbetriebez%C3%BCrich) - network coordinate for Zurich, including the city  of Zurich transit operator _ZVV_ and suburban operators (technically I didn't ride in the VBZ network to get to the mountain, but they include information about the trams and buses in the city I rode during my stay) (not shown)
