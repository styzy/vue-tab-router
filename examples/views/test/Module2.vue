<template lang="pug">
.test 已监听test页面事件
</template>

<script>
export default {
	name: 'TestModule2',
	props: {
		testProp: {
			type: String,
			default: 'a'
		}
	},
	mounted() {
		this.$tabRouter.$on('/test', 'test', this.listener)
	},
	destroyed() {
		// this.$tabRouter.$off('/test', 'test', this.listener)
	},
	focus() {
		console.log('focus')
	},
	blur() {
		console.log('blur')
	},
	methods: {
		listener() {
			console.log('test2 listener')
		}
	}
}
</script>

<style lang="stylus" scoped>
.test
	padding 40px
</style>
