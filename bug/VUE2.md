# VUE2

>添加路由后访问页面白屏

使用动态添加路由addRoutes()会遇到下面的情况：
在addRoutes()之后第一次访问被添加的路由会白屏，这是因为刚刚addRoutes()就立刻访问被添加的路由，然而此时addRoutes()没有执行结束，因而找不到刚刚被添加的路由导致白屏。因此需要从新访问一次路由才行。<br>

该如何解决这个问题 ?<br>
此时就要使用next({ ...to, replace: true }) 来确保 addRoutes() 时动态添加的路由已经被完全加载上去。<br>

 next({ ...to, replace: true }) 中的 replace: true 只是一个设置信息，告诉VUE本次操作后，不能通过浏览器后退按钮，返回前一个路由。

 >template上使用v-for报错

 
在template标签上使用v-for报错

cannot be keyed. Place the key on real elements instead

查了一下百度，是因为key需要绑定在真实的元素上

>elementUI
