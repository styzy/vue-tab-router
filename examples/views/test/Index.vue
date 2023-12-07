<template lang="pug">
.test
	.menu
		TabRouterLink
		TabRouterLink(:open="path") 无slot
		TabRouterLink(:open="path")
			.item open
		TabRouterLink(:close="path")
			.item close
		TabRouterLink
			.item 无open和close
		TabRouterLink(:close="path" :open="path")
			.item open close
		TabRouterLink(#default)
			.item scopedSlot 无open 无cusom
		TabRouterLink(#default custom)
			.item scopedSlot 无open 无自定义跳转
		TabRouterLink(
			#default="{ route, navigate, isVisited, isActive }"
			:open="path"
			custom
		)
			.item(@click="navigate") scopedSlot
		TabRouterLink(
			#default="{ route, navigate, isVisited, isActive }"
			:close="path"
			:open="path"
			custom
		)
			.item(@click="navigate") scopedSlot open close
		TabRouterLink(
			#default="{ route, navigate, isVisited, isActive }"
			:close="path"
			:open="path"
			custom
		)
			.item(
				:class="{ visited: isVisited, active: isActive }"
				@click="navigate"
			) scopedSlot open close 带样式
		TabRouterLink(:open="pathList[pathIndex]")
			.item(@click="dynamicOpen") 动态open
		.item(@click="open") js 打开
		.item(@click="focus") js 聚焦
		.item(@click="reload") js 刷新
		.item(@click="close") js 关闭
		.item(@click="closeAll") js 全部关闭
		.item(@click="openWithQuery") js 打开 携带query
		.item(@click="on") 添加监听事件
		.item(@click="off") 移除监听事件
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
import { routes } from '@/tabRouter'
export default {
	name: 'Test',
	data() {
		return {
			pathList: routes.map(route => route.path),
			path: routes.map(route => route.path)[0],
			pathIndex: 0
		}
	},
	mounted() {
		this.on()
	},
	methods: {
		dynamicOpen() {
			this.pathIndex++
			if (this.pathIndex == this.pathList.length) {
				this.pathIndex = 0
			}
		},
		async open() {
			await this.$tabRouter.open(this.path)
			console.log('open')
		},
		async focus() {
			await this.$tabRouter.focus(this.path)
			console.log('focus')
		},
		async reload() {
			await this.$tabRouter.reload(this.path)
			console.log('reload')
		},
		async close() {
			await this.$tabRouter.close(this.path)
			console.log('close')
		},
		async closeAll() {
			await this.$tabRouter.closeAll()
			console.log('closeAll')
		},
		openWithQuery() {
			this.$tabRouter.open({
				path: this.path,
				query: {
					testProp: Date.now().toString()
				}
			})
		},
		on() {
			this.$tabRouter.$on(this.path, 'test', this.listener)
		},
		listener() {
			console.log('listener')
		},
		off() {
			this.$tabRouter.$off(this.path, 'test', this.listener)
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
