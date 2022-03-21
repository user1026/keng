# VUE2
## HTML,CSS
>动态绑定class
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
### 路由
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