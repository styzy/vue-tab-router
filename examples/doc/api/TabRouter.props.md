# TabRouter 实例属性

实例属性对拓展路由功能提供了数据层面的支持，但大部分都是通过 `只读` 的方式，因此你应该尽量 `避免` 对实例属性的修改。

## 实例属性

### `currentRoutes` : `{router1: TabRoute[,router2: TabRoute...]}`

* 定义：包含当前处于聚焦状态的路由对象的对象，`key`是所有已定义的命名视图的名称，`value`是对应的路由对象。

### `NAVIGATE_TYPES` : `Objecy`

* 定义：导航类型常量，具体可以查看<TabRouterLink open="/api/TabRouter/NAVIGATE_TYPES">API 导航类型常量</TabRouterLink>
