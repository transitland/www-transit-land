---
layout: page
category: news
published: true
isThereTitle: true
title: "GTFS Data Exchange: Convening open transit data for six years"
---

[GTFS Data Exchange](http://www.gtfs-data-exchange.com/) has been the "go to" destination for open transit data for the past six years. Before [Jehiah Czebotar](http://jehiah.cz/) created the site, [GTFS](/documentation/glossary/#gtfs) files floated around the Internet, available to those who looked, but not easy to find in bulk. Thanks to Jehiah, [Trillium Solutions](http://trilliumtransit.com/), [WalkScore](https://www.walkscore.com/), and GTFS Data Exchange's many supporters, these isolated sources of transit routes, stops, and schedules had a centralized home. GTFS Data Exchange has grown to over a thousand feeds.

<!-- more -->

With this size have come more operational headaches than are reasonable to expect of a hobby project. Starting on April 1, Jehiah is in [the process of retiring GTFS Data Exchange](http://www.gtfs-data-exchange.com/). He's pointing users to Transitland and to [TransitFeeds.com](http://transitfeeds.com/) for future support, and will be offering a historical archive of feed files once the site is put to bed--that is, put into a read-only mode.

Many thanks to Jehiah for creating GTFS Data Exchange and supporting the development of the open transit data community! We look forward to continuing this communal effort with him and a growing range of partners here at Transitland.

## Browse Transitland for feed archives to download

We welcome all users of GTFS Data Exchange to check out the [Feed Registry](/feed-registry), which lists over 200 GTFS feeds available through Transitland. Every night, Transitland servers download the latest copy of each of these feeds. Unless their license restricts redistribution, you can click through to the Datastore API to download a copy of any feed:

1. Browse the [Feed Registry](/feed-registry). Click an operator name to open its detail page. For example, click through to [the detail page for Bay Area Rapid Transit](https://transit.land/feed-registry/operators/o-9q9-bart)
2. Under feed details, click the link labeled `JSON`. For example, Bay Area Rapid Transit links to [https://transit.land/api/v1/feeds/f-9q9-bart](https://transit.land/api/v1/feeds/f-9q9-bart)
3. Click the link labeled `feed_versions_url`. For example, [https://transit.land/api/v1/feed_versions?feed_onestop_id=f-9q9-bart](https://transit.land/api/v1/feed_versions?feed_onestop_id=f-9q9-bart)
4. Now you can see all versions of the feed that have been downloaded and cached by Transitland servers. If available, click the link labeled `download_url`. For example, [https://s3.amazonaws.com/transit.land/datastore-uploads/feed_version/f-9q9-bart-dd7aca4a8e4c90908fd3603c097fabee75fea907.zip](https://s3.amazonaws.com/transit.land/datastore-uploads/feed_version/f-9q9-bart-dd7aca4a8e4c90908fd3603c097fabee75fea907.zip)

## Contribute feeds to Transitland

Miss a feed that was in GTFS Data Exchange but not yet in Transitland? Please [add it to the Feed Registry](/news/2016/02/19/get-started-add-feeds.html).

We could have automatically imported all of those feeds from GTFS Data Exchange to Transitland&mdash;but we figured this would be a better opportunity for us as a community to pick the feeds that are useful to each of us and add them to Transitland. To scratch our own itches, if you will. So far, this virtuous cycle of open data contribution and consumption has expanded Transitland to [Italy](/news/2016/03/24/transitland-in-italy.html), [Maryland](/news/2016/04/04/transitland-in-maryland.html), [Chicagoland](/news/2016/03/04/transitland-feed-submission-update.html#chicago), and [Buenos Aires](/news/2016/03/04/transitland-feed-submission-update.html#buenos-aires) among other places around the world.

## Corner case: Uploading GTFS archives

One unique feature of GTFS Data Exchange has been its file upload functionality. Transitland does not have this functionality. We prefer feed files to live at stable URLs hosted by either a transit agency or a civic group, rather than within any Transitland systems. Transitland will aggregate from these "sources of truth," but does not seek to replace them.

While we aren't adding file upload functionality to Transitland proper, we do have a solution to offer to transit agencies and civic groups who depended upon hosting their feeds within GTFS Data Exchange: a shared repository on GitHub called ["gtfs-archives-not-hosted-elsewhere"](https://github.com/transitland/gtfs-archives-not-hosted-elsewhere). Feeds in this repository will live at stable github.com URLs. To add your feed, please read the [instructions](https://github.com/transitland/gtfs-archives-not-hosted-elsewhere/blob/master/README.md) and e-mail your file to [transitland@mapzen.com](mailto:transitland@mapzen.com).

We hope this GitHub repository will tide over transit agencies and civic groups not yet able to host their own feed files. But we also encourage such groups to look into [the many vendors providing GTFS creation, maintenance, and hosting services](https://docs.google.com/spreadsheets/d/1Gc9mu4BIYC8ORpv2IbbVnT3q8VQ3xkeY7Hz068vT_GQ/pubhtml).

Together, we hope to grow Transitland into a suitable successor for GTFS Data Exchange.
