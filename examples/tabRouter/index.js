import Vue from 'vue'
import VueTabRouter from '~'

Vue.use(VueTabRouter)

const routes = [
	{
		path: '/introduce',
		name: 'Introduce',
		title: '介绍',
		component: () => import('@/views/modules/Introduce')
	},
	{
		path: '/install',
		name: 'Install',
		title: '安装和使用',
		component: () => import('@/views/modules/Install')
	},
	{
		path: '/guide',
		name: 'Guide',
		title: '使用指南',
		component: () => import('@/views/modules/guide/Index')
	},
	{
		path: '/guide/routes',
		name: 'GuideRoutes',
		title: '使用指南',
		component: () => import('@/views/modules/guide/Routes')
	}
]

const tabRouter = new VueTabRouter(routes)

export default tabRouter
