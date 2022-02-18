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
		.body
			TabRouterView(default='/install')
</template>

<script>
import TabRouter from '~'
export default {
	name: 'Index',
	components: {
		Menu: () => import('@/components/Menu.vue')
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
.header
	baseTrans()
	position: fixed
	top 0
	left 0
	width 100%
	height: $header-height
	line-height @height
	border-bottom 1px solid $border-color
	background-color raba(255,255,255,0.5)
	color: $color-theme
	z-index 1
	.logo
		float: left
		width: $menu-width
		font-size 0
		z-index 10
		.logo-img
			display inline-block
			width: 36px
			height: 36px
			margin: 0 15px 0 20px
			vertical-align middle
		.name
			display inline-block
			font-size 28px
			vertical-align middle
		.version
			display inline-block
			height: 20px
			padding 0 5px
			margin-left: 25px
			margin-top: 5px
			line-height @height
			border-radius: 3px
			font-size 14px
			background-color: $color-theme + #111111
			color: #FFFFFF
			vertical-align middle
	.title
		float: left
		width: 'calc(100% - %s)' % $menu-width
		text-align center
		font-size 24px
	&:hover
		background-color: #FFFFFF
.menu
	position: fixed
	top $header-height
	left: 0
	width: $menu-width
	height: 'calc(100% - %s)' % $header-height
	border-right: 1px solid $border-color;
	box-sizing: border-box
	overflow-y: auto
	z-index 1
.body
	width 100vw
	height 100vh
	padding-top: $header-height
	padding-left: $menu-width
	box-sizing border-box
</style>
