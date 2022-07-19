# VUE2
## HTML,CSS
>动态绑定class
写在指令中的值会被视作表达式，如javascript表达式，因此v-bind:class接受三目运算：<br>
HTML代码：
```HTML
<div :class="classA ? 'class-a' : 'class-b' ">Demo3</div>
```

渲染后的HTML:
```HTML
<div class="class-a">Demo3</div>
```
v-bind:class 支持对象，对象改变时会动态更新class


HTML代码：
```HTML
<div :class="{ 'class-a': isA, 'class-b': isB}">Demo4</div>
```

Javascript代码：
```JS
data: {
 isA: false, //当isA改变时，将更新class
 isB: true //当isB改变时，将更新class
}
```

渲染后的HTML:
```HTML
<div class="class-b">Demo4</div>
```
v-bind:class支持数组, 数组里的变量改变时，会动态更新class列表<br>

HTML代码：
```HTML
<div :class="[classA, classB]">Demo6</div>
```

Javascript代码：
```JS
data: {
 classA: 'class-a',
 classB: 'class-b'
}
```

渲染后的HTML:
```HTML
<div class="class-a class-b">Demo6</div>
```
数组中可以包含object类型，数组中的object对象改变，也会更新class列表<br>
HTML代码：
```HTML
<div :class="[classA, classB]">Demo7</div>
```

Javascript代码：
```JS
data: {
 classA: 'class-a',
 objectClass: {
 classB: 'class-b', // classB 的值为class-b, 则将classB的值添加到class列表
 classC: false, // classC值为false,将不添加classC
 classD: true // classD 值为true，classC将被直接添加到class列表
}
}
```

渲染后的HTML:
```HTML
<div class="class-a class-b classD">Demo7</div>
```



## JS
### 生命周期
> 父子组件生命周期执行顺序

父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted->父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
### watch
>监听普通类型
```javascript
watch:{
  xxx(newVal,oldVal){}
}
```

>监听数组或对象的改变
```javascript
    watch:{
        xxx:{
            handler(newVal,oldVal){},
            deep:true
        }
    }
```
>监听对象某个值的改变
```javascript
     watch:{
        "xxx.属性名"(newVal,oldVal){
           
        }
    }
```
>监听多个值的改变
```javascript
//只能有一个watch
watch:{
  a(newVal,oldVal){},
  b(newVal,oldVal){}
}
```
>多个监听执行同一个方法
```javascript
computed:{
    change(){
      const {a,b}=this;
      return {a,b}
    }
},
watch:{
  change(newVal,oldVal){
    console.log("a或者b变化了")
  }
}
```
### 路由守卫

#### 全局守卫
```javascript
beforeEach((to,form,next)=>{})//前置守卫
afterEach((to,form)=>{})//后置守卫
```
#### 组件内守卫
```javascript
 beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  },
```
#### 执行顺序
>打开页面

全局前置守卫beforeEach (路由器实例内的前置守卫)<br>
路由独享守卫beforeEnter(激活的路由)<br>
组件内守卫beforeRouteEnter(渲染的组件)<br>
全局解析守卫beforeResolve(路由器实例内的解析守卫)<br>
全局后置钩子afterEach(路由器实例内的后置钩子)<br>
>切换页面

组件内守卫beforeRouteLeave(即将离开的组件)<br>
全局前置守卫beforeEach (路由器实例内的前置守卫)<br>
组件内守卫beforeRouteEnter(渲染的组件)<br>
全局解析守卫beforeResolve(路由器实例内的解析守卫)<br>
全局后置钩子afterEach(路由器实例内的后置钩子)<br>
>完整流程

导航被触发。<br>
在失活的组件里调用 beforeRouteLeave 守卫。<br>
调用全局的 beforeEach 守卫。<br>
在重用的组件里调用 beforeRouteUpdate 守卫(2.2+)。<br>
在路由配置里调用 beforeEnter。<br>
解析异步路由组件。<br>
在被激活的组件里调用 beforeRouteEnter。<br>
调用全局的 beforeResolve 守卫(2.5+)。<br>
导航被确认。<br>
调用全局的 afterEach 钩子。<br>
触发 DOM 更新。<br>
调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。<br>

### $router部分属性

>$router是vue的router实例,可以理解为总管理

1. $router.app ：配置了router的Vue根实例
2. $router.mode：路由模式
3. $router.currentRoute：当前路由的路由信息对象，包含了当前匹配路由的信息
4. $router.addRoutes(routes)：动态添加路由规则，参数为符合routes选项要求的数组。
5. $router.beforeEach((to,from,next)=>{}) ：全局前置守卫
6. $router.beforeResolve()：全局解析守卫 , 在导航被确认之前，且在锁头组件内守卫和异步路由组件被解析之后调用，参数和全局前置守卫相同
7. $router.afterEach((to,from)=>{})：全局后置守卫
8. $router.go(n)：接受一个整数作为参数，类似window.history.go(n)，在浏览器历史记录中前进或后退几步
9. $router.push( location )：跳转导航的方法，这种方法会向history栈添加一个新的记录
10. $router.replace( location )：和router.push()类似，但是它会替换掉当前的history记录，不会添加新的记录
11. $router.back()：相当于router.go(-1)
12. $router.forward()：相当于router.go(1)
13. $router.resolve(location)：解析目标路由，接受一个地址参数，返回location,route,href等属性信息，还可以接受当前默认路由current和当前路由上附加路径append　两个参数
14. $router.onReady(callback,[errorCallback]){}：把一个回调排队，在路由完成初始导航时调用。
15. $router.onError(callback)：注册一个回调，该回调会在路由导航过程中出错的时候被调用，但是对被调用的错误情形有要求：<br>
    (1). 错误在一个路由守卫函数中被同步抛出<br>
    (2). 错误在一个路由守卫函数中通过调用next(error)的方式异步捕获并处理<br>
    (3). 渲染一个路由的过程中，需要尝试解析一个异步组件时发生错误<br>

### $route部分属性

>$route是当前激活的路由，它包含当前路由的各种信息，是只读的

1. $route.fullPath ：完成解析后的url，包含查询参数和hash的完整路径
2. $route.path：路径，字符串类型，解析为绝对路径
3. $route.hash： 当前路由的hash值（带#号的），如果没有hash值则为空字符串
4. $route.name：当前路由的名称，如果有的话（用于命名路由）
5. $route.params：一个键值对对象，路由参数
6. $route.query：一个键值对对象，表示url查询参数
7. $route.matched：一个包含了当前路由的所有嵌套路径片段的路由记录（routes配置数组中的对象副本）
8. $route.redirectedFrom：重定向来源的路由的名字，如果存在重定向的话。
