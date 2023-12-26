<template lang="pug">
.children
	h2 Children.vue
	h3 route
	p(v-for="routeAttr in routeAttrList")
		span.key {{ routeAttr.key }}：
		span.value {{ routeAttr.value }}
</template>

<script>
export default {
	name: 'Children',
	computed: {
		routeAttrList() {
			return Object.keys(this.$tabRoute).map(key => ({
				key,
				value: this.$tabRoute[key]
			}))
		}
	},
	mounted() {}
}
</script>

<style lang="stylus" scoped></style>
