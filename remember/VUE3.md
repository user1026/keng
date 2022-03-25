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
 watch(()=>book.name,()=>{//通过一个函数返回要监听的属性
 	console.log('书名改变了')
 })
```
>监听多个值的改变
```javascript
//可以有多个watch
watch(count, () => {
	console.log("count改变了");
});
watch(
    () => book.name,
    () => {
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