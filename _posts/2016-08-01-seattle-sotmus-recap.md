---
layout: page
category: news
published: true
isThereTitle: true
title: We prepared for State of the Map US by importing nearly all of the transit feeds in Seattle
---

### Sound Transit provided most of the feeds

!["A RapidRide bus"](/images/seattle-sotmus-recap/rapid_ride_vance.jpg)
<p class='caption'>RapidRide is an express bus service – it makes fewer stops – operated by King County Metro.</p>

Just in time for the OpenStreetMap "State of the Map US" conference in Seattle, Washington, two weekends ago, the Mapzen Mobility team and I imported into Transitland a vast majority of the transit feeds for Seattle area transit operators. Meghan Hade, who leads development on the [open source](https://github.com/transitland/playground) Transitland Playground, and Ekta Daryanani, who leads design and user experience at Mapzen, were [going to give a talk](http://stateofthemap.us/2016/beyond-aesthetic-icing/) about how they designed it to be [fun and easy to use](http://transit.land/playground/) to find and discover transit data from contributors around the world. 

As the independent editor of the feeds people submit to the [Feed Registry](https://transit.land/feed-registry/), I suggested that we work together, and quickly, to ensure any OpenStreetMappers at the conference would have access to transit feeds in the conference's host city.

<!-- more -->

Transit in the Seattle region is provided by the City of Seattle, King County (which contains Seattle), the multi-county Sound Transit (and the only rail operator), and adjacent counties. 

A Sound Transit employee pointed us to a Sound Transit webpage that [listed most of the feeds](http://www.soundtransit.org/Developer-resources/Data-downloads) that covered the Seattle area. I quickly reviewed them and added them to our database. I learn a lot about a metro area's transit systems just by reviewing their feeds, the feeds' coverage areas, and the operators that deliver hundreds of thousands of people to their homes, workplaces, and outings. 

I was pleasantly surprised to see the [Seattle Children's Hospital Shuttles](http://www.seattlechildrens.org/visitors/transportation/) feed listed. With this information, someone could easily make a map of the routes, or integrate it into transit routing apps to offer families an alternative means of transportation to and from the hospital.

This means that app makers and researchers can, with a single query of our Transitland [Datastore API](https://transit.land/documentation/datastore/api-endpoints.html), build a map of all the transit routes and stops in a region that covers over 3.4 million people. Our database also includes the [Washington State Ferries](https://transit.land/feed-registry/operators/o-c28-washingtonstateferries), which connects Seattle to the islands, and the islands to each other.  

In the talk, [which we've posted](https://github.com/mapzen/presentations/tree/master/07-2016-SOTMUS/BeyondAestheticIcing), Meghan said that every transit operator in the area produces their own map, but that there isn't a map showing all of the transit in the area. There may be more than one way to get around the same area, given how distance transit operators sometimes overlap local ones, or there's a bus or rail option. "If you wanted to make a map showing all of the transit options available here, you’d have to gather data from all of these different operators", she said. 

"In Transitland", she said, "all of this data is available in one place, making it super easy to get a holistic view of transit coverage". The reason we call it a *Playground* is Mapzen wants to make this "a place that is serious and trust-worthy but at the same time approachable and easy to use. Maybe even a little fun."

!["transit maps from Seattle"](/images/seattle-sotmus-recap/hade_presentation_slide_20.png)
<p class='caption'>A collection of transit maps from operators that service Seattle.</p>

!["Those same transit routes on Transitland Playground"](/images/seattle-sotmus-recap/hade_presentation_slide_21.png)
<p class='caption'>You can view all of those routes simultaneously on Transitland Playground.</p>

After my review, and after I had landed in Seattle, I noticed one transit route was missing from our collection: the Seattle Monorail. This is an historic line that was built in 1962 for the Seattle World's Fair, which was held at the Seattle Center north of Belltown. It's also where the Space Needle rises 520 feet above the ground. The monorail connects the Seattle Center with the Westlake shopping mall in the Central Business District, and leaves the station every 10 minutes for a two minute ride. We haven't been able to find a GTFS feed for the trip.

[!["Seattle Monorail"](/images/seattle-sotmus-recap/seattle_monorail_vance.jpg)](https://www.flickr.com/photos/jamesbondsv/28595116115/in/datetaken-public/)
<p class='caption'>The Seattle Monorail soars over a building in the Belltown neighborhood.</p>

Our system was unable to import the transit feed for the Joint Base Lewis-McChord's GO transit, and we're reaching out to that operator to see if they can fix the data issue. Additionally, when I was verifying the seven working feeds listed on Sound Transit's website, I discovered regional peculiarities of how routes were organized in the feeds. 

The 28 Sound Transit express bus routes are operated by three county transit agencies in branded vehicles owned by Sound Transit. There isn't a single feed that contains the details for all routes; they are divided amongst the [King County Metro feed](https://transit.land/feed-registry/operators/o-c23-metrotransit) (the operator for buses in the City of Seattle), [Pierce Transit](https://transit.land/feed-registry/operators/o-c22u-piercetransit), and [Community Transit](https://transit.land/feed-registry/operators/o-c29-communitytransit). Sound Transit also operates the Link light rail in Seattle, the Link streetcar in Tacoma, and the two Sounder commuter rail lines. 

It's also confusing that the Community Transit feed labels the Sound Transit bus routes as operated by "Community Transit" while the other two feeds label them "Sound Transit". Because of how Transitland works, combining the world's transit feeds into a single database, it's less important to know that different transit routes might be scattered amongst multiple feeds, but it would be necessary to figure this out if you only wanted to map these 28 routes. 

The Seattle metropolitan area is a great example to showcase how Transitland can help researchers, app developers, and mappers, who may not have personal knowledge of the local array of transit options, understand the nature of services in the region and collect route data without having to locate and download every single feed. 

When the conference ended on Monday afternoon, I took a long walk around the city to check out the buses and trains in the Seattle city center, the feeds of which I had imported just a few days prior. I saw the city during the afternoon rush hour and I was impressed as to how many buses, bus lanes, and serive types that I saw. 

After the walk I had to catch a flight, so I took the 9-Rainer Beach Express bus route ([download the GeoJSON of its stops](http://transit.land/api/v1/stops.geojson?served_by=r-c23n9-9)) – operated by King County Metro – to the Mount Baker Link light rail station – operated by Sound Transit – to the SeaTac airport. I wanted to see and experience as much as I could in a single trip. 
