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


