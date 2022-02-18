<template lang="pug">
	.markdown(v-html='markdown')
</template>

<script>
import markdown from '@/assets/markdown/guide.md'
export default {
	name: 'Guide',
	data() {
		return {
			markdown: markdown
		}
	}
}
</script>
