import Vue from 'vue'
import VueTabRouter from '~'

Vue.use(VueTabRouter)

const routes = [
	{
		path: '/install',
		name: 'Install',
		title: '安装',
		component: () => import('@/views/modules/Install')
	},
	{
		path: '/doc',
		name: 'Doc',
		title: '文档',
		component: () => import('@/views/modules/Doc')
	},
	{
		path: '/guide',
		name: 'Guide',
		title: '介绍',
		component: () => import('@/views/modules/Guide')
	}
]

const tabRouter = new VueTabRouter(routes)

export default tabRouter
