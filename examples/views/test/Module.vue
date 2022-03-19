<template lang="pug">
.test 
	button(@click="emit") 触发事件
	br
	button(@click="$tabRouter.open('/test1')") 打开另一个标签页
	br
	input(v-model="time")
	h3 route
	p(v-for="routeAttr in routeAttrList")
		span.key {{ routeAttr.key }}：
		span.value {{ routeAttr.value }}
	h3 props
	p(v-for="propAttr in propAttrList")
		span.key {{ propAttr.key }}：
		span.value {{ propAttr.value }}
</template>

<script>
export default {
	name: 'TestModule',
	props: {
		testProp: {
			type: String,
			default: 'a'
		}
	},
	data() {
		return {
			time: Date.now()
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
		this.on()
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
		on() {
			this.$tabRouter.$on('/test', 'toTest1', payload => {
				alert(`toTest1:${payload}`)
			})
		},
		emit() {
			this.$emit('toParent', 123, 456)
			this.$emit('toTest1', 666)
		}
	}
}
</script>

<style lang="stylus" scoped>
.test
	padding 40px
</style>
