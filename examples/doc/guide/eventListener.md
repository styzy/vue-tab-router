# 事件监听和触发

`VueTabRouter` 内置了事件的监听器和触发器，用于不同路由视图间进行事件的分发和处理。

## 添加事件监听 tabRouter.$on(location, event, listener, once)

:::tip
事件的监听可以在任何能够访问到 `TabRouter实例` 的地方进行。
:::

```javascript
this.$tabRouter.$on('/user', 'buy', (payload) => {
    console.log(payload)
})

// 一次性监听事件
this.$tabRouter.$on({ name: 'User' }, 'buy', (payload1, payload2) => {
    console.log(payload1)
    console.log(payload2)
}, true)
```

`location` 是监听的路由视图 `Location` 类型对象。用于指定监听对应的路由视图页面。

`event` 是监听的事件名，它是一个 `String` 类型的变量，并且是完全自定义的。

`listener : ([...args])=>{}` 是事件触发时调用的函数，它接收所有事件触发时传递的参数（不限制个数）。

`once` 表示该事件监听是否为一次性，即第一次触发后自动销毁，默认为 `false` 。

## 一次性事件监听 tabRouter.$once(location, event, listener)

实际上 `$once()` 方法内部调用的也是 `$on()` 方法，它本质上只是一个语法糖。

```javascript
this.$tabRouter.$once('/user', 'buy', (payload) => {
    console.log(payload)
})

// 作用相同

this.$tabRouter.$on('/user', 'buy', (payload) => {
    console.log(payload)
}, true)
```

:::danger
所有的监听事件，并不会自动销毁，因此你需要自行控制监听事件的移除时机。比较推荐的方法，是在添加监听的组件的 `destroyed` 生命周期函数内进行事件监听的移除。
:::

## 事件触发 $emit(event, [...args])

只有在路由视图组件内，才可以进行事件的触发。 `VueTabRouter` 框架内部代理了路由视图组件的事件触发功能，即 `$emit()` 方法，因此你可以像触发原生事件一样触发路由视图的事件。

```javascript
this.$emit('buy', 123, 456, 789)
```

`event` 是需要触发的事件名称，其他的参数将全部传递给事件触发函数。

:::warning
请不要在路由视图组件内部对自身进行事件监听，这会导致无意义的性能消耗。
:::

## 移除监听事件 tabRouter.$off(location, event, listener)

和添加事件监听一样，通过 `$off` 方法，可以移除已添加的事件。

```javascript
// 添加
this.$tabRouter.$on('/user', 'buy', this.buyHandler)
// 移除
this.$tabRouter.$off('/user', 'buy', this.buyHandler)
```

除了使用 `$off` 方法对监听事件进行移除，还可以利用添加事件监听方法 `$on` 或 `$once` 的返回值函数来移除监听事件。

添加监听事件方法的返回值是一个函数，用于移除当前添加的事件监听。你可以用变量存储它，在需要的时候移除监听事件。

```javascript
// 监听事件
const removeEventListener = this.$tabRouter.$on('/user', 'buy', (payload) => {
    console.log(payload)
})

// 移除监听
removeEventListener()
```
