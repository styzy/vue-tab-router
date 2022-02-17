import TabRouter from './TabRouter'
import TabRouterView from './TabRouterView'

const version = '0.0.1',
	components = [TabRouterView]

const install = function (Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})

	Vue.prototype.$tabRouter = TabRouter
}

export default {
	version,
	install
}
