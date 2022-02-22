module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		0: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "vue-tab-route.common." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1,"2":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"1":"4971e301","2":"bfd86e31"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_tab_route"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_tab_route"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1185":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("da5f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1b62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ core; });

// CONCATENATED MODULE: ./src/mixins/core.js
/* harmony default export */ var core = ({
	data() {
		return {
			core: null,
			store: null
		}
	},
	created() {
		this.tabRouterCore = this.$tabRouter.core
		this.tabRouterStore = this.$tabRouter.core.store
	},
	computed: {
		routes() {
			return this.tabRouterStore.routes
		},
		pages() {
			return this.tabRouterStore.pages
		},
		currentPage() {
			return this.tabRouterStore.currentPage
		}
	},
	methods: {
		errorHandler(error) {
			this.tabRouterCore.errorHandler(`[${this.$options.name}] ${error}`)
		}
	}
});

// CONCATENATED MODULE: ./src/mixins/index.js




/* harmony default export */ var mixins = ({
	core: core
});


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "da5f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f01d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/Core/Route/index.js
class Route {
	constructor({
		title = '',
		name = '',
		path = '',
		component,
		meta = {}
	} = {}) {
		this.defaultTitle = title
		this.name = name
		this.path = path
		this.component = component
		this.meta = meta
	}
}

/* harmony default export */ var Core_Route = (Route);

// CONCATENATED MODULE: ./src/utils/typeOf/index.js
const typeOf = function (param) {
	return Object.prototype.toString.call(param).match(/\s+(\w+)/)[1]
}

/* harmony default export */ var utils_typeOf = (typeOf);

// CONCATENATED MODULE: ./src/utils/deepClone/index.js


const deepClone = function (param) {
	let type = utils_typeOf(param),
		newParam

	if (type === 'Array') {
		newParam = []
	} else if (type === 'Object') {
		newParam = {}
	} else {
		return param
	}

	if (type === 'Array') {
		for (let index = 0, length = param.length; index < length; index++) {
			newParam.push(deepClone(param[index]))
		}
		return newParam
	} else if (type === 'Object') {
		for (const key in param) {
			newParam[key] = deepClone(param[key])
		}
		return newParam
	}
}

/* harmony default export */ var utils_deepClone = (deepClone);

// CONCATENATED MODULE: ./src/utils/deepCompare/index.js
const deepCompare = function (origin, target) {
	if (typeof target === 'object') {
		if (typeof origin !== 'object') return false
		if (Object.keys(origin).length !== Object.keys(target).length) return false
		for (let key in target) {
			if (!deepCompare(origin[key], target[key])) {
				return false
			}
		}
		return true
	} else return origin === target
}

/* harmony default export */ var utils_deepCompare = (deepCompare);

// CONCATENATED MODULE: ./src/utils/px2number/index.js
/* harmony default export */ var px2number = (function (str) {
	let number = parseFloat(str)
	return isNaN(number) ? 0 : number
});

// CONCATENATED MODULE: ./src/utils/index.js







/* harmony default export */ var utils = ({ deepClone: utils_deepClone, deepCompare: utils_deepCompare, px2number: px2number, typeOf: utils_typeOf });

// CONCATENATED MODULE: ./src/Core/Location/index.js


class Location_Location {
	constructor(options) {
		if (utils_typeOf(options) === 'String') {
			options = {
				path: options
			}
		}
		const { name, path, query, title } = options

		if (!name && !path) throw 'name和path必须至少有一个'

		if (path === '*') throw `path不可使用通配符'*'`

		this.name = name
		this.path = path
		this.query = query
		this.title = title
	}
	_updateTitle(title) {
		if (title === undefined) return
		this.title = title
	}
	_updateQuery(query) {
		if (query !== undefined && typeof query !== 'object') return
		if (utils_deepCompare(this.query, query)) return
		this.query = query
	}
	syncByRoute({ defaultTitle }) {
		if (this.title === undefined) {
			this.title = defaultTitle
		}
	}
	update({ title, query }) {
		this._updateTitle(title)
		this._updateQuery(query)
	}
}

/* harmony default export */ var Core_Location = (Location_Location);

// CONCATENATED MODULE: ./src/Core/Page/index.js
class Page {
	constructor({ id, route, location }) {
		this.id = id
		this.route = route
		this.location = location
		this.location.syncByRoute(route)
		this.component = {
			name: '',
			options: null,
			instance: null
		}
	}
}

/* harmony default export */ var Core_Page = (Page);

// CONCATENATED MODULE: ./src/Core/index.js





class Core_Core {
	constructor(_routes = []) {
		this.store = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.observable({
			routes: [],
			pages: [],
			currentPage: null
		})
		this._pageIdSeed = 0
		try {
			this._initRoutes(_routes)
		} catch (error) {
			this.errorHandler(`[init] ${error}`)
		}
	}
	_initRoutes(_routes) {
		_routes.forEach(_route => {
			this.store.routes.push(new Core_Route(_route))
		})
	}
	_getRouteByLocation(location) {
		return this.store.routes.find(
			route =>
				route.name === location.name ||
				route.path === location.path ||
				route.path === '*'
		)
	}
	_getPageByRoute(route) {
		return this.store.pages.find(page => page.route === route)
	}
	_getNearbyPageByPage(page) {
		const pageIndex = this.store.pages.findIndex(_page => _page === page)
		return (
			this.store.pages[pageIndex + 1] || this.store.pages[pageIndex - 1]
		)
	}
	_createPageId() {
		return `page-${this._pageIdSeed++}`
	}
	_createPage(route, location) {
		return new Core_Page({ id: this._createPageId(), route, location })
	}
	_openPage(page) {
		this.store.pages.push(page)
	}
	_focusPage(page) {
		this.store.currentPage = page
	}
	_reloadPage(page) {
		const newPage = this._createPage(page.route, page.location),
			pageIndex = this.store.pages.findIndex(_page => _page === page)
		this.store.pages.splice(pageIndex, 1, newPage)
		if (page === this.store.currentPage) {
			this.store.currentPage = newPage
		}
	}
	_closePage(page) {
		if (page === this.store.currentPage) {
			this._focusPage(this._getNearbyPageByPage(page))
		}

		this._destroyPage(page)
	}
	_destroyPage(page) {
		const pageIndex = this.store.pages.findIndex(_page => _page === page)
		if (pageIndex < 0) return
		this.store.pages.splice(pageIndex, 1)
	}
	reset() {
		this.store.pages = []
		this.store.currentPage = null
	}
	errorHandler(error) {
		console.error(`[TabRouter] ${error}`)
	}
	getRoute(location) {
		if (!(location instanceof Core_Location)) {
			location = new Core_Location(location)
		}
		return this._getRouteByLocation(location)
	}
	open(_location = '') {
		try {
			const location = new Core_Location(_location)

			const route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			let page = this._getPageByRoute(route)

			if (page) {
				page.location.update(location)
			} else {
				page = this._createPage(route, location)
				this._openPage(page)
			}

			this._focusPage(page)
		} catch (error) {
			this.errorHandler(`[open] ${error}`)
		}
	}
	focus(_location = '') {
		try {
			const location = new Core_Location(_location)

			const route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const page = this._getPageByRoute(route)

			if (!page) throw `页面未渲染:${JSON.stringify(_location)}`

			this._focusPage(page)
		} catch (error) {
			this.errorHandler(`[focus] ${error}`)
		}
	}
	reload(_location = '') {
		try {
			const location = new Core_Location(_location)

			const route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const page = this._getPageByRoute(route)

			if (!page) throw `页面未渲染:${JSON.stringify(_location)}`

			this._reloadPage(page)
		} catch (error) {
			this.errorHandler(`[reload] ${error}`)
		}
	}
	close(_location = '') {
		try {
			const location = new Core_Location(_location)

			const route = this._getRouteByLocation(location)

			if (!route)
				throw `无法匹配路由，错误的参数:${JSON.stringify(_location)}`

			const page = this._getPageByRoute(route)

			if (!page) throw `页面未渲染:${JSON.stringify(_location)}`

			this._closePage(page)
		} catch (error) {
			this.errorHandler(`[close] ${error}`)
		}
	}
	closeAll() {
		try {
			const pages = Object([], this.store.pages).reverse()
			pages.forEach(page => {
				this._closePage(page)
			})
		} catch (error) {
			this.errorHandler(`[closeAll] ${error}`)
		}
	}
}

/* harmony default export */ var src_Core = (Core_Core);

// EXTERNAL MODULE: ./src/mixins/index.js + 1 modules
var mixins = __webpack_require__("1b62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/TabRouterLink/src/Index.vue?vue&type=script&lang=js&



/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
	name: 'TabRouterLink',
	mixins: [mixins["a" /* core */]],
	props: {
		open: {
			type: [String, Object],
			default: undefined
		},
		close: {
			type: [String, Object],
			default: undefined
		},
		tag: {
			type: String,
			default: 'a'
		},
		custom: {
			default: undefined
		}
	},
	computed: {
		route() {
			return this.tabRouterCore.getRoute(this.open || this.close)
		},
		isActive() {
			return this.tabRouterStore.pages.some(
				page => page.route === this.route
			)
		},
		isVisited() {
			if (!this.tabRouterStore.currentPage) return false
			return this.tabRouterStore.currentPage.route === this.route
		}
	},
	mounted() {
		if (
			(this.open === undefined && this.close === undefined) ||
			(this.open !== undefined && this.close !== undefined)
		) {
			this.errorHandler('open和close不可同时为空或同时出现')
		}
	},
	methods: {
		link() {
			this.$tabRouter[this.open ? 'open' : 'close'](
				this.open || this.close
			)
		}
	},
	render(createElement) {
		return createElement(
			this.tag,
			{
				on: {
					click: () => {
						if (this.$props.custom !== undefined) return
						this.link()
					}
				}
			},
			this.$scopedSlots.default({
				route: this.route,
				navigate: () => this.link(),
				isActive: this.isActive,
				isVisited: this.isVisited
			})
		)
	}
});

// CONCATENATED MODULE: ./packages/TabRouterLink/src/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/TabRouterLink/src/Index.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = (component.exports);
// CONCATENATED MODULE: ./packages/TabRouterLink/index.js


Index.install = function (Vue) {
	Vue.component(Index.name, Index)
}

/* harmony default export */ var TabRouterLink = (Index);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b8cf54e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/TabRouterView/src/Index.vue?vue&type=template&id=92cf3536&lang=pug&
var Indexvue_type_template_id_92cf3536_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-router-view"},_vm._l((_vm.currentPages),function(page){return _c(page.component.name,{directives:[{name:"show",rawName:"v-show",value:(page === _vm.currentPage),expression:"page === currentPage"}],key:page.component.name,tag:"component"})}),1)}
var Indexvue_type_template_id_92cf3536_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./packages/TabRouterView/src/Index.vue?vue&type=template&id=92cf3536&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/TabRouterView/src/Index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var TabRouterView_src_Indexvue_type_script_lang_js_ = ({
	name: 'TabRouterView',
	mixins: [mixins["a" /* core */]],
	props: {
		default: {
			type: [String, Object],
			default: ''
		},
		id: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			componentNameSeed: 0,
			currentPages: []
		}
	},
	computed: {
		useCache() {
			return this.cache !== undefined
		}
	},
	created() {
		this.$watch('pages', async newPages => {
			await Promise.all(
				newPages.map(async newPage => {
					if (
						!this.currentPages.find(
							oldPage => oldPage.id === newPage.id
						)
					) {
						await this.register(newPage)
					}
				})
			)

			this.currentPages = Object.assign([], newPages)
		})
	},
	mounted() {
		if (this.default) {
			this.tabRouterCore.open(this.default)
		}
	},
	methods: {
		createComponentName() {
			return `TabRouterViewComponent${this.componentNameSeed++}`
		},
		// 注册组件
		async register(page) {
			const componentName = this.createComponentName()
			page.component.name = componentName
			if (utils_typeOf(page.route.component) === 'Function') {
				page.component.options = (await page.route.component()).default
			} else {
				page.component.options = page.route.component
			}
			page.component.options.mixins = page.component.options.mixins || []
			page.component.options.mixins.push({
				beforeCreate() {
					page.component.instance = this
				}
			})
			this.$options.components[componentName] = page.component.options
			return page
		}
	},
	destroyed() {
		this.tabRouterCore.reset()
	}
});

// CONCATENATED MODULE: ./packages/TabRouterView/src/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_TabRouterView_src_Indexvue_type_script_lang_js_ = (TabRouterView_src_Indexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/TabRouterView/src/Index.vue





/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  packages_TabRouterView_src_Indexvue_type_script_lang_js_,
  Indexvue_type_template_id_92cf3536_lang_pug_render,
  Indexvue_type_template_id_92cf3536_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_Index = (Index_component.exports);
// CONCATENATED MODULE: ./packages/TabRouterView/index.js


src_Index.install = function (Vue) {
	Vue.component(src_Index.name, src_Index)
}

/* harmony default export */ var TabRouterView = (src_Index);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b8cf54e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/TabRouterTitleBar/src/Index.vue?vue&type=template&id=bbae0224&lang=pug&
var Indexvue_type_template_id_bbae0224_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"tab-router-title-bar"},[_c('div',{ref:"scrollWrapper",staticClass:"tab-router-title-bar-scroll-wrapper",style:({ marginLeft: (_vm.scrollOffset + "px") }),on:{"DOMMouseScroll":function($event){$event.stopPropagation();return _vm.scrollHandler.apply(null, arguments)},"mousewheel":function($event){$event.stopPropagation();return _vm.scrollHandler.apply(null, arguments)}}},[_vm._l((_vm.pages),function(page){return _c('TabRouterTitle',{key:page.id,attrs:{"page":page},on:{"contextmenu":_vm.renderContextmenu},scopedSlots:_vm._u([(_vm.$scopedSlots.title)?{key:"default",fn:function(titleProps){return [_vm._t("title",null,null,titleProps)]}}:(_vm.$slots.title)?{key:"default",fn:function(undefined){return [_vm._t("title")]}}:null],null,true)})}),(_vm.contextmenu.isShow)?_c('TabRouterTitleContextmenu',{attrs:{"left":_vm.contextmenu.left,"page":_vm.contextmenu.page,"top":_vm.contextmenu.top},scopedSlots:_vm._u([(_vm.$scopedSlots.contextmenu)?{key:"default",fn:function(contextmenuProps){return [_vm._t("contextmenu",null,null,contextmenuProps)]}}:(_vm.$slots.contextmenu)?{key:"default",fn:function(undefined){return [_vm._t("contextmenu")]}}:null],null,true)}):_vm._e()],2)])}
var Indexvue_type_template_id_bbae0224_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./packages/TabRouterTitleBar/src/Index.vue?vue&type=template&id=bbae0224&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/TabRouterTitleBar/src/Index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var TabRouterTitleBar_src_Indexvue_type_script_lang_js_ = ({
	name: 'TabRouterTitleBar',
	components: {
		TabRouterTitle: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, "2de8")),
		TabRouterTitleContextmenu: () =>
			__webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "11ff"))
	},
	mixins: [mixins["a" /* core */]],
	data() {
		return {
			scrollOffset: 0,
			scrollOffsetUnit: 80,
			isShowContextmenu: false,
			contextmenu: {
				isShow: false,
				top: 0,
				left: 0,
				page: null
			}
		}
	},
	mounted() {
		this.bindWindowResize()
	},
	destroyed() {
		this.unbindWindowResize()
	},
	methods: {
		scrollHandler(event = window.event) {
			let wheelDelta = event.wheelDelta || -event.detail * 24,
				isUp = wheelDelta > 0

			this.scroll(isUp)
		},
		scroll(isUp, offset = this.scrollOffsetUnit) {
			const offsetLimit = Math.max(
				this.getAllTitleWidth() - this.getContainerWidth(),
				0
			)

			if (isUp) {
				this.scrollOffset = Math.min(this.scrollOffset + offset, 0)
			} else {
				this.scrollOffset = Math.max(
					this.scrollOffset - offset,
					-offsetLimit
				)
			}
		},
		scrollToTop() {
			this.scroll(true, 999999999)
		},
		scrollToBottom() {
			this.scroll(false, 999999999)
		},
		getContainerWidth() {
			return px2number(
				window.getComputedStyle(this.$refs.container)['width']
			)
		},
		getAllTitleWidth() {
			let width = 0,
				el_titleList = this.$refs.scrollWrapper.children

			new Array(...el_titleList).forEach(el => {
				width += this.getComputedWidth(el)
			})

			return width
		},
		getComputedWidth(el) {
			let styles = window.getComputedStyle(el),
				width =
					px2number(styles['width']) +
					px2number(styles['marginLeft']) +
					px2number(styles['marginRight'])

			if (styles['boxSizing'] !== 'border-box') {
				width +=
					px2number(styles['paddingLeft']) +
					px2number(styles['paddingRight']) +
					px2number(styles['borderLeftWidth']) +
					px2number(styles['borderRightWidth'])
			}

			return width
		},
		bindWindowResize() {
			window.addEventListener('resize', this.scrollFixOnResize)
		},
		unbindWindowResize() {
			window.removeEventListener('resize', this.scrollFixOnResize)
		},
		scrollFixOnResize() {
			if (this.getAllTitleWidth() < this.getContainerWidth()) {
				this.scrollToTop()
			} else {
				if (
					-this.scrollOffset >
					this.getAllTitleWidth() - this.getContainerWidth()
				) {
					this.scrollToBottom()
				}
			}
		},
		renderContextmenu({ clientY, clientX }, page) {
			console.log('render cm', page.location.title)

			this.contextmenu.page = page
			this.contextmenu.top = clientY
			this.contextmenu.left = clientX
			this.contextmenu.isShow = true

			this.bindContextmenuDestroyListener()
		},
		destroyContextmenu() {
			this.unbindContextmenuDestroyListener()
			console.log('destroy cm')

			this.contextmenu.isShow = false
		},
		bindContextmenuDestroyListener() {
			window.addEventListener('click', this.destroyContextmenu)
			window.addEventListener(
				'contextmenu',
				this.destroyContextmenu,
				true
			)
		},
		unbindContextmenuDestroyListener() {
			window.removeEventListener('click', this.destroyContextmenu)
			window.removeEventListener(
				'contextmenu',
				this.destroyContextmenu,
				true
			)
		}
		// createContextmenu(event, page) {
		// 	const { clientY: top, clientX: left } = event,
		// 		Contextmenu = Vue.extend(TabRouterTitleContextmenu)

		// 	this.contextmenuIns = new Contextmenu({
		// 		propsData: {
		// 			top: top,
		// 			left: left,
		// 			page: page,
		// 			slot: this.$slots.contextmenu,
		// 			scopedSlot: this.$scopedSlots.contextmenu
		// 		},
		// 		slot: this.$slots.contextmenu,
		// 		scopedSlot: this.$scopedSlots.contextmenu
		// 	}).$mount()
		// },
		// renderContextmenu(event, page) {
		// 	console.log('render cm', page.location.title)

		// 	this.createContextmenu(event, page)

		// 	document.body.appendChild(this.contextmenuIns.$el)

		// 	this.bindContextmenuDestroyListener()
		// },
		// destroyContextmenu() {
		// 	this.unbindContextmenuDestroyListener()
		// 	console.log('destroy cm')

		// 	if (!this.contextmenuIns) return
		// 	document.body.removeChild(this.contextmenuIns.$el)
		// 	this.contextmenuIns = null
		// },
		// bindContextmenuDestroyListener() {
		// 	window.addEventListener('click', this.destroyContextmenu)
		// 	window.addEventListener(
		// 		'contextmenu',
		// 		this.destroyContextmenu,
		// 		true
		// 	)
		// },
		// unbindContextmenuDestroyListener() {
		// 	window.removeEventListener('click', this.destroyContextmenu)
		// 	window.removeEventListener(
		// 		'contextmenu',
		// 		this.destroyContextmenu,
		// 		true
		// 	)
		// }
	}
});

// CONCATENATED MODULE: ./packages/TabRouterTitleBar/src/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_TabRouterTitleBar_src_Indexvue_type_script_lang_js_ = (TabRouterTitleBar_src_Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/TabRouterTitleBar/src/Index.vue?vue&type=style&index=0&lang=stylus&
var Indexvue_type_style_index_0_lang_stylus_ = __webpack_require__("1185");

// CONCATENATED MODULE: ./packages/TabRouterTitleBar/src/Index.vue






/* normalize component */

var src_Index_component = Object(componentNormalizer["a" /* default */])(
  packages_TabRouterTitleBar_src_Indexvue_type_script_lang_js_,
  Indexvue_type_template_id_bbae0224_lang_pug_render,
  Indexvue_type_template_id_bbae0224_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabRouterTitleBar_src_Index = (src_Index_component.exports);
// CONCATENATED MODULE: ./packages/TabRouterTitleBar/index.js


TabRouterTitleBar_src_Index.install = function (Vue) {
	Vue.component(TabRouterTitleBar_src_Index.name, TabRouterTitleBar_src_Index)
}

/* harmony default export */ var TabRouterTitleBar = (TabRouterTitleBar_src_Index);

// EXTERNAL MODULE: ./src/assets/stylus/iconfont.styl
var iconfont = __webpack_require__("f01d");

// CONCATENATED MODULE: ./src/index.js






const version = '0.0.1'

const components = [TabRouterLink, TabRouterView, TabRouterTitleBar]

class src_TabRouter {
	constructor(...args) {
		this.core = new src_Core(...args)
	}
	open(...args) {
		return this.core.open(...args)
	}
	focus(...args) {
		return this.core.focus(...args)
	}
	reload(...args) {
		return this.core.reload(...args)
	}
	close(...args) {
		return this.core.close(...args)
	}
	closeAll(...args) {
		return this.core.closeAll(...args)
	}
}

src_TabRouter.version = version

src_TabRouter.install = function (Vue) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})

	Vue.mixin({
		beforeCreate() {
			if (
				this.$options.tabRouter &&
				this.$options.tabRouter instanceof src_TabRouter
			) {
				Vue.prototype.$tabRouter = this.$options.tabRouter
			}
		}
	})
}

/* harmony default export */ var src_0 = (src_TabRouter);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=vue-tab-route.common.js.map