# 编程式的导航

除了使用 `<TabRouterLink>` 创建 `a` 标签来定义导航链接，我们还可以借助 `tabRouter` 的实例方法，通过编写代码来实现。

## tabRouter.open(location)

:::tip
在 `Vue` 实例中，路由实例被挂载在 `Vue` 的原型中，所以你可以通过 `$tabRouter` 来访问路由实例，比如 `this.$tabRouter.open` 。
:::

具体的使用方法可以参考下方示例：

```javascript
// 直接传入path字符串
tabRouter.open('/user')

// 以对象形式
tabRouter.open({
    path: '/user'
})

// 使用命名路由
tabRouter.open({
    name: 'User'
})

// 使用命名路由
tabRouter.open({
    name: 'Store',
    query: {
        id: 1
    }
})
```

`tabRouter.open` 方法可以渲染一个视图路由的组件，并将它聚焦（如果已经打开，只会聚焦）。 `<TabRouterLink>` 内部也是基于这个方法去实现的，所以他们两个可以看做是相等的，包括 `loaction` 参数。

当 `name` 属性和 `path` 属性同时存在时， `path` 属性将被忽略。

> 详细的匹配规则可以查看<TabRouterLink open="/guide/routeMatch">路由匹配规则</TabRouterLink>。
>  

:::tip
为了防止匹配逻辑混乱，你应该避免使用同时使用 `name` 属性和 `path` 属性
:::

`query` 属性会将参数传递给路由渲染的子组件内部，通过 `this.$tabRoute.query` 可以访问。

## tabRouter.close(location)

```javascript
tabRouter.close({
    path: '/user'
})

tabRouter.close({
    name: 'User',
    query: {
        id: 1
    }
})
```

`tabRouter.close` 可以将已渲染的路由视图组件关闭，这意味着组件将被完全销毁，会触发 `beforeDestroy` 和 `destroyed` 生命周期钩子函数。

`tabRouter.close` 的返回值同样是一个 `Promise` 类型的对象。

## tabRouter.focus(location)

```javascript
tabRouter.focus({
    path: '/user'
})
```

`tabRouter.focus` 可以将匹配的已渲染的路由视图组件聚焦，如果匹配的组件未渲染或已经处于聚焦状态，则不会发生任何变化。

`tabRouter.focus` 的返回值同样是一个 `Promise` 类型的对象。

## tabRouter.reload(location)

```javascript
tabRouter.reload({
    path: '/user'
})
```

`tabRouter.reload` 可以将匹配的已渲染的路由视图组件重新渲染，这将使组件完全重新加载，包括所有的生命周期函数会被重新触发。如果匹配的组件未渲染或已经处于聚焦状态，则不会发生任何变化。

`tabRouter.reload` 的返回值同样是一个 `Promise` 类型的对象。

::: warning
注意，使用 `reload` 属性会强制重新渲染匹配的视图组件，这会造成不必要的性能消耗。因为 `vue` 内的数据几乎都是响应式的，所以一般情况下，完全有其他方法替代。
:::

## tabRouter.closeAll()

```javascript
tabRouter.closeAll()
```

`tabRouter.closeAll` 可以将已渲染的所有路由视图组件全部关闭，所有的组件都会触发 `beforeDestroy` 和 `destroyed` 生命周期钩子函数。

`tabRouter.closeAll` 的返回值同样是一个 `Promise` 类型的对象。

## 回调函数

因为回调函数会导致代码逻辑复杂，过度使用更会使代码失去可读性（回调地狱），所以上面所有方法不支持回调函数，但作为替代，上面所有方法的返回值都是一个 `Promise` 类型的对象，这意味着你可以通过 `async/await` 去执行它。 :-P
