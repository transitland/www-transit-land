---
layout: page
category: news
published: true
isThereTitle: true
title: Help us expand our worldwide listings of transit operators
---
**by [Steven Vance](http://twitter.com/stevevance)**

<a href="http://tangrams.github.io/tangram-frame/?noscroll&url=https://transit.land/images/placeholders/placeholder-operators.yaml#7.60917/36.580/127.537"><img src="/images/placeholders/korean-placeholders.png" alt="map of operator service bounding boxes displayed on South Korea" /></a>
*A map showing "placeholder" operator records in Transitland in South Korea. Open a [map of all placeholder operator records](http://tangrams.github.io/tangram-frame/?noscroll&url=https://transit.land/images/placeholders/placeholder-operators.yaml#7.60917/36.580/127.537).*

The [Transitland Feed Registry](https://transit.land/feed-registry/) lists maps, schedules, stops, and route information for 879 transit feeds containing over 2,275 transit operators. Our current coverage of the United States, Canada, Mexico, and most countries in Europe is excellent, and we have very good coverage of the most populated areas in Australia and New Zealand.

Transitland, however, still has no information about public-transit service in other places around the world. Now we're creating "placeholder" records for transit operators for which Transitland does not &mdash; yet &mdash; have complete stop/route/schedule data.

<!-- more -->

The initial group of 50 placeholders operators was populated by [identifying the most populous cities in the world that are missing from Transitland](https://github.com/transitland/transitland/issues/261). In addition, I also added cities that are in regions and continents that have less representation within Transitland. The placeholders group includes cities in South America, India, South Korea, and in one country in Africa.

For each of the placeholders, we have created a Transitland operator record. This record includes the following information, when available, about the operator:

- name (long and short forms)
- location (country, state/province, metro region)
- public website URL
- Wikipedia URL
- Twitter handle
- a GeoJSON polygon that roughly covers the operator's service area

We're now asking for your help to create additional placeholder operators, as well as to help find GTFS feeds that are available for any placeholder operators. Together, we can help build Transitland as both a deep source of data, where it's available, and a broad overview of where we know transit service exists but detailed open data is not yet available.

 <a href="https://transit.land/feed-registry/?country=KR"><img src="/images/placeholders/feed-registry-south-korean-placeholders.png" alt="screenshot of Feed Registry"/></a>
 *Transitland Feed Registry now lists "placeholder" operators added for South Korea. Browse them in the [Feed Registry](https://transit.land/feed-registry/?country=KR).*

## We could use your knowledge

**We have very limited coverage of metropolitan areas in**:

- South Asia
- Southeast Asia
- Japan
- Africa
- South America
- China

[Send us the name and location](https://docs.google.com/forms/d/e/1FAIpQLSfMMVmGnfrlwpbZViW16bvQ99Sb1y1bRuNqKtUk_7ZEFfon1w/viewform) of a missing transit operator in those areas if you're familiar with them [through our Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfMMVmGnfrlwpbZViW16bvQ99Sb1y1bRuNqKtUk_7ZEFfon1w/viewform), whether or not they have a GTFS feed. 

If you do know the GTFS feed, [submit it to the Feed Registry here](https://transit.land/feed-registry/feeds/new). We can host an operator's GTFS feed if they cannot &mdash; [contact us by email](mailto:hello@transit.land). 

(We are also missing operators from elsewhere in the world, but please check the [Feed Registry](/feed-registry) before submitting a place outside the countries and contintents listed above.)

You can explore the coverage we have in the world using [Mobility Explorer](https://mapzen.com/mobility/explorer/). Search or pan to any area on earth and click "Show Operators". Or use the [Transitland Datastore API](/documentation/datastore/api-endpoints.html) to query the `/api/v1/operators` endpoint from your favorite scripting language or command-line tool.
