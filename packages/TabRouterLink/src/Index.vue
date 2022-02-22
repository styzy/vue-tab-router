<script>
import { core } from '~/mixins'

export default {
	name: 'TabRouterLink',
	mixins: [core],
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
			return this.tabRouterCore.getRoute(this.open || this.close)
		},
		isActive() {
			return this.tabRouterStore.pages.some(
				page => page.route === this.route
			)
		},
		isVisited() {
			if (!this.tabRouterStore.currentPage) return false
			return this.tabRouterStore.currentPage.route === this.route
		}
	},
	mounted() {
		if (
			(this.open === undefined && this.close === undefined) ||
			(this.open !== undefined && this.close !== undefined)
		) {
			this.errorHandler('open和close不可同时为空或同时出现')
		}
	},
	methods: {
		link() {
			this.$tabRouter[this.open ? 'open' : 'close'](
				this.open || this.close
			)
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
			this.$scopedSlots.default({
				route: this.route,
				navigate: () => this.link(),
				isActive: this.isActive,
				isVisited: this.isVisited
			})
		)
	}
}
</script>
