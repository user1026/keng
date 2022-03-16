
# JS


## 时间
#### 获取当前日期

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
#### 获取当前时间 

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
#### 获取当前日期和时间 

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
#### 时间戳转正常日期时间

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