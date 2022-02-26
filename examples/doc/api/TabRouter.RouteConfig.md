# RouteConfig

## `title` : `String`

* 默认值：`''`

* 定义：路由视图的标题文本。

## `name` : `String`

* 默认值：`''`

* 定义：命名路由的名称。

## `path` : `String`

* 默认值：`''`

* 定义：路由的匹配路径。

## `component` : `Component`

* 默认值：`null`

* 定义：路由的渲染组件，可以是直接引入的`.vue`文件，或者是`()=>import('...')`的异步引入方法。

## `props` : `Boolean`

* 默认值：`false`

* 定义：定义路由的`query`参数是否直接注入到渲染组件的`Props`中。

## `meta` : `Any`

* 默认值：`{}`

* 定义：路由元信息，可以定义任何参数，并在任意`TabRoute`实例中获取（包括导航守卫）。
