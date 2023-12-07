let routeSeed = 0

class Route {
	get id() {
		return this._id
	}
	get router() {
		return this._router
	}
	get title() {
		return this._title
	}
	get name() {
		return this._name
	}
	get path() {
		return this._path
	}
	get query() {
		return this._query
	}
	get meta() {
		return this._meta
	}
	get $origin() {
		return this._origin
	}
	get $props() {
		return this._props
	}
	get $component() {
		return this._component
	}
	get $listeners() {
		return this._listeners
	}
	get $location() {
		return this._location
	}
	set $location(location) {
		const { title, query } = location

		this._location = location
		this._query = query
		if (title !== undefined) {
			this._title = title
		}
	}
	constructor(origin = {}) {
		const {
			router = 'default',
			title = '',
			name = '',
			path = '',
			component = null,
			props = false,
			meta = {}
		} = origin

		this._id = this.#createId()
		this._router = router
		this._title = title
		this._defaultTitle = title
		this._name = name
		this._path = path
		this._query = {}
		this._meta = meta
		this._origin = origin
		this._props = !!props
		this._component = component
		this._listeners = {}
		this._location = null
	}
	#createId() {
		return `TabRouterRoute-${++routeSeed}`
	}
	$addEventListener(eventListener) {
		const { event } = eventListener

		this._listeners[event] = this._listeners[event] || []
		this._listeners[event].push(eventListener)
	}
	$removeEventListener(event, listener) {
		const listeners = this._listeners[event]

		if (!listeners) return

		listeners.splice(
			listeners.findIndex(
				eventListener => eventListener.listener === listener
			),
			1
		)
	}
	match(location, useWildcard) {
		if (location.name !== undefined) {
			return this.name === location.name
		}

		return this.path === location.path || (useWildcard && this.path === '*')
	}
}

export default Route
