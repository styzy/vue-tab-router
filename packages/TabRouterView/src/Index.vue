<template lang="pug">
.tab-router-view
	.tab-router-view-wrapper(
		v-for="page in pages"
		v-show="page === currentPage"
	)
		TabRouterViewComponent(:page="page")
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
	mounted() {
		if (this.default) {
			this.$trCore.open(this.default)
		}
	},
	destroyed() {
		this.$trCore.$reset()
	}
}
</script>
<style lang="stylus">
.tab-router-view
	height 100%
.tab-router-view-wrapper
	overflow-y auto
	height 100%
</style>
