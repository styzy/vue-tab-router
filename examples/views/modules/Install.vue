<template lang="pug">
//- div(v-html='markdown')
.a
	markdowm
</template>

<script>
import markdown from '@/assets/markdown/install.md'

export default {
	name: 'Install',
	components: {
		markdowm: markdown
	}
	// data() {
	// 	return {
	// 		markdown
	// 	}
	// }
}
</script>
