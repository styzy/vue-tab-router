import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const isPrd = process.env.NODE_ENV === 'production'

let routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import('@/views/Index')
	}
]

const devRoutes = [
	{
		path: '/test',
		name: 'Test',
		component: () => import('@/views/test/Index')
	}
]

if (!isPrd) {
	routes = routes.concat(devRoutes)
}

const router = new VueRouter({
	routes
})

export default router
