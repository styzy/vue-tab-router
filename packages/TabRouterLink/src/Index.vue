<script>
export default {
	name: 'TabRouterLink',
	props: {
		to: {
			type: [String, Object],
			default: ''
		},
		tag: {
			type: String,
			default: 'a'
		}
	},
	data() {
		return {
			route: null
		}
	},
	created() {
		// 对接TabRouter核心
		this.$tabRouter.connect(this, route => {
			this.route = route
			console.log('route: ', route)
		})
	},
	methods: {
		link() {
			this.$tabRouter.open(this.to)
		}
	},
	render(createElement) {
		return createElement(
			this.tag,
			{
				on: {
					click: this.link
				}
			},
			this.$slots.default.length > 1
				? createElement('span', this.$slots.default)
				: this.$scopedSlots.default({
						// route:this.
				  })
		)
	}
}
</script>

<style lang="stylus"></style>
