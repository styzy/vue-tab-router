import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tabRouter from './tabRouter'
import store from './store'

import 'github-markdown-css'
import 'vue-cli-plugin-markdown-loader/atom-one-dark.css'
import './assets/stylus/index.styl'
import './assets/stylus/highlight.styl'

Vue.config.productionTip = false

new Vue({
	tabRouter,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
