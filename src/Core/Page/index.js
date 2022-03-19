import { typeOf } from '#'

class Page {
	get id() {
		return this._id
	}
	get route() {
		return this._route
	}
	get component() {
		return this._component
	}
	get eventListeners() {
		return this._eventListeners
	}
	get insMounted() {
		return this._insMounted
	}
	set insMounted(value) {
		if (typeOf(value) !== 'Function') return

		this._insMounted = value
	}
	get insDestroyed() {
		return this._insDestroyed
	}
	set insDestroyed(value) {
		if (typeOf(value) !== 'Function') return

		this._insDestroyed = value
	}
	constructor({ id, route } = {}) {
		this._id = id
		this._route = route
		this._component = {
			name: '',
			options: null,
			instance: null
		}
		this._eventListeners = []
		this._insMounted = () => {}
		this._insDestroyed = () => {}
	}
	_instanceAddEventListener(eventListener) {
		const instance = this.component.instance
		if (!instance) return

		const { event, listener, once } = eventListener
		if (once) {
			instance.$once(event, listener)
		} else {
			instance.$on(event, listener)
		}
	}
	_instanceRemoveEventListener(eventListener) {
		const instance = this.component.instance
		if (!instance) return

		const { event, listener } = eventListener

		instance.$off(event, listener)
	}
	insBeforeCreate(instance) {
		this._component.instance = instance
		instance.$tabRoute = this.route
	}
	addEventListener(eventListener) {
		eventListener.emitted = () => {
			if (eventListener.once) {
				this.removeEventListener(eventListener)
			}
		}
		this.eventListeners.push(eventListener)
		this._instanceAddEventListener(eventListener)
	}
	removeEventListener(eventListener) {
		const index = this.eventListeners.find(
			_eventListener => _eventListener === eventListener
		)
		if (index === -1) return

		this._instanceRemoveEventListener(eventListener)
		this.eventListeners.splice(index, 1)
	}
	copyEventListeners(eventListeners) {
		eventListeners.forEach(eventListener => {
			this.addEventListener(eventListener)
		})
	}
	cleanEventListener() {
		const eventListeners = Object.assign([], this.eventListeners)

		eventListeners.forEach(eventListener => {
			this.removeEventListener(eventListener)
		})
	}
}

export default Page
