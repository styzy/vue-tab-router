<template lang="pug">
	.install
		.markdown(v-html='markdown')
		input(v-model='test')
		button(@click='testClick()') test
</template>

<script>
import markdown from '@/assets/markdown/install.md'
export default {
	name: 'Install',
	data() {
		return {
			markdown: markdown,
			test: ''
		}
	},
	mounted() {},
	methods: {
		testClick() {
			this.$tabRouter.close('/guide')
		}
	}
}
</script>
