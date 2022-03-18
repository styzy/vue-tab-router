# 事件监听和触发

`VueTabRouter` 内置了事件的监听器和触发器，用于不同路由视图间进行事件的分发和处理。

## 事件监听 tabRouter.on(location, event, listener, once)

```javascript
this.$tabRouter.on('/user', 'buy', (payload) => {
    console.log(payload)
})

// 一次性监听事件
this.$tabRouter.on({ name: 'User' }, 'buy', (payload) => {
    console.log(payload)
}, true)
```

`location` 是监听的路由视图 `Location` 类型对象。用于指定监听对应的路由视图页面。

`event` 是监听的事件名，它是一个 `String` 类型的变量，并且是完全自定义的。

`listener` 是事件触发时调用的函数，它接收一个触发时自定义的参数 `payload` 。

`once` 表示该事件监听是否为一次性，即第一次触发后自动销毁，默认为 `false` 。

:::warning
当你尝试监听一个未渲染视图的事件时，将抛出一个异常，这是为了防止不必要的事件监听造成的性能损耗，因此你应该尽量保证当需要监听的路由视图已经渲染之后，再进行监听。
:::

## 事件触发 tabRouter.emit(location, event, payload)

任何组件内，都可以触发监听的事件。

```javascript
this.$tabRouter.emit('/user', 'bug', 123)
```

你可以自定义一个任意类型的参数 `payload` ，它将被触发事件的函数作为第一个参数接收。

:::tip
当路由视图被关闭时，对其所有的事件监听将被移除，而当你尝试使用 `emit` 触发一个处于未渲染状态路由视图的事件时，控制台将打印警告。

在生产环境中，这是无感知的。
:::

## 移除监听事件

`on()` 方法的返回值是一个函数，用于移除当前添加的事件监听。你可以用变量存储它，在需要的时候移除监听事件。

```javascript
const removeEventListener = this.$tabRouter.on('/user', 'buy', (payload) => {
    console.log(payload)

    // 移除监听
    removeEventListener()
})
```
