# 创建路由配置

## 定义路由列表

所有的渲染视图基于 `routes` 路由列表渲染，因此，你必须在实例化路由时，在 `routes` 属性中中定义好所有可能出现的路由配置。

```javascript
const tabRouter = new VueTabRouter({
    routes: [{
        name: 'Home',
        path: '/home',
        title: '主页',
        component: () => import('@/views/Home.vue'),
        meta: {
            ignoreLogin: true
        }
    }, {
        name: 'User',
        path: '/user',
        title: '用户',
        props: true,
        component: () => import('@/views/User.vue'),
        meta: {
            ignoreLogin: false
        }
    }, {
        path: '*',
        title: '404',
        component: () => import('@/views/404.vue'),
        meta: {
            ignoreLogin: true
        }
    }]
})
```

### name

`name` 属性的设置让你可以使用命名路由的方式控制渲染。

::: tip
为了保证路由正确的匹配，你应该始终保持 `name` 属性的唯一性。
:::

### path

这里的 `path` 属性不同于 `vue-router` 的 `path` 属性，它仅仅用于 `vue-tab-router` 自身路由匹配，也就是说无论你在这里配置什么地址，都不会影响到 `vue-router` 的路由匹配规则。

当 `path` 属性的值为 `*` 通配符时，表示可以被任意路径匹配，所以你应当将它放在路由列表的末尾，作为所有无法正常匹配路径的后配路由。

`path` 属性只支持精确匹配。

::: tip
为了保证路由正确的匹配，你应该始终保持 `path` 属性的唯一性。
:::

### title

`title` 属性用于渲染每个视图的标签，它并不是固定的，你在每次打开新路由的时候都可以修改它，这里定义的只是默认值。

### props

`props` 属性是一个 `Boolean` 类型，可以通过该属性将 `location` 中的 `query` 参数动态的注入到视图组件的 `props` 属性中，从而实现 `$tabRoute` 的解耦，提高组件的可复用性。

### meta

`meta` 属性允许你定义路由元信息，相当于自定义配置，当你在使用<TabRouterLink open="guide/beforeEach">导航守卫</TabRouterLink>时发挥巨大作用。

<br>

> 所有参数详细信息可以参考<TabRouterLink open="/api/TabRouter/routes" >API TabRouter 构建选项 Routes</TabRouterLink>

## 其他参数

> 其他具体的配置可以在<TabRouterLink open="/api/TabRouter" >API TabRouter 构建选项 </TabRouterLink>查看。
