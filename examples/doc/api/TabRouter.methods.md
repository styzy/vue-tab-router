# TabRouter 实例方法

实例方法作为路由功能的延伸，可以配合路由功能实现大部分的产品需求。

## 实例方法

### `open(location: Location)` : `Promise`

* 定义：打开路由视图。

### `focus(location: Location)` : `Promise`

* 定义：聚焦路由视图。

### `reload(location: Location)` : `Promise`

* 定义：聚焦路由视图。

### `close(location: Location)` : `Promise`

* 定义：关闭路由视图。

### `closeAll([router: String])` : `Promise`

* 定义：关闭所有路由视图，可通过指`router`参数来关闭对应的命名视图路由的所有视图。

### `beforeEach(defender: Function)` : `()=> removeDefender()`

* 定义：注册全局前置导航守卫。
  
* 返回值：用于移除当前注册的守卫的函数。

### `afterEach(hook: Function)` : `()=> removeHook()`

* 定义：注册全局后置导航钩子。
  
* 返回值：用于移除当前注册的钩子的函数。

### `$on(location: Location, event: String, listener: Function, once: Boolean)` : `()=> removeEventListener()`

* 定义：监听路由视图事件
  
* 返回值：用于移除当前添加的页面监听事件。

### `$once(location: Location, event: String, listener: Function)` : `()=> removeEventListener()`

* 定义：一次性监听路由视图事件
  
* 返回值：用于移除当前添加的页面监听事件。

### `getRoutes([router: String])` : `()=> [TabRoute]`

* 定义：获取所有路由对象。
  
* 返回值：包含当前所有路由对象的数组，可通过`router`参数来指定返回对应命名视图的所有路由对象。

### `getActiveRoutes([router: String])` : `()=> [TabRoute]`

* 定义：获取所有已激活的路由对象。
  
* 返回值：包含当前所有已激活的路由对象的数组，可通过`router`参数来指定返回对应命名视图的所有已激活的路由对象。
