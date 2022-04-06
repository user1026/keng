# Javascript

### 分号

一般情况下一行代码后加不加分号完全看个人习惯，但是在一次测试中遇到这么个奇葩情况

```javascript
let s=new Set()
[1,2,3].forEach(val=>val)
```

以上代码会报错

***个人觉得分号还是加上最好***
### 文件下载
jQ的ajax不支持blob方式下载文件，它的xhr设置resopnseType设置为blob会报错
需要用原生写ajax，并将responseType设置为blob

### JQ append添加元素触发页面刷新

```html
<form>
    <button>+<button>
</form>
```
点击+号添加元素会触发表单提交事件导致页面刷新
***将button标签修改为其他标签即可***

### sort排序不传参

sort不传参,默认比较第一位的asscii码值，相同则比较第二位的asscii码值，之后以此类推<br>
sort函数在比较时会调用每个数组项的toString()转型方法，即会将每一项转化为ASCII进行比较。
```javascript
var arr=[-7,0,-1,2,4,15,5];
arr.sort();//[-1,-7,0,15,2,4,5]
```
***带参数比较***

### 关闭浏览器时 onbeforeunload 不起作用

如果进入页面不进行点击等操作，直接关闭，会出现不触发离开确认弹框的情况。总结来说就是 onbeforeunload 方法需要用户和页面有交互动作才能在关闭页面时才能触发离开确认弹框，否则不生效。

### An invalid form control with name='XXX' is not focusable.

发现是有个input自己由于业务需要控制它显示与隐藏
但是自己又要求它是required 然后就报这个错




