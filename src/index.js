import Core from './Core'
import TabRouterLink from '../packages/TabRouterLink'
import TabRouterView from '../packages/TabRouterView'
import TabRouterTitleBar from '../packages/TabRouterTitleBar'
import './assets/stylus/iconfont.styl'

const version = '0.1.2'

const components = [TabRouterLink, TabRouterView, TabRouterTitleBar]

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
}

TabRouter.version = version

TabRouter.install = function (Vue) {
	components.forEach(component => {
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
