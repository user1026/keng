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
>获取前/后几天的日期

```javascript
let beforeTime=new Date(new Date().getTime()-24*36000*1000*day)
let afterTime=new Date(new Date().getTime()+24*36000*1000*day)
```

> 获取当前日期

```javascript
/**
 * @param {string} dateStr 日期连接符
 * @returns {string}
 */
export const getTime=(dateStr = "-")=> {
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
 * @returns {string}
 */
export const getTime=( timeStr = ":")=> {
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
export const getTime=(dateStr = "-", timeStr = ":", bool = 3)=> {
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
export const changeTime=(TimeStr, dateStr = "-", timeStr = ":", bool = true)=> {
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
          
            if (xhr.status == 200) {
                success && success(xhr.responseText);
            } else {
                error && error(xhr.responseText)
            }

        }
    }
}
```

## 判断浏览器
```javascript
function getInternetType(){    
    if(navigator.userAgent.indexOf("MSIE")>0) {    
      return "MSIE";       //IE浏览器  
    }  
    if(navigator.userAgent.indexOf("Chrome/")>0){    
      return "Chrome";    //Chrome浏览器  
    }   
    if(navigator.userAgent.indexOf("Firefox")>0){    
      return "Firefox";     //Firefox浏览器  
    }  
 
    if(navigator.userAgent.indexOf("Safari")>0) {    
      return "Safari";      //Safan浏览器  
    }  
 
    if(navigator.userAgent.indexOf("Camino")>0){    
      return "Camino";   //Camino浏览器  
    }  
    if(navigator.userAgent.indexOf("Gecko/")>0){    
      return "Gecko";    //Gecko浏览器  
    }    
} 
```
## file，base64，Blob

>file或blob转base64

```js
export const FileToBase64=(file,base64url)=>{
    let reader=new FileReader();
    reader.readAsdataUrl(file);
    reader.onload=(e)=>{
         let base64=e.target.result;
        base64url(base64)
    }
}
//调用
FileToBase64(file,(base64url)=>{
    base64=base64url
})
```
```js
export const FileToBase64=(file)=>{
    let reader=new FileReader();
    reader.readAsdataUrl(file);
    return new Promise((resolve, reject) => {
        reader.onload=(e)=>{
            let base64=e.target.result;
            resolve(base64)
        }
        reader.onerror=(e)=>{
            reject(e)
        }
    })
}
//调用
FileToBase64(file).then((base64)=>{console.log("base64:",base64)})
```
>base64转file

```js
export const Base64ToFile=(base64,fileName)=>{
    let arr=base64.split(","),
     mime=arr[0].match(/:(.*?);/)[1],
     fileType=mime.split("/")[1],
     baseStr=window.atob(arr[1]),
     n=baseStr.length,
     uBarr=new Uint8Array(n);
    while(n--){
        uBarr[n]=baseStr.charCodeAt(n)
    }
    return new File([uBarr],`${fileName}.${fileType}`,{type:mime})
}
```
>base64转Blob

```js
export const  Base64ToBlob=(dataUrl, filename)=> {
    var arr = dataUrl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        baseStr = atob(arr[1]),
        n = baseStr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = baseStr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
```
>Blob转file

```js
export const BlobToFile=(blob,fileName,fileType)=> {
    return new File([blob], fileName, { type: fileType })
}
```

>file转binary

```js
export const FileToBinary=()>{
     let reader=new FileReader();
    reader.readAsBinaryString(file);
    return new Promise((resolve, reject) => {
        reader.onload=(e)=>{
            let base64=e.target.result;
            resolve(base64)
        }
        reader.onerror=(e)=>{
            reject(e)
        }
    })
}
```

## 正则

常用正则以及正则测试推荐浏览器插件FeHelper


>手机号

```javascript
/**
 * @params {number|string} s 手机号
 * return {Boolean}
 */
export const isMobile=(s)=>{
    return /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(s)
}
```
## 导出Excel（可结合elementUI）
准备：
```
npm i -s xlsx file-saver
```
引入
```
import * as XLSX from "xlsx";
import FileSaver from "file-saver";
```
```js
exportExcel(dom,name,raw=true) {
      var xlsxParam = { raw };//转换成excel时，使用原始的格式
      var wb = XLSX.utils.table_to_book(document.querySelector(dom),xlsxParam);
      var wbout = XLSX.write(wb, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream;charset=utf-8" }),
          name+".xlsx"
        );
      } catch (e) {
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
```

<font color="red">注意：数据需要提前准备好</font>



## 页面复制粘贴图片

```HTML
<textarea id="txt"></textarea>
<img id="showImg"  src=""/>
```

```JS
document.getElementById("txt").addEventListener("paste", function (e) {

    let items = event.clipboardData && event.clipboardData.items;
    let file = null;
    if (items && items.length) {
        // 检索剪切板items中类型带有image的
        for (var i = 0; i < items.length; i++) {
            if (items[i].type.indexOf('image') !== -1) {
                file = items[i].getAsFile(); // 此时file就是剪切板中的图片文件
                break;
            }
        }
    }
    changePic(files)
}, false); 

  function changePic(files) {
      
        var newSrc=getObjectURL(files);
        document.getElementById('showImg').src=newSrc;
    }
    //建立一個可存取到該file的url
    function getObjectURL(file) {
        var url = null ;
        // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
        if (window.createObjectURL!=undefined) { // basic
            url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
    }
```

## javascript解决小数的加减乘除精度丢失的方案

>big.js

>数字转字符串计算

```js
let  HighPrecisionJs=(num1,type,num2)=>{
  num1=String(num1)
  num2=String(num2)
  num1=num1.split(".")
  num2=num2.split(".")
  let NumInt1=num1[0];
  let NumDouble1=num1.length>1?num1[1]:"";
  let NumInt2=num2[0];
  let NumDouble2=num2.length>1?num2[1]:"";
  let NumDouble=Compute(NumDouble1,NumDouble2,false);
  let NumInt=Compute(NumInt1,NumInt2,true,NumDouble[1])
  return NumInt[1]==1?`1${NumInt[0]}.${NumDouble[0]}`:`${NumInt[0]}.${NumDouble[0]}`
}

let Compute=(num1,num2,type,double=0)=>{
  let n=0;
  if(num1.length==num2.length){

  }else if(num1.length>num2.length){
      num2=addZero(num2,num1.length-num2.length,type)
  }else{
      num1=addZero(num1,num2.length-num1.length,type)
  }
  let res=[];
  for(let i=num1.length-1;i>=0;i--){
    if(i==num1.length-1){
     res[i]=Number(num1[i])+Number(num2[i])+double;
    }else{
      res[i]=Number(num1[i])+Number(num2[i])+n;
    }
   if(res[i]>9){
      res[i]=res[i]%10
      n=1;
   }else{
      n=0;
   }
  }
  return [res.join(""),n]
}
let  addZero=(num,length,position=true)=>{
  let zero=new Array(length).fill("0");
//   let zero=""
//   for(let i=0;i<length;i++){
//       zero+="0";
//   }
 
//  return position?zero+num:num+zero;
 return position?[...zero,...num]:[...num,...zero];
}
console.time()

console.log(HighPrecisionJs('0.9999999999999',"+",'0.11111111111111111111111111111111111111111'))
console.timeEnd()



```

## node起一个简单服务器

```js
```