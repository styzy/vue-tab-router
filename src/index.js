import Core from './Core'
import components from '../packages'
import './assets/stylus/iconfont.styl'

const version = '0.1.8'
class TabRouter {
	constructor(...args) {
		this.core = new Core(...args)
	}
	open(...args) {
		return this.core.open(...args)
	}
	focus(...args) {
		return this.core.focus(...args)
	}
	reload(...args) {
		return this.core.reload(...args)
	}
	close(...args) {
		return this.core.close(...args)
	}
	closeAll(...args) {
		return this.core.closeAll(...args)
	}
	beforeEach(...args) {
		return this.core.beforeEach(...args)
	}
	afterEach(...args) {
		return this.core.afterEach(...args)
	}
	get NAVIGATE_TYPES() {
		return this.core.NAVIGATE_TYPES
	}
}

TabRouter.version = version

TabRouter.install = function (Vue) {
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

export default TabRouter
