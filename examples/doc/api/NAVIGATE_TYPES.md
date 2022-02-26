# NAVIGATE_TYPES 导航类型常量

你并不需要关心每个常量的值，只需要记住它们所对应的逻辑含义，当你使用导航守卫的时候，它们将发挥作用。

## 使用方式

常量被挂载在 `tabRouter` 实例的 `NAVIGATE_TYPES` 属性上，因此你在任何地方几乎都可以获取到。

::: danger
无论在任何时候，请不要尝试修改 `NAVIGATE_TYPES` 常量内的具体值，而是将它当做唯一的变量去使用。
:::

## 常量列表

### `NAVIGATE_TYPES.OPEN`

用于路由视图新的渲染。

### `NAVIGATE_TYPES.FOCUS`

用于路由视图的聚焦。

### `NAVIGATE_TYPES.RELOAD`

用于路由视图的重渲染。

### `NAVIGATE_TYPES.CLOSE`

用于路由视图的关闭（销毁）。
