# 参数传递

## 路由对象

在渲染视图直接子组件内，可以通过 `this.$tabRoute` 获取当前组件所对应的路由对象 `TabRoute` 实例

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

> 更多路由对象属性请查看<TabRouterLink open="/api/TabRoute">Api TabRoute 实例属性</TabRouterLink>

## 解耦路由参数

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
