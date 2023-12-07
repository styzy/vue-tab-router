# 命名视图

针对同时显示多个标签页视图的复杂场景， `VueTabRouter` 提供了可同时渲染不同且独立标签页视图的命名视图功能。

## 命名视图的路由配置

通过在路由配置列表中给路由添加 `router` 属性，即可指定该路由配置所对应渲染的命名路由视图，该属性未定义时对应的命名视图为 `default` 。

```javascript
const tabRouter = new VueTabRouter({
    routes: [{
        // router属性可指定当前路由的渲染视图名称，默认值为`default`
        router: 'userRouter'
        path: '/user',
        title: '用户',
        component: () => import('@/views/User.vue'),
    }]
})
```

## 渲染视图和标题视图

通过对渲染视图组件 `<TabRouterView>` 和标题视图组件 `<TabRouterTitleBar>` 设置 `name` 属性，可指定该视图组件渲染对应的命名路由路由。

```HTML
// 标签视图
<TabRouterTitleBar name="userRouter">
</TabRouterTitleBar>
// 渲染视图
<TabRouterView name="userRouter">
</TabRouterView>
```

当指定路由视图组件的 `name` 属性之后，将只会渲染对应路由配置的标签页，和路由配置中的 `router` 属性一样， `name` 属性的默认值为 `default` 。
