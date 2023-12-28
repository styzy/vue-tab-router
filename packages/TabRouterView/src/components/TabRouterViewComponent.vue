<template lang="pug">
.tab-router-view-component-wrapper(v-show="isVisited")
	component(
		:is="page.component.options"
		:key="page.component.key"
		@hook:created="handleComponentCreated"
		@hook:destroyed="handleComponentDestroyed"
		@hook:mounted="handleComponentMounted"
		ref="component"
		v-bind="page.route.$props ? page.route.query : {}"
		v-on="listeners"
	)
</template>

<script>
import { currentPages } from '~/mixins'
import { GLOBAL_INJECTS } from '~/Core/CONSTANTS'

export default {
	name: 'TabRouterViewComponent',
	mixins: [currentPages],
	provide() {
		return {
			[GLOBAL_INJECTS.ROUTE]: this.page.route
		}
	},
	props: {
		page: {
			type: Object
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
		},
		componentIns() {
			return this.page.component.instance
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
		handleVisitedChange() {
			if (!this.componentIns) return

			const hook =
				this.componentIns.$options[this.isVisited ? 'focus' : 'blur']

			hook && hook.call(this.componentIns)
		},
		handleComponentCreated() {
			this.page.component.$setInstance(this.$refs.component)
		},
		handleComponentMounted() {
			this.page.component.$getHook('mounted')?.()
		},
		handleComponentDestroyed() {
			this.page.component.$getHook('destroyed')?.()
		}
	}
}
</script>

<style lang="stylus" scoped>
.tab-router-view-component-wrapper
	overflow-y auto
	height 100%
</style>
