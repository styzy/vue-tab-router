<template lang="pug">
.guide {{ test }}
	.markdown(v-html='markdown')
</template>

<script>
import markdown from '@/assets/markdown/guide.md'
export default {
	name: 'Guide',
	data() {
		return {
			test: '',
			markdown: markdown
		}
	},
	mounted() {
		console.log('guide mounted')
		this.test = Date.now()
	},
	destroyed() {
		console.log('guide destroyed')
	}
}
</script>
