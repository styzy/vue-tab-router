import CONSTANTS from './CONSTANTS'
import TabRouter from '../packages/TabRouter'
import TabRouterLink from '../packages/TabRouterLink'
import TabRouterView from '../packages/TabRouterView'

const components = [TabRouterLink, TabRouterView]

TabRouter.version = CONSTANTS.VERSION

TabRouter.install = function (Vue) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})

	Vue.mixin({
		beforeCreate() {
			if (this.$options.tabRouter && this.$options.tabRouter instanceof TabRouter) {
				Vue.prototype.$tabRouter = this.$options.tabRouter
			}
		}
	})
}
export default TabRouter
