import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tabRouter from './tabRouter'
import store from './store'

Vue.config.productionTip = false

new Vue({
	tabRouter,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
