<template lang="pug">
.tab-router-view
	TabRouterViewComponent(
		:key="routeIndex"
		:page="getPageByRoute(route)"
		v-for="(route, routeIndex) in namedRoutes"
		v-if="getPageByRoute(route)"
	)
</template>

<script>
import TabRouterViewComponent from './components/TabRouterViewComponent.vue'
import { routes, pages, $recordReference } from '~/mixins'

export default {
	name: 'TabRouterView',
	components: {
		TabRouterViewComponent
	},
	mixins: [routes, pages, $recordReference],
	props: {
		default: {
			type: [String, Object],
			default: ''
		},
		name: {
			type: String,
			default: 'default'
		}
	},
	data() {
		return {
			pageList: []
		}
	},
	computed: {
		namedRoutes() {
			return this.routes.filter(route => route.router === this.name)
		}
	},
	mounted() {
		if (this.default) {
			this.$tabRouter.open(this.default)
		}
	},
	methods: {
		getPageByRoute(route) {
			return this.pages.find(page => page.route === route)
		}
	}
}
</script>
<style lang="stylus">
.tab-router-view
	height 100%
</style>
