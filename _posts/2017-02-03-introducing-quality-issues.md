---
layout: page
category: news
published: true
isThereTitle: true
title: Introducing Quality Issues
---

Transitland has issues. No, we're not talking about bugs, missing features, or flaws (we hope!) but a whole new way of tracking, viewing, and even a little editing of the qualitative concerns we find in the transit data we receive. We call these "Quality Issues."

Transit data is inherently tricky given all the spatial, temporal, and operational components that have to come together. Whether they are assembled and edited manually, or produced as the combined output of several different programs and processes,  sometimes mistakes are made. Just to give a few examples, we've seen outdated and invalid URLs, stops that are too far from their routes, and trip shapes that don't match the trip's stop patterns or even go in the wrong direction. 

<!-- more -->

It turns out that these errors are fairly easy to evaluate, maintain, and edit, especially when you see as many transit feeds as we do. While the transit data may be complex, it is also predictable, and we can build processes to detect common errors.
Here's an example that illustrates our approach.

Suppose Transitland receives a feed version from the Fixme Transit Agency. During the import process, after the raw GTFS data has been consumed and translated into the Datastore's model, and before this data makes it into the database, all route stop patterns and their accompanying stops are quality checked for any unusually large distance gaps. In addition to being visually and factually inaccurate, these gaps can lead to mistakes in [how a routing engine computes a path](/news/2016/04/15/transitland-route-geometries.html) along the route line between the gapped stop and any other stop. 

Everything seems good, except for one route stop pattern and stop pair in the "No Outlier Express" route. Due to a glitch in Fixme's scheduling software, stop "Main Street & 1st" is now located erroneously off of the route line in another part of town.

![distance gap](/images/introducing-quality-issues/distance_gap.jpg)

The distance gap function in the quality check process recognizes that this stop is unlikely to be so far away. It creates an issue record with an id "1" and reference to the specific route stop pattern and stop, and the attribute to "blame" for the issue. (In this case, both the route stop pattern line geometry and stop point geometry attributes are flagged as the "objects of blame", because we can't yet determine programatically which geometry is erroneous.) 

A few weeks later, a new feed version is fetched by Transitland. This poses a problem for our Quality Issues process in that new data could make issues, like our issue "1", irrelevant. To see this, suppose the import process finds and conducts a quality check on the previous route stop pattern and stop pair. 

A different distance gap is found, but this time "Main Street & 1st" is now on [Null Island](https://blogs.loc.gov/maps/2016/04/the-geographical-oddity-of-null-island/). (Fixme has no ferry services to the middle of the Atlantic). 

![Null Island](/images/introducing-quality-issues/null_island_gap.jpg)

The details of the problem have changed, but the nature has not. So the previous quality issue "1" is deleted and a new issue record with id "2" is created. This new record is still almost identical to its predecessor, except for the id and a reference to the new feed version. (Note that in our current implementation, a new issue record will be created even if the coordinates of "Main Street & 1st" were still 0°N, 0°E in subsequent imports.)   

Meanwhile, confused passengers, using an app based on Transitland's data, have been queueing up in sailboats near Null Island only to miss their ride to work. To resolve this problem, someone submits a changeset with the field "issuesResolved" populated by the integer "2". The changeset consists of a single payload: the "Main Street & 1st" onestop id and the geometry coordinates of that street corner. The changeset is applied, and once again quality checks are run. The Datastore verifies that the "issuesResolved" payload did not create an equivalent issue through quality checks (otherwise an error would be returned and the change would not be applied), and completes by writing the update to the database. Quality issue "2" is marked as closed, logged and deleted. During the next feed version import, the "Main Street & 1st" stop geometry is left unchanged from the edit, and no new issues are created.    

A check on the distance gap between a stop and a route stop pattern is just one of a few quality checks conducted during changeset applications. Since there's always more going on behind the scenes, please check out the [quality issues documentation](/documentation/datastore/quality_issues.html) for more details. 

Finally, we are working on some editing tools to help facilitate the resolution of issues with data edits. Stay tuned as we get them ready to release them to a wider audience!

![whistler gif](/images/introducing-quality-issues/quality-editor.gif)
