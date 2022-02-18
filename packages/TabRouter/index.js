import RouteStore from './RouteStore'
import Location from './Location'
class TabRouter {
	constructor(_routes = []) {
		try {
			this._open = null
			this._close = null
			this._closeAll = null
			this._routeStore = new RouteStore(_routes)
		} catch (error) {
			this._errorHandler(error)
		}
	}
	_errorHandler(error) {
		console.error(`[TabRouter Error] ${error}`)
	}
	_connectRouterView({ open, close, closeAll, default: defaultLocation }, callback) {
		this._open = open
		this._close = close
		this._closeAll = closeAll
		this._defaultLocation = defaultLocation
		callback && callback(this._routeStore)
		this._defaultOpen()
	}
	_connectRouterLink({ to }, callback) {
		console.log('to: ', to)
	}
	_defaultOpen() {
		try {
			const location = new Location(this._defaultLocation)
			return this._open(location, this._defaultLocation)
		} catch (error) {
			this._errorHandler(`[defaultOpen] ${error}`)
		}
	}
	// 连接内置组件，实现数据共享
	connect(vm, ...args) {
		try {
			const { name } = vm.$options
			switch (name) {
				case 'TabRouterView':
					return this._connectRouterView(vm, ...args)
				case 'TabRouterLink':
					return this._connectRouterLink(vm, ...args)
				default:
					throw `非法组件连接：${name}`
			}
		} catch (error) {
			this._errorHandler(`[connect] ${error}`)
		}
	}
	open(location = '') {
		try {
			return this._open(new Location(location), location)
		} catch (error) {
			this._errorHandler(`[open] ${error}`)
		}
	}
	close(location = '', isForce = false) {
		try {
			return this._close(new Location(location), isForce, location)
		} catch (error) {
			this._errorHandler(`[close] ${error}`)
		}
	}
	closeAll(isForce = false) {
		try {
			return this._closeAll(isForce)
		} catch (error) {
			this._errorHandler(`[closeAll] ${error}`)
		}
	}
}

export default TabRouter
