---
layout: documentation
title: Documentation
skip_title: true
redirect_from:
  - /how-it-works/
---

Transitland brings together many sources of transit data to build a directory of operators and feeds that can be edited by transit enthusiasts and developers. Transitland contains several interlocking parts, including the Feed Registry, the Datastore, and the Playground.

[Transitland Feed Registry](/documentation/feed-registry/) is a directory of transit operators and data feeds. Through the Feed Registry, you can browse operators, feeds, and usage and license information, as well as contribute additional feeds. The directory is a view into Transitland's Datastore API.

[Transitland Datastore](/documentation/datastore/) brings together data from the Feed Registry with contributions, edits, and fixes from transit enthusiasts and developers. The Datastore is a hosted service that provides a web API for querying and editing.

[Transitland Playground](/documentation/playground/) demonstrates all the pieces of the data architecture working together.

[Mapzen Turn-by-Turn](https://mapzen.com/projects/turn-by-turn) is a hosted routing service that consumes data from the Datastore API and offers journey planning and analysis.

![a diagram showing the Transitland Feed Registry, Datastore, and Playground communicating with each other](/images/how-it-works-diagram.png)

With data coming from many different sources, the [Onestop ID scheme](/documentation/onestop-id-scheme/) is Transitland's experimental attempt to build a stable, globally unique identifier scheme. The Datastore API returns Onestop IDs for every feed, operator, stop, and route.

All of Transitland's software components are available under open-source licenses; all of the data (federated from authoritative sources and contributed by community members) is freely available. You can participate in Transitland by using just one component of this architecture, or come for it all.
