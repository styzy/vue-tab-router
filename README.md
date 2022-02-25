# vue-tab-router

> 一款支持 Vue.js 2.x 版本的标签页路由框架

`vue-tab-router` 是一款适用于 `vue2` 的标签页路由插件，通过简单地安装和配置，开发者可以获得类似于 `vue-router` 路由的开发体验。

`vue-tab-router` 具有部署方便、可自由扩展、可针对需求二次开发的优点，内置的API满足大部分的开发需求。

## 安装

### npm

```
npm install -S @styzy/vue-tab-router
```

## 使用

### 引入

在你的 vue 项目的 `src` 目录中，创建 `tabRouter.js` ，类似 `router.js`

```es6
//tabRouter.js
import Vue from 'vue'
import VueTabRouter from '@styzy/vue-tab-router'

Vue.use(VueTabRouter)

const routes = [
	{
		title: '欢迎',
		path: '/helloworld',
		name: 'HelloWorld',
		component: () => import('@/views/HelloWorld.vue')
	}
]

const tabRouter = new VueTabRouter({
	routes
})

export default tabRouter
```

在 vue 实例化 `main.js` 中使用它

```es6
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

## 文档

所有的使用教程和 API 可以通过 [官方文档](http://vue-tab-router.styzy.cn) 进行查看

## 示例

所有的示例已经集成在了 [官方文档](http://vue-tab-router.styzy.cn) 中。
