VUE和React相似功能对比


## 路由

vue路由占位标签<router-view>
React路由占位标签<Route>


## 动态加载组件

vue2
```js
()=>import(组件路径)
```
vue3

```js
const modules = import.meta.glob(组件路径); //例如../view/*/*.vue
component = modules[组件路径];
```
react
```js
React.lazy(()=>import(组件路径))
```