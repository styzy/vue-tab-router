import Core from './Core'
import components from '../packages'
import { GLOBAL_INJECTS } from './Core/CONSTANTS'
import PACKAGE_JSON from '../package.json'
import './assets/stylus/iconfont.styl'

class TabRouter {
	static get version() {
		return PACKAGE_JSON.version
	}
	static install(Vue) {
		Object.values(components).forEach(component => {
			Vue.component(component.name, component)
		})

		Vue.mixin({
			inject: {
				$tabRoute: {
					from: GLOBAL_INJECTS.ROUTE,
					default: null
				}
			},
			beforeCreate() {
				if (this.$root !== this) return

				if (
					this.$options.tabRouter &&
					this.$options.tabRouter instanceof TabRouter
				) {
					Vue.prototype.$tabRouter = this.$options.tabRouter
				}
			}
		})
	}
	get core() {
		return this._core
	}
	get NAVIGATE_TYPES() {
		return this._core.NAVIGATE_TYPES
	}
	get currentRoutes() {
		return this._core.$getCurrentRoutes()
	}
	constructor(...args) {
		this._core = new Core(...args)
	}
	open(...args) {
		return this._core.open(...args)
	}
	focus(...args) {
		return this._core.focus(...args)
	}
	reload(...args) {
		return this._core.reload(...args)
	}
	close(...args) {
		return this._core.close(...args)
	}
	closeAll(...args) {
		return this._core.closeAll(...args)
	}
	beforeEach(...args) {
		return this._core.beforeEach(...args)
	}
	afterEach(...args) {
		return this._core.afterEach(...args)
	}
	getRoutes(...args) {
		return this._core.getRoutes(...args)
	}
	getActiveRoutes(...args) {
		return this._core.getActiveRoutes(...args)
	}
	$on(...args) {
		return this._core.on(...args)
	}
	$once(...args) {
		return this._core.once(...args)
	}
	$off(...args) {
		return this._core.off(...args)
	}
}

export default TabRouter
