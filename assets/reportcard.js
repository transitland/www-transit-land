"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('reportcard/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'reportcard/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('reportcard/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	// import DS from 'ember-data';

	// export default DS.RESTAdapter.extend({
	// });

	exports['default'] = DS['default'].FixtureAdapter.extend({
		queryFixtures: function queryFixtures(records, query, type) {
			return records.filter(function (record) {
				for (var key in query) {
					if (!query.hasOwnProperty(key)) {
						continue;
					}
					var value = query[key];
					if (record[key] !== value) {
						return false;
					}
				}
				return true;
			});
		}
	});

});
define('reportcard/application/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('reportcard/application/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			// pass in params here for searching
			return this.store.findAll('operator');
			return Ember['default'].RSVP.hash({
				operators: this.store.findAll('operator'),
				feeds: this.store.findAll('feed')
			});
		}
	});

	// moving this out of the application route breaks the app
	// no feed or operator models are accessed

});
define('reportcard/application/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "reportcard/application/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        dom.setAttribute(el1,"align","center");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","title col-md-12 center-text");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("  REPORT CARD");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Mixed-use bus rapid transit congestion pricing placemaking. Big data smart cities urban growth boundary. Tactical guerrilla parklets. Built environment central business district business improvement district transit oriented development. Stakeholder engagement smart growth.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"src","images/2_taxi.png");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[10,0],[10,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('reportcard/components/country-count/component', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		operatorCountries: Ember['default'].computed.mapBy('operators', 'country'),
		uniqueOperatorCountries: Ember['default'].computed.uniq('operatorCountries')
	});

});
define('reportcard/components/country-count/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 6
          }
        },
        "moduleName": "reportcard/components/country-count/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        dom.setAttribute(el1,"align","center");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Agencies: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" Countries: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["content","operators.length",["loc",[null,[2,15],[2,35]]]],
        ["content","uniqueOperatorCountries.length",["loc",[null,[2,47],[2,81]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('reportcard/components/feed-table/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        sortProperties: ['name'],
        sortedOperators: Ember['default'].computed.sort('operators', 'sortProperties'),

        actions: {

            sortBy: function sortBy(property) {
                console.log("sortby");
                if (this.get('sortProperties')[0] === property) {
                    this.set('sortProperties', [property + ':desc']);
                } else {
                    this.set('sortProperties', [property]);
                }
                // this.set('model', this.get('arrangedContent'));  // set the model to the sorted array
            }
        }
    });

    // Fix this so that undefined gets sorted as well
    // Currently, when there isn't a feed,
    // the column won't when the bottom of the list is undefined.

});
define('reportcard/components/feed-table/feed-row/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'tr',
    requiresAttribution: (function () {
      return this.get('operator.feed.license_attribution') === 'not_required';
    }).property('operator.feed.license_attribution'),
    derivationAllowed: (function () {
      return this.get('operator.feed.license_derivation') === 'allowed';
    }).property('operator.feed.license_derivation'),
    redistributionAllowed: (function () {
      return this.get('operator.feed.license_redistribution') === 'allowed';
    }).property('operator.feed.license_redistribution')

  });

});
define('reportcard/components/feed-table/feed-row/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 1
            },
            "end": {
              "line": 4,
              "column": 1
            }
          },
          "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","operator.name",["loc",[null,[3,2],[3,19]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 2
            },
            "end": {
              "line": 14,
              "column": 2
            }
          },
          "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","images/1_airport.png");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 16,
              "column": 2
            }
          },
          "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"alt",": (");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 2
            },
            "end": {
              "line": 20,
              "column": 2
            }
          },
          "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","images/2_taxi.png");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 2
            },
            "end": {
              "line": 22,
              "column": 2
            }
          },
          "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"alt",": (");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 2
            },
            "end": {
              "line": 26,
              "column": 2
            }
          },
          "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","images/3_train.png");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child6 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 2
            },
            "end": {
              "line": 28,
              "column": 2
            }
          },
          "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"alt",": (");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("			\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child7 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 1
            },
            "end": {
              "line": 37,
              "column": 2
            }
          },
          "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","images/4_boat.png");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child8 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 37,
              "column": 2
            },
            "end": {
              "line": 41,
              "column": 1
            }
          },
          "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","images/5_bus.png");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","images/6_park.png");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("td");
          var el2 = dom.createElement("img");
          dom.setAttribute(el2,"src","images/7_gas_station.png");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [3, 1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          return morphs;
        },
        statements: [
          ["attribute","href",["get","operator.feed.url",[]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 43,
            "column": 5
          }
        },
        "moduleName": "reportcard/components/feed-table/feed-row/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("td");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" the icon used depends on license details ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("		\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("td");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" either single upload icon or two or three icons used here ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("table");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [6, 3]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),0,0);
        morphs[3] = dom.createMorphAt(element1,1,1);
        morphs[4] = dom.createMorphAt(element1,3,3);
        morphs[5] = dom.createMorphAt(element1,5,5);
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [8, 3]),1,1);
        return morphs;
      },
      statements: [
        ["block","link-to",["operator",["get","operator",["loc",[null,[2,23],[2,31]]]]],[],0,null,["loc",[null,[2,1],[4,13]]]],
        ["content","operator.municipality",["loc",[null,[6,4],[6,29]]]],
        ["content","operator.feed.license_name",["loc",[null,[7,4],[7,34]]]],
        ["block","if",[["get","requiresAttribution",["loc",[null,[12,8],[12,27]]]]],[],1,2,["loc",[null,[12,2],[16,9]]]],
        ["block","if",[["get","derivationAllowed",["loc",[null,[18,8],[18,25]]]]],[],3,4,["loc",[null,[18,2],[22,9]]]],
        ["block","if",[["get","redistributionAllowed",["loc",[null,[24,8],[24,29]]]]],[],5,6,["loc",[null,[24,2],[28,9]]]],
        ["block","unless",[["get","operator.feed",["loc",[null,[35,11],[35,24]]]]],[],7,8,["loc",[null,[35,1],[41,12]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8]
    };
  }()));

});
define('reportcard/components/feed-table/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 4
            },
            "end": {
              "line": 14,
              "column": 3
            }
          },
          "moduleName": "reportcard/components/feed-table/template.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  	  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","feed-table/feed-row",[],["operator",["subexpr","@mut",[["get","operator",["loc",[null,[13,36],[13,44]]]]],[],[]]],["loc",[null,[13,5],[13,46]]]]
        ],
        locals: ["operator"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "reportcard/components/feed-table/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","table table-striped");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Agency Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Region");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("License");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("License Details");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Links");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element1, [5]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createElementMorph(element4);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        return morphs;
      },
      statements: [
        ["element","action",["sortBy","name"],[],["loc",[null,[4,10],[4,36]]]],
        ["element","action",["sortBy","municipality"],[],["loc",[null,[5,10],[5,44]]]],
        ["element","action",["sortBy","feed.license_name"],[],["loc",[null,[6,10],[6,49]]]],
        ["block","each",[["get","sortedOperators",["loc",[null,[12,24],[12,39]]]]],[],0,null,["loc",[null,[12,4],[14,12]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('reportcard/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('reportcard/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('reportcard/feed/model', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	var Feed = DS['default'].Model.extend({
		operator: DS['default'].belongsTo('operator', { async: true }),
		onestop_id: DS['default'].attr('string'),
		url: DS['default'].attr('string'),
		feed_format: DS['default'].attr('string'),
		license_name: DS['default'].attr('string'),
		license_url: DS['default'].attr('string'),
		license_attribution: DS['default'].attr('string'),
		license_derivation: DS['default'].attr('string'),
		license_redistribution: DS['default'].attr('string'),
		last_sha1: DS['default'].attr('string'),
		last_fetched_at: DS['default'].attr('string'),
		last_imported_at: DS['default'].attr('string'),
		created_at: DS['default'].attr('string'),
		updated_at: DS['default'].attr('string')
	});

	Feed.reopenClass({
		FIXTURES: [{
			id: 1,
			operator: 1,
			onestop_id: "f-9q9-caltrain",
			url: "http://www.caltrain.com/Assets/GTFS/caltrain/GTFS-Caltrain-Devs.zip",
			feed_format: "gtfs",
			// operator_onestop_ids_in_feed: ["o-9q9-caltrain"],
			license_name: "Some License",
			license_url: "http://www.caltrain.com/developer/Developer_License_Agreement_and_Privacy_Policy.html",
			license_attribution: "required",
			license_derivation: "allowed",
			license_redistribution: "allowed",
			last_sha1: "e4ec3bd51eb4efca8d6cee33fe332f9aaebde2da",
			last_fetched_at: "2015-07-16T22:15:31.032Z",
			last_imported_at: "2015-07-16T22:15:31.032Z",
			created_at: "2015-07-16T22:15:31.032Z",
			updated_at: "2015-07-16T22:15:31.032Z"
		}, {
			id: 2,
			operator: 2,
			onestop_id: "f-9q8y-sanfranciscomunicipaltransportationagency",
			url: "http://archives.sfmta.com/transitdata/google_transit.zip",
			feed_format: "gtfs",
			// operator_onestop_ids_in_feed: ["o-9q8y-sanfranciscomunicipaltransportationagency"],
			license_name: "Some Other License",
			license_url: "http://www.sfmta.com/about-sfmta/reports/gtfs-transit-data",
			license_attribution: "not_required",
			license_derivation: "prohibited",
			license_redistribution: "prohibited",
			last_sha1: "e4ec3bd51eb4efca8d6cee33fe332f9aaebde2da",
			last_fetched_at: "2015-07-13T22:15:31.032Z",
			last_imported_at: "2015-07-13T22:15:31.032Z",
			created_at: "2015-06-16T22:15:31.032Z",
			updated_at: "2015-06-16T22:15:31.032Z"
		}]
	});

	exports['default'] = Feed;

});
define('reportcard/feed/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('reportcard/feed/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 0
          }
        },
        "moduleName": "reportcard/feed/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('reportcard/feeds/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({
		filterAttribute: 'feed.license_attribution',
		filterValue: 'required',
		// filteredOperators: Ember.computed.filterBy('model', filterAttribute, 'not_required'),
		filteredOperators: (function () {
			return this.model.filterBy('feed.license_attribution', 'required');
			// return this.model.filterBy(this.get('filterAttribute'), this.get('filterValue'));
		}).property('filterAttribute'),
		// Ember.computed.filter('model', function(operator, index, array) {
		// console.log(operator.feed);
		// return t22222 rue;
		// return operator.feed.license_attribution == 'required';
		// if (this.get('filterAttribute') != null) {
		// 	return operator.get(this.get('filterAttribute')) ==  this.get('filterValue');
		// } else {
		// 	return true;
		// }
		// }),
		actions: {
			filterBy: function filterBy(attribute, value) {
				console.log(attribute + ' ' + value);
				this.set('filterAttribute', attribute);
				this.set('filterValue', value);
			}
		}

	});

});
define('reportcard/feeds/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		// model: function() {
		// 	return this.store.findAll('operator');
		// }
	});

});
define('reportcard/feeds/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 7
          }
        },
        "moduleName": "reportcard/feeds/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"containter\" align=\"center\">\n    	<h3>Agencies: {{model.length}} Countries: {{operatorCountries.length}} Unique Countries: {{uniqueOperatorCountries.length}}</h3>\n </div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"container\" align=\"right\">\n	<button>License</button>\n	<button>License Details</button>\n\n<div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" {{action \"filterBy\" \"feed.license_attribution\" \"required\" }}> Attribution required\n    </label>\n</div>\n	\n</div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("main");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" {{feed-table operators=filteredOperators}} ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,3,3,contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [7]),3,3);
        return morphs;
      },
      statements: [
        ["inline","country-count",[],["operators",["subexpr","@mut",[["get","model",["loc",[null,[8,27],[8,32]]]]],[],[]]],["loc",[null,[8,1],[8,34]]]],
        ["inline","feed-table",[],["operators",["subexpr","@mut",[["get","model",["loc",[null,[25,24],[25,29]]]]],[],[]]],["loc",[null,[25,1],[25,31]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('reportcard/helpers/ago', ['exports', 'ember-moment/helpers/deprecated/ago', 'ember-moment/utils/make-bound-helper'], function (exports, deprecatedAgo, makeBoundHelper) {

	'use strict';

	exports['default'] = makeBoundHelper['default'](deprecatedAgo['default']);

});
define('reportcard/helpers/duration', ['exports', 'ember-moment/helpers/deprecated/duration', 'ember-moment/utils/make-bound-helper'], function (exports, durationHelper, makeBoundHelper) {

	'use strict';

	exports['default'] = makeBoundHelper['default'](durationHelper['default']);

});
define('reportcard/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration', 'ember-moment/utils/make-bound-helper'], function (exports, durationHelper, makeBoundHelper) {

	'use strict';

	exports['default'] = makeBoundHelper['default'](durationHelper['default']);

});
define('reportcard/helpers/moment-format', ['exports', 'ember', 'ember-moment/helpers/moment-format', 'ember-moment/utils/make-bound-helper', 'reportcard/config/environment'], function (exports, Ember, momentHelper, makeBoundHelper, config) {

	'use strict';

	var computeFn = momentHelper['default'](Ember['default'].get(config['default'], 'moment.outputFormat'));

	exports['default'] = makeBoundHelper['default'](computeFn);

	exports.computeFn = computeFn;

});
define('reportcard/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now', 'ember-moment/utils/make-bound-helper'], function (exports, momentFromNowHelper, makeBoundHelper) {

	'use strict';

	exports['default'] = makeBoundHelper['default'](momentFromNowHelper['default']);

});
define('reportcard/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now', 'ember-moment/utils/make-bound-helper'], function (exports, momentToNowHelper, makeBoundHelper) {

	'use strict';

	exports['default'] = makeBoundHelper['default'](momentToNowHelper['default']);

});
define('reportcard/helpers/moment', ['exports', 'ember-moment/helpers/deprecated/moment', 'ember-moment/utils/make-bound-helper'], function (exports, momentHelper, makeBoundHelper) {

	'use strict';

	exports['default'] = makeBoundHelper['default'](momentHelper['default']);

});
define('reportcard/initializers/export-application-global', ['exports', 'ember', 'reportcard/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('reportcard/instance-initializers/app-version', ['exports', 'reportcard/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('reportcard/operator/model', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	var Operator = DS['default'].Model.extend({
		feed: DS['default'].belongsTo('feed', { async: true }),
		identifiers: DS['default'].attr(),
		name: DS['default'].attr('string'),
		short_name: DS['default'].attr('string'),
		onestop_id: DS['default'].attr('string'),
		country: DS['default'].attr('string'),
		state: DS['default'].attr('string'),
		municipality: DS['default'].attr('string'),
		type: DS['default'].attr('string'),
		website: DS['default'].attr('string'),
		timezone: DS['default'].attr('string'),
		created_at: DS['default'].attr('date'),
		updated_at: DS['default'].attr('date')
	});

	Operator.reopenClass({
		FIXTURES: [{
			id: 1,
			feed: 1,
			identifiers: ["gtfs://f-9q9-caltrain/o/caltrain-ca-us", "usntd://9134"],
			name: "Caltrain",
			short_name: null,
			onestop_id: "o-9q9-caltrain",
			country: "USA",
			state: "CA",
			municipality: "San Francisco Bay Area",
			geometry: {
				type: "Polygon",
				coordinates: [[[-122.412076, 37.631108], [-122.386832, 37.599797], [-122.232, 37.486101], [-121.566225, 37.003485], [-121.566088, 37.003538], [-121.610049, 37.085225], [-121.610936, 37.086653], [-121.650244, 37.129363], [-122.394935, 37.776348], [-122.394992, 37.77639], [-122.412076, 37.631108]]] },
			website: "http://www.caltrain.com",
			timezone: "America/Los_Angeles",
			created_at: "2015-07-16T22:43:15.724Z",
			updated_at: "2015-07-16T22:43:15.724Z"
		}, {
			id: 2,
			feed: 2,
			identifiers: ["gtfs://f-9q8y-sanfranciscomunicipaltransportationagency/o/SFMTA", "usntd://9015"],
			name: "San Francisco Municipal Transportation Agency",
			short_name: "SFMTA",
			onestop_id: "o-9q8y-sanfranciscomunicipaltransportationagency",
			country: "USA",
			state: "CA",
			municipality: "San Francisco Bay Area",
			geometry: {
				type: "Polygon",
				coordinates: [[[-122.53867, 37.83238], [-122.506821, 37.735482], [-122.500028, 37.718996], [-122.499913, 37.718738], [-122.49766, 37.71677], [-122.485294, 37.709312], [-122.48498, 37.70913], [-122.469273, 37.705764], [-122.413084, 37.706296], [-122.39422, 37.70898], [-122.392836, 37.709804], [-122.365447, 37.72792], [-122.36633, 37.820001], [-122.371964, 37.828311], [-122.373477, 37.82982], [-122.48383, 37.83592], [-122.50214, 37.836443], [-122.53867, 37.83238]]] },
			website: "http://www.sfmta.com",
			timezone: "America/Los_Angeles",
			created_at: "2015-07-20T23:56:44.730Z",
			updated_at: "2015-07-20T23:56:44.730Z"
		}, {
			id: 3,
			feed: null,
			identifiers: ["usntd://0008"],
			name: "Tri-County Metropolitan Transportation District of Oregon",
			short_name: "TriMet",
			onestop_id: "o-c20-trimet",
			country: "USA",
			state: "OR",
			municipality: "Portland",
			website: "http://www.trimet.org",
			timezone: "America/Los_Angeles",
			created_at: "2015-05-20T23:56:44.730Z",
			updated_at: "2015-05-20T23:56:44.730Z"
		}]

	});

	exports['default'] = Operator;

});
define('reportcard/operator/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		//  model: function(params) {
		// 	return this.store.find('operator', params['operator_id']);
		// 	// return this.store.queryFixtures(records, 'operator', params['name']);
		// }
	});

});
define('reportcard/operator/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.3",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "reportcard/operator/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","btn btn-default");
          dom.setAttribute(el1,"type","button");
          var el2 = dom.createTextNode("Return to All Feeds");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.3",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 0
          }
        },
        "moduleName": "reportcard/operator/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-container operator-page");
        dom.setAttribute(el1,"align","center");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-container operator-page");
        dom.setAttribute(el1,"align","left");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Operator detail for: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("identifiers: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("name: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("short_name: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("onestop_id: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("country: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("state: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("municipality: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("type: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("website: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("timezone: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("created_at: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("updated_at: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Feed detail for: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("operator: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("onestop_id: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("url: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("feed_format: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("license_name: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("license_url: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("license_attribution: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("license_derivation: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("license_redistribution: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("last_sha1: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("last_fetched_at: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("last_imported_at: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("created_at: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("updated_at: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [3, 1]);
        var element2 = dom.childAt(element0, [7, 1]);
        var morphs = new Array(29);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [1]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
        morphs[4] = dom.createMorphAt(dom.childAt(element1, [5]),1,1);
        morphs[5] = dom.createMorphAt(dom.childAt(element1, [7]),1,1);
        morphs[6] = dom.createMorphAt(dom.childAt(element1, [9]),1,1);
        morphs[7] = dom.createMorphAt(dom.childAt(element1, [11]),1,1);
        morphs[8] = dom.createMorphAt(dom.childAt(element1, [13]),1,1);
        morphs[9] = dom.createMorphAt(dom.childAt(element1, [15]),1,1);
        morphs[10] = dom.createMorphAt(dom.childAt(element1, [17]),1,1);
        morphs[11] = dom.createMorphAt(dom.childAt(element1, [19]),1,1);
        morphs[12] = dom.createMorphAt(dom.childAt(element1, [21]),1,1);
        morphs[13] = dom.createMorphAt(dom.childAt(element1, [23]),1,1);
        morphs[14] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
        morphs[15] = dom.createMorphAt(dom.childAt(element2, [1]),1,1);
        morphs[16] = dom.createMorphAt(dom.childAt(element2, [3]),1,1);
        morphs[17] = dom.createMorphAt(dom.childAt(element2, [5]),1,1);
        morphs[18] = dom.createMorphAt(dom.childAt(element2, [7]),1,1);
        morphs[19] = dom.createMorphAt(dom.childAt(element2, [9]),1,1);
        morphs[20] = dom.createMorphAt(dom.childAt(element2, [11]),1,1);
        morphs[21] = dom.createMorphAt(dom.childAt(element2, [13]),1,1);
        morphs[22] = dom.createMorphAt(dom.childAt(element2, [15]),1,1);
        morphs[23] = dom.createMorphAt(dom.childAt(element2, [17]),1,1);
        morphs[24] = dom.createMorphAt(dom.childAt(element2, [19]),1,1);
        morphs[25] = dom.createMorphAt(dom.childAt(element2, [21]),1,1);
        morphs[26] = dom.createMorphAt(dom.childAt(element2, [23]),1,1);
        morphs[27] = dom.createMorphAt(dom.childAt(element2, [25]),1,1);
        morphs[28] = dom.createMorphAt(dom.childAt(element2, [27]),1,1);
        return morphs;
      },
      statements: [
        ["block","link-to",["feeds"],[],0,null,["loc",[null,[2,0],[4,12]]]],
        ["content","model.name",["loc",[null,[7,26],[7,40]]]],
        ["content","model.identifiers",["loc",[null,[10,20],[10,41]]]],
        ["content","model.name",["loc",[null,[11,13],[11,27]]]],
        ["content","model.short_name",["loc",[null,[12,19],[12,39]]]],
        ["content","model.onestop_id",["loc",[null,[13,19],[13,39]]]],
        ["content","model.country",["loc",[null,[14,16],[14,33]]]],
        ["content","model.state",["loc",[null,[15,14],[15,29]]]],
        ["content","model.minicipality",["loc",[null,[16,21],[16,43]]]],
        ["content","model.type",["loc",[null,[17,13],[17,27]]]],
        ["content","model.website",["loc",[null,[18,16],[18,33]]]],
        ["content","model.timezone",["loc",[null,[19,17],[19,35]]]],
        ["content","model.created_at",["loc",[null,[20,19],[20,39]]]],
        ["content","model.updated_at",["loc",[null,[21,19],[21,39]]]],
        ["content","model.name",["loc",[null,[24,22],[24,36]]]],
        ["content","model.feed.operator",["loc",[null,[27,17],[27,40]]]],
        ["content","model.feed.onestop_id",["loc",[null,[28,19],[28,44]]]],
        ["content","model.feed.url",["loc",[null,[29,12],[29,30]]]],
        ["content","model.feed.feed_format",["loc",[null,[30,20],[30,46]]]],
        ["content","model.feed.license_name",["loc",[null,[31,21],[31,48]]]],
        ["content","model.feed.license_url",["loc",[null,[32,20],[32,46]]]],
        ["content","model.feed.license_attribution",["loc",[null,[33,28],[33,62]]]],
        ["content","model.feed.license_derivation",["loc",[null,[34,27],[34,60]]]],
        ["content","model.feed.license_redistribution",["loc",[null,[35,31],[35,68]]]],
        ["content","model.feed.last_sha1",["loc",[null,[36,18],[36,42]]]],
        ["content","model.feed.last_fetched_at",["loc",[null,[37,24],[37,54]]]],
        ["content","model.feed.last_imported_at",["loc",[null,[38,25],[38,56]]]],
        ["content","model.feed.created_at",["loc",[null,[39,19],[39,44]]]],
        ["content","model.feed.updated_at",["loc",[null,[40,19],[40,44]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('reportcard/router', ['exports', 'ember', 'reportcard/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('operator', { path: "/operator/:operator_id" });
    this.route('feed');
    this.route('feeds', { path: "/" });
  });

  exports['default'] = Router;

});
define('reportcard/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('reportcard/tests/application/adapter.jshint', function () {

  'use strict';

  module('JSHint - application');
  test('application/adapter.js should pass jshint', function() { 
    ok(false, 'application/adapter.js should pass jshint.\napplication/adapter.js: line 10, col 45, \'type\' is defined but never used.\n\n1 error'); 
  });

});
define('reportcard/tests/application/controller.jshint', function () {

  'use strict';

  module('JSHint - application');
  test('application/controller.js should pass jshint', function() { 
    ok(true, 'application/controller.js should pass jshint.'); 
  });

});
define('reportcard/tests/application/route.jshint', function () {

  'use strict';

  module('JSHint - application');
  test('application/route.js should pass jshint', function() { 
    ok(false, 'application/route.js should pass jshint.\napplication/route.js: line 7, col 9, Unreachable \'return\' after \'return\'.\n\n1 error'); 
  });

});
define('reportcard/tests/components/country-count/component.jshint', function () {

  'use strict';

  module('JSHint - components/country-count');
  test('components/country-count/component.js should pass jshint', function() { 
    ok(true, 'components/country-count/component.js should pass jshint.'); 
  });

});
define('reportcard/tests/components/feed-table/component.jshint', function () {

  'use strict';

  module('JSHint - components/feed-table');
  test('components/feed-table/component.js should pass jshint', function() { 
    ok(true, 'components/feed-table/component.js should pass jshint.'); 
  });

});
define('reportcard/tests/components/feed-table/feed-row/component.jshint', function () {

  'use strict';

  module('JSHint - components/feed-table/feed-row');
  test('components/feed-table/feed-row/component.js should pass jshint', function() { 
    ok(true, 'components/feed-table/feed-row/component.js should pass jshint.'); 
  });

});
define('reportcard/tests/feed/model.jshint', function () {

  'use strict';

  module('JSHint - feed');
  test('feed/model.js should pass jshint', function() { 
    ok(true, 'feed/model.js should pass jshint.'); 
  });

});
define('reportcard/tests/feed/route.jshint', function () {

  'use strict';

  module('JSHint - feed');
  test('feed/route.js should pass jshint', function() { 
    ok(true, 'feed/route.js should pass jshint.'); 
  });

});
define('reportcard/tests/feeds/controller.jshint', function () {

  'use strict';

  module('JSHint - feeds');
  test('feeds/controller.js should pass jshint', function() { 
    ok(true, 'feeds/controller.js should pass jshint.'); 
  });

});
define('reportcard/tests/feeds/route.jshint', function () {

  'use strict';

  module('JSHint - feeds');
  test('feeds/route.js should pass jshint', function() { 
    ok(true, 'feeds/route.js should pass jshint.'); 
  });

});
define('reportcard/tests/helpers/resolver', ['exports', 'ember/resolver', 'reportcard/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('reportcard/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('reportcard/tests/helpers/start-app', ['exports', 'ember', 'reportcard/app', 'reportcard/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('reportcard/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('reportcard/tests/integration/components/country-count/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('country-count', 'Integration | Component | country count', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'country-count', ['loc', [null, [1, 0], [1, 17]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'country-count', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('reportcard/tests/integration/components/country-count/component-test.jshint', function () {

  'use strict';

  module('JSHint - integration/components/country-count');
  test('integration/components/country-count/component-test.js should pass jshint', function() { 
    ok(true, 'integration/components/country-count/component-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/integration/components/feed-table/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('feed-table', 'Integration | Component | feed table', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'feed-table', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'feed-table', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('reportcard/tests/integration/components/feed-table/component-test.jshint', function () {

  'use strict';

  module('JSHint - integration/components/feed-table');
  test('integration/components/feed-table/component-test.js should pass jshint', function() { 
    ok(true, 'integration/components/feed-table/component-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/integration/components/feed-table/feed-row/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('feed-table/feed-row', 'Integration | Component | feed table/feed row', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 23
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'feed-table/feed-row', ['loc', [null, [1, 0], [1, 23]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'revision': 'Ember@1.13.3',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'revision': 'Ember@1.13.3',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'feed-table/feed-row', [], [], 0, null, ['loc', [null, [2, 4], [4, 28]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('reportcard/tests/integration/components/feed-table/feed-row/component-test.jshint', function () {

  'use strict';

  module('JSHint - integration/components/feed-table/feed-row');
  test('integration/components/feed-table/feed-row/component-test.js should pass jshint', function() { 
    ok(true, 'integration/components/feed-table/feed-row/component-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/operator/model.jshint', function () {

  'use strict';

  module('JSHint - operator');
  test('operator/model.js should pass jshint', function() { 
    ok(true, 'operator/model.js should pass jshint.'); 
  });

});
define('reportcard/tests/operator/route.jshint', function () {

  'use strict';

  module('JSHint - operator');
  test('operator/route.js should pass jshint', function() { 
    ok(true, 'operator/route.js should pass jshint.'); 
  });

});
define('reportcard/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('reportcard/tests/test-helper', ['reportcard/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('reportcard/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('reportcard/tests/unit/application/adapter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('reportcard/tests/unit/application/adapter-test.jshint', function () {

  'use strict';

  module('JSHint - unit/application');
  test('unit/application/adapter-test.js should pass jshint', function() { 
    ok(true, 'unit/application/adapter-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/unit/application/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('reportcard/tests/unit/application/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/application');
  test('unit/application/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/application/controller-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/unit/application/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('reportcard/tests/unit/application/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/application');
  test('unit/application/route-test.js should pass jshint', function() { 
    ok(true, 'unit/application/route-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/unit/feed/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('feed', 'Unit | Model | feed', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('reportcard/tests/unit/feed/model-test.jshint', function () {

  'use strict';

  module('JSHint - unit/feed');
  test('unit/feed/model-test.js should pass jshint', function() { 
    ok(true, 'unit/feed/model-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/unit/feed/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:feed', 'Unit | Route | feed', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('reportcard/tests/unit/feed/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/feed');
  test('unit/feed/route-test.js should pass jshint', function() { 
    ok(true, 'unit/feed/route-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/unit/feeds/controller-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('controller:feeds', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

});
define('reportcard/tests/unit/feeds/controller-test.jshint', function () {

  'use strict';

  module('JSHint - unit/feeds');
  test('unit/feeds/controller-test.js should pass jshint', function() { 
    ok(true, 'unit/feeds/controller-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/unit/feeds/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:feeds', 'Unit | Route | feeds', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('reportcard/tests/unit/feeds/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/feeds');
  test('unit/feeds/route-test.js should pass jshint', function() { 
    ok(true, 'unit/feeds/route-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/unit/operator/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('operator', 'Unit | Model | operator', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('reportcard/tests/unit/operator/model-test.jshint', function () {

  'use strict';

  module('JSHint - unit/operator');
  test('unit/operator/model-test.js should pass jshint', function() { 
    ok(true, 'unit/operator/model-test.js should pass jshint.'); 
  });

});
define('reportcard/tests/unit/operator/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:operator', 'Unit | Route | operator', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('reportcard/tests/unit/operator/route-test.jshint', function () {

  'use strict';

  module('JSHint - unit/operator');
  test('unit/operator/route-test.js should pass jshint', function() { 
    ok(true, 'unit/operator/route-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('reportcard/config/environment', ['ember'], function(Ember) {
  var prefix = 'reportcard';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("reportcard/tests/test-helper");
} else {
  require("reportcard/app")["default"].create({"name":"reportcard","version":"0.0.0+f34d9209"});
}

/* jshint ignore:end */
//# sourceMappingURL=reportcard.map