import Vue from 'vue'
import VueTabRouter from '~'
// import VueTabRouter from '/lib/vue-tab-router.common.js'

Vue.use(VueTabRouter)

const isPrd = process.env.NODE_ENV === 'production'

const mainRoutes = [
	{
		title: '介绍',
		path: '/introduce',
		component: () => import(`@/doc/introduce.md`)
	},
	{
		title: '安装',
		path: '/install',
		component: () => import('@/doc/install.md')
	}
]

const giudeRoutes = [
	{
		title: '使用指南',
		path: '/guide',
		component: () => import('@/doc/guide.md')
	},
	{
		title: '创建路由配置',
		path: '/guide/config',
		component: () => import('@/doc/guide/config.md')
	},
	{
		title: '渲染视图',
		path: '/guide/view',
		component: () => import('@/doc/guide/view.md')
	},
	{
		title: '标题视图',
		path: '/guide/titleView',
		component: () => import('@/doc/guide/titleView.md')
	},
	{
		title: '路由导航',
		path: '/guide/navigate',
		component: () => import('@/doc/guide/navigate.md')
	},
	{
		title: '参数传递',
		path: '/guide/query',
		component: () => import('@/doc/guide/query.md')
	},
	{
		title: '编程式的导航',
		path: '/guide/navigateFn',
		component: () => import('@/doc/guide/navigateFn.md')
	},
	{
		title: '事件监听和触发',
		path: '/guide/eventListener',
		component: () => import('@/doc/guide/eventListener.md')
	},
	{
		title: '路由匹配规则',
		path: '/guide/routeMatch',
		component: () => import('@/doc/guide/routeMatch.md')
	},
	{
		title: '导航守卫',
		path: '/guide/defender',
		component: () => import('@/doc/guide/defender.md')
	}
]

const componentRoutes = [
	{
		title: '内置组件',
		path: '/component',
		component: () => import('@/doc/component.md')
	},
	{
		title: 'TabRouterLink',
		path: '/component/TabRouterLink',
		component: () => import('@/doc/component/TabRouterLink.md')
	},
	{
		title: 'TabRouterView',
		path: '/component/TabRouterView',
		component: () => import('@/doc/component/TabRouterView.md')
	},
	{
		title: 'TabRouterTitleBar',
		path: '/component/TabRouterTitleBar',
		component: () => import('@/doc/component/TabRouterTitleBar.md')
	}
]

const apiRoutes = [
	{
		title: 'API',
		path: '/api',
		component: () => import('@/doc/api.md')
	},
	{
		title: 'TabRouter 构建选项',
		path: '/api/TabRouter',
		component: () => import('@/doc/api/TabRouter.md')
	},
	{
		title: 'RouteConfig',
		path: '/api/TabRouter/RouteConfig',
		component: () => import('@/doc/api/TabRouter.RouteConfig.md')
	},
	{
		title: 'TabRouter 实例属性',
		path: '/api/TabRouter/props',
		component: () => import('@/doc/api/TabRouter.props.md')
	},
	{
		title: 'TabRouter 实例方法',
		path: '/api/TabRouter/methods',
		component: () => import('@/doc/api/TabRouter.methods.md'),
		meta: {
			update: true
		}
	},
	{
		title: 'TabRoute 实例属性',
		path: '/api/TabRoute',
		component: () => import('@/doc/api/TabRoute.md')
	},
	{
		title: 'Location',
		path: '/api/Location',
		component: () => import('@/doc/api/Location.md')
	},
	{
		title: '导航类型常量',
		path: '/api/NAVIGATE_TYPES',
		component: () => import('@/doc/api/NAVIGATE_TYPES.md')
	}
]

const devRoute = [
	{
		title: '更新日志',
		path: '/dev/log',
		props: true,
		component: () => import('@/doc/dev/log.md'),
		meta: {
			closeDisabled: true
		}
	}
]

const testRoute = [
	{
		title: 'test2',
		path: '/test2',
		props: true,
		component: () => import('@/views/test/Module2')
	},
	{
		title: 'test',
		path: '/test',
		props: true,
		component: () => import('@/views/test/Module')
	}
]

let routes = mainRoutes
	.concat(giudeRoutes)
	.concat(componentRoutes)
	.concat(apiRoutes)
	.concat(devRoute)

if (!isPrd) {
	routes = testRoute.concat(routes)
}

const tabRouter = new VueTabRouter({
	routes
})

const beforeOpen = (current, target, next) => {
		next()
	},
	beforeClose = (current, target, next) => {
		if (target.meta && target.meta.closeDisabled) {
			next(false)
		} else {
			next()
		}
	},
	beforeFocus = (current, target, next) => {
		next()
	},
	beforeReload = (current, target, next) => {
		next()
	}

tabRouter.beforeEach((type, ...args) => {
	const TYPES = tabRouter.NAVIGATE_TYPES

	switch (type) {
		case TYPES.OPEN:
			return beforeOpen(...args)
		case TYPES.FOCUS:
			return beforeFocus(...args)
		case TYPES.RELOAD:
			return beforeReload(...args)
		case TYPES.CLOSE:
			return beforeClose(...args)
	}
})

export { routes }

export default tabRouter
