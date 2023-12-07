import Component from '../Component'

let pageSeed = 0

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
	constructor(route) {
		this._id = this.#createId()
		this._route = route
		this._component = new Component(route)
		this._eventListeners = []
	}
	#createId() {
		return `TabRouterPage-${++pageSeed}`
	}
}

export default Page
