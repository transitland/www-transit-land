---
layout: page
category: news
published: true
isThereTitle: true
title: "Made using Transitland: An interactive visualization of New York City transit frequency"
---

***A guest post by [Tyler A. Green](http://www.tyleragreen.com/), a public-transit enthusiast and Transitland contributor in Fort Collins, Colorado. He's created an interactive visualization of transit frequency across New York City, which he [introduced on his blog](http://www.tyleragreen.com/blog/2016/02/new-york-city-transit-frequency-visualization/) and [described in updated form on his blog](http://www.tyleragreen.com/blog/2016/03/updated-new-york-city-transit-frequency-visualization/). Tyler was kind enough to share his experience:***

As a software geek and a transit fanatic, I was ecstatic when I first learned about Transitland. Are you saying I can practice programming and study transit data at the same time? Sign me up!

<!-- more -->

I was familiar with GTFS feeds, their loosely-defined standard, and their general cumbersomeness. I had yet to run head-on into their biggest weakness though, which becomes evident when analyzing transit data for an entire region: a single feed describes transit operations for only a single operator. I was itching to visualize transit trends for New York City, which has almost as many transit operators as stock brokers, so something was going to have to give. (For reference, TransitFeeds.com lists [9 GTFS feeds](http://transitfeeds.com/p/mta), excluding realtime, broken up by borough and mode for the MTA.)

Enter Transitland.

Transitland combines all the GTFS feeds of a particular area into a single API you can query to your heart's content. I was interested in the frequency differences between modes and days of the week, so Transitland was perfect.

The two API "endpoints" that returned the JSON data I was interested in were stops and [schedule_stop_pairs](/documentation/datastore/schedules.html). Given a date, geographical bounding box, and time frame, schedule_stop_pairs returns every trip that begins and ends in that area during that time. However, it does not give the geographical info for the stops that make up a trip. In database-speak, I needed to "join" this data with the stops JSON data, which contained the latitude and longitude of each stop I was looking for. Skimming through the schedule_stop_pairs and counting the instances of each pair of stops easily allowed me to calculate a frequency (trips per hour) for each line segment between any two stops.

I chose Ruby to perform my API queries and data processing, though any scripting language will do the trick. (Check out the [source on GitHub](https://github.com/tyleragreen/frequency-visualization)!) The frequency data is output into a GeoJSON file and the result loaded into a Mapbox web tool. I chose to load the map with data from 7:30am to 8:00am on a Friday and Saturday morning. The data is categorized into three buckets, less than 4 trips per hour, 4 to 8 trips per hour, and greater than 8 trips per hour. Less than 4 trips per hour is generally the threshold where riders should consult a schedule before waiting on a curb, so I was hoping to see less of this bin and more of the other two!

Feel free to [play around with the tool](http://www.tyleragreen.com/maps/new_york) yourself! The images below show the subway routes on Friday morning and the bus routes on Saturday morning. The darker the line, the more frequent the service! In the web tool, you can toggle each layer independently by day (Friday/Saturday) and mode (bus/subway).

![map of bus service on a Saturday across New York City](/images/nyc-frequency/nyc-bus-saturday.png)

![map of subway service on a Friday across New York](/images/nyc-frequency/nyc-subway-friday.png)

If you hover over a route, a tooltip appears showing the stop names and frequency for that edge. While I excluded the [Long Island Rail Road feed](https://transit.land/feed-registry/operators/o-dr5-longislandrailroad), the Friday bus routes are particularly cluttered due to express buses. On express routes, each consecutive stop is often far away, possibly on a different island, but is still connected with a straight line segment in this tool. If we wanted to clean this up, the routes data could be joined from Transitland and the express services filtered.

Making this frequency visualization gave me a better idea of the frequency and coverage gaps in New York City transit and it wouldn't have been as slick or enjoyable without Transitland feeding me the data. The best part: this solution could easily be adapted to different cities, dates, and even modes of transit! Please [send me any suggestions](http://www.tyleragreen.com/contact/) you may have and I hope to see some of your projects built with Transitland in the future. Here's to leveraging open data and helping drive the transit decisions of tomorrow!
