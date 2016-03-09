---
layout: page
category: news
published: true
isThereTitle: true
title: Open data hackathons (and Transitland) around the world
---

No weekend plans? Want to meet some people and play with bus/train/tram data? If so, you're in luck: This Saturday is the [International Open Data Day](http://opendataday.org/) hackathon, and both Saturday and Sunday are [CodeAcross](https://www.codeforamerica.org/events/codeacross-2016/) hackathon days. [Transitland](https://transit.land)&mdash;an open-transit-data service sponsored by Mapzen and supported by an increasing number of contributors&mdash;will be there, too.

To preview what you can create this weekend, and any other time, we'd like to highlight a few of the ways data enthusiasts, transit agencies, and app developers are contributing to Transitland in Rome, Chicago, Buenos Aires, and Washington, D.C.

<!-- more -->

### Rome

Andrea Borruso added feeds to Transitland for several Italian transit agencies, including [Roma Servizi per la Mobilità s.r.l.](https://transit.land/feed-registry/operators/o-sr2-romaserviziperlamobilitsrl), and was kind enough [to write a blog post in Italian about Transitland](http://blog.spaziogis.it/2016/03/02/transiland-per-mettere-insieme-e-dare-vita-ai-dati-sui-trasporti/). Grazie, Andrea!

Here's what Rome's transit network looks like using the [Transitland Playground](https://transit.land/playground/) data explorer and downloader:

![rome-gtfs](/images/transitland-feed-submission-update/rome-gtfs.jpg)

If you happen to be in Italy, there are several Open Data Day hackathons -- check out [Andrea's Twitter feed](https://twitter.com/aborruso/) for a good overview of what's going on.

Looking for GeoJSON for the route geometries of your favorite transit system? It's accesible through the [Transitland Datastore API](https://transit.land/how-it-works/#slide-3) like so:

`https://transit.land/api/v1/routes.geojson?operatedBy=[operator_onestop_id]`

This can be imported and displayed in any application or website that understands GeoJSON. [In the case of Rome](https://transit.land/api/v1/routes.geojson?operatedBy=o-sr2-romaserviziperlamobilitsrl), it's

`https://transit.land/api/v1/routes.geojson?operatedBy=o-sr2-romaserviziperlamobilitsrl` (7 MB)

Want to look up the Onestop ID for a different operator? Browse the [Transitland Feed Registry](https://transit.land/feed-registry) or query the Datastore API like so:

`https://transit.land/api/v1/operators`

### Chicago

[Twenty-five or six to four](http://www.songfacts.com/detail.php?id=1197) aside, the [Chicago Transit Authority's GTFS feed](https://transit.land/feed-registry/operators/o-dp3-chicagotransitauthority) is now in Transitland's Feed Registry. [Daniel Burhham](https://en.wikipedia.org/wiki/Daniel_Burnham)'s mark on the city is clear.

![chicago-gtfs](/images/transitland-feed-submission-update/chicago.png)

[CTA GTFS GeoJSON (12.8MB)](https://transit.land/api/v1/routes.geojson?operatedBy=o-dp3-chicagotransitauthority)

### Buenos Aires

The Buenos Aires subway, [Subterráneos de Buenos Aires (SUBTE)](https://transit.land/feed-registry/operators/o-69y7-sbase), has eight lines.

![buenos-aires](/images/transitland-feed-submission-update/buenos-aires-gtfs.png)

More information about the _Subterráneos_ routes can be easily viewed [using the Datastore API](https://transit.land/api/v1/routes?operatedBy=o-69y7-sbase) and [mapped as GeoJSON](https://transit.land/api/v1/routes.geojson?operatedBy=o-69y7-sbase) (38K)

```json
{
  "routes": [
    {
      "identifiers": [
        "gtfs://f-69y7-recursosdatabuenosairesgobar/r/PM-Savio"
      ],
      "imported_from_feed_onestop_ids": [
        "f-69y7-recursosdatabuenosairesgobar"
      ],
      "imported_from_feed_version_sha1s": [
        "4e07fa71ddcc48667af3ccf61d49f85056e1b305"
      ],
      "created_or_updated_in_changeset_id": 605,
      "onestop_id": "r-69y6v-pm~s",
      "name": "PM-S",
      "vehicle_type": "tram",
      "geometry": {
        ...
      }
    }
  ]
}
```

The GeoJSON you get from the Transitland API can be displayed in many different web apps, including geojson.io! [Click here to see SUBTE routes using geojson.io](http://geojson.io/#data=data:text/x-url,https%3A%2F%2Ftransit.land%2Fapi%2Fv1%2Froutes.geojson%3FoperatedBy%3Do-69y7-sbase).

### Washington D.C.

[I pity the fool who takes a cab in DC](https://en.wikipedia.org/wiki/D.C._Cab)&mdash;you should be [riding WMATA when in the District of Columbia](https://transit.land/feed-registry/operators/o-dqc-met).

![dc-gtfs](/images/transitland-feed-submission-update/dc-gtfs.png)

Lots of lines! But through the power of the Transitland API, you can pull out just the subways&hellip;

`https://transit.land/api/v1/routes.geojson?vehicle_type=metro&operatedBy=o-dqc-met`

&hellip;and drop the resulting map of the DC Metro GeoJSON into [QGIS](http://www.qgis.org/en/site/). Hello Red Line!

![DC Metro](/images/transitland-feed-submission-update/dc-metro-red-line.png)

### Elsewhere

Can't find your favorite bus, train, gondola, or ferry in Transitland? [Please add it to the Transitland Feed Registry](https://transit.land/news/2016/02/19/get-started-add-feeds.html).

Whether it's this weekend as part of a hackathon, next Monday as part of your "day job," or any other day that you're intrigued by open transit data, we welcome your involvement in Transitland!
