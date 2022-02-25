# 使用指南

## 实例化和使用

在你的 `vue` 项目的 `src` 目录中，创建 `tabRouter.js` ，类似 `router.js`

```javascript
//tabRouter.js
import Vue from 'vue'
import VueTabRouter from '@styzy/vue-tab-router'

Vue.use(VueTabRouter)

const routes = [{
    title: '欢迎',
    path: '/helloworld',
    name: 'HelloWorld',
    component: () => import('@/views/HelloWorld.vue')
}]

const tabRouter = new VueTabRouter({
    routes
})

export default tabRouter
```

在 vue 实例化 `main.js` 中使用它

```javascript
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
```

好了，你可以在你的代码中尽情享受 `vue-tab-router` 给你带来的开发乐趣了。
