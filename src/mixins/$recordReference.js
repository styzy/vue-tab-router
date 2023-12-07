export default {
	mounted() {
		this.$tabRouter.core.$recordReference(true)
	},
	beforeDestroy() {
		this.$tabRouter.core.$recordReference(false)
	}
}
