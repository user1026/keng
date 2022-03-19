# Vue2

### 结构
```javascript
<template>
    <div></div>
</template>
<script>
export default{
    name:"",
    components:{},
    data(){
        return {

        }
    },
    methods:{

    },
    beforeCreate(){},
    created(){},
    mounted (){},
    beforeDestory(){},
    computed:{},
    watch:{},
}
</script>
<style lang="" scoped>
</style>
```
### vuex
```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count:0,
    },
    mutations: {
        syncAdd(state,val){
            state.count=val
        }
    },
    actions:{
        asynAdd(context,val){
            context.commit("syncAdd",val)
        }
    },
    getters: {
        getCount(state){
            return state.count
        }
    },
    modules:{}
})

export default store

```
### vueRouter
```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import home from "./home"//示例
Vue.use(VueRouter); //挂载属性
const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: '*',//匹配不上以上地址走这 
        redirect: '/home'//重定向地址 
    }
]
const router =  new VueRouter({
    mode: 'history',//路由模式分 hash和history
    routes
})
export default router;
```
