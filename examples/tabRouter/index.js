import Vue from 'vue'
import VueTabRouter from '~'

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
		title: '标签视图',
		path: '/guide/titleView',
		component: () => import('@/doc/guide/titleView.md')
	},
	{
		title: '路由导航',
		path: '/guide/navigate',
		component: () => import('@/doc/guide/navigate.md')
	},
	{
		title: '编程式的导航',
		path: '/guide/navigateFn',
		component: () => import('@/doc/guide/navigateFn.md')
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

const apiRoutes = [
	{
		title: 'API',
		path: '/api',
		component: () => import('@/doc/api.md')
	},
	{
		title: 'TabRouter 构建选项',
		path: '/api/router',
		component: () => import('@/doc/api/router.md')
	},
	{
		title: 'routes',
		path: '/api/router/routes',
		component: () => import('@/doc/api/router.routes.md')
	},
	{
		title: 'Route',
		path: '/api/route',
		component: () => import('@/doc/api/route.md')
	},
	{
		title: 'Location',
		path: '/api/location',
		component: () => import('@/doc/api/location.md')
	},
	{
		title: '导航类型常量',
		path: '/api/NAVIGATE_TYPES',
		component: () => import('@/doc/api/NAVIGATE_TYPES.md')
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

const testRoute = [
	{
		title: 'test',
		path: '/test',
		props: true,
		component: () => import('@/views/test/Module')
	}
]

let routes = mainRoutes
	.concat(giudeRoutes)
	.concat(apiRoutes)
	.concat(componentRoutes)

if (!isPrd) {
	routes = testRoute.concat(routes)
}

const tabRouter = new VueTabRouter({
	routes,
	logEnable: !isPrd
})

const removeBeforeEach = tabRouter.beforeEach((type, current, target, next) => {
	console.log('beforeEach:')
	console.log(
		`${type}: ${current ? current.path : ''}  -->  ${
			target ? target.path : ''
		}`
	)
	next()
})

removeBeforeEach()

const removeAfterEach = tabRouter.afterEach((type, current, target) => {
	console.log('afterEach:')
	console.log(
		`${type}: ${current ? current.path : ''}  -->  ${
			target ? target.path : ''
		}`
	)
})

removeAfterEach()

export { routes }

export default tabRouter
