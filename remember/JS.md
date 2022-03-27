# Javascript

## 数组常用方法
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

***改变原数组***
删除：splice(a,b)。a：要删除的起始索引,b:要删除的项数。返回删除的数据
插入和替换：splice(a,b,c)。a：起始位置, b:要删除的项数,c:要插入的项。b=0时是直接插入。b不为0时时删除原有的项数再插入元素
```javascript
let arr=[1,2,3,4]
arr.splice(2,2)//[1,2]
arr.splice(2,0,3)//[1,2,3]
arr.splice(2，1，4)//[1,2,4]

```
>indexOf(str)|有参|str:要查找的元素<br>lastIndexOf(str)|有参|str:要查找的元素<br>

***不改变原数组***
indexOf()查找元素第一次出现的位置并返回对应索引，没有返回-1<br>
lastIndexOf()查找元素最后一次出现的位置并返回对应索引，没有返回-1<br>
```javascript
let arr=[0,1,2,3,4,1,5]
console.log(arr.indexOf(1))//1
console.log(arr.lastIndexOf(1))//5
console.log(arr.indexOf(7))//-1
```
>forEach((v,i)=>{}) |有参|v:每项元素，i:索引

遍历数组的每一项，无返回
```javascript
let arr=[1,2,3,4]
arr.forEach((v,i)=>{
    console.log(v,i)
})
/*1 0
2 1
3 2
4 3*/
```
>map((v,i)=>{return}) |有参|v:每一项元素，i:索引

对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
```javascript
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.map(function(item){
return item*item;
});
console.log(arr2); 　　　　　　　　//[1, 4, 9, 16, 25]
```
>filter((v,i)=>{return})|有参|v:每一项元素，i:索引

***不改变原数组***
数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arr2 = arr.filter((v,i)=> {
return  x >= 8;
}); 
console.log(arr2); 　　　　　　　　//[ 8, 9, 10]
```
>every() |有参

判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。

```javascript
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.every(function(x) {
return x < 10;
}); 
console.log(arr2); 　　　　　　　　//true
```
>some() |有参

判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
```javascript
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.some(function(x) {
return x < 3;
}); 
console.log(arr2); 　　　　　　　　//true
```
>find()|有参

***不改变原数组***
传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它，并且终止搜索
```javascript
const arr = [1, "2", 3, 3, "2"]
console.log(arr.find(n => typeof n === "number")) // 1
```
>findIndex()|有参

***不改变原数组***
传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回它的下标，终止搜索。
```javascript
const arr = [1, "2", 3, 3, "2"]
console.log(arr.findIndex(n => typeof n === "number")) // 0
```
>fill(value, start, end)|有参|value:要替换的元素，start：起始下标，end：结束下标（start和end不传，会替换全部）[start,end)

***改变原数组***
用新元素替换掉数组内的元素，可以指定替换下标范围。
```javascript
let arr = [1, 2, 3, 4]
arr.fill(9, 2, 7)
console.log(arr)//[1,2,9,9]
```
>from(arr)|有参|arr:要转换的类数组

***改变原数组***
将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组
```javascript
```

>includes(a)|有参|a:要查找的元素

***不改变原数组***
判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。indexOf 判断元素是否为 NaN，会判断错误。
```javascript
var a = [1, 2, 3];
a.includes(2); // true
a.includes(4); // false
```

## 字符串方法

## 对象常用方法

>Object.entries(obj)|有参|obj:对象

***不改变原对象***
返回迭代器：返回键值对
```javascript
let obj={a:1,b；2}
console.log(Object.entries(obj))//[["a",1],["b",2]]
```
>Object.keys(obj)|有参|obj:对象

***不改变原对象***
返回迭代器：返回键值对的key
```javascript
let obj={a:1,b；2}
console.log(Object.keys(obj))//["a","b"]
```
>Object.values(obj)|有参|obj:对象

***不改变原对象***
返回迭代器：返回键值对的value
```javascript
let obj={a:1,b；2}
console.log(Object.values(obj))//[1,2]
```
>Object.freeze(obj)|有参|obj：要冻结的对象

***改变原对象***
冻结一个对象，这意味着它不能再被更改。
```javascript
let obj={a:1}
Object.freeze(obj)
obj.a=2;
console.log(obj.a)//1
```
## Map常用法

>has(option)|有参|option:要查询的键

如果映射包含指定元素，则返回 true。
```javascript
let map=new Map([["a",1],["b",2]])
console.log(map.has("a"))//true
console.log(map.has("c"))//false
```

>set(key,value)|有参|key:键名，value:键值

添加一个新建元素到映射,返回添加后的map
```javascript
let map=new Map()
map.set("a",1);
console.log(map)//Map(1) { 'a' => 1 }
```

>get(key)|有参|key:键名

返回映射中的指定元素。
```javascript
let map=new Map([["a",1],["b",2]])
console.log(map.get("a"))//1
```

>delete(key)|有参|key:键名

从映射中移除指定的元素,返回是否删除成功
```javascript
let map=new Map([["a",1],["b",2]])
console.log(map.delete("a"))//true
console.log(map)//Map(1) { 'b' => 2 }
console.log(map.delete("c"))//false
```
>clear()|无参

从映射中移除所有元素,没有返回
```javascript
let map=new Map([["a",1],["b",2]])
map.clear()
console.log(map)//Map(0) {}
```
## "","0"，0，1，false,true,{},[],null,undefined

>MDN文档给的关于==比较时的说明

- 如果两个操作数都是对象，则仅当两个操作数都引用同一个对象时才返回true。<br>
- 如果一个操作数是null，另一个操作数是undefined，则返回true。<br>
- 如果两个操作数是不同类型的，就会尝试在比较之前将它们转换为相同类型：<br>
    - 当数字与字符串进行比较时，会尝试将字符串转换为数字值。<br>
    - 如果操作数之一是Boolean，则将布尔操作数转换为1或0。<br>
        - 如果是true，则转换为1。<br>
        - 如果是 false，则转换为0。<br>
    - 如果操作数之一是对象，另一个是数字或字符串，会尝试使用对象的valueOf()和toString()方法将对象转换为原始值。<br>
- 如果操作数具有相同的类型，则将它们进行如下比较：<br>
    - String：true仅当两个操作数具有相同顺序的相同字符时才返回。<br>
    - Number：true仅当两个操作数具有相同的值时才返回。+0并被-0视为相同的值。如果任一操作数为NaN，则返回false。<br>
    - Boolean：true仅当操作数为两个true或两个false时才返回true。<br>

```javascript
//常见易混淆的比较
console.log(""==false,0==false,0=="")//true,true,true
console.log("0"==false,"1"==true)//true,true
console.log({}=={},[]==[],{}==[])//false,false,false，
console.log(null==undefined)//true
console.log(null=="",null=="0")//false,false
console.log(undefined=="",undefined=="0")//false，false
console.log([]=="",[]==false,[]==0,[]=="0",[]==null,[]==undefined)//true,true,true,false,false,false
console.log({}=="",{}=false,{}==0,{}=="0",{}==null,{}==undefined)//false,false,false,false,false,false
```