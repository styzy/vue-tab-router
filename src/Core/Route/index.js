class Route {
	constructor({
		title = '',
		name = '',
		path = '',
		component,
		meta = {}
	} = {}) {
		this.defaultTitle = title
		this.name = name
		this.path = path
		this.component = component
		this.meta = meta
	}
}

export default Route
