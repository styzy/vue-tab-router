# 路由导航

## 导航组件

实际开发过程中，有很多地方都需要控制渲染视图的路由，这时就可以用到 `<TabRouterLink>` 导航组件，它是一个内置的全局组件，意味着我们可以在任何地方使用它，以下是一个菜单的导航示例。

### open 打开视图 

```html
<!-- 编译前 -->
<div class="menu">
    <TabRouterLink open="/store">
        <div class="menu-item">商城<div>
    </TabRouterLink>
    <TabRouterLink :open="{ name: 'Order' }">
        <div class="menu-item">订单<div>
    </TabRouterLink>
    <TabRouterLink :open="{ name: 'User' }">
        <div class="menu-item">用户中心<div>
    </TabRouterLink>
</div>

<!-- 编译后 -->
<div class="menu">
    <a>
        <div class="menu-item">商城<div>
    </a>
    <a>
        <div class="menu-item">订单<div>
    </a>
    <a>
        <div class="menu-item">用户中心<div>
    </a>
</div>
```

使用 `open` 属性可以渲染新的标签视图并设置为聚焦状态，当该视图已经处于渲染时，则只会将它聚焦。它的值可以是一个 `String` 类型的 `path` 路径，或是一个 `Location` 类型的对象。

> `Location` 的定义请在<TabRouterLink open="/api/location">API Location</TabRouterLink>查看。

`name` 属性可以匹配命名路由，当 `name` 属性和 `path` 属性同时存在时， `path` 属性将被忽略。

> 详细的匹配规则可以查看<TabRouterLink open="/guide/routeMatch">路由匹配规则</TabRouterLink>。
>  

所有的 `<TabRouterLink>` 都会默认渲染成一个 `a` 标签，尽管它没有 `href` 属性，但还是可以控制 `TabRouterView` 的渲染。（为了防止与 `<router-link>` 发生冲突）

如果你希望 `<TabRouterLink>` 渲染成你希望的标签，你可以使用 `tag` 属性，它可以指定渲染的标签名称。

```html
<!-- 编译前 -->
<TabRouterLink open="/store" tag="span">
    <div class="menu-item">商城<div>
</TabRouterLink>

<!-- 编译后 -->
<span>
    <div class="menu-item">商城<div>
</span>
```

这里我们定义 `tag` 属性的值为 `span` ，所以最终渲染了一个 `span` 标签，点击它同样具有导航的能力。

但仅仅定义渲染的标签名，还无法满足我们的需求，所以 `<TabRouterLink>` 还提供了作用域插槽 `scopedSlot` 的定制化能力。

```html
<TabRouterLink open="/store" tag="span" #default="{ route, navigate, isVisited, isActive }" custom>
    <div class="menu-item" @click="navigate">{{ route.title }}</div>
</TabRouterLink>
```

当我们使用了作用域插槽后， `<TabRouterLink>` 会提供给我们四个参数，分别是 `route` , `navigate` , `isVisited` 和 `isActive` ，这些参数可以帮助我们定制化我们的导航组件。

* `route: Route`：当前组件匹配到的路由信息。具体细节可以查看<TabRouterLink open="/api/route">API Route</TabRouterLink>

* `navigate: Function`：导航函数，执行它会实现 `<TabRouterLink>` 组件内部的导航功能，一般可以绑定在我们自定义的元素时间上，例如 `click` 事件。

* `isVisited: Boolean`：表示当前匹配的路由是否处于聚焦状态。

* `isActive: Boolean`：表示当前匹配的路由是否已经渲染。
  
使用 `isVisited` 和 `isActive` 这两种属性我们可以定制化更多的UI样式。

不知道你是否注意到了，上面 `<TabRouterLink>` 组件还使用了 `cunstom` 属性，当 `cunstom` 属性存在时，导航组件将不会绑定自身点击的导航事件，这意味着你需要自己使用作用域插槽内提供的 `navigate` 参数手动触发导航功能。

:::warning
当你手动触发 `navigate` 导航事件时，请一定要使用 `custom` 属性，否则因为事件的冒泡机制，导航可能会重复执行。
:::

### close 关闭视图

```html
<TabRouterLink :close="{ path: '/store' }">
    <button>关闭商城</button>
</TabRouterLink>
```

使用 `close` 会关闭匹配的路由视图，当无法正确匹配或视图未打开时，开发环境下会在控制台打印一个异常，而在生产环境它是没有感知的。

### reload 刷新视图

```html
<TabRouterLink :reload="{ path: '/store' }">
    <button>刷新商城</button>
</TabRouterLink>
```

使用 `reload` 属性可以重新渲染已经渲染的视图组件，当无法正确匹配或视图未打开时，它和 `close` 属性一样，开发环境下会在控制台打印一个异常，而在生产环境，同样是没有感知的。

::: warning
注意，使用 `reload` 属性会强制重新渲染匹配的视图组件，这会造成不必要的性能消耗。因为 `vue` 内的数据几乎都是响应式的，所以一般情况下，完全有其他方法替代。
:::

### focus 聚焦视图

```html
<TabRouterLink :focus="{ path: '/store' }">
    <button>刷新商城</button>
</TabRouterLink>
```

`focus` 属性会将匹配到的视图组件聚焦显示，就和你点击标题栏的视图标签的效果一样。当无法正确匹配或视图未打开时，它和 `close` 属性一样，开发环境下会在控制台打印一个异常，而在生产环境是没有感知的。

```html
<div class="menu">
    <TabRouterLink :open="{ path: '/store' }">
        <div class="menu-item">商城<div>
    </TabRouterLink>
    <TabRouterLink :open="{ name: 'Order' }">
        <div class="menu-item">订单<div>
    </TabRouterLink>
    <TabRouterLink :open="{ name: 'User', path: '/user' }">
        <div class="menu-item">用户中心<div>
    </TabRouterLink>
</div>
```

### 参数传递

我们先看一下示例。

```html
<TabRouterLink :open="{ name: 'User', path: '/user', query: {id: 1} }">
    <div class="menu-item">用户中心<div>
</TabRouterLink>
```

```javascript
export default {
    name: 'User',
    data() {
        return {
            id: null
        }
    },
    mounted() {
        this.id = this.$tabRoute.query.id
    }
}
```

我想你注意到了 `query` 属性，是的，它和 `vue-router` 路由中的 `query` 一样，用于携带参数，它必须是一个对象类型。

而在渲染视图的根基组件内（即在路由列表中配置的组件），你可以通过 `this.$tabRoute` 获取到当前路由中的 `query` 参数。

至于 `params` 属性，因为标签页路由无法影响到页面的基础路径 `location.href` ，所以被遗弃了。

### 解耦路由参数

如果你熟悉 `vue-router` 的路由传参，你应该知道路由配置列表中 `props` 属性的重要性，是的， `vue-tab-router` 同样支持 `props` 属性! :)

当你的路由配置列表使用了 `props` 属性为 `true` 时， `query` 内的数据，将直接注入到渲染视图组件的 `props` 中(前提是你要先定义组件的 `props` )，这极大地提高了组件的复用性。

我们看一下这个完整的示例：

```javascript
const routes = [{
    name: 'User',
    title: '用户中心',
    props: true,
    component: () => import('@/views/User.vue'),
}]
```

```html
<TabRouterLink :open="{ name: 'User', query: {id: 1} }">
    <div class="menu-item">用户中心<div>
</TabRouterLink>
```

```javascript
export default {
    name: 'User',
    props: {
        id: {
            type: Number,
            default: null
        }
    },
    mounted() {
        console.log(this.id)
    }
}
```

当你通过点击导航的用户中心按钮渲染 `User` 组件之后， `query` 内的 `id` 变量就会自动传递到组件的 `id` 属性中，这完全弥补了使用 `this.$tabRoute` 在代码复用性上的缺陷，极大地提高了组建的通用性。

如果看完了这里，你还希望在你的 `js` 代码中依赖业务逻辑来控制渲染视图的导航，那么你可以继续往下看<TabRouterLink open="/guide/navigateFn">编程式的导航</TabRouterLink>。
