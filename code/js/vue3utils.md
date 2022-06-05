# Vue3

### 页面结构
```javascript
<template>
</template>
<script setup>
    import { 
        ref, 
        reactive, 
        computed,
        watch , 
        onBeforeMount,// 在组件挂载之前执行的函数
        onMounted,
        onBeforeUpdate,// 在组件修改之前执行的函数
        onUpdated,
        onBeforeUnmount,// 在组件卸载之前执行的函数
        onUnmounted,
        defineComponent
    } from "vue";
     onBeforeMount(() => {
     
    });
 
    onMounted(() => {
      
    });
    onBeforeUpdate(() => {
     
    });
 
    onUpdated(() => {
     
    });
    watch(xxx,()=>{
 	
    })
</script>
<style lang='' scoped>
</style>
```

### pinia
```javascript
import {
    defineStore
} from "pinia"
export const usestore = defineStore("userToken", () => {
    let token = "";

    const setToken = (val) => {
        console.log("setToken")
        token = val;
    }
    const getToken = () => {
        return token;
    }
    return {
        token,
        setToken,
        getToken
    }
})
```
在main.js中
```javascript
import { createPinia } from 'pinia';

app.use(createPinia());

```

### vue-router

```javascript
import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
const routes = [{
        path: "/login",
        component: login,
        meta: {
            title: "登陆页"
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router

```
在mian.js中加入以下代码
```javascript
import router from "./router/index";
app.use(router);
```