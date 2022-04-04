# VUE3

### vue3路由重定向

Catch all routes ("*") must now be defined using a param with a custom regexp.


```javascript
//正确写法
   const routes=[
       {
           path:"/home",
           component:home
       },
       {
           path:"/:pathMatch(.*)",
           redirect:"/404",
       }
   ]
```
