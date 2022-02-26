# 标签视图

## 使用标题栏组件

所有渲染视图内渲染的组件的标签，都会在标题栏组件 `<TabRouterTitleBar>` 内显示，它是一个内置组件，已经自动全局注册，所以你只需要直接使用即可。

```html
// 标签视图
<TabRouterTitleBar>
</TabRouterTitleBar>
// 渲染视图
<TabRouterView>
</TabRouterView>
```

`<TabRouterTitleBar>` 组件会自动渲染当前所有渲染视图对应的标题标签，所有样式都已经预置，因此你可以直接这样使用，没有任何问题。

### 自定义标签组件

如果你需要定制每个标题的样式，可以使用插槽或作用域插槽来实现。

```html
// 普通插槽
<TabRouterTitleBar>
    <template #title>
        <div class="title">标签</div>
    </template>
</TabRouterTitleBar>

// 作用域插槽
<TabRouterTitleBar>
    <template #title="{ route, focus, reload, close, isVisited }">
        <div class="title" @click="focus">{{ route.title }}</div>
        <div class="close" @click="close">关闭</div>
    </template>
</TabRouterTitleBar>
```

因为渲染的视图是同时存在多个的，所以插槽模板会被 `<TabRouterTitleBar>` 组件内部循环渲染。

`#title` 作用域插槽接收5个参数：

* `route: TabRoute`：当前路由信息，具体细节可以查看<TabRouterLink open="/api/TabRoute">API TabRoute</TabRouterLink>

* `focus: Function`：导航方法，触发聚焦效果

* `reload: Function`：导航方法，触发刷新效果

* `close: Function`：导航方法，触发关闭效果

* `isVisited: Boolean`：一个响应式的 `Boolean` 类型变量，它表示当前渲染的标题对应的视图是否处于聚焦状态，用于标题样式的区分。

## 右键菜单

`<TabRouterTitleBar>` 组件内置了每个标题的右键菜单，无需任何配置。

### 定制化右键菜单

当你需要自定义右键菜单时，需要使用插槽或作用域插槽。

```html
// 普通插槽
<TabRouterTitleBar>
    <template #contextmenu>
        <div class="contextmenu">
            <div class="menu">自定义菜单1</div>
            <div class="menu">自定义菜单2</div>
        </div>
    </template>
</TabRouterTitleBar>

// 作用域插槽
<TabRouterTitleBar>
    <template #contextmenu="{ route, focus, reload, close, isVisited }">
        <div class="contextmenu">
            <div class="menu" @click="focus">聚焦 {{ route.title }}</div>
            <div class="menu" @click="reload">刷新 {{ route.title }}</div>
            <div class="menu" @click="close">关闭 {{ route.title }}</div>
            <div class="menu">{{ route.title }}聚焦状态：{{ isVisited }}</div>
        </div>
    </template>
</TabRouterTitleBar>
```

作用域插槽 `#contextmenu` 内提供的参数和自定义标题的作用域插槽 `#title` 是同样的，依据触发 `contextmenu` 事件的菜单，动态注入对应的数据。

> 更多细节请查看<TabRouterLink open="/component/TabRouterTitleBar">内置组件 TabRouterTitleBar</TabRouterLink>
