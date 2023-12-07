export default {
	methods: {
		$warn(warn) {
			this.$tabRouter.core.$warn(`[${this.$options.name}] ${warn}`)
		}
	}
}
