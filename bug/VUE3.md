# VUE3

### vue3路由重定向

Catch all routes ("*") must now be defined using a param with a custom regexp.


```javascript
//正确写法
   const routes=[
       {
           path:"/home",
           component:home
       },
       {
           path:"/:pathMatch(.*)",
           redirect:"/404",
       }
   ]
```

### Pinia报错：getActivePinia was called with no active Pinia. Did you forget to install pinia? const pinia = createPinia()

```javascript
//错误代码
import router from "@/router/index.js"
import {
    rightTabName
} from "@/store/index.js"
const tabName = rightTabName();//这行代码的位置是错的
router.beforeEach((to, from) => {
   
    tabName.setRouterName(to.meta.title)
})

export default router
```
在全局store还没有挂载到app上的时候，就调用了，这样导致了pinia实例还没挂载。
```javascript
import router from "@/router/index.js"
import {
    rightTabName
} from "@/store/index.js"


router.beforeEach((to, from) => {
    const tabName = rightTabName();//放到里面，路由挂载完后在调用就没问题了
    tabName.setRouterName(to.meta.title)
})

export default router
```


### 数组filter

使用reactive声明的数组在使用filter时有点不方便，改成ref声明的就行

```javascript
let list=reactive([1,2,3,4]);
let arr=list;
list=arr.filter(val=>val>2);
//此时页面显示的还是原来的数组
```

```javascript
let list=ref([1,2,3,4]);
let arr=list.value;
list.value=arr.filter(val=>val>2);
//此时页面显示正常
```

### 插槽中不能在使用插槽

```javascript
<template #default>
    <template #main></template>
</template>

```

### [vite] Internal server error: import.meta.glob() can only accept string literals.

import.meta.glob()的参数不能是变量或者模板字符串，只能是普通字符串

