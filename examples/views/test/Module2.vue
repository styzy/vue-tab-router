<template lang="pug">
.test Module2
</template>

<script>
/* eslint-disable */
export default {
	name: 'Module2',
	props: {
		testProp: {
			type: String,
			default: 'a'
		}
	},
	mounted() {
		this.$tabRouter.$on('/module1', 'test', this.listener)
	},
	destroyed() {
		this.$tabRouter.$off('/module1', 'test', this.listener)
	},
	focus() {
		console.log('focus', this)
	},
	blur() {
		console.log('blur', this)
	},
	methods: {
		listener() {
			console.log('test2 listener')
		}
	}
}
</script>

<style lang="stylus" scoped></style>
