<script>
import { pages, currentPages, $getRouteByLocation, $warn } from '~/mixins'

export default {
	name: 'TabRouterLink',
	mixins: [pages, currentPages, $getRouteByLocation, $warn],
	props: {
		open: {
			type: [String, Object],
			default: undefined
		},
		close: {
			type: [String, Object],
			default: undefined
		},
		tag: {
			type: String,
			default: 'a'
		},
		custom: {
			default: undefined
		}
	},
	computed: {
		route() {
			return this.$getRouteByLocation(this.close || this.open || '') || {}
		},
		isActive() {
			return this.pages.some(page => page.route === this.route)
		},
		isVisited() {
			return this.route === this.currentPages[this.route.router]?.route
		}
	},
	mounted() {
		if (this.open === undefined && this.close === undefined) {
			this.$warn('open和close不建议同时为空，因为这没有意义')
		}
		if (this.open !== undefined && this.close !== undefined) {
			this.$warn(
				'open和close不建议同时存在，尽管当close存在时，open将被忽略，但这会导致代码逻辑混乱'
			)
		}
	},
	methods: {
		link() {
			if (this.close) {
				this.$tabRouter.close(this.close)
				return
			}
			if (this.open) {
				this.$tabRouter.open(this.open)
				return
			}
		}
	},
	render(createElement) {
		return createElement(
			this.tag,
			{
				on: {
					click: () => {
						if (this.$props.custom !== undefined) return
						this.link()
					}
				}
			},
			this.$scopedSlots.default
				? this.$scopedSlots.default({
						route: this.route,
						navigate: () => this.link(),
						isActive: this.isActive,
						isVisited: this.isVisited
				  })
				: ''
		)
	}
}
</script>
