<template lang="pug">
	.tab-router-view
		//- TabContainer
		keep-alive
			component(
				:is='page.route.componentName'
				:key='page.route.componentName'
				v-for='page in pages'
				v-if='page === visitedPage'
			)
</template>

<script>
import Page from './Page'

export default {
	name: 'TabRouterView',
	props: {
		default: {
			type: [String, Object],
			default: ''
		},
		name: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			componentNameSeed: 0,
			routeStore: null,
			pages: [],
			visitedPage: null
		}
	},
	computed: {
		visitedPageRoute() {
			return this.visitedPage.route
		},
		visitedPageIndex() {
			return this.pages.findIndex(page => page === this.visitedPage)
		}
	},
	created() {
		// 对接TabRouter核心
		this.$tabRouter.connect(this, routeStore => {
			this.routeStore = routeStore
		})
		this._registerComponents()
	},
	mounted() {
		// this._defaultOpen()
	},
	methods: {
		// 创建组件唯一名称，用于组件注册
		_createComponentName() {
			return `tab-router-component${this.componentNameSeed++}`
		},
		// 注册组件
		_registerComponents() {
			Object.values(this.routeStore.toArray()).forEach(route => {
				route.componentName = this._createComponentName()
				this.$options.components[route.componentName] = route.component
			})
		},
		_createPage(...args) {
			const page = new Page(...args)
			this.pages.push(page)
			return page
		},
		_focusPage(page) {
			this.visitedPage = page
		},
		_closePage(page, isForce) {
			if (!page.route.closeEnable && !isForce) {
				console.warn('当前页面不允许关闭，可以使用 forceClose 强制关闭')
				return false
			}

			const nextFocusPage = this._getNearbyPage(page)

			if (nextFocusPage) {
				this._focusPage(nextFocusPage)
			}

			this._destroyPage(page)

			return true
		},
		_destroyPage(page) {
			const pageIndex = this.pages.findIndex(_page => _page === page)
			if (pageIndex < 0) return
			this.pages.splice(pageIndex, 1)
		},
		_getPageByRoute(route) {
			return this.pages.find(page => page.route === route)
		},
		_getNearbyPage(page) {
			const pageIndex = this.pages.findIndex(_page => _page === page)
			return this.pages[pageIndex + 1] || this.pages[pageIndex - 1]
		},
		open(location, originLocation) {
			const route = this.routeStore.getByLocation(location)

			if (!route) throw `无法匹配路由，错误的参数:${originLocation}`

			let page = this._getPageByRoute(route)

			if (page) {
				page.updateLocation(location)
				this._focusPage(page)
			} else {
				page = this._createPage(route, location)
				this._focusPage(page)
			}
		},
		close(location, isForce, originLocation) {
			const route = this.routeStore.getByLocation(location)

			if (!route) throw `路由不存在:${originLocation}`

			const page = this._getPageByRoute(route)

			if (!page) {
				console.warn(`当前页面未打开:${originLocation}`)
				return true
			}

			return this._closePage(page, isForce)
		},
		closeAll(isForce) {
			this.pages.forEach(page => {
				this._closePage(page, isForce)
			})
		}
	}
}
</script>

<style lang="stylus"></style>
