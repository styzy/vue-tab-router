import Vue from 'vue'
import VueRouter from 'vue-router'
import tabRoutes from './tabRouter'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import('@/views/Index.vue')
	}
]

const router = new VueRouter({
	routes,
	tabRoutes
})

export default router
