<template lang="pug">
	.menu
		.logo TabRouter
		template(v-for='menu in menuList')
			.item(@click='menuClick(menu.path)') {{ menu.name }}
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
			if (!path) return
			console.log('path: ', path)
		}
	}
}
</script>

<style lang="stylus" scoped>
.menu
	background-color rgba($color-theme,0.2)
	.logo
		height 80px
		line-height @height
		font-size 40px
		text-align center
		background-color $color-theme
		color #FFFFFF
	.item
		baseTrans()
		height 60px
		padding-left 40px
		line-height @height
		font-weight 700
		color $color-theme
		cursor pointer
		&:hover
			color darken($color-theme, 10%)
			background-color rgba($color-theme,0.4)
		&.sub
			padding-left 55px
			font-weight 400
</style>
