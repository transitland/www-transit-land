---
title: Dispatcher
layout: documentation
---

**[Transitland Dispatcher](/dispatcher)** is an interface used to administer the [Transitland Datastore](/how-it-works/datastore/), review and apply [changesets](/how-it-works/datastore/changesets.html), and monitor [feed fetching and importing](/how-it-works/datastore/feeds).

Anyone can view the Dispatcher, but to edit changesets and trigger feed imports requires administrative credentials. (Note, administrative credentials are also required to view the names and e-mail addresses of contributors.) For the time being, only Mapzen staff have these credentials. Over time, we're aiming to share oversight of the Datastore with [more participants](/participate).

### About the Dispatcher application

The Dispatcher is written in JavaScript using the [Ember](http://www.emberjs.com) framework. View Dispatcher code and report bugs [on GitHub](http://github.com/transitland/dispatcher).
