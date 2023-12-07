import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tabRouter from './tabRouter'
import store from './store'
import Tip from './components/Tip.vue'

import 'github-markdown-css'
import 'highlight.js/styles/atom-one-dark.css'
import 'vue-cli-plugin-markdown-loader/atom-one-dark.fixed.css'

import './assets/stylus/index.styl'
import './assets/stylus/markdown.styl'

Vue.config.productionTip = false

Vue.prototype.isPrd = process.env.NODE_ENV === 'production'

Vue.component(Tip.name, Tip)

new Vue({
	tabRouter,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
