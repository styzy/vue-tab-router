<template lang="pug">
.tab-router-view-component-wrapper(v-show="isVisited")
	component(
		:is="page.component.options"
		:key="page.component.key"
		@hook:mounted="componentMounted"
		ref="component"
		v-bind="page.route.$props ? page.route.query : {}"
		v-on="listeners"
	)
</template>

<script>
import { currentPages } from '~/mixins'

export default {
	name: 'TabRouterViewComponent',
	mixins: [currentPages],
	props: {
		page: {
			type: Object
		}
	},
	data() {
		return {
			componentIns: null
		}
	},
	computed: {
		isVisited() {
			return this.page === this.currentPages[this.page.route.router]
		},
		listeners() {
			const eventListeners = this.page.route.$listeners,
				listeners = {}

			for (const event in eventListeners) {
				if (eventListeners.hasOwnProperty.call(eventListeners, event)) {
					listeners[event] = (...args) => {
						this.listenerHandler(eventListeners[event], ...args)
					}
				}
			}

			return listeners
		}
	},
	watch: {
		isVisited() {
			this.handleVisitedChange()
		}
	},
	methods: {
		listenerHandler(eventListeners, ...args) {
			const needRemoveEventListener = []

			eventListeners.forEach(eventListener => {
				const { listener, once } = eventListener
				listener(...args)

				if (once) {
					needRemoveEventListener.push(eventListener)
				}
			})

			this.removeEventListener(needRemoveEventListener)
		},
		removeEventListener(eventListeners) {
			eventListeners.forEach(({ event, listener }) => {
				this.page.route.$removeEventListener(event, listener)
			})
		},
		componentMounted() {
			this.componentIns = this.$refs.component
		},
		handleVisitedChange() {
			if (!this.componentIns) return

			const hook =
				this.componentIns.$options[this.isVisited ? 'focus' : 'blur']

			hook && hook.call(this.componentIns)
		}
	}
}
</script>

<style lang="stylus" scoped>
.tab-router-view-component-wrapper
	overflow-y auto
	height 100%
</style>
