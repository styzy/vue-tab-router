<template lang="pug">
.tab-router-view
	TabRouterViewComponent(
		:key="routeIndex"
		:page="getPageByRoute(route)"
		v-for="(route, routeIndex) in routes"
		v-if="getPageByRoute(route)"
	)
</template>

<script>
import TabRouterViewComponent from './components/TabRouterViewComponent.vue'
import { core } from '~/mixins'

export default {
	name: 'TabRouterView',
	components: {
		TabRouterViewComponent
	},
	mixins: [core],
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
			pageList: []
		}
	},
	mounted() {
		if (this.default) {
			this.$trCore.open(this.default)
		}
	},
	destroyed() {
		this.$trCore.$reset()
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
