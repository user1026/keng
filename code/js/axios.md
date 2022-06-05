# axios
> 创建实例
```javascript
let http = axios.create({
    baseURL: 'url',
    timeout: 15000  //超时时间 （ 毫秒）
})
```
> 请求拦截

```javascript
http.interceptors.request.use(req=>{
    return req;
}, err=>{});
```
> 响应拦截
```javascript
http.interceptors.reponse.use(res=>{
    return res
}, err=>{});
```

>完整代码
```javascript
import axios from "axios"
let http = axios.create({
    baseURL: 'url',
    timeout: 15000  //超时时间 （ 毫秒）
    headers:{//可以设置默认请求头

    },
    //withCredentials: true // 跨域时允许携带cookie
})
http.interceptors.request.use(req=>{
    req.headers.common['token'] = token;//带上token
    return req;
}, err=>{});
http.interceptors.reponse.use(res=>{
    return res
}, err=>{});
export http
```