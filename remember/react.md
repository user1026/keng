# react

## hook

### 注意点

使用 hook 技术可以让你在不使用 class 的情况下使用 state, 及处理生命周期的回调, React 16.8.0 版本开始支持 hook 技术<br>
hook 在 class 内部是不起作用的<br>
Hook 使用规则:<br>
1、只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。<br>
2、只能在 React 的函数组件中调用 Hook,不要在其他 JavaScript 函数中调用。自定义hook 除外<br>

### 常用hook说明

#### <font color="red"><i>useState</i></font>
- useState 会返回一个数组：一个 state，一个更新 state 的函数
- 在初始化渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同
- 你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并，而是直接替换

#### <font color="red"><i>useEffect</i></font>
- effect（副作用）：指那些没有发生在数据向视图转换过程中的逻辑，如 ajax 请求、访问原生dom 元素、本地持久化缓存、绑定/解绑事件、添加订阅、设置定时器、记录日志等。
- 副作用操作可以分两类：需要清除的和不需要清除的。
原先在函数组件内（这里指在 React 渲染阶段）改变 dom 、发送 ajax 请求以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性
- useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API
- useEffect 接收一个函数，该函数会在组件渲染到屏幕之后才执行，该函数有要求：要么返回一个能清除副作用的函数，要么就不返回任何内容
与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。大多数情况下，effect 不需要同步地执行。在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同。
>使用 useEffect(callback, dependencies)

第一个为要执行的函数 callback，第二个是可选的依赖项数组 dependencies。<br>
依赖项这个参数是可选的，callback 会根据依赖项分为以下三种情况：<br>

- <font color="blue">如果不指定，那么 callback 就会在每次函数组件执行完后都执行；</font>
- <font color="blue">如果指定了，那么只有依赖项中的值发生变化的时候，它才会执行；</font>
- <font color="blue">如果指定为空数组，那么 callback 会在 mount （首次render）以后执行。</font>

## 生命周期

React 16.8+的生命周期分为三个阶段，分别是挂载阶段、更新阶段、卸载阶段。

>挂载阶段

- constructor: 构造函数，最先被执行,我们通常在构造函数里初始化state对象或者给自定义方法绑定this
- getDerivedStateFromProps: static getDerivedStateFromProps(nextProps, prevState)，这是个静态方法,当我们接收到新的属性想去修改state，可以使用getDerivedStateFromProps
- render: render函数是纯函数，只返回需要渲染的东西，不应该包含其它的业务逻辑,可以返回原生的DOM、React组件、- - Fragment、Portals、字符串和数字、Boolean和null等内容
- componentDidMount: 组件装载之后调用，此时可以获取到DOM节点并操作，比如对canvas，svg的操作，服务器请求，订阅都可以写在这个里面，但是记得在componentWillUnmount中取消订阅。
>更新阶段

- getDerivedStateFromProps: 此方法在更新个挂载阶段都可能会调用
- shouldComponentUpdate: shouldComponentUpdate(nextProps, nextState)，有两个参数nextProps和nextState，表示新的属性和变化之后的state，返回一个布尔值，true表示会触发重新渲染，false表示不会触发重新渲染，默认返回true,我们通常利用此生命周期来优化React程序性能
- render: 更新阶段也会触发此生命周期
- getSnapshotBeforeUpdate: getSnapshotBeforeUpdate(prevProps, prevState)，这个方法在render之后，componentDidUpdate之前调用，有两个参数prevProps和prevState，表示之前的属性和之前的state，这个函数有一个返回值，会作为第三个参数传给componentDidUpdate，如果你不想要返回值，可以返回null，此生命周期必须与componentDidUpdate搭配使用
- componentDidUpdate: componentDidUpdate(prevProps, prevState, snapshot)，该方法在getSnapshotBeforeUpdate方法之后被调用，有三个参数prevProps，prevState，snapshot，表示之前的props，之前的state，和snapshot。第三个参数是getSnapshotBeforeUpdate返回的,如果触发某些回调函数时需要用到 DOM 元素的状态，则将对比或计算的过程迁移至getSnapshotBeforeUpdate，然后在 componentDidUpdate中统一触发回调或更新状态。
>卸载阶段

- componentWillUnmount: 当组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的DOM元素等垃圾清理工作。

## 配置 (webpack版)
>react 关闭eslint 配置

在 package.json 中修改为一下 
```json
"eslintConfig": {
     "extends": "react-app", 
     "rules": { 
        "no-undef": "off", 
        "no-restricted-globals": "off", 
        "no-unused-vars": "off" 
        } 
    }
```
修改完后重启

>react vite开启装饰器

```JavaScript
plugins: [react({
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
      ],
    },
  })],
```

## react-router-dom

>6以下版本

```js
 <Route path="/home" component={<Home />}></Route>
<Route path="/about" component={<About />}></Route>
```

>6以上版本

```js
<Routes>
 <Route path="/home" element={<Home />}></Route>
<Route path="/about" element={<About />}></Route>
</Routes>
```
|组件名|作用|说明|
|---------|----------|-----------|
|\<Routers\>|一组路由|代替原有<Switch>，所有子路由都用基础的Router children来表示|
|\<Router\>|基础路由|Router是可以嵌套的，解决原有V5中严格模式|
|\<Link\>|导航组件|在实际页面中跳转使用|
|\<Outlet\/\>|自适应渲染组件|根据实际路由url自动选择组件|


|hooks名|作用|说明|
|-----|-----|-----|
|useParams|返回当前参数|根据路径读取参数|
|useNavigate|返回当前路由代替原有V5中的 useHistoryuse|
|Outlet|返回根据路由生成的element||
|useLocation|返回当前的location 对象||
|useRoutes|同Routers组件一样，只不过是在js中使用||
|useSearchParams|用来匹配URL中?后面的搜索参数||



## 状态管理

>useContext

可以在普通js文件中使用！！

```jsx
const C=createContext();
const [number,setnumber]=useState(0)


 <C.Provider value={{number,setnumber}}>
                <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                </Routes>
</C.Provider>
```
>mobx mobx-react

```JavaScript
```
## react 组件私有样式：styled-component


## react全局状态管理器：mobx