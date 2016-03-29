---
title: Add a feed to the Transitland Feed Registry
layout: documentation
---

[Transitland](https://transit.land) brings together many sources of transit data to build a [directory of operators and feeds](https://transit.land/feed-registry/) that can be edited by transit enthusiasts and developers. Your contributions can help expand Transitland's coverage throughout the world.

This directory is known as the [Transitland Feed Registry](https://transit.land/feed-registry/). Feed submissions are welcomed from everyone; you need not represent a transit organization! To suggest a feed, only need to know the link to it, and any additional information is optional.

Here is a video showing the process, which is also described below.
<p>
<iframe src="https://player.vimeo.com/video/155911567" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</p>

## Find the link to the feed

The first step in contributing is to open the submission form and find the link to the transit feed. Transitland uses the [General Transit Feed Specification](https://developers.google.com/transit/gtfs/), which is a common way of organizing transit schedules, routes, and associated content. A GTFS feed consists of a .zip file that contains a series of specific text files with this information.

Your link should point to a .zip file on the web that is hosted by a transit operator or other authoritative source. The feed cannot behind a firewall, nor require a password or other form of authentication to access it. If you need to get the link from a button that normally prompts you to download the .zip file, try right-clicking the button and copying that link address. After this feed is part of the Feed Registry, the Transitland servers will periodically check this URL for any updates to the contents of the feed.

1. Navigate to the [Feed Registry](https://transit.land/feed-registry/) and click Add a feed. You can also start directly from https://transit.land/feed-registry/feeds/new.
2. Find the URL for the GTFS feed you want to submit. It should start with `http://` or `https://` and end with a `.zip` file extension.
3. Paste the address into the text box.
4. Click Next.

### Troubleshoot feed status messages

When you add the URL, Transitland checks that address and validates the contents of the file. If your GTFS feed cannot be parsed for some reason, you will receive a message and be unable to continue adding this feed. If you need help, you can send an email to transitland@mapzen.com, or if you are familiar with GitHub, you can post an issue in the [transitland](https://github.com/transitland/transitland) repository.

If Transitland has difficulty accessing the address, check the URL to make sure you did not enter a typographic error and try again. Otherwise, there could be a problem on the transit operator's side, such as the server or network being offline temporarily. You may also see a [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) that may give more information about the problem. If your address is correct and the error persists, you can try checking with the transit operator.

In some cases, Transitland can download the .zip, but there is something unusual about its formatting. Although GTFS has a [defined set of standards](https://developers.google.com/transit/gtfs/reference), sometimes tables or text files are missing, for example. Note that GTFS-realtime, which is used to share real-time updates about transit, is not currently supported in Transitland.

## Choose the transit operators in the feed

Some feeds have one operator, while others contain multiple operators. For example, within a metro area, the feed may aggregate different transit types, such as light rail lines, buses, and ferry services. In other cases, smaller operators may combine their data into a feed serving a larger region.

You need to include at least one operator from the feed, and then add any supplemental information about the operator. Some details can be extracted from the .zip file automatically, but it is helpful if you can add as much as you know about the location and operator. Because GTFS feeds do not include any general location data, such as city or country, adding it here helps organize and sort the feeds on the Transitland website.

1. If the feed contains data from more than one operator, choose which ones to include.
2. Review the name of the operator and any other information that was filled in automatically.
3. Add the location information. If the operator serves multiple cities and is spread across multiple regions, you can enter the operator's headquarters.
4. Click Next.

## Identify the license for the feed

Many feeds provide licenses or have terms that apply to their use or redistribution. This part of the process of adding a feed can be tricky, so include as much information about the license as you can. Depending on your role and relationship to the operator, you may not feel comfortable answering all of the license questions, and this is okay. For example, an agency official is likely to know more about the license terms than community member who submits a feed.

The options for this part of the submission process are determined by how much information you are able to provide.

1. Determine whether there are any terms associated with the feed, and click the appropriate response. If you choose no, you are ready to click Next.
2. If you know more about the license, provide as much information as you are able regarding the name of the license and the website where you found it.
3. If you are able to understand the terms of the license, provide details on whether the feed requires attribution, others can create products derived from the feed, and if the feed can only be redistributed in its original state or if modification is allowed.
4. Click Next.

## Submit the feed

At this point, you have provided information about the feed, its operators and locations, and licensing, and are almost done with the submission process. If you provide your contact information, you will be notified when your feed has been added to the Feed Registry, or if there are any issues along the way.

1. Optionally, provide your contact information.
2. Agree to the contributor agreement.
3. Click Submit feed.

If the submission was successful, you will receive a confirmation message. As soon as the Transitland team reviews your feed, you will see its operators listed in the [Feed Registry](https://transit.land/feed-registry/), and it will be accessible in the Transitland [Playground](https://transit.land/playground/) and [Datastore API](https://github.com/transitland/transitland-datastore).

After that, the details of the feed will be imported into the Transitland Datastore. This will make available the stops, routes, and schedule data that are contained in the feed. This import process may take a few days to complete. In some cases, there are issues in the import process that could delay or make the feed unacceptable for posting.

### Technical details about the feed submission process

From a technical standpoint, here is the workflow that happens behind the scenes.

1. You start the [process to add a feed](http://.transit.land/feed-registry/feeds/new). When you enter the GTFS feed's address, the Datastore FeedInfo worker fetches and parses GTFS feed. This populates the operators and some other information on the later steps of the form.
2. You continue through the process and submit the feed. You will receive an email notification confirming your submission, if you provided your contact information. The Feed Registry submits a changeset to the Datastore API that contains feed and operator models.
3. Transitland staff review the changeset, potentially edit it, and apply it using Dispatcher UI that hits Datastore API. This results in feed and operator models in Datastore API, Feed Registry, and Playground.
4. Once a day, the Datastore FeedFetcher worker checks for new feed versions, and downloads and adds FeedVersion model to API.
5. Once a week, Transitland staff manually run an import of a feed version using Dispatcher and API with the the FeedEater worker. This results in the stops, routes, and schedule model being in the API and Playground, and also able being ready for use in Mapzen's Turn-by-Turn navigation service. If you provided contact information, you will be notified that your feed is part of the Feed Registry after the first time the import process is completed.
