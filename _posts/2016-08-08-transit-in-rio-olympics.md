---
layout: page
category: news
published: true
isThereTitle: true
title: Rio de Janeiro, host of the 2016 Olympic Games, is a city of buses
---

## Subway and light rail lines open just in time

!["A TransOeste bus"](/images/transit-in-rio-olympics/8433074552_transoeste_mariordo59.jpg)
<p class='caption'>The TransOeste BRT line was opened in 2013, and now services the Olympic Park and Village in Barra da Tijuca. Photo by <a href="https://www.flickr.com/photos/30998987@N03/8433074552/" target="_blank">mariordo59</a>.</p>

A new subway line opened in Rio de Janeiro one week before the 2016 Olympic Games opening ceremony. "Linha 4" was the final piece of Rio's Olympics transit strategy. In a [media report last year](http://www.bloomberg.com/news/articles/2015-10-08/2016-rio-olympic-games-hinge-on-down-to-wire-subway-construction), construction was "down to the wire" and the line was supposed to open five weeks before the games. The line joins *Linhas* 1 and 2 in Rio's "Metrô" system, but isn't open to the public yet. 

For the first week of the Games, running through September 19 when the paralympics ends, [riding the trains is restricted](http://riotimesonline.com/brazil-news/rio-real-estate/new-metro-line-4-extension-delayed-in-rio-de-janeiro/) to athletes, ticket holders, press, and staff. Also during this time, only five stations are open – the sixth station [will open in 2018](http://www2.planalto.gov.br/presidente-em-exercicio/noticias/2016/07/temer-inaugura-a-linha-4-do-metro-do-rio-de-janeiro).

### Lots of transit

Rio de Janeiro has more transit modes than most cities. A [funicular](https://en.wikipedia.org/wiki/Corcovado_Rack_Railway) – specifically a rack railway – takes tourists up to the [Christ the Redeemer](https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)) statue, and aerial cable cars lift sightseers to the top of the *Pão de Açucar* mountain. 

The city has a [vintage tram](http://www.nycsubway.org/wiki/Rio_de_Janeiro_Santa_Teresa_Tram), light rail, subway, commuter rail to the suburbs, ferries, and local buses (both with and without air conditioning). Rio, like most large cities in Latin and South America, has BRT, or bus rapid transit, a bus innovation [invented in Brazil](https://en.wikipedia.org/wiki/Bus_rapid_transit) that uses buses to provide subway-like service on exclusive roads. 

The opening of *Linha 4* a week before the Olympics wasn't the only close call. The city's new light rail train opened in June. The [VLT Carioca](http://www.vltrio.com.br) – Carioca is the demonym for [someone from Rio](https://en.wikipedia.org/wiki/Carioca) – takes riders on several routes in the city center, including to the airport and port. 

<!-- more -->

### Increasing coverage

We're still looking for transit feeds for the trains and ferries, but we have data for 378 bus routes. If you know where any of these feeds live, become a Transitland contributor and [submit it on our form](https://transit.land/feed-registry/feeds/new). *Se você conhece o URL de feed torne-se um contribuidor e o [envie em nosso formulário](https://transit.land/feed-registry/feeds/new).*

*Fetranspor* provides a combined feed for all of the local bus routes operated by the many companies with concessions to provide public transport services in the state of Rio de Janeiro. 

The [feed for Fetranspor](https://transit.land/feed-registry/operators/o-75cj-fetranspor) was submitted to Transitland before the Olympics, but the impending opening ceremony last week was an impetus for me as the independent reviewer of incoming data to try increase coverage of Brazil on Transitland. 

Someone else submitted a feed for transit in São Paulo, the largest city in South America, but because the city's data portal requires registration before showing links to the GTFS feed, we are hosting it on a [designated GitHub repository](https://github.com/transitland/gtfs-archives-not-hosted-elsewhere) until we can find a better solution. If you know of a feed that isn't hosted publicly, we may be able to host it, too. 

Transitland also maps out transit routes and stops [in Belo Horizonte](https://transit.land/feed-registry/operators/o-7h2w-empresadetransportesetransitodebelohorizontes~a), the capital of Minas Gerais, a state north of São Paulo, and [Porto Alegre](https://transit.land/feed-registry/operators/o-6fes-empresapublicadetransportesecirculação) in Rio Grande do Sul. 

### Using Transitland

A practical way to use Transitland's limited transit information for Rio – which I hope to increase soon – is to combine it with point of interest data from OpenStreetMap. For example, make a map of all of the bus routes and stops that can pick up riders within a short walk of the Maracanã stadium, a 66-year-old *futebol* (soccer) stadium that hosted the 2014 World Cup and the opening ceremony of this year's Olympics. With this short tutorial we can find bus stops near each of the Olympic Games venues. 

First, let's find Maracanã stadium using a simple query on Overpass Turbo. Overpass is a service that queries OpenStreetMap for specific kinds of places, and Overpass Turbo is the web interface. Once we know where the stadium is in the world, we can provide that information to the Transitland API and discover nearby transit options. 

#### Locate the stadium

1. On the [Overpass Turbo website](http://overpass-turbo.eu), use the search box in the top-left corner of the map to find "Rio de Janeiro, Brazil". By default, Overpass Turbo searches in the current map view. 

2. Click the "Wizard" button and enter "name=Maracanã" (be sure to spell the name with the accented character) in the input field and click "build and run query". Overpass Turbo will search for objects in this area of OpenStreetMap that are either a *way* (building or park), a *node* (an address or point of interest), or *relation* (a group of ways and nodes) tagged as having "Maracanã" in its *name* field. 

3. The stadium is now highlighted as a dot on this map. Assuming we know how the stadium was tagged in OpenStreetMap we can use a more fine-tuned search. Click the "Wizard" button again and enter "name=Maracanã and leisure=stadium". Now only a single element will be outlined on the map.

4. Click on the stadium in the map and an info window will appear telling you all the details that OpenStreetMap has about this object. We're now interested in the coordinates (latitude and longitude) of this stadium. In the info window, [click the link](http://www.openstreetmap.org/relation/4587734) at the top that's a larger number next to the word "relation". This is the OpenStreetMap "relation" ID, and it'll take you to the official page on OpenStreetMap for this place. Relations are a group of objects that, together, make up a bigger place or object in the world. 

5. Before you leave Overpass Turbo, let's save the stadium's **GeoJSON** representation so we can add it to a map later. Click the "Export" button and click "GeoJSON". Save that code as a file called `maracana_stadium.geojson`. 

6. On the [OpenStreetMap page for the Maracanã stadium](http://www.openstreetmap.org/relation/4587734) "relation" you'll see the same details that you saw in the info window. At this point we're only interested in the coordinates of the center of the stadium. Click the "x" button to the right of the text "Relation: Maracanã Stadium (4587734)". This closes the details pane, and changes the URL. Now, magically, the URL lists the longitude and latitude coordinates of approximately the center of the stadium. 

#### Finding bus stops near the stadium
1. We can now plug the coordinates from the URL of the OpenStreetMap page into the Transitland API to find bus stops within walking distance of the stadium. Transitland uses meters, so a walking distance of a quarter mile (less than a 5 minute walk) equals 402 meteres. Try it with [this link](https://transit.land/api/v1/stops?lon=-43.22919&lat=-22.91210&r=402): `https://transit.land/api/v1/stops?lon=-43.22919&lat=-22.91210&r=402`. 

2. That API call outputs a JSON array of bus stops that are within 402 meters of the center of the Maracanã stadium, which has a capacity of 78,838 people, according to the details on OpenStreetMap. The `stops` array has 7 stops. Each stop will tell you which routes serve that stop. None of these stops, however, are part of the city's BRT network of express buses that drive in exclusive lanes. The stadium is connected to the Metrô and SuperVia commuter trains, though, according to the [official map](http://www.cidadeolimpica.rio/wp-content/themes/cidadeolimpica/images/mapa-transporte_03.jpg) of Rio 2016 Olympics transit service.

3. Now that we have a JSON array of stops, we can move on to get this same data as a **GeoJSON**, so that we can add it to our map. The Transitland API makes that easy. In the API call, after `stops`, add `.geojson` so the API call [becomes](https://transit.land/api/v1/stops.geojson?lon=-43.22919&lat=-22.91210&r=402) `https://transit.land/api/v1/stops.geojson?lon=-43.22919&lat=-22.91210&r=402`. 

4. The next step would probably be to visualize all the routes that service these stops. There are two ways to get this: Ask the API for all the routes in a "bounding box" (map view) around the stadium, or to call the API several times, one per stop. We'll use the bounding box, or `bbox` method, which requires four geographic coordinates (the four corners of a box, or rectangle, around the stadium). Get those corners by [drawing a box around the stadium on this handy website](http://boundingbox.klokantech.com).

5. Once you've drawn the bounding box on Klokan Technologies's website, change the drop down menu under "Copy & Paste" in the lower left corner to say "CSV". This changes the list of coordinates to a format that you can add to a Transitland API call. The box I drew has these coordinates: `-43.2351922989,-22.9148100891,-43.2243347168,-22.909068428`. 

6. Add those coordinates to a Transitland API call to the `routes` endpoint, [like this](https://transit.land/api/v1/routes.geojson?bbox=-43.2351922989,-22.9148100891,-43.2243347168,-22.909068428): `https://transit.land/api/v1/routes.geojson?bbox=-43.2351922989,-22.9148100891,-43.2243347168,-22.909068428` (this returns 42 routes) If we really want just the routes served by the 7 stops within 1/4 mile of the stadium's center, we can use [this API call](https://transit.land/api/v1/routes?serves=s-75cm8m3b4z-avenidapresidentecastelobrancopróximoao217,s-75cm8kdx69-avenidamaracanapróximoao331,s-75cm8kfbxg-avenidamaracanapróximoao331,s-75cm8k8j6s-ruaprofessoreuricorabelopróximoao61,s-75cm8kgg7k-ruamatamachadopróximoao1,s-75cm8k379v-avenidamaracanapróximoao457,s-75cm8k3e12-avenidamaracanapróximoao467) which uses the `/routes?serves=[list of onestopIds for sotops]` endpoint. 

7. That call returns 35 routes. Again, we can get **GeoJSON** as a response, ready for mapping, by adding `.geojson`, [like this](https://transit.land/api/v1/routes.geojson?serves=s-75cm8m3b4z-avenidapresidentecastelobrancopróximoao217,s-75cm8kdx69-avenidamaracanapróximoao331,s-75cm8kfbxg-avenidamaracanapróximoao331,s-75cm8k8j6s-ruaprofessoreuricorabelopróximoao61,s-75cm8kgg7k-ruamatamachadopróximoao1,s-75cm8k379v-avenidamaracanapróximoao457,s-75cm8k3e12-avenidamaracanapróximoao467).

8. Now you have three **GeoJSON** files with which you can turn into a map, which I've embedded below. You can [grab the code](https://github.com/transitland/www-transit-land/blob/master/images/transit-in-rio-olympics/map.html) for that, too.

<iframe src="/images/transit-in-rio-olympics/map.html" height="400" width="100%" style="border:0;"></iframe>