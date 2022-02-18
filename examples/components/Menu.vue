<template lang="pug">
	.menu
		router-link(to='/guide')
			.item 原生路由
		template(v-for='menu in menuList')
			tab-router-link(:to='{ path: menu.path }')
				.item {{ menu.name }}
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
					path: '/guide'
				},
				{
					name: '安装',
					path: '/install'
				},
				{
					name: '文档',
					path: '/doc/routes',
					children: [
						{
							name: '创建路由',
							path: '/doc/routes'
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
		}
	}
}
</script>

<style lang="stylus" scoped>
.menu
	.item
		baseTrans()
		height 40px
		padding-left 40px
		margin-top: 10px
		line-height @height
		font-weight 700
		color $color-theme
		cursor pointer
		&:hover
			color darken($color-theme, 10%)
			background-color rgba($color-theme,0.1)
		&.sub
			margin-top: 0
			padding-left 55px
			font-weight 400
</style>
