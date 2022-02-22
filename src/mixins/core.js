export default {
	data() {
		return {
			core: null,
			store: null
		}
	},
	created() {
		this.tabRouterCore = this.$tabRouter.core
		this.tabRouterStore = this.$tabRouter.core.store
	},
	computed: {
		routes() {
			return this.tabRouterStore.routes
		},
		pages() {
			return this.tabRouterStore.pages
		},
		currentPage() {
			return this.tabRouterStore.currentPage
		}
	},
	methods: {
		errorHandler(error) {
			this.tabRouterCore.errorHandler(`[${this.$options.name}] ${error}`)
		}
	}
}
