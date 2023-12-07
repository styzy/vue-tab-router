<template lang="pug">
.menu
	router-link(to="/test" v-if="!isPrd")
		.item 测试页面 Only In Dev
	template(v-for="menu in menuList")
		tab-router-link(
			#default="{ route, navigate, isVisited, isActive }"
			:open="menu.path"
			custom
		)
			.item(
				:class="{ visited: isVisited, active: isActive, new: isNew(route), update: isUpdate(route), remove: isRemove(route) }"
				@click="navigate"
			) {{ route.title }}
		template(v-for="secondMenu in menu.children")
			tab-router-link(
				#default="{ route, navigate, isVisited, isActive }"
				:key="secondMenu.path"
				:open="secondMenu.path"
				custom
			)
				.item.second(
					:class="{ visited: isVisited, active: isActive, new: isNew(route), update: isUpdate(route), remove: isRemove(route) }"
					@click="navigate"
				) {{ route.title }}
			template(v-for="thirdMenu in secondMenu.children")
				tab-router-link(
					#default="{ route, navigate, isVisited, isActive }"
					:key="thirdMenu.path"
					:open="thirdMenu.path"
					custom
				)
					.item.third(
						:class="{ visited: isVisited, active: isActive, new: isNew(route), update: isUpdate(route), remove: isRemove(route) }"
						@click="navigate"
					) {{ route.title }}
</template>

<script>
export default {
	name: 'Menu',
	data() {
		return {
			menuList: [
				{
					path: '/introduce'
				},
				{
					path: '/install'
				},
				{
					path: '/guide',
					children: [
						{
							path: '/guide/config'
						},
						{
							path: '/guide/view'
						},
						{
							path: '/guide/titleView'
						},
						{
							path: '/guide/navigate'
						},
						{
							path: '/guide/named'
						},
						{
							path: '/guide/query'
						},
						{
							path: '/guide/navigateFn'
						},
						{
							path: '/guide/eventListener'
						},
						{
							path: '/guide/routeMatch'
						},
						{
							path: '/guide/defender'
						}
					]
				},
				{
					path: '/component',
					children: [
						{
							path: '/component/TabRouterLink'
						},
						{
							path: '/component/TabRouterView'
						},
						{
							path: '/component/TabRouterTitleBar'
						}
					]
				},
				{
					path: '/api',
					children: [
						{
							path: '/api/TabRouter',
							children: [
								{
									path: '/api/TabRouter/RouteConfig'
								}
							]
						},
						{
							path: '/api/TabRouter/props'
						},
						{
							path: '/api/TabRouter/methods'
						},
						{
							path: '/api/TabRoute'
						},
						{
							path: '/api/Location'
						},
						{
							path: '/api/NAVIGATE_TYPES'
						}
					]
				}
			]
		}
	},
	methods: {
		isNew(route) {
			return route.meta ? !!route.meta.new : false
		},
		isUpdate(route) {
			return route.meta ? !!route.meta.update : false
		},
		isRemove(route) {
			return route.meta ? !!route.meta.remove : false
		}
	}
}
</script>

<style lang="stylus" scoped>
$padding-left = 40px

.menu
	baseScroll()

	.item
		baseTrans()

		position relative
		padding-left $padding-left
		height 50px
		color $color-theme
		font-weight 700
		font-size 20px
		line-height @height
		cursor pointer
		&.active
			background-color rgba($color-theme, 0.1)
		&.visited:before
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
		&.second
			margin-top 0
			padding-left: $padding-left + 10px
			height 40px
			font-weight 400
			font-size 16px
			line-height @height
		&.third
			margin-top 0
			padding-left: $padding-left + 25px
			height 40px
			font-weight 400
			font-size 16px
			line-height @height
		&.new:after,
		&.update:after,
		&.remove:after
			display inline-block
			margin-left 10px
			padding 0 5px 2px
			border-radius 5px
			color #FFFFFF
			font-size 14px
			line-height 20px
		&.new:after
			background-color $color-success
			content 'new'
		&.update:after
			background-color $color-theme
			content 'update'
		&.remove:after
			background-color $color-error
			content 'remove'
</style>
