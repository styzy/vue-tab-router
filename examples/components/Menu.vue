<template lang="pug">
.menu
	template(v-for='menu in menuList')
		tab-router-link(
			#default='{ route, navigate, isVisited, isActive }'
			:open='{ path: menu.path, query: time() }'
			custom
			tag='span'
		)
			.item(
				:class='{ visited: isVisited, active: isActive }'
				@click='navigate'
			) {{ menu.name }}
		.item.sub(@click='menuClick(subMenu.path)' v-for='subMenu in menu.children') {{ subMenu.name }}
</template>

<script>
export default {
	name: 'Menu',
	data() {
		return {
			menuList: [
				{
					name: '介绍',
					path: '/introduce'
				},
				{
					name: '安装和使用',
					path: '/install'
				},
				{
					name: '使用指南',
					path: '/guide',
					children: [
						{
							name: '创建路由配置',
							path: '/guide/routes'
						},
						{
							name: '路由导航与跳转',
							path: '/doc/router'
						},
						{
							name: '参数配置',
							path: '/doc/params'
						}
					]
				}
			]
		}
	},
	methods: {
		menuClick(path) {
			this.$tabRouter.open(path)
		},
		time() {
			return Date.now()
		}
	}
}
</script>

<style lang="stylus" scoped>
.menu
	.item
		baseTrans()

		padding-left 40px
		height 50px
		color $color-theme
		font-weight 700
		line-height @height
		cursor pointer
		&:hover,
		&.active
			background-color rgba($color-theme, 0.2)
			color darken($color-theme, 10%)
		&.visited
			background-color rgba($color-theme, 1)
			color #FFFFFF
		&.sub
			margin-top 0
			padding-left 55px
			height 40px
			font-weight 400
			line-height @height
</style>
