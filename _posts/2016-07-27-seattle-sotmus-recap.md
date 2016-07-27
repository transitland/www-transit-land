---
layout: page
category: news
published: false
isThereTitle: true
title: We prepared for State of the Map by importing nearly all the transit feeds in Seattle
---

### optional header

!["A RapidRide bus"](/images/seattle-sotmus-seattle/rapid_ride_vance.jpg)
<p class='caption'>RapidRide is an express bus service – it makes fewer stops – operated by King County Metro.</p>

Mapzen's Mobility team imported seven of the eight available feeds for Seattle area transit agencies into Transitland in time for Meghan Hade's talk at the State of the Map U.S. conference last weekend. We wanted to be ready to answer questions about Transitland at the conference, and use our hosts as an example. 

Transit in the Seattle region is provided by the City of Seattle, King County (which contains Seattle), the multi-county Sound Transit (and the only rail operator), and adjacent counties. An employee of Sound Transit, a regional transit provider in the Seattle region, submitted to our Feed Registry some of the feeds. She also pointed us to a Sound Transit webpage that [listed most of the feeds](http://www.soundtransit.org/Developer-resources/Data-downloads) that covered the Seattle area. 

I was pleasantly surprised to see the Seattle Children's Hospital Shuttles feed listed. With this information, someone could easily make a map of the routes, or integrate it into transit routing apps to offer families an alternative means of transportation to and from the hospital.

This means that app makers and researchers can, with a single query of our Transitland API, build a map of all the transit routes and stops in a region that covers over 3.4 million people. Our database also includes the [Washington State Ferries](https://transit.land/feed-registry/operators/o-c28-washingtonstateferries), which connects Seattle to the islands, and the islands to each other.  

Meghan said that every transit operator in the area produces their own map, but that there isn't a map showing all of the transit in the area. There may be more than one way to get around. "If you wanted to make a map showing all of the transit options available here, you’d have to gather data from all of these different operators", she said. 

"In Transitland", she said, "all of this data is available in one place, making it super easy to get a holistic view of transit coverage". The reason we call it a "Playground" is Mapzen wants to make this "a place that is serious and trust-worthy but at the same time approachable and easy to use. Maybe even a little fun."

!["transit maps from Seattle"](/images/seattle-sotmus-seattle/hade_presentation_slide_20.png)
<p class='caption'>A collection of transit maps from operators that service Seattle.</p>

!["Those same transit routes on Transitland Playground"](/images/seattle-sotmus-seattle/hade_presentation_slide_21.png)
<p class='caption'>You can view all of those routes simultaneously on Transitland Playground.</p>

There's one transit route missing: the Seattle Monorail. This is an historic line that was built in 1962 for the Seattle World's Fair, which was held at the Seattle Center north of Belltown. It's also where the Space Needle rises 520 feet above the ground. The monorail connects the Seattle Center with the Westlake shopping mall in the Central Business District, and leaves the station every 10 minutes for a two minute ride. 

!["Seattle Monorail"](/images/seattle-sotmus-seattle/seattle_monorail_vance.jpg)
<p class='caption'>The Seattle Monorail soars over a building in the Belltown neighborhood.</p>

It's important to note here that we had trouble importing the transit feed for the Joint Base Lewis-McChord's GO transit, and we're reaching out to that operator to see if they can fix the data issue. Additionally, when I was verifying the seven working feeds, I found a regional pecularities as to how the feeds were organized. 

The 28 Sound Transit express bus routes are operated by three county transit agencies in branded vehicles owned by Sound Transit. There isn't a single feed that contains the details for all routes; they are divided amongst the [King County Metro feed](https://transit.land/feed-registry/operators/o-c23-metrotransit) (the operator for buses in the City of Seattle), [Pierce Transit](https://transit.land/feed-registry/operators/o-c22u-piercetransit), and [Community Transit](https://transit.land/feed-registry/operators/o-c29-communitytransit). Sound Transit also operates the Link light rail in Seattle, the Link streetcar in Tacoma, and the two Sounder commuter rail lines. 

It's also confusing the Community Transit feed labels the Sound Transit bus routes as operated by "Community Transit" while the other two feeds give them the "Sound Transit". Because of how Transitland works, combining the world's transit feeds into a single database, it's less important to know that different transit routes might be scattered amongst multiple feeds, but there are still local quirks.

