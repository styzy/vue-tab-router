<template lang="pug">
.tab-router-title-contextmenu(:style="{ top: `${top}px`, left: `${left}px` }")
	template(v-if="$scopedSlots.default")
		slot(
			:close="close"
			:focus="focus"
			:isVisited="isVisited"
			:reload="reload"
			:route="page.route"
		)
	template(v-else)
		.tab-router-title-contextmenu-wrapper
			.tab-router-title-contextmenu-item(@click="reload") 刷新
			.tab-router-title-contextmenu-item(@click="close") 关闭
</template>
<script>
import { core } from '~/mixins'
export default {
	name: 'TabRouterTitleContextmenu',
	mixins: [core],
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
			this.$tabRouter.focus(this.page.route.$location)
		},
		reload() {
			this.$tabRouter.reload(this.page.route.$location)
		},
		close() {
			this.$tabRouter.close(this.page.route.$location)
		}
	}
}
</script>
<style lang="stylus">
.tab-router-title-contextmenu
	position fixed
	z-index 1
.tab-router-title-contextmenu-wrapper
	overflow hidden
	padding 8px 0
	background-color #FAFAFA
	box-shadow 0 0 5px 0 #999999
	animation slideIn 0.3s linear
	user-select none
.tab-router-title-contextmenu-item
	baseTrans()

	box-sizing border-box
	padding 0 20px
	min-width 150px
	height 30px
	color #666666
	font-size 14px
	line-height 30px
	cursor pointer
	&:hover
		background-color #EEEEEE
		color #424242
		color color-theme
@keyframes slideIn
	from
		max-height 0
	to
		max-height 600px
</style>
