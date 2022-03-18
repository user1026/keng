# VUE2
## HTML,CSS
>动态绑定class
## JS
### 生命周期
> 父子组件生命周期执行顺序
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted->父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

### watch
>监听watch
监听数组或对象的改变
```javascript
    watch:{
        xxx:{
            handler(newVal,oldVal){},
            deep:true
        }
    }
```
监听对象某个值的改变
```javascript
     watch:{
        "xxx.属性名"(newVal,oldVal){
           
        }
    }
```