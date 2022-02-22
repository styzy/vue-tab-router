<template lang="pug">
.install
	.markdown(v-html='markdown')
	input(v-model='test')
	button(@click='reload()') 刷新
	button(@click='close()') 关闭
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
	mounted() {
		console.log('Install mounted')
		this.test = Date.now()
	},
	destroyed() {
		console.log('Install destroyed')
	},
	activated() {
		console.log('activated: ')
	},
	deactivated() {
		console.log('deactivated: ')
	},
	methods: {
		reload() {
			this.$tabRouter.reload('/install')
		},
		close() {
			this.$tabRouter.close('/install')
		}
	}
}
</script>
