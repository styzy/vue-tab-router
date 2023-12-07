# TabRouterView

## 描述

`<TabRouterView>` 组件用于渲染路由视图。

## Props 属性

### `name` : String

通过设置 `name` 属性，可以指定 `<TabRouterView>` 组件渲染对应名称的命名视图的视图，默认值为 `default` 。

### `default` : String | Location

通过设置 `default` 属性，可以指定 `<TabRouterView>` 组件渲染时，自动打开的初始路由视图，它的值可以是一个 `String` 类型的 `path` ，或者完整的 `Location` 类型的对象。
