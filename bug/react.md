# react

>创建项目使用命令 create-react-app myReact 报错

react项目名称不能有大写，改成其他即可

>React Hook “useState” cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function.eslintreact

React Hooks只能在函数式组件中使用

>react-router-dom6.0+ Uncaught SyntaxError: Unexpected token ‘＜‘ 

如果 在vite中使用react-router-dom v6，并且抽离出路由，结果报错 Uncaught SyntaxError: Unexpected token ‘＜‘ 情况。

<font color="blue">将src/router/index.js的 index.js变成index.jsx就完事了。</font>

>mobx @action调用不可直接解构调用，否则找不到action方法中的this

<font color="blue">使用toJS即可解构调用</font>

```JavaScript

import {toJS} from "mobx";
const{userInfo,getUserInfo,changeUserInfo}=toJS(userStore);
```