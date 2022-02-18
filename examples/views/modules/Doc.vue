<template lang="pug">
	.markdown(v-html='markdown')
</template>

<script>
import markdown from '@/assets/markdown/doc.md'
export default {
	name: 'Doc',
	data() {
		return {
			markdown: markdown
		}
	}
}
</script>
