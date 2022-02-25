export default {
	data() {
		return {
			core: null,
			store: null
		}
	},
	beforeCreate() {
		this.$trCore = this.$tabRouter.core
		this.$trStore = this.$tabRouter.core.store
	},
	computed: {
		routes() {
			return this.$trStore.routes
		},
		pages() {
			return this.$trStore.pages
		},
		currentPage() {
			return this.$trStore.currentPage
		}
	},
	methods: {
		$error(error) {
			this.$trCore.$error(`[${this.$options.name}] ${error}`)
		},
		$warn(warn) {
			this.$trCore.$warn(`[${this.$options.name}] ${warn}`)
		}
	}
}
