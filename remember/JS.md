# Javascript

## 数组方法
>join(a) |有参数|a:用什么来连接字符串，例如"-"

数组拼接成字符串,返回拼接后的字符串<br>
***不改变原数组***
```javascript
var arr = [1,2,3];
console.log(arr.join(",")); 　　　　// 1,2,3
console.log(arr.join("-")); 　　// 1-2-3
```
>push(a)|有参数|a:要添加的元素<br>pop()|无参数

push():  把里面的内容添加到数组末尾，并返回修改后的长度。<br>
pop()：移除数组最后一项，并返回移除的那个值<br>
***都改变原数组***
```javascript
var arr = [1,2,3];
console.log(arr.push(4)); //4　
console.log(arr); 　　　　// 1,2,3,4
console.log(arr.pop()); 　　// 4
console.log(arr); 　//1,2,3
```
>shift()|无参数 <br> unshift(a)|有参数|a:要添加的元素

shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。<br>
unshift():将参数添加到原数组开头，并返回数组的长度 。<br>
***都改变原数组***
```javascript
var arr = [1,2,3];
console.log(arr.shift()); //1　
console.log(arr); 　　　　// 2,3
console.log(arr.unshift(1)); 　　// 3
console.log(arr); 　//1,2,3
```
>sort(a)|有参数|a:为回调函数

将数组里的项从小到大排序<br>
***改变原数组***
```javascript
arr.sort((a,b)=>a-b)//从小到大排
arr.sort((a,b)=>b-a)//从大到小排
```
>reverse()|无参数

反转数组，返回结果<br>
***改变原数组***
```javascript
let arr=[1,2,3];
arr.reverse()//3,2,1
```
>concat(a)|有参数|a:要合并的数组

合并数组，并返回合并之后的数据<br>
***不改变原数组***
```javascript
let a=[1,2],b=[3,4],c;
c=a.concat(b);
console.log(a);//[1,2]
console.log(b);//[3,4]
console.log(c);//[1,2,3,4]
```
>slice(a,b)|有参数|a:起始索引，b:结束索引，包含a不包含b[a,b)

截取指定位置的数组，并返回<br>
***不改变原数组***
```javascript
let arr=[0,1,2,3]
console.log(arr.slice(1,3))//[1,2]
```
>splice(a,b,c)|有参数

删除：splice(a,b)。a：要删除的起始索引,b:要删除的项数。
插入：splice(a,b,c)。a：起始位置, b:要删除的项数,c:要插入的项。
替换：可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定 3 个参数：起始位置、要删除的项数和要插入的任意数量的项。插入的项数不必与删除的项数相等。

删除指定位置，并替换，返回删除的数据<br>
```javascript
let arr=[1,2,3,4]
arr.splice()
arr.splice()
arr.splice()
arr.splice()
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