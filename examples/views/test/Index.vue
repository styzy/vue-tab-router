<template lang="pug">
.test
	.menu
		.item(@click="open") module1 打开
		.item(@click="focus") module1 聚焦
		.item(@click="reload") module1 重载
		.item(@click="close") module1 关闭
		TabRouterLink(open="/module2")
			.item module2 打开
		TabRouterLink(close="/module2")
			.item module2 关闭
		TabRouterLink(open="/module3")
			.item module3 打开
		TabRouterLink(close="/module3")
			.item module3 关闭
		TabRouterLink(open="/module4")
			.item module4 打开
		TabRouterLink(close="/module4")
			.item module4 关闭
		.item(@click="closeAll") 关闭全部
		.item(@click="getActiveRoutes") getActiveRoutes()
	.main
		.block
			.title-bar
				TabRouterTitleBar
					//- template(#title)
					//- .title 123
					//- template(#title="{ route, focus }")
					//- .title(@click="focus") {{ route.title }}
					//- template(#contextmenu)
					//- div 123
					//- template(#contextmenu="{ close, route }")
					//- div(@click="close") 关闭{{ route.title }}
			.view
				TabRouterView(default="/module1")
		.block
			.title-bar
				TabRouterTitleBar(name="sub")
					//- template(#title)
					//- .title 123
					//- template(#title="{ route, focus }")
					//- .title(@click="focus") {{ route.title }}
					//- template(#contextmenu)
					//- div 123
					//- template(#contextmenu="{ close, route }")
					//- div(@click="close") 关闭{{ route.title }}
			.view
				TabRouterView(default="/module3" name="sub")
</template>

<script>
export default {
	name: 'Test',
	data() {
		return {}
	},
	computed: {
		currentRoutes() {
			return this.$tabRouter.currentRoutes
		}
	},
	methods: {
		async open() {
			await this.$tabRouter.open('/module1')
		},
		async focus() {
			await this.$tabRouter.focus('/module1')
		},
		async reload() {
			await this.$tabRouter.reload('/module1')
		},
		async close() {
			await this.$tabRouter.close('/module1')
		},
		async closeAll() {
			await this.$tabRouter.closeAll()
			console.log('closeAll')
		},
		getActiveRoutes() {
			console.log('getActiveRoutes: ', this.$tabRouter.getActiveRoutes())
		}
	}
}
</script>

<style lang="stylus" scoped>
$menu-width = 400px
$title-height = 40px

.menu
	position fixed
	top 0
	left 0
	box-sizing border-box
	width $menu-width
	height 100vh
	border-right 1px solid #EEEEEE
	.item
		baseTrans()

		position relative
		padding-left 40px
		height 50px
		color $color-theme
		font-weight 700
		line-height @height
		cursor pointer
		&.active
			background-color rgba($color-theme, 0.1)
		&.visited:after
			position absolute
			top 0
			left 0
			z-index 1
			display block
			width 5px
			height 100%
			background-color rgba($color-theme, 1)
			content ''
		&:hover
			background-color lighten(rgba($color-theme, 0.1), 50%)
.main
	padding-left $menu-width
	height 100vh
	.block
		height 50%
	.title-bar
		height $title-height
		.title
			width 500px
			height 50px
			background-color $color-theme
			color #FFFFFF
			text-align center
			line-height @height
	.view
		baseScroll()

		box-sizing border-box
		height 'calc(100% - %s)' % $title-height
</style>
