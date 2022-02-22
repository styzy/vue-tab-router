((typeof self !== 'undefined' ? self : this)["webpackJsonpvue_tab_route"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvue_tab_route"] || []).push([[2],{

/***/ "0be9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "11ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b8cf54e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/TabRouterTitleBar/src/components/TabRouterTitleContextmenu.vue?vue&type=template&id=252300da&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-router-title-contextmenu",style:({ top: (_vm.top + "px"), left: (_vm.left + "px") })},[(_vm.$scopedSlots.default)?[_vm._t("default",null,{"close":_vm.close,"focus":_vm.focus,"isVisited":_vm.isVisited,"location":_vm.page.location,"reload":_vm.reload,"route":_vm.page.route})]:(_vm.$slots.default)?[_vm._t("default")]:[_c('div',{staticClass:"tab-router-title-contextmenu-wrapper"},[_c('div',{staticClass:"tab-router-title-contextmenu-item",on:{"click":_vm.reload}},[_vm._v("刷新")]),_c('div',{staticClass:"tab-router-title-contextmenu-item",on:{"click":_vm.close}},[_vm._v("关闭")])])]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/TabRouterTitleBar/src/components/TabRouterTitleContextmenu.vue?vue&type=template&id=252300da&lang=pug&

// EXTERNAL MODULE: ./src/mixins/index.js + 1 modules
var mixins = __webpack_require__("1b62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/TabRouterTitleBar/src/components/TabRouterTitleContextmenu.vue?vue&type=script&lang=js&
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


/* harmony default export */ var TabRouterTitleContextmenuvue_type_script_lang_js_ = ({
	name: 'TabRouterTitleContextmenu',
	mixins: [mixins["a" /* core */]],
	props: {
		top: {
			type: Number,
			default: 0
		},
		left: {
			type: Number,
			default: 0
		},
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
		}
	}
});

// CONCATENATED MODULE: ./packages/TabRouterTitleBar/src/components/TabRouterTitleContextmenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TabRouterTitleContextmenuvue_type_script_lang_js_ = (TabRouterTitleContextmenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/TabRouterTitleBar/src/components/TabRouterTitleContextmenu.vue?vue&type=style&index=0&lang=stylus&
var TabRouterTitleContextmenuvue_type_style_index_0_lang_stylus_ = __webpack_require__("1b81");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/TabRouterTitleBar/src/components/TabRouterTitleContextmenu.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TabRouterTitleContextmenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabRouterTitleContextmenu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1b81":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabRouterTitleContextmenu_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0be9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabRouterTitleContextmenu_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_11_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TabRouterTitleContextmenu_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=vue-tab-route.umd.2.js.map