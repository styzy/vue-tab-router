<template lang="pug">
.index
	.header
		.logo
			img(src="@/assets/images/logo.png")
		.name TabRouter
		.version v {{ version }}
		a(href="https://github.com/styzy/vue-tab-router" target="_blank")
			.github-link
				.icon 
					i.iconfont.github
				.text GitHub
		TabRouterLink(open="/dev/log")
			.version-log 更新日志
	.menu
		Menu
	.title-bar
		TabRouterTitleBar
	.body
		TabRouterView(:default="{ path: '/dev/log' }")
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
		this.$tabRouter.open('/introduce')
	}
}
</script>

<style lang="stylus" scoped>
$header-height = 80px
$menu-width = 280px
$border-color = #eaecef
$title-bar-height = 40px

.header
	baseAcf()
	baseTrans()

	position fixed
	top 0
	left 0
	z-index 1
	box-sizing border-box
	width 100%
	height $header-height
	border-bottom 1px solid $border-color
	background-color #FFFFFF
	color $color-theme
	line-height @height
	.logo
		float left
		margin: (($header-height - 40px) / 2)
		width 40px
		height 40px
		img
			baseImg()
	.name
		float left
		font-size 28px
	.version
		float left
		margin-top 33px
		margin-left 25px
		padding 0 5px
		height 20px
		border-radius 3px
		background-color: $color-theme + #111111
		color #FFFFFF
		vertical-align middle
		font-size 14px
		line-height @height
	.version-log
		float right
		margin (($header-height - 20px) / 2) 20px
		height 20px
		font-size 16px
		line-height @height
	.github-link
		baseAcf()
		baseTrans()

		float right
		padding 0 20px
		height $header-height
		color #666666
		.icon
			float left
			margin-top: (($header-height - 30px) / 2)
			width 30px
			height 30px
			text-align center
			line-height @height
			i
				font-size 30px
		.text
			float left
			margin-left 10px
			font-weight 700
		&:hover
			background-color $color-theme
			color #FFFFFF
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
	background-color #FFFFFF
.title-bar
	position fixed
	top $header-height
	right 0
	left $menu-width
	z-index 1
	height $title-bar-height
.body
	box-sizing border-box
	padding-top: $header-height + $title-bar-height
	padding-left $menu-width
	width 100vw
	height 100vh
	background-color #FFFFFF
</style>
