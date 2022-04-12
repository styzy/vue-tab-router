<template lang="pug">
component(
	:is="page.component.options"
	:key="page.component.key"
	v-bind="page.route.$props ? page.route.query : {}"
	v-on="listeners"
)
</template>

<script>
export default {
	name: 'TabRouterViewComponent',
	props: {
		page: {
			type: Object
		}
	},
	computed: {
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
		}
	}
}
</script>
