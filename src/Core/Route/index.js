class Route {
	get title() {
		return this._title
	}
	set title(value) {
		if (value === undefined) return
		this._title = value
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
		this._location = location
		const { title, query } = location

		this.title = title
		this._query = query
	}
	constructor({
		title = '',
		name = '',
		path = '',
		component = null,
		props = false,
		meta = {}
	} = {}) {
		this._defaultTitle = title
		this._title = title
		this._name = name
		this._path = path
		this._query = {}
		this._meta = meta
		this._props = !!props
		this._component = component
		this._listeners = {}
		this._location = null
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
