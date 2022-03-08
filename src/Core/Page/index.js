class Page {
	constructor({ id, route } = {}) {
		this.id = id
		this.route = route
		this.component = {
			name: '',
			options: null,
			instance: null
		}
	}
}

export default Page
