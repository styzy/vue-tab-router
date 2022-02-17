<template lang="pug">
	.index
		.menu
			Menu
		.header TabRouter · 标签路由
		.body
</template>

<script>
export default {
	name: 'Index',
	components: {
		Menu: () => import('@/components/Menu.vue')
	}
}
</script>

<style lang="stylus" scoped>
$menu-width = 220px
$header-height = 80px
.menu
	position: fixed
	top 0
	left: 0
	width: $menu-width
	height: 100%
	z-index 2
.header
	baseTrans()
	position: fixed
	top 0
	left: $menu-width
	width: 'calc(100% - %s)' % $menu-width
	height: $header-height
	line-height @height
	font-size 36px
	text-align center
	color: $color-theme
	box-shadow 0 0 10px 0 rgba(0,0,0,0.2)
	background-color: raba(255,255,255,0.5)
	z-index 1
.body
	padding-top: $header-height
	padding-left: $menu-width
</style>
