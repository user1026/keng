# react

## hook

>注意点

使用 hook 技术可以让你在不使用 class 的情况下使用 state, 及处理生命周期的回调, React 16.8.0 版本开始支持 hook 技术<br>
hook 在 class 内部是不起作用的<br>
Hook 使用规则:<br>
1、只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。<br>
2、只能在 React 的函数组件中调用 Hook,不要在其他 JavaScript 函数中调用。自定义hook 除外<br>

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

## 配置
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

## react 组件私有样式：styled-component

## react全局状态管理器：mobx