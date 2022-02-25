# 路由匹配规则

## location的匹配规则

> `Location` 的定义请在<TabRouterLink open="/api/location">API Location</TabRouterLink>查看。

### 优先级

`name` 属性的优先级高于 `path` 属性，当 `name` 属性存在时，即使没有值， `path` 属性也会被忽略。

### name匹配

`name` 使用命名路由，完全匹配，区分大小写。

### path匹配

`path` 属性使用路径匹配，让你可以更好地定义你的业务结构，需要注意的是，与 `vue-router` 的 `path` 属性不同，因为 `params` 的废弃，它也是完全匹配的。

当 `path` 的值时 `'*'` 通配符时，将匹配路由配置列表中的第一个路由。
