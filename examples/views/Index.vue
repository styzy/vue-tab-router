<template lang="pug">
.index
	.header
		.logo
			img.logo-img(src='@/assets/images/logo.png')
			.name TabRouter
			.version v {{ version }}
		.title TabRouter · 标签路由
	.menu
		Menu
	.title-bar
		TabRouterTitleBar
			//- template(#title)
			//- .title 123
			//- template(#title='{ location }')
			//- .title {{ location.title }}
			//- template(#contextmenu)
			//- div 123
			//- template(#contextmenu='{ close, location }')
			//- div(@click='close') 关闭{{ location.title }}
	.body
		TabRouterView(default='/install')
</template>

<script>
import TabRouter from '~'
export default {
	name: 'Index',
	components: {
		Menu: () => import('@/components/Menu'),
		TabRouterTitle: () => {
			import('/packages/TabRouterTitleBar/src/components/TabRouterTitle')
		}
	},
	data() {
		return {
			version: TabRouter.version
		}
	},
	mounted() {
		// this.$tabRouter.open('/install')
	}
}
</script>

<style lang="stylus" scoped>
$header-height = 80px
$menu-width = 280px
$border-color = #eaecef
$title-bar-height = 40px

.header
	baseTrans()

	position fixed
	top 0
	left 0
	z-index 1
	box-sizing border-box
	width 100%
	height $header-height
	border-bottom 1px solid $border-color
	background-color raba(255, 255, 255, 0.5)
	color $color-theme
	line-height @height
	.logo
		float left
		width $menu-width
		font-size 0
		.logo-img
			display inline-block
			margin 0 15px 0 20px
			width 36px
			height 36px
			vertical-align middle
		.name
			display inline-block
			vertical-align middle
			font-size 28px
		.version
			display inline-block
			margin-top 5px
			margin-left 25px
			padding 0 5px
			height 20px
			border-radius 3px
			background-color: $color-theme + #111111
			color #FFFFFF
			vertical-align middle
			font-size 14px
			line-height @height
	.title
		float left
		width 'calc(100% - %s)' % $menu-width
		text-align center
		font-size 24px
	&:hover
		background-color #FFFFFF
.menu
	position fixed
	top $header-height
	left 0
	z-index 1
	overflow-y auto
	box-sizing border-box
	width $menu-width
	height 'calc(100% - %s)' % $header-height
	border-right 1px solid $border-color
.title-bar
	position fixed
	top $header-height
	right 0
	left $menu-width
	height $title-bar-height
	.title
		width 500px
		background-color $color-theme
		color #FFFFFF
		text-align center
.body
	box-sizing border-box
	padding-top: $header-height + $title-bar-height
	padding-left $menu-width
	width 100vw
	height 100vh
</style>
