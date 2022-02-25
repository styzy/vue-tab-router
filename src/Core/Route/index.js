class Route {
	constructor({
		title = '',
		name = '',
		path = '',
		component,
		props = false,
		meta = {}
	} = {}) {
		this._defaultTitle = title
		this.name = name
		this.path = path
		this.meta = meta
		this.component = component
		this.props = !!props
		this.query = {}
		this.title = title
		this.location = null
	}
	_updateTitle(title) {
		if (title === undefined) return
		this.title = title
	}
	_updateQuery(query) {
		this.query = query
	}
	updateLocation(location) {
		this.location = location
		const { title, query } = location
		this._updateTitle(title)
		this._updateQuery(query)
	}
	match(location, useWildcard) {
		if (location.name !== undefined) {
			return this.name === location.name
		}

		return this.path === location.path || (useWildcard && this.path === '*')
	}
}

export default Route
