import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import('@/views/Index.vue')
	},
	{
		path: '/guide',
		name: 'Guide',
		component: () => import('@/views/modules/Guide.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
