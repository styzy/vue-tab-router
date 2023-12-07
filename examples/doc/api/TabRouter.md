# TabRouter 构建选项

## `routes` : `Array<RouteConfig>`

* 默认值：`[]`

* 定义：所有路由的配置列表。

`RouteConfig` 的具体属性请查看<TabRouterLink open="/api/TabRouter/RouteConfig">API TabRouter 构建选项 RouteConfig</TabRouterLink>

## `autoClean` : `Boolean`

* 默认值：`true`

* 定义：是否在所有路由视图销毁时，清空路由视图的缓存数据。

:::warning
考虑到命名视图功能可能带来的过度性能消耗问题，非必要情况下，请不要禁用自动清理缓存功能。
:::

## `logEnable` : `Boolean`

* 默认值：基于当前 `Vue` 的编译环境，当 `process.env.NODE_ENV` 的值为 `'production'` 时为 `false` ，否则为 `true`

* 定义：是否在控制台打印框架异常。
