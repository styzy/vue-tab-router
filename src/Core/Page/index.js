class Page {
	constructor({ id, route, location }) {
		this.id = id
		this.route = route
		this.location = location
		this.location.syncByRoute(route)
		this.component = {
			name: '',
			options: null,
			instance: null
		}
	}
}

export default Page
