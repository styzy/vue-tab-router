# 导航守卫

当路由导航发生变化时，有时我们需要根据业务需求去介入导航，例如登录验证，这时候导航守卫就可以派上用场了 :)

:::tip
与 `vue-router` 的导航守卫不同， `vue-tab-router` 的导航守卫依赖导航类型。
:::

## 全局守卫

顾名思义，全局意味着它将覆盖所有的导航行为。

### 注册全局前置守卫

你可以使用 `tabRouter.beforeEach` 来注册一个全局前置守卫：

```javascript
const tabRouter = new VueTabRouter({
    ...
})

tabRouter.beforeEach((type, current, target, next) => {
    const TYPES = tabRouter.NAVIGATE_TYPES

    switch (type) {
        case TYPES.OPEN:
            ...
            break;
        case TYPES.FOCUS:
            ...
            break;
        case TYPES.RELOAD:
            ...
            break;
        case TYPES.CLOSE:
            ...
            break;
        default:
            ...
            break;
    }
})
```

当一个导航触发时，全局前置守卫按照创建的顺序依次调用。守卫是异步解析执行，在所有守卫 `resolve` 完之前，一直处于等待状态。

每个守卫方法接收4个参数：

* `type: String`: 当前触发导航的类型，请参考<TabRouterLink open="/api/NAVIGATE_TYPES">API 导航类型常量</TabRouterLink>。

* `current: TabRoute`: 触发导航时，当前聚焦的路由对象，如果当前没有渲染的路由，则是`null`。

* `target: TabRoute`: 针对不用的导航类型`type`，它的值有不同含义：
  
  + `NAVIGATE_TYPES.OPEN`：即将渲染的路由对象。
  
  + `NAVIGATE_TYPES.FOCUS`：即将聚焦的路由对象。
  
  + `NAVIGATE_TYPES.RELOAD`：等于`current`的值，建议使用`current`。
 
  + `NAVIGATE_TYPES.CLOSE`：即将关闭的路由对象。

* `next: Function`：守卫的解析的控制方法。

:::tip
请注意，这里的导航类型，并不完全取决于导航的方法名称。

当 `open()` 方法匹配的路由没有渲染时，则会先触发 `NAVIGATE_TYPES.OPEN` 类型的导航，然后再次触发 `NAVIGATE_TYPES.FOCUS` 类型的导航。

而当 `open()` 方法匹配的路由已经渲染时，则不会触发 `NAVIGATE_TYPES.OPEN` 类型的导航，而是 `NAVIGATE_TYPES.FOCUS` 类型的导航。

即：导航类型取决于导航实际的效果。
:::

`next` 方法的参数，可以用来控制守卫和导航处理逻辑：

* `next()`：继续执行下一个守卫，知道所有守卫执行完毕，执行导航。

* `next(false)`：中断当前导航。

::: warning
`next` 方法必须在守卫内被执行，否则会导致导航行为的阻塞。
:::

### 注册全局后置钩子

和前置后卫不同，后置钩子无法干扰和阻止导航（因为当钩子触发时，导航已经结束了 :) ）, 所以不会接受 `next` 函数。

```javascript
tabRouter.afterEach((type, current, target) => {
    const TYPES = tabRouter.NAVIGATE_TYPES

    switch (type) {
        case TYPES.OPEN:
            ...
            break;
        case TYPES.FOCUS:
            ...
            break;
        case TYPES.RELOAD:
            ...
            break;
        case TYPES.CLOSE:
            ...
            break;
        default:
            ...
            break;
    }
})
```

## 局部守卫

:::tip
因为局部守卫的业务意义与 `vue` 组件内置的生命周期函数具有较大的重叠性， `vue-tab-router` 暂不支持局部守卫。
:::
