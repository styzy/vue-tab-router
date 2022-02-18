class Page {
	constructor(route, location) {
		this.route = route
		this.location = location.syncByRoute(route)
		this.component = null
	}
	updateLocation(location) {
		this.location.update(location)
	}
	refresh() {
		// TODO 组件刷新
	}
	destory() {
		// TODO 组件销毁
	}
}

export default Page
