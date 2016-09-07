---
layout: page
category: news
published: true
isThereTitle: true
title: Morgantown "Personal Rapid Transit" is the world's longest running PRT, and it has GTFS
---

## Experimental transit from the 1970s is still running

!["Personal Rapid Transit vehicle in Morgantown"](/images/morgantown-prt/3096010105_view_down_tracks.jpg)
<p class='caption'>A yellow Personal Rapid Transit vehicle drives down the guideway in Morgantown, West Virginia. Photo by <a href="https://www.flickr.com/photos/70428838@N00/3096010105/" target="_blank">Jen & Elwood</a>.</p>

Morgantown is a small city of 30,000 people in West Virginia, which grows by another 30,000 people when classes start each year at West Virginia University. The university has two campuses two miles apart and transported students and staff on free buses between them. The mountain and river geography causes all roads to lead through the city center, and the many buses along with other motor vehicles created gridlock. [The university](https://en.wikipedia.org/wiki/West_Virginia_University) also has over 9,000 faculty and staff. 

The current [Mountain Line Transit Authority buses](https://transit.land/feed-registry/operators/o-dpp-mountainlinetransitauthority) of Morgantown are part of the vast collection of transit schedules, maps, and associated APIs, that Transitland provides, but the city's [unique Personal Rapid Transit system](https://en.wikipedia.org/wiki/Morgantown_Personal_Rapid_Transit) of small vehicles – they look like vans or miniature buses – driving autonomously on a track stands out. 

Here's how Personal Rapid Transit at WVU works: A rider at one of the five stations approaches a turnstile, pays 50 cents for the ride, and selects a button that designates one of the four destinations. Pressing the button tells the computer controller to dispatch a vehicle to that station and programs it to stop at a specific position on the platform. After the rider boards, the vehicle is programmed to drive directly to that station without stopping. The vehicles can bypass three intermediate stations on extra "express" tracks.

In demand mode, the controller may wait until more people request the same destination, but [sends the vehicle after five minutes anyway](http://www.cities21.org/morgantown_TRB_111504.pdf). During low-demand times, the system may be switched to circulate vehicles in a fixed route, and isn't responsive to rider requests. 

!["A view of OpenStreetMap's transit layer shows the multiple track layout at the Beechurst Station, including the bypass tracks under the station."](/images/morgantown-prt/openstreetmap_morgantown_prt.png)
<p class='caption'>A view of <a href="http://www.openstreetmap.org/#map=18/39.63459/-79.95677&layers=T" target="_blank">OpenStreetMap's transit layer</a> shows the multiple track layout at the Beechurst Station, including the bypass tracks under the station.</p>

<!-- more -->

The vehicles in Morgantown were designed by Boeing and seat eight people alongside space for 13 standees, so it's sometimes referred to as [Automated Group Rapid Transit](http://faculty.washington.edu/jbs/itrans/morg.htm). It began transporting students in October 1975. 

!["A vehicle at the station in \"circulation\" mode"](/images/morgantown-prt/7715608458_vehicle_at_station.jpg)
<p class='caption'>A PRT vehicle at the Beechurst station operating in "circulation" mode, as evidenced by the digital message board. Photo by <a href="https://www.flickr.com/photos/erikgriswold/7715608458/in/album-72157630909644308/" target="_blank">Erik Griswold</a>.</p>

Back in the 1960s, when the United States Department of Housing and Urban Development housed the Urban Mass Transportation Administration, the department published a study on innovative public transit technologies. PRT was thought to be a cost effective way to move people, but it hadn't been built and tested anywhere. The UMTA set out to change that and solicited propoals from around the country. 

A WVU engineering department head named Samy Elias gathered support from the mayor and West Virginia legislators to get a grant from the UMTA to study PRT in the late 1960s, which resulting in selecting one of the three manufacturers promising they could build a PRT. The federal Department of Transportation, due to pressure from a WV senator, decided to fund construction of the world's first PRT in Morgantown. 

Alden staRRcar, the product selected after the study, however, was deemed unfit to construct it and the UMTA ordered the Jet Propulsion Laboratory – yes, the same federal research facility at Caltech that built sends probes to Mars – to manage the program. 

At around the same time, the U.S. DOT was also funding experimental transit technologies that led to the construction of the People Movers in [Detroit](https://en.wikipedia.org/wiki/Detroit_People_Mover) and Miami. In the 1970s, there was a proposal to extend the Seattle Center Monorail – built for the Seattle World's Fair called [Century 21 Exposition](https://en.wikipedia.org/wiki/Century_21_Exposition) – that would use [funds from the UMTA](http://www.globaltelematics.com/pitf/monopaper.htm). 

If you're familiar with the General Transit Feed Spefication-based feeds that power countless apps and [mapping websites](https://mapzen.com/products/turn-by-turn/?d=0&lat=40.7259&lng=-73.9805&z=12&c=multimodal&st_lat=37.744092&st_lng=-122.422073&st=La%20Lengua&end_lat=37.80927&end_lng=-122.25981&end=Fairyland&use_bus=0.5&use_rail=0.6&use_transfers=0.4&dt=2016-08-23T08%3A00&dt_type=1) that tell you how to get around a city via transit, you might question how an on-demand transit network like Morgantown's PRT fits into that scheme. The GTFS specification generally requires that a feed list fixed routes that have fixed schedules. 

The [PRT's feed](https://transit.land/feed-registry/operators/o-dpp1s-wvuprt), however, uses the optional `frequencies.txt` file that [defines frequencies](https://developers.google.com/transit/gtfs/reference/frequencies-file) (also called headways), which is the time between departures at the same bus stop or train station. When a feed provides that file, then fixed schedule stop patterns aren't necessary. The Morgantown PRT's feed lists five minute frequencies, but the system is technically capable of [running vehicles 15 seconds apart](http://faculty.washington.edu/jbs/itrans/morg.htm).

[Interact with the PRT's feed](https://transit.land/feed-registry/operators/o-dpp1s-wvuprt) in the Transitland Feed Registry.

Transitland's [Valhalla](https://mapzen.com/blog/valhalla-intro/) doesn't currently support routing queries for transit systems that use frequencies instead of fixed schedules, but it's something the Mapzen Mobility Team [intends to include](https://github.com/transitland/transitland-datastore/issues/408). Given that all of our work is [done in the open](https://mapzen.com/blog/our-magna-carto/), [and open source](https://github.com/valhalla), we welcome contributors.

!["Map from a traffic impact study after construction showing the as-yet unbuilt Phase 2 extension"](/images/morgantown-prt/morgantown_prt_map_phase1.png)
<p class='caption'>WVU studied the PRT's operational costs and impact on local driving and transit use in 1979, publishing this map before Phase II was built that year. Hosted by the <a href="https://archive.org/details/prtimpactstudyop00elia" target="_blank">Internet Archive</a>.</p>

<iframe width="100%" style="height: 65vh;"
src="https://tangrams.github.io/tangram-frame/?noscroll&url=https://transit.land/images/morgantown-prt/scene.yaml#14/39.6425/-79.9659"></iframe>

This map of the PRT route was automatically generated using [Mapzen Tangram vector tiles](https://mapzen.com/products/tangram/) and [this YAML scene code](https://raw.githubusercontent.com/transitland/www-transit-land/morgantown-blog-post/images/morgantown-prt/scene.yaml); stops were pulled from the Transitland API [as GeoJSON](https://transit.land/api/v1/stops.geojson?served_by=o-dpp1s-wvuprt). 
