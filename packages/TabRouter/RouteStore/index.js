import Route from '../Route'
import Location from '../Location'

class RouteStore {
	constructor(_routes) {
		this.store = {}

		_routes.forEach(_route => {
			const route = new Route(_route)
			if (this.store[route.name]) throw `路由name属性不可重复:${route.name}`
			this.store[route.name] = route
		})
	}
	toArray() {
		return Object.values(this.store)
	}
	getByLocation(location) {
		if (!(location instanceof Location)) return
		return this.getByName(location.name) || this.getByPath(location.path)
	}
	getByName(name = '') {
		return this.store[name]
	}
	getByPath(path = '') {
		return this.toArray().find(route => route.path === path)
	}
}

export default RouteStore
