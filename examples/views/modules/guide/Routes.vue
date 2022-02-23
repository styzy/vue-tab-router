<template lang="pug">
div(v-html='markdown')
</template>

<script>
import markdown from '@/assets/markdown/guide/routes.md'
export default {
	name: 'GuideRoute',
	data() {
		return {
			markdown
		}
	}
}
</script>
