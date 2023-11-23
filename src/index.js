import Core from './Core'
import components from '../packages'
import './assets/stylus/iconfont.styl'
import { version } from '../package.json'

class TabRouter {
	static get version() {
		return version
	}
	static install(Vue) {
		Object.values(components).forEach(component => {
			Vue.component(component.name, component)
		})

		Vue.mixin({
			beforeCreate() {
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
	$on(...args) {
		return this._core.on(...args)
	}
	$once(...args) {
		return this._core.once(...args)
	}
	$off(...args) {
		return this._core.off(...args)
	}
	getRoutes(...args) {
		return this._core.getRoutes(...args)
	}
}

export default TabRouter
