# JS
### rem
```javascript
（function(doc, win) {
var docEl = doc.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
var recalc = function() {
var clientWidth = docEl.clientWidth;
if(!clientWidth) return;
if(clientWidth >= 750) {
docEl.style.fontSize = '100px';
} else {
docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
}
};
if(!doc.addEventListener) {return;}
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```
### 根据传的value返回key

```javascript
/**
 * 
 * @param {Object} obj 
 * @param {*} v 
 * @returns {string}
 */
function getKey(obj,v){
        return Object.keys(obj).find(val=> JSON.stringify(obj[val])== JSON.stringify(v))
}
```
## 文件上传
> 表单方式
```html
<form method="POST" enctype="multipart/form-data" action="url">
    <input type="file" value="请选择文件" />
    <button type="submit">提交</button>
</form>
```
> js方式
```javascript
    //单文件上传
    function OneUpload() {
    var file = document.getElementById("file").files[0]; //单文件上传
    var formData = new FormData();
    formData.append("file", file);
    /**
     * 发送请求
     * 使用Jq需要设置
     * processData: false, //processData 默认为false，当设置为true的时候,jquery ajax 提交的时候不会序列化 data，而是直接使用data
     * contentType: false //
     */
}
```
## 文件下载
> 浏览器跳转
```javascript
window.location.href="服务器下载地址"
```

> Blob方式
```javascript
        let blob = new Blob([data], {
　　　　　　　　　type:'text/plain'　　　　//不同文件的MIME类型进行更换(具体type有哪些可以看附录)　　　　　　
        });
        let url = window.URL.createObjectURL(blob);
        let fileName ='文件名'//例如xxx.xls
        if ('download' in document.createElement('a')) {//通过 使用a标签的download方法下载文件
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(a.href);    //URL.revokeObjectURL() 静态方法用来释放一个之前通过调用 URL.createObjectURL() 创建的已经存在的 URL 对象。当你结束使用某个 URL 对象时，应该通过调用这个方法来让浏览器知道不再需要保持这个文件的引用了。
            document.body.removeChild(a);
        } else {
           //不支持的处理方法（现在的主流浏览器应该都支持了）
        }
```
## 时间
> 获取当前日期

```javascript
/**
 * @param {string} dateStr 日期连接符
 * @returns {string}
 */
function getTime(dateStr = "-") {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : (time.getMonth() + 1);
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    return `${year}${dateStr}${month}${dateStr}${day}`
}
```
> 获取当前时间 

```javascript
/**
 * @param {string} timeStr 时间连接符
 * @param {number} bool 是否返回日期/时间/日期+时间
 * @returns {string}
 */
function getTime(dateStr = "-", timeStr = ":", bool = 3) {
    let time = new Date();
    let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    return `${hour}${timeStr}${minutes}${timeStr}${seconds}`
}
```
> 获取当前日期和时间 

```javascript
/**
 * @param {string} dateStr 日期连接符
 * @param {string} timeStr 时间连接符
 * @param {number} bool 是否返回日期/时间/日期+时间
 * @returns {string}
 */
function getTime(dateStr = "-", timeStr = ":", bool = 3) {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : (time.getMonth() + 1);
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    if (bool==1) {
         return `${year}${dateStr}${month}${dateStr}${day}`
    } else if(bool==2) {
        return `${hour}${timeStr}${minutes}${timeStr}${seconds}`
    }else{
        return `${year}${dateStr}${month}${dateStr}${day} ${hour}${timeStr}${minutes}${timeStr}${seconds}`
    }
}
```
> 时间戳转正常日期时间

```javascript
/**
 * 
 * @param {number|string} TimeStr 时间戳
 * @param {string} dateStr 日期连接符
 * @param {string} timeStr 时间连接符
 * @param {number} bool 是否返回日期/时间/日期+时间
 * @returns {string}
 */
function changeTime(TimeStr, dateStr = "-", timeStr = ":", bool = true) {
    let time = new Date(Number(TimeStr));
    let year = time.getFullYear();
    let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : (time.getMonth() + 1);
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    if (bool==1) {
         return `${year}${dateStr}${month}${dateStr}${day}`
    } else if(bool==2) {
        return `${hour}${timeStr}${minutes}${timeStr}${seconds}`
    }else{
        return `${year}${dateStr}${month}${dateStr}${day} ${hour}${timeStr}${minutes}${timeStr}${seconds}`
    }
}
```

## 原生ajax

```javascript
    function JSajax({
    url,
    data,
    method,
    async,
    dataType,
    success,
    error
}) {
    if (!url) {
        throw new Error("没有请求地址");
    }
    method = method || "get";
    async = async ||true;
    dataType = dataType || "json"
    var xhr;
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xhr = new XMLHttpRequest();
    } else {
        throw new Error("XMLHttpRequest不存在")
    }
    xhr.responseType = dataType;
    if (method == "get") {
        if (data) {
            url = url + "?"
            for (var k in data) {
                url += "&" + k + "=" + data[k];
            }
        }
        xhr.open(method, url, async);
        xhr.send();
    } else {
        xhr.open(method, url, async);
        // 需要设置请求报文
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        if (data) {
            xhr.send(data);
        } else {
            xhr.send();
        }
    }
    xhr.onreadystatechange = function () {
        // 在事件中 获取数据 并修改界面显示
        if (xhr.readyState == 4) {
            console.log(xhr);
            if (xhr.status == 200) {
                success && success(xhr.responseText);
            } else {
                error && error(xhr.responseText)
            }

        }
    }
}
```