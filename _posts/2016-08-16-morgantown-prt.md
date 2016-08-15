---
layout: page
category: news
published: true
isThereTitle: true
title: Morgantown Personal Rapid Transit is the only one in the world, and it has GTFS
---

## Experimental transit from the 1970s is still running

!["Personal Rapid Transit vehicle in Morgantown"](/images/morgantown-prt/3096010105_view_down_tracks.jpg)
<p class='caption'>A yellow Personal Rapid Transit vehicle drives down the guideway in Morgantown, West Virginia. Photo by <a href="https://www.flickr.com/photos/70428838@N00/3096010105/in/photolist-7Cnump-7CnyaZ-7CnvNT-7Crnhd-Croajt-CsFoYH-7CnxLc-7Cropy-7CnwJT-7CrkZE-7Crp4f-4ScPUz-7CnvrD-7Cnx6Z-5HzRWz-7CnyWR" target="_blank">Jen & Elwood</a>.</p>

Morgantown is a small city of 30,000 people in West Virginia, which grows by another 30,000 people when classes start each year at West Virginia University. The university has two campuses two miles apart and transported students and staff on free buses between them. The mountain and river geography causes all roads to lead through the city center, and the many buses along with other motor vehicles created gridlock. [The university](https://en.wikipedia.org/wiki/West_Virginia_University) also has over 9,000 faculty and staff. 

The current transit buses of Morgantown are part of the vast collection of transit schedules and maps that Transitland provides, but the city's [unique Personal Rapid Transit system](https://en.wikipedia.org/wiki/Morgantown_Personal_Rapid_Transit) of small vehicles – they look like vans or miniature buses – driving autonomously on a track stands out. 

Here's how Personal Rapid Transit at WVU works: A rider at one of the five stations approaches a turnstile, pays 50 cents for the ride, and selects a button that designates one of the four destinations. Pressing the button tells the computer controller to dispatch a vehicle to that station and programs it to stop at a specific position on the platform. After the rider boards, the vehicle is programmed to drive directly to that station without stopping. The vehicles can bypass three intermediate stations on extra "express" tracks. 

<!-- more -->

The vehicles in Morgantown were designed by Boeing and seat eight people alongside space for 13 standees, so it's sometimes referred to as [Automated Group Rapid Transit](http://faculty.washington.edu/jbs/itrans/morg.htm). It began transporting students in October 1975. 

Back in the 1960s, when the United States Department of Housing and Urban Development housed the Urban Mass Transportation Administration, the department published a study on innovative public transit technologies. PRT was thought to be a cost effective way to move people, but it hadn't been built and tested anywhere. The UMTA set out to change that and solicited propoals from around the country. 

A WVU engineering department head named Samy Elias gathered support from the mayor and West Virginia legislators to get a grant from the UMTA to study PRT in 1960 XXX. The federal Department of Transportation, due to pressure from a WV senator, decided to fund construction of the world's first PRT in Morgantown. At around the same time, the U.S. DOT was also funding experimental transit technologies that led to the construction of the People Movers in [Detroit](https://en.wikipedia.org/wiki/Detroit_People_Mover) and Miami. In the 1970s, there was a proposal to extend the Seattle Center Monorail – built for the XXX World's Fair – that would use [funds from the UMTA](http://www.globaltelematics.com/pitf/monopaper.htm). 

If you're familiar with the General Transit Feed Spefication-based feeds that power countless apps and mapping websites that tell you how to get around a city via transit, you might question how an on-demand transit network like Morgantown's PRT fits into that scheme. The GTFS specification generally requires that a feed list fixed routes that have fixed schedules. 

The [PRT's feed](https://transit.land/feed-registry/operators/o-dpp1s-wvuprt), however, uses the optional `frequencies.txt` file that [defines frequencies](https://developers.google.com/transit/gtfs/reference/frequencies-file) (also called headways), which is the time between departures at the same bus stop or train station. When a feed provides that file, then fixed schedule stop patterns aren't necessary. The Morgantown PRT's feed lists five minute frequencies, but the system is technically capable of running vehicles 15 seconds apart. 

Transitland's [Valhalla](https://mapzen.com/blog/valhalla-intro/) doesn't currently support routing queries for transit systems that use frequencies instead of fixed schedules, but it's something the Mapzen Mobility Team [intends to include](https://github.com/transitland/transitland-datastore/issues/408). Given that all of our work is [done in the open](https://mapzen.com/blog/our-magna-carto/), [and open source](https://github.com/valhalla), we welcome contributors.