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
	constructor({ id, route } = {}) {
		this._id = id
		this._route = route
		this._component = {
			name: '',
			options: null,
			instance: null
		}
	}
}

export default Page
