# VUE3

### 生命周期

>VUE2和VUE3生命周期对比

beforeCreate  -> setup()<br>
created       -> setup()<br>
beforeMount   -> onBeforeMount<br>
mounted       -> onMounted<br>
beforeUpdate  -> onBeforeUpdate<br>
updated       -> onUpdated<br>
beforeDestroy -> onBeforeUnmount<br>
destroyed     -> onUnmounted<br>
activated     -> onActivated<br>
deactivated   -> onDeactivated<br>
errorCaptured -> onErrorCaptured<br>

### watch
>监听普通类型

```javascript
let count = ref(1);
watch(count, (newValue, oldValue) => { //直接监听
	console.log("count改变了");
});
```
>监听复杂类型
```javascript
let book = reactive({
     name: "a",
 });
 watch(()=>book.name,(newVal,oldVal)=>{//通过一个函数返回要监听的属性
 	console.log('书名改变了')
 })
```
>监听多个值的改变
```javascript
//可以有多个watch
watch(count, (newVal,oldVal) => {
	console.log("count改变了");
});
watch(
    () => book.name,
    (newVal,oldVal) => {
        console.log("书名改变了");
    }
);
```

>多个监听执行同一个方法
```javascript
watch([() => book.name, count], ([name, count], [preName, preCount]) => {
	console.log("count或book.name改变了");
});
```

### 路由守卫

#### 全局守卫
```javascript
```

### 父子组件调用

> 父传子

父组件
```javascript
```
子组件
```javascript
```
> 父组件调用子组件方法

子组件
```javascript
import {
        ref,
        reactive,
        onMounted,
        defineExpose
    } from 'vue'
  const addtabs = (path) => {
        console.log(path)
    }
    //defineExpose将父组件需要调用的属性或者方法暴露出去，不暴露无法调用
    defineExpose({
        addtabs,
    })
```
父组件
```javascript
<script setup>
import {
        ref,
        reactive,
        onMounted,
        defineExpose
    } from 'vue'
const right=ref(null)
const addtabs = (path) => {
        right.value.addtabs(path)
    }
</script>
<template>
 <rightmain ref="right"></rightmain>
</template>
```

> 子传父

子组件
```javascript
import {
        ref,
        reactive,
        onMounted,
        defineProps,
        defineEmits,
    } from 'vue'
    const emit = defineEmits(["chaddtabs","b"])
    const handClick=(option)=>{
        emit("chaddtabs",option)
    }
```
父组件
```javascript
<script setup>
const addtabs = (option) => {}
</script>
<tempalte>
 <leftmenu ref="left" @chaddtabs="addtabs"></leftmenu>
</tempalte>
```

> 子组件调用父组件方法
