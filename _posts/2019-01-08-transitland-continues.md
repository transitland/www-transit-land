---
layout: page
category: news
published: true
isThereTitle: true
title: "Transitland Continues in 2019"
---

**by [Drew Dara-Abrams](https://drew.dara-abrams.com)**

Just like a garden, open-source and open-data projects require continual tending. During 2018, we quietly maintained the core of Transitland's code and data. We also worked to put in place new partnerships and structures to support Transitland after the [shuttering of Mapzen](https://mapzen.com/blog/shutdown/). With 2019 beginning, we're glad to share more widely these plans for Transitland's ongoing tending and growth as an open platform.

<!-- more -->

## Core Support and Maintenance

We have a combination of organizations that are together supporting Transitland:

- Transitland's open-source code is moving to the [Linux Foundation](https://www.linuxfoundation.org/), allowing code use and contributions by any and all.
- Amazon Web Services continues to provide servers and access for Transitland's API users, thanks to awards from the [Earth on AWS Cloud Credits for Research Program](https://aws.amazon.com/earth/research-credits/).
- [Interline Technologies](https://www.interline.io/) (the firm that I am now a part of) has been donating resources to maintain code and is now also offering professional services and support to the companies that depend on Transitland APIs.
- [Trillium Solutions](https://trilliumtransit.com/), a team of experts at GTFS production, is helping to curate submissions to the Transitland Feed Registry and maintain existing records.

Previously Mapzen was a single "keystone" supporter for Transitland. Now we have a growing list of "tentpole" supporters for Transitland's code, servers, and data. Together in 2018, we quietly shifted Transitland on to a new generation of infrastructure, fixed pressing bugs, and gradually increased feed coverage. Transitland now aggregates data for 2,466 transit operators across 53 countries! Each month, the API handles 5 million queries!

<img src="/images/transitland-continues/transitland-operators-by-country-2019.png" alt="bar chart of Transitland operators by country" width="257" class="center-block" />

<p><em>Operators records in Transitland, by <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2">two-letter country code</a>.</em></p>

Now that Transitland again has a stable foundation of support, post Mapzen, we can return to feature development, major data additions, and community outreach.

## Growth and Development in 2019

We're working together with a series of partners and sponsors on new Transitland platform features and data additions in 2019. The list of topics tentatively includes:

- [GTFS-realtime support](https://www.interline.io/blog/transportation-research-board-funds-gtfs-realtime/)
- feed validation and best-practices report cards
- [feed merging](https://www.interline.io/blog/metropolitan-transportation-commission-selects-interline/)
- "Transitland Tiles" for bulk download and analysis
- website and documentation updates
- an experimental, distributed replacement to the Transitland Feed Registry

**Technical folks**: As you've likely guessed, many of these new experiments require a level of performance that Transitland's current mix of scripting languages cannot always provide. My colleague [Ian Rees](https://www.interline.io/about/), who is Interline's principal engineer, is leading an effort to re-architect key Transitland components in the high-performance Go programming language. Transitland's technical architecture has always had the goal of accessibility — now we're pursuing both accessibility _and_ performance.

**Professional users of Transitland APIs**: We've heard from many of you in 2018 that new functionality is nice, but that dependable service is even more important. Interline is now preparing professional services and support around the Transitland APIs. [Sign up for the Interline newsletter](http://eepurl.com/dmWHln) for related announcements or contact [info@interline.io](mailto:info@interline.io) with questions. Note that these commercial services supplement and do not change existing free access to the Transitland APIs.

**All Transitland Community Members**: Thanks for sticking with us over the past year. Despite all the work happening behind the scenes, we weren't able to share full news of Transitland's progress publicly. We're excited to return to our previous cadance of public announcements and conversations. Watch this website for updates. We also welcome questions and participation from potential partners in the above topics and others — please write to [hello@transit.land](mailto:hello@transit.land).

Here's to a new year of open transit data!

---

_Edit on 10 January 2019: adding a link to [a relevant Interline blog post](https://www.interline.io/blog/metropolitan-transportation-commission-selects-interline/)_.

_Edit on 24 January 2019: adding a link to [another relevant Interline blog post](https://www.interline.io/blog/transportation-research-board-funds-gtfs-realtime/)_.
