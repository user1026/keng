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
        component: home,
        beforeEnter:(to,from,next)=>{}//路由独享守卫
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
//全局守卫
router.beforeEach((to,from,next)=>{
    console.log(to);//要去的页面
    console.log(from);//从哪个页面离开的
    next(); //在路由守卫中，只有next()是放行，其他的诸如：next('/logon') 、 next(to) 或者 next({ ...to, replace: true })都不是放行，而是：中断当前导航，执行新的导航
            //next() 是放行，但是如果next()里有参数的话，next()就像被重载一样，就有了不同的功能,例如：
            //next(false)会中断路由，如果此时是从a去往b,就会中断当前路由，停在a页面
            //next("/home"),如果此时是从a去往b,就会中断当前路由，前往home页面
  })
export default router;
```
## webpack分包
```javascript
// vue.config.js
module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // 将Vue相关库单独打包
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
            name: 'vue',
            chunks: 'all'
          },
          // 将Element UI等UI库单独打包
          ui: {
            test: /[\\/]node_modules[\\/](element-ui|ant-design-vue)[\\/]/,
            name: 'ui',
            chunks: 'all'
          },
          // 将其他第三方库打包到vendors
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all'
          }
        }
      }
    }
  },
   css: {
    extract: {
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    }
  }
};
```