class Route {
	constructor({ title = '', name = '', path = '', component, closeEnable = true, meta = {} } = {}) {
		this.defaultTitle = title
		this.name = name
		this.path = path
		this.component = component
		this.closeEnable = closeEnable
		this.meta = meta
		this.componentName = ''
	}
}

export default Route
