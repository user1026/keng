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

## vite手动分包
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将Vue相关库单独打包
          vue: ['vue', 'vue-router', 'vuex'],
          // 将Element UI等UI库单独打包
          ui: ['element-plus', 'ant-design-vue'],
          // 将其他第三方库打包到vendors
          vendors: ['axios', 'lodash']
        }
      }
    },
     cssCodeSplit: true, // 启用CSS代码分割（默认值）
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  }
});
```
