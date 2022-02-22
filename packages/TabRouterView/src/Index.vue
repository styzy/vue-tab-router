<template lang="pug">
.tab-router-view
	component(
		:is='page.component.name'
		:key='page.component.name'
		v-for='page in currentPages'
		v-show='page === currentPage'
	)
</template>

<script>
import { core } from '~/mixins'
import { typeOf } from '#'

export default {
	name: 'TabRouterView',
	mixins: [core],
	props: {
		default: {
			type: [String, Object],
			default: ''
		},
		id: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			componentNameSeed: 0,
			currentPages: []
		}
	},
	computed: {
		useCache() {
			return this.cache !== undefined
		}
	},
	created() {
		this.$watch('pages', async newPages => {
			await Promise.all(
				newPages.map(async newPage => {
					if (
						!this.currentPages.find(
							oldPage => oldPage.id === newPage.id
						)
					) {
						await this.register(newPage)
					}
				})
			)

			this.currentPages = Object.assign([], newPages)
		})
	},
	mounted() {
		if (this.default) {
			this.tabRouterCore.open(this.default)
		}
	},
	methods: {
		createComponentName() {
			return `TabRouterViewComponent${this.componentNameSeed++}`
		},
		// 注册组件
		async register(page) {
			const componentName = this.createComponentName()
			page.component.name = componentName
			if (typeOf(page.route.component) === 'Function') {
				page.component.options = (await page.route.component()).default
			} else {
				page.component.options = page.route.component
			}
			page.component.options.mixins = page.component.options.mixins || []
			page.component.options.mixins.push({
				beforeCreate() {
					page.component.instance = this
				}
			})
			this.$options.components[componentName] = page.component.options
			return page
		}
	},
	destroyed() {
		this.tabRouterCore.reset()
	}
}
</script>
