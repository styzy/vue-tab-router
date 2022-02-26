# TabRouterLink

## 描述

`<TabRouterLink>` 组件用于路由视图的导航控制，默认渲染成一个没有 `href` 属性的 `a` 标签。

## Props 属性

### `open` : String | Location

`open` 属性可以指定当前组件点击后渲染的导航路由，等同于 `tabRouter.open()` 方法。

### `close` : String | Location

`close` 属性可以指定当前组件点击后关闭的导航路由，等同于 `tabRouter.close()` 方法。

### `tag` : String

`tag` 属性可以指定当前组件渲染的标签，如果不指定，会默认渲染成 `a` 标签。

### `custom` : Any

当 `custom` 属性被使用且它的值不等于 `undefined` 时，组件会阻止自身的导航跳转事件，而将导航控制能力交给作用域插槽的 `navigate` 参数，一般配合作用域插槽使用。

## 插槽

如果你仅仅需要渲染一个静态的导航链接，那么你可以直接使用插槽。

```html
<TabRouterLink open="/user">
    <div>点击这里回到用户中心</div>
</TabRouterLink>
```

## 作用域插槽

当你希望将导航功能和你页面的样式与结构结合起来是，作用于插槽可以解决你几乎所有的问题。

```html
<TabRouterLink open="/user" #default="{ route, navigate, isVisited, isActive }" custom>
    <div :class="['menu-item', { visited: isVisited, active: isActive }]" @click="navigate">
        {{ route.title }}
    </div>
</TabRouterLink>
```

详细使用参考<TabRouterLink open="/guide/navigate">使用指南 路由导航</TabRouterLink>
