# 渲染视图

## 使用路由视图组件

所有在路由配置中引入的组件，最终都会在路由视图组件 `<TabRouterView>` 内进行渲染，它是一个内置组件，已经自动全局注册，所以你只需要直接使用即可。

```html
<template>
    <div class="hello">hello</div>
    <div class="body">
        // 可以使用在任何地方
        <TabRouterView default="/home"></TabRouterView>
    </div>
</template>
```

::: tip
为了保证页面性能，你应该尽量使只有一个 `<TabRouterView>` 处于渲染状态，即在同一个组件中，只使用一个 `<TabRouterView>` 组件 。如果你需要在不同的 `vue-router` 视图页面使用，请尽量不要在 `<router-view>` 外部使用 `<keep-alive>` 组件，特殊的需求可以结合插槽实现。
:::

`default` 属性可以设置默认打开的路由，它的值是一个 `Location` 类型的变量，具体参数可以参考<TabRouterLink open="/api/Location">API Location</TabRouterLink>

> 想要了解 `<TabRouterView>` 组件的更多详细信息，请查看<TabRouterLink open="/component/TabRouterView">内置组件 TabRouterView </TabRouterLink>
