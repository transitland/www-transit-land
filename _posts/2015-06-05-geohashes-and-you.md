---
layout: page
title: 'Geohashes and You'
published: true
isThereTitle: true
category: news
---

[Geohashes](http://en.wikipedia.org/wiki/Geohash), created by Gustavo Niemeyer in 2008 and placed in the public domain, are an elegant and succinct geographic encoding. Geohashes work by reducing a two-dimensional longitude, latitude pair into a single alphanumeric string where each additional character adds precision to the location. Originally created as part of a [URL-shortening service](http://geohash.org), geohashes have proven useful in a variety of contexts, including unique identifiers, spatial indexing, and search.

![9q8yykv551w](https://s3.amazonaws.com/assets-staging.mapzen.com/images/geohashes-and-you/geohash-blog-header.jpg)

[Transitland](https://transit.land) uses geohashes as a prime component of [Onestop IDs](https://github.com/transitland/onestop-id-scheme/blob/master/introduction.md), our system for creating stable identifiers for public transit operators, routes, and stops. The short length and arbitrary precision of geohashes are extremely useful for approximately geolocating millions of transportation locations. For example, the geohash "[9q8znb12j1](http://geohash.org/9q8znb12j1)" is the location of the San Francisco Embarcadero subway stop, and forms part of the Onestop ID "[s-9q8znb12j1-embarcadero](https://transit.land/api/v1/stops/s-9q8znb12j1-embarcadero)".

<!-- more -->

## Constructing a geohash

The beauty of a geohash is in how it's constructed. In brief, geohashes are a type of grid spatial index, where the world is recursively divided into smaller and smaller grids with each additional bit.

![Creating a geohash-1](https://s3.amazonaws.com/assets-staging.mapzen.com/images/geohashes-and-you/geohash-divide-0.jpg)

Start with the entire planet, and divide it in half along the Prime Meridian&mdash;the first half containing latitudes in the range of (-180,0) as 0 and the second half containing the range (0,180) as 1. The half containing your point becomes the first bit.

![Creating a geohash-2](https://s3.amazonaws.com/assets-staging.mapzen.com/images/geohashes-and-you/geohash-divide-1.jpg)

Now, divide that half again along the Equator, and add the second bit. Repeat this subdivision, alternating between longitude and latitude, until the remaining area is within the precision desired. Finally, encode the resulting binary sequence using the [geohash base 32 character map](http://en.wikipedia.org/wiki/Geohash#Example) to create the final geohash string. For example, the longitude, latitude coordinate (37.77564, -122.41365) results in the binary sequence "0100110110010001111011110" and produces the geohash "9q8yy".

<table class="table">
  <tr>
    <td><strong>Binary</strong></td>
    <td>01001</td>
    <td>10110</td>
    <td>01000</td>
    <td>11110</td>
    <td>11110</td>
  </tr>
  <tr>
    <td><strong>Decimal</strong></td>
    <td>9</td>
    <td>22</td>
    <td>8</td>
    <td>30</td>
    <td>30</td>
  </tr>
  <tr>
    <td><strong>Base 32</strong></td>
    <td>9</td>
    <td>q</td>
    <td>8</td>
    <td>y</td>
    <td>y</td>
  </tr>
</table>

## Decoding a geohash

Another way of thinking about about geohashes are as interleaved longitude (even bits) and latitude (odd bits). This provides a simple method for converting a geohash back into longitude and latitude.

<table class="table">
  <tr>
    <td><strong>Base 32</strong></td>
    <td>9</td>
    <td>q</td>
    <td>8</td>
    <td>y</td>
    <td>y</td>
  </tr>
  <tr>
    <td><strong>Decimal</strong></td>
    <td>9</td>
    <td>22</td>
    <td>8</td>
    <td>30</td>
    <td>30</td>
  </tr>
  <tr>
    <td><strong>Binary</strong></td>
    <td>01001</td>
    <td>10110</td>
    <td>01000</td>
    <td>11110</td>
    <td>11110</td>
  </tr>
  <tr>
    <td><strong>Longitude</strong></td>
    <td>0-0-1</td>
    <td>-0-1-</td>
    <td>0-0-0</td>
    <td>-1-1-</td>
    <td>1-1-0</td>
  </tr>
  <tr>
    <td><strong>Latitude</strong></td>
    <td>-1-0-</td>
    <td>1-1-0</td>
    <td>-1-0-</td>
    <td>0-1-0</td>
    <td>-1-1-</td>
  </tr>
</table>

As above, each additional bit divides the area in half in a binary search. Latitude begins with a range of (-90, 90) degrees; the first bit of 1 reduces this to (0, 90); the second bit of 0 to (0, 45); the third bit of 1 to (22.5, 45); and so on until with the 12th bit, the range is (37.753, 37.797) with a midpoint of 37.775.

In this case, the width of the area encoded by 12 bits of latitude is +/- 0.022 degrees, or approximately 2.4 km across at the equator. A longer geohash would encode more bits of precision; for example, increasing the geohash from 5 characters to 8 characters would increase latitude to 20 bits, reducing error to +/- 0.00085 degrees, or +/- 0.019 km.

## Finding neighbors

As each character encodes additional precision, shared prefixes denote geographic proximity.

<table class="table">
  <thead>
    <tr>
      <th>City</th>
      <th>Geohash</th>
      <th>Latitude</th>
      <th>Longitude</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>San Francisco</td>
      <td>9q8yym901hw</td>
      <td>37.77926</td>
      <td>-122.41923</td>
    </tr>
    <tr>
      <td>Oakland</td>
      <td>9q9p1d5zfks</td>
      <td>37.80531</td>
      <td>-122.27258</td>
    </tr>
    <tr>
      <td>Berkeley</td>
      <td>9q9p3tvj8uf</td>
      <td>37.86947</td>
      <td>-122.27093</td>
    </tr>
    <tr>
      <td>Los Angeles</td>
      <td>9q5ctr60zyr</td>
      <td>34.05366</td>
      <td>-118.24276</td>
    </tr>
    <tr>
      <td>New York City</td>
      <td>dr5regw2z6y</td>
      <td>40.71273</td>
      <td>-74.00599</td>
    </tr>
    <tr>
      <td>London</td>
      <td>gcpvn0ntjut</td>
      <td>51.50479</td>
      <td>-0.07871</td>
    </tr>
    <tr>
      <td>Greenwich</td>
      <td>u10hb5403uy</td>
      <td>51.47651</td>
      <td>0.00283</td>
    </tr>
  </tbody>
</table>

You might notice that all the California locations all begin with "9q", and that Oakland and Berkeley share the "9q9p" prefix. Shared prefixes allow nearby locations to be identified through very simple string comparisons and efficient searching of indexes.

However, it is important to note the converse is not true! The London and Greenwich geohashes are only about 6 km apart as the crow flies&mdash;but have no common prefix. This is because the Prime Meridian separates the two locations, dividing these two geohashes from with the very first flipped bit. Fortunately, it is straightforward to calculate the [8 neighbors for a given geohash](https://github.com/transitland/mapzen-geohash). For example, the Southeast neighbor of "gcpv" is "u10h", successfully jumping across this pesky imaginary boundary.

## Searching an area

This method of expanding a geohash to include its neighbors can also be used to efficiently find the set of geohash prefixes to search an area. To find all prefixes within approximately 1 mile of the San Francisco geohash "9q8yykv551w", first shorten the geohash to 6 characters, "9q8yyk", then add in all 8 neighbors: 9q8yy7, 9q8yyt, 9q8yy5, 9q8yys, 9q8yym, 9q8yyj, 9q8yyk, 9q8yyh, 9q8yye. Any point in this area is known to start with one of these prefixes.

![Geohash neighbors](https://s3.amazonaws.com/assets-staging.mapzen.com/images/geohashes-and-you/geohash-neighbors.jpg)

At Transitland, we use this property to specify simple bouding boxes for transit operators as part of a Onestop ID. For example, the [SFMTA](http://www.sfmta.com/) has over [3500 bus stops](https://transit.land/api/v1/stops?servedBy=o-9q8y-sanfranciscomunicipaltransportationagency). As described above, it is quite possible that there is no common geohash prefix shared by every stop in the system (or, if there is, the be so short as to be limited usefulness). In the case of the SFMTA, only "9q" prefix is shared in common, which covers a very large portion of the Southwestern United States. However, the geohash prefix "9q8y", when expanded to include neighbors, provides the 9 prefixes that can be used to find any stop, while covering a much smaller land area. This "neighbors implied" geohash is then used in the Onestop ID for SFMTA: "[f-9q8y-sanfranciscomunicipaltransportationagency](https://github.com/transitland/transitland-feed-registry/blob/master/feeds/f-9q8y-sanfranciscomunicipaltransportationagency.json)".

## Start where you are

Try the [Transitland Playground](/blog/welcome-to-the-transitland-playground), a simple and attractive interface to browse transit operators, stops, and routes, including their Onestop IDs and geohashes.

Browse a [worldwide map of geohashes overlaid on a "slippy" webmap](http://mapzen.github.io/leaflet-spatial-prefix-tree/).

Use our [Python library](https://github.com/transitland/mapzen-geohash) to compute geohashes and their neighbors.

## And do keep in touch

To read even more about how we're looking at the world's transportation data, find us at [transit.land](https://transit.land) and [@transitland](https://twitter.com/transitland)
