export default {
	methods: {
		$error(error) {
			this.$tabRouter.core.$error(`[${this.$options.name}] ${error}`)
		}
	}
}
