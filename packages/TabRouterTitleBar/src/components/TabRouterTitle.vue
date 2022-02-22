<template lang="pug">
.tab-router-title-custom(
	@contextmenu.prevent='contextmenuHandler'
	v-if='$scopedSlots.default'
)
	slot(
		:close='close'
		:focus='focus'
		:isVisited='isVisited'
		:location='page.location'
		:reload='reload'
		:route='page.route'
	)
.tab-router-title-custom(
	@contextmenu.prevent='contextmenuHandler'
	v-else-if='$slots.default'
)
	slot
.tab-router-title(
	:class='{ "tab-router-title-focus": isVisited }'
	@click='focus()'
	@contextmenu.prevent='contextmenuHandler'
	v-else
)
	.tab-router-title-text {{ page.location.title }}
	.tab-router-title-close(@click.stop='close()')
		i.tab-router-iconfont.close
</template>

<script>
import { core } from '~/mixins'

export default {
	name: 'TabRouterTitle',
	mixins: [core],
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
}
</script>

<style lang="stylus">
$title-height = 40px

.tab-router-title-custom
	display inline-block !important
.tab-router-title
	baseTrans()

	display inline-block
	box-sizing border-box
	padding ($title-height / 4) 5px
	height $title-height
	background-color rgba($color-theme, 0.1)
	color darken($color-theme, 10%)
	font-size 0
	cursor pointer
	user-select none
	&:hover
		background-color lighten(@background-color, 50%)
	&.tab-router-title-focus
		background-color $color-theme
		color #FFFFFF
		&:hover
			background-color lighten($color-theme, 10%)
		.tab-router-title-close
			&:hover
				border-color #FFFFFF
	&+&
		margin-left 1px
.tab-router-title-text
	display inline-block
	overflow hidden
	margin 0 5px
	width 100px
	height: ($title-height / 2)
	vertical-align middle
	text-overflow ellipsis
	white-space nowrap
	font-weight 700
	font-size 14px
	line-height @height
.tab-router-title-close
	baseTrans()

	display inline-block
	margin 0 5px
	width: ($title-height / 2.5)
	height: ($title-height / 2.5)
	border 1px solid transparent
	// border-radius 3px
	vertical-align middle
	text-align center
	font-size 14px
	line-height @height
	&:hover
		border-color $color-theme
</style>
