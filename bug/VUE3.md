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

### pinia缓存问题

在全局前置守卫中通过pinia设置title的值但是在页面中获取的却是上一次的值<br>

```javascript
//路由中
router.beforeEach(async (to, from) => {
    const tabName = rightTabName();
    tabName.setRouterName(to.meta.title)

    console.log("pinia在前置路由中title值:" + tabName.getRouterName())
})
```

```javascript
//组件中
 let title = tabname.getRouterName();
console.log("在组件中pinia的title值：" + tabname.getRouterName())
 console.log("title：" + title, "path：" + path)
```

```
//输出
在组件中pinia的title值：undefined
title：undefined path：/one
pinia在前置路由中title值:one


index.vue:28 在组件中pinia的title值：one
title：one path：/two
 pinia在前置路由中title值:two
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