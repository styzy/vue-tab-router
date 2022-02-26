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
				:class="{ visited: isVisited, active: isActive }"
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
					:class="{ visited: isVisited, active: isActive }"
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
						:class="{ visited: isVisited, active: isActive }"
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
							path: '/guide/query'
						},
						{
							path: '/guide/navigateFn'
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
</style>
