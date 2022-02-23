<template lang="pug">
div(v-html='markdown')
</template>

<script>
import markdown from '@/assets/markdown/guide/index.md'
export default {
	name: 'Guide',
	data() {
		return {
			markdown
		}
	}
}
</script>
