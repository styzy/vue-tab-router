export default {
	computed: {
		currentPages() {
			return this.$tabRouter.core.$store.currentPages
		}
	}
}
