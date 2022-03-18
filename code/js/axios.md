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