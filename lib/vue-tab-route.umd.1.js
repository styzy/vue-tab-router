((typeof self !== 'undefined' ? self : this)["webpackJsonpvue_tab_route"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_tab_route"] || []).push([[1],{

/***/ "2de8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b8cf54e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/TabRouterTitleBar/src/components/TabRouterTitle.vue?vue&type=template&id=67c94656&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.$scopedSlots.default)?_c('div',{staticClass:"tab-router-title-custom",on:{"contextmenu":function($event){$event.preventDefault();return _vm.contextmenuHandler.apply(null, arguments)}}},[_vm._t("default",null,{"close":_vm.close,"focus":_vm.focus,"isVisited":_vm.isVisited,"location":_vm.page.location,"reload":_vm.reload,"route":_vm.page.route})],2):(_vm.$slots.default)?_c('div',{staticClass:"tab-router-title-custom",on:{"contextmenu":function($event){$event.preventDefault();return _vm.contextmenuHandler.apply(null, arguments)}}},[_vm._t("default")],2):_c('div',{staticClass:"tab-router-title",class:{ "tab-router-title-focus": _vm.isVisited },on:{"click":function($event){return _vm.focus()},"contextmenu":function($event){$event.preventDefault();return _vm.contextmenuHandler.apply(null, arguments)}}},[_c('div',{staticClass:"tab-router-title-text"},[_vm._v(_vm._s(_vm.page.location.title))]),_c('div',{staticClass:"tab-router-title-close",on:{"click":function($event){$event.stopPropagation();return _vm.close()}}},[_c('i',{staticClass:"tab-router-iconfont close"})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/TabRouterTitleBar/src/components/TabRouterTitle.vue?vue&type=template&id=67c94656&lang=pug&

// EXTERNAL MODULE: ./src/mixins/index.js + 1 modules
var mixins = __webpack_require__("1b62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/TabRouterTitleBar/src/components/TabRouterTitle.vue?vue&type=script&lang=js&
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



/* harmony default export */ var TabRouterTitlevue_type_script_lang_js_ = ({
	name: 'TabRouterTitle',
	mixins: [mixins["a" /* core */]],
	props: {
		page: {
			type: Object
		}
	},
	computed: {
		isVisited() {
			return this.page === this.currentPage
		}
	},
	methods: {
		focus() {
			this.$tabRouter.focus(this.page.location)
		},
		reload() {
			this.$tabRouter.reload(this.page.location)
		},
		close() {
			this.$tabRouter.close(this.page.location)
		},
		contextmenuHandler(event) {
			this.$emit('contextmenu', event, this.page)
		}
	}
});

// CONCATENATED MODULE: ./packages/TabRouterTitleBar/src/components/TabRouterTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TabRouterTitlevue_type_script_lang_js_ = (TabRouterTitlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/TabRouterTitleBar/src/components/TabRouterTitle.vue?vue&type=style&index=0&lang=stylus&
var TabRouterTitlevue_type_style_index_0_lang_stylus_ = __webpack_require__("5278");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/TabRouterTitleBar/src/components/TabRouterTitle.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TabRouterTitlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabRouterTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5278":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabRouterTitle_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fe35");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabRouterTitle_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabRouterTitle_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fe35":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=vue-tab-route.umd.1.js.map