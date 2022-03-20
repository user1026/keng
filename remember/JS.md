# Javascript

## 数组方法
>join() 
数组拼接成字符串,返回拼接后的字符串
```javascript
var arr = [1,2,3];
console.log(arr.join(",")); 　　　　// 1,2,3
console.log(arr.join("-")); 　　// 1-2-3
```
>push()和pop()
push():  把里面的内容添加到数组末尾，并返回修改后的长度。

pop()：移除数组最后一项，并返回移除的那个值
```javascript
var arr = [1,2,3];
console.log(arr.push(4)); //4　
console.log(arr); 　　　　// 1,2,3,4
console.log(arr.pop()); 　　// 4
console.log(arr); 　//1,2,3
```
>shift() 和 unshift()
shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。 
unshift():将参数添加到原数组开头，并返回数组的长度 。
```javascript
var arr = [1,2,3];
console.log(arr.shift()); //1　
console.log(arr); 　　　　// 2,3
console.log(arr.unshift(1)); 　　// 3
console.log(arr); 　//1,2,3
```
>sort()
将数组里的项从小到大排序
```javascript
arr.sort((a,b)=>a-b)//从小到大排
arr.sort((a,b)=>b-a)//从大到小排
```
>reverse()
```javascript
```
>concat()
```javascript
```
>slice()
```javascript
```
>splice()
```javascript
```
>indexOf()和 lastIndexOf() （ES5新增）
```javascript
```
>forEach() （ES5新增）
```javascript
```
>map() （ES5新增）
```javascript
```
>filter() （ES5新增）
```javascript
```
>every() （ES5新增）
```javascript
```
>some() （ES5新增）
```javascript
```
## 字符串方法

## 对象方法

## Map方法

## 