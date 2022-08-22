# react

> 创建项目使用命令 create-react-app myReact 报错

react 项目名称不能有大写，改成其他即可

> React Hook “useState” cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function.eslintreact

React Hooks 只能在函数式组件中使用

> react-router-dom6.0+ Uncaught SyntaxError: Unexpected token ‘＜‘

如果 在 vite 中使用 react-router-dom v6，并且抽离出路由，结果报错 Uncaught SyntaxError: Unexpected token ‘＜‘ 情况。

<font color="blue">将 src/router/index.js 的 index.js 变成 index.jsx 就完事了。</font>

> mobx @action 调用不可直接解构调用，否则找不到 action 方法中的 this

<font color="blue">使用 toJS 即可解构调用,示例：</font>

```JavaScript

import {toJS} from "mobx";
const{userInfo,getUserInfo,changeUserInfo}=toJS(userStore);
```
