<template lang="pug">
.test
	h2 Module1
	p mountedTime: {{ mountedTime }}
	h3 props
	p(v-for="propAttr in propAttrList")
		span.key {{ propAttr.key }}：
		span.value {{ propAttr.value }}
	h3 route
	p(v-for="routeAttr in routeAttrList")
		span.key {{ routeAttr.key }}：
		span.value {{ routeAttr.value }}
	button(@click="emit") 触发事件
	br
	button(@click="$tabRoute.$updateLocation({ title: '123', query: {} })") 修改location
	Children
</template>

<script>
/* eslint-disable */
export default {
	name: 'Module1',
	components: {
		Children: () => import('@/components/test/Children.vue')
	},
	props: ['propTime'],
	data() {
		return {
			mountedTime: ''
		}
	},
	computed: {
		routeAttrList() {
			return Object.keys(this.$tabRoute).map(key => ({
				key,
				value: this.$tabRoute[key]
			}))
		},
		propAttrList() {
			if (!this.$props) return
			return Object.keys(this.$props).map(key => ({
				key,
				value: this.$props[key]
			}))
		}
	},
	beforeCreate() {
		console.log('beforeCreate')
	},
	created() {
		console.log('created')
	},
	beforeMount() {
		console.log('beforeMount')
	},
	mounted() {
		console.log('mounted')
		// console.log(window.getComputedStyle(this.$el)['width'])
		this.mountedTime = Date.now()
	},
	beforeUpdate() {
		console.log('beforeUpdate')
	},
	updated() {
		console.log('updated')
	},
	beforeDestroy() {
		console.log('beforeDestroy')
	},
	destroyed() {
		console.log('destroyed')
	},
	methods: {
		emit() {
			this.$emit('test', 123, 456)
		}
	}
}
</script>

<style lang="stylus" scoped>
.test
	padding 40px
	.key
		color #888888
	.value
		color #424242
</style>
