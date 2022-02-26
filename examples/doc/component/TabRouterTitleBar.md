# TabRouterTitleBar

## 描述

`<TabRouterTitleBar>` 组件用于渲染路由视图的标签视图的组件，内置了标签页组件和右键菜单组件，如果你不喜欢，这些也可以定制。

## Props 属性

### `contextmenuDisbale` : Boolean

`contextmenuDisbale` 属性可以指定当前组件是否禁用右键菜单，默认值 `false` 。

## 标题组件

内置的标题组件，会渲染一个标题文本和关闭按钮，点击标题文本会聚焦当前路由视图，点击关闭按钮，则会关闭对应的路由视图。如果不满足需求，都是可以自定义的。

### 插槽

```html
<TabRouterTitleBar>
    <template #title>
        <div>这是一个标题</div>
    </template>
</TabRouterTitleBar>
```

### 作用域插槽

```html
<TabRouterTitleBar>
    <template #title="{ route, close, focus, reload, isVisited }">
        <div :class="['tab-title', { visited: isVisited }]" @click="focus">
            {{ route.title }}
        </div>
        <div class="tab-title-reload" @click="reload">刷新</div>
        <div class="tab-title-close" @click="close">关闭</div>
    </template>
</TabRouterTitleBar>
```

:::tip
使用作用域插槽时，内置点击聚焦功能将会失效，因此需要你自己通过事件触发参数内的 `close` 、 `focus` 和 `reload` 导航方法。
:::

## 右键菜单

内置的右键菜单包括关闭和刷新功能，不满足需求可以使用插槽和作用域插槽二次开发。使用插槽时，鼠标右键点击事件的位置，会生成一个绝对定位的右键菜单容器，插槽内的模板会在该容器内渲染，无需你手动定位。

### 插槽

```html
<TabRouterTitleBar>
    <template #contextmenu>
        <div>这是一个右键菜单</div>
    </template>
</TabRouterTitleBar>
```

### 作用域插槽

```html
<TabRouterTitleBar>
    <template #contextmenu="{ route, close, focus, reload, isVisited }">
        <div class="contextmenu">
            <div class="contextmenu-item" @click="focus">聚焦</div>
            <div class="contextmenu-item" @click="reload">刷新</div>
            <div class="contextmenu-item" @click="close">关闭</div>
        </div>
    </template>
</TabRouterTitleBar>
```
