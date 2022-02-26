# TabRouter 实例方法

## `open(location: Location)` : `Promise`

* 定义：打开路由视图。

## `focus(location: Location)` : `Promise`

* 定义：聚焦路由视图。

## `reload(location: Location)` : `Promise`

* 定义：聚焦路由视图。

## `close(location: Location)` : `Promise`

* 定义：关闭路由视图。

## `closeAll()` : `Promise`

* 定义：关闭所有路由视图。

## `beforeEach(defender: Function)` : `()=> removeDefender()`

* 定义：注册全局前置导航守卫。
  
* 返回值：用于移除当前注册的守卫的函数。

## `afterEach(hook: Function)` : `()=> removeHook()`

* 定义：注册全局后置导航钩子。
  
* 返回值：用于移除当前注册的钩子的函数。
