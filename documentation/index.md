---
layout: documentation
title: Documentation
skip_title: true
---

[Transitland](https://transit.land) brings together many sources of transit data to build a [directory of operators and feeds](https://transit.land/feed-registry/) that can be edited by transit enthusiasts and developers. Transitland contains several interlocking parts, including the Feed Registry, the Datastore, and the Playground.

[Transitland Feed Registry](feed-registry/) is a directory of transit operators and data feeds. Through the Feed Registry, you can browse operators, feeds, and usage and license information, as well as contribute additional feeds. The directory is a view into Transitland's Datastore API.

[Transitland Datastore](datastore/) brings together data from the Feed Registry with contributions, edits, and fixes from transit enthusiasts and developers. The Datastore is a hosted service that provides a web API for querying and editing.

[Transitland Playground](playground/) demonstrates all the pieces of the data architecture working together.

![a diagram showing the Transitland Feed Registry, Datastore, and Playground communicating with each other](/images/how-it-works-diagram.png)

With data coming from many different sources, the Onestop ID is Transitland's experimental attempt to build a stable, globally unique identifier scheme. The Datastore API returns Onestop IDs for every feed, operator, stop, and route.

All of Transitland's software components are available under open-source licenses; all of the data (federated from authoritative sources and contributed by community members) is freely available. You can participate in Transitland by using just one component of this architecture, or come for it all.
