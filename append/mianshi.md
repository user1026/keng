# 面试题

## HTML

> 如果理解 HTML 语义化

HTML标签的语义化，简单来说，就是用正确的标签做正确的事情，给某块内容用上一个最恰当最合适的标签，使页面有良好的结构，页面元素有含义，无论是谁都能看懂这块内容是什么。<br>
语义化的优点如下：
- 在没有CSS样式情况下也能够让页面呈现出清晰的结构
- 有利于SEO和搜索引擎建立良好的沟通，有助于爬虫抓取更多的有效信息，爬虫是依赖于- 标签来确定上下文和各个关键字的权重
- 方便团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化


> 块状元素&内联元素？

块级元素：占据其父元素（容器）的整个空间，创建了一个“块”。通常浏览器会在块级元素前后另起一行，能容纳其他块元素或者内联元素。display:block/table;有 div h1 h2 table ul ol p 等
内联元素：只占据它对应标签的边框所包含的空间，只能容纳文本或者其他内联元素的元素。display:inline/inline-block;有 span img input button 等



> h5 新增的标签和属性

- hgroup、header、nav、section、article、aside、footer
- input的type：
  - text:文本框
  - password:密码框
  - radio:单选框
    -  注意以name分组，确保单选关系，也为了后台能成功获取
    -  必须有value属性，为了后台获取后的识别（不写统一为on）
  - checkbox:复选框
    - 注意以name分组，确保为一组，也为了后台能成功获取
    - 必须有value属性，为了后台获取后的识别（不写统一为on）
  - submit:提交按钮
  - reset:重置按钮
  - button:普通按钮
  - email :email地址类型
  - tel :电话类型
  - url :url类型
  - search :搜索类型
  - range : 特定范围内的数值选择器
    - 属性:min、max、step
  - number : 只能包含数字的输入框
  - color : 颜色选择器
  - datetime : 显示完整日期(移动端浏览器支持)
  - datetime-local : 显示完整日期，不含时区
  - time : 显示时间，不含时区
  - date : 显示日期
  - week : 显示周
  - month : 显示月
- select:下拉框
  - name属性在select标签上
  - multiple:可选多项
  - 子项可以通过optgroup来进行分组
  - label属性用来定义组名
  - 子项为option标签
  - selected属性,选中控制
  - 必须有value属性,为了后台获取后的识别
- textarea:文本域
- label:控制文本与表单的关系
  - for属性指向一个input的id
- 标签fieldset 标签legend:来为表单分组
- 表单属性
  - placeholder : 输入框提示信息
    - 适用于form,以及type为text,search,url,tel,email,password类型的input
  - autofocus : 指定表单获取输入焦点
  - required : 此项必填，不能为空
  - pattern : 正则验证 pattern="\d{1,5}
  - formaction 在submit里定义提交地址
  - list和datalist : 为输入框构造一个选择列表
  - list值为datalist标签的id
  
>什么是 DOCTYPE， 有何作用？

Doctype是HTML5的文档声明，通过它可以告诉浏览器，使用哪一个HTML版本标准解析文档。在浏览器发展的过程中，HTML出现过很多版本，不同的版本之间格式书写上略有差异。如果没有事先告诉浏览器，那么浏览器就不知道文档解析标准是什么？此时，大部分浏览器将开启最大兼容模式来解析网页，我们一般称为怪异模式，这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的bug，所以文档声明是必须的。


>src 和 href 的区别

src和href都是HTML中特定元素的属性，都可以用来引入外部的资源。两者区别如下：

- src：全称source，它通常用于img、video、audio、script元素，通过src指向请求外部资源的来源地址，指向的内容会嵌入到文档中当前标签所在位置，在请求src资源时，它会将资源下载并应用到文档内，比如说：js脚本、img图片、frame等元素。当浏览器解析到该元素时，会暂停其它资源下载，直到将该资源加载、编译、执行完毕。这也是为什么将js脚本放在底部而不是头部的原因。
- href：全称hyper reference，意味着超链接，指向网络资源，当浏览器识别到它指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理，通常用于a、link元素。

>inline（行内）元素的特点

1. 行内元素不会独占一行，多个行内元素会排成一行，直到充满整行之后再换行。
2. 行内元素不能设置width和height属性，它的宽和高是元素内容的宽和高。
2. 设置margin和padding属性时，margin-top，margin-bottom，padding-top，padding-bottom无效。行内元素的padding-top和padding-bottom在浏览器中会显示出效果，但是并没有实际作用，对周围的元素没有影响。
>inline-block的特点：

1. 设置为inline-block的元素仍然呈现为inline元素，但是其中的内容作为block内容呈现。
2. width，height，margin，padding属性有效。
3. 相邻的元素仍然在同一行内排列。
>block元素的特点：

1. 块级元素前后会单独换行。
2. 块级元素设置width,height,margin,padding属性有效。
>img上 title 与 alt

- alt：全称alternate，切换的意思，如果无法显示图像，浏览器将显示alt指定的内容
- title：当鼠标移动到元素上时显示title的内容
  
>你知道SEO中的TDK吗？

在SEO中，TDK其实就是title、description、keywords这三个标签，title表示标题标签，description是描述标签，keywords是关键词标签

>a元素除了用于导航外，还有什么作用？

href属性中的url可以是浏览器支持的任何协议，所以a标签可以用来手机拨号<a href="tel:110">110</a>，也可以用来发送短信<a href="sms:110">110</a>，还有邮件等等<br>
当然，a元素最常见的就是用来做锚点和 下载文件。<br>
锚点可以在点击时快速定位到一个页面的某个位置，而下载的原理在于a标签所对应的资源浏览器无法解析，于是浏览器会选择将其下载下来。

>cookie,localStorage,sessionStorage

cookie的大小是受限的，并且每次请求一个新页面时， cookie都会被发送过去，这样无形中浪费了带宽。另外， cookie还需要指定作用域，不可以跨域调用。<br>
localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。<br>
sessionStorage用于在本地存储一个会话（ session）中的数据，这些数据只有同一个会话中的页面才能访问，当会话结来后，数据也随之销毀。因此 sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。
>如何实现浏览器内多个标签页之间的通信？

在标签页之间，调用 localstorge、 cookies等数据存储，可以实现标签页之间的通信

>script标签中defer和async的区别

如果没有defer或async属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。<br>
defer 和 async属性都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析，其区别如下：

- 执行顺序： 多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行；
- 脚本是否并行执行：async属性，表示后续文档的加载和执行与js脚本的加载和执行是并行进行的，即异步执行；defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。

>常⽤的meta标签有哪些

meta 标签由 name 和 content 属性定义，用来描述网页文档的属性，比如网页的作者，网页描述，关键词等，除了HTTP标准固定了一些name作为大家使用的共识，开发者还可以自定义name。
常用的meta标签：
1. charset，用来描述HTML文档的编码类型：
2. keywords，页面关键词
3. description，页面描述
4. refresh，页面重定向和刷新
5. viewport，适配移动端，可以控制视口的大小和比例
<br>
其中，content 参数有以下几种：
- width viewport ：宽度(数值/device-width)
- height viewport ：高度(数值/device-height)
- initial-scale ：初始缩放比例
- maximum-scale ：最大缩放比例
- minimum-scale ：最小缩放比例
- user-scalable ：是否允许用户缩放(yes/no）

（6）搜索引擎索引方式：
<br>
其中，content 参数有以下几种：
- all：文件将被检索，且页面上的链接可以被查询；
- none：文件将不被检索，且页面上的链接不可以被查询；
- index：文件将被检索；
- follow：页面上的链接可以被查询；
- noindex：文件将不被检索；
- nofollow：页面上的链接不可以被查询。


## H5

>谈谈对html5的了解

1. 良好的移动性，以移动设备为主。
2. 响应式设计，以适应自动变化的屏幕尺寸
3. 支持离线缓存技术，webStorage本地缓存
4. 新增canvas，video，audio等新标签元素。新增特殊内容元素：article，footer，header，nav，section等，新增表单控件：calendar，date，time，email，url，search。
5. 地理定位…
6. 新增webSocket/webWork技术

>HTML5 存储类型有什么区别？

 HTML5 能够本地存储数据，在之前都是使用 cookies 使用的。HTML5 提供了下面两种本地存储方案：
  - localStorage 用于持久化的本地存储，数据永远不会过期，关闭浏览器也不会丢失。
  - sessionStorage 同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储

>

>

## CSS

> 水平居中对齐有哪些实现方式？

```css
<!--父级-- > 
#a {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```css
<!--父级-- > 
#a {
  display: flex;
  width: 100vw;
  height: 100vh;
}
<!--子级-- > 
#b {
  width: 10vw;
  height: 10vh;
  margin: auto;
}
```
```css
    <!--父级-- > 
#a {
  width: 100vw;
  height: 100vh;
}
<!--子级需设置行高与父级相同，且本方法只对含有文字的元素有效-- > 
#b {
    text-align: center;
    line-height: 100vh;
}
```

> 如何简单实现一个三角形

```css
#a {
  width: 0;
  border-top: 100px solid red;
  border-left: 100px solid transparent;
  border-bottom: 100px solid transparent;
  border-right: 100px solid transparent;
}
<!--或设置相邻两边，一边又颜色一边透明--- > 
#a {
  width: 0;
  border-bottom: 100px solid red;
  border-right: 100px solid transparent;
}
```

> 对 margin 的 top left right bottom 设置为负值，有何效果？

- margin-top left 是平移元素自身
- margin-right bottom 平移其他元素
  效果:
- margin-top 和 margin-left 负值，元素向上、向左移动
- margin-right 负值，右侧元素左移，自身不受影响
- margin-bottom 负值，下方元素上移，自身不受影响

> 什么是 BFC？如何应用？

- float 属性不为 none
- position 为 absolute 或 fixed
- display 为 inline-block, table-cell,table-caption,flex,inline-flex
- overflow 不为 visible

开启 BFC 特点作用:

- 开启 BFC 的元素不会被浮动元素覆盖
- 开启 BFC 的元素父子外边距不会合并(解决 margin 叠加问题)
- 开启 BFC 的元素可以包含浮动的子元素（解决浮动高度塌陷）

> margin 纵向重叠问题

相邻元素的 margin-top 和 margin-bottom 发生重叠

> 定位

- static：默认值，静态定位，表示没有定位，元素会按照正常的位置显示，此时 top、bottom、left 和 right 4 个定位属性也不会被应用。
- relative|相对定位，即相对于元素的正常位置进行定位，您可以通过 top、right、bottom、left 这 4 个属性来设置元素相对于正常位置的偏移量，在此过程中不会对其它元素造成影响。
- absolute	绝对定位，相对于第一个非 static 定位的父级元素进行定位，可以通过 top、right、bottom、left 这 4 个属性来设置元素相对于父级元素位置的偏移量。如果没有满足条件的父级元素，则会相对于浏览器窗口来进行定位。使用绝对定位的元素不会对其它元素造成影响。
- fixed	固定定位，相对于浏览器的可视窗口进行定位，可以使用 top、right、bottom、left 这 4 个属性来定义元素相对于浏览器窗口的位置。使用固定定位的元素无论如何滚动浏览器窗口元素的位置都是固定不变的。
- sticky	粘性定位，它是 relative 和 fixed 的结合体，能够实线类似吸附的效果，当滚动页面时它的效果与 relative 相同，当要滚动到屏幕之外时则会自动变成 fixed 的效果。
>css可以继承属性

一是 文本相关的属性： font-family, font-size, font-style,font-variant, font-weight, font, letter-spacing,line-height，text-align, text-indent, text-transform,word-spacing ,color<br>
二是 列表相关的属性： list-style-image, list-style-position,list-style-type, list-style
> rem是什么及 px，em，rem的区别？

- px像素。绝对单位，像素px是相当于于显示器屏幕分辨率而言的
- em,相对长度单位，相对于父元素，不常用
- rem,相对于根元素html的字体大小，常用于响应式布局


>响应式布局常见的方案？

- media-query,根据不同的屏幕设置根元素font-size<br>
- rem，基于根元素的相对单位<br>

>transition和animation有何区别？

- transition: 用于做过渡效果，没有帧概念，只有开始和结束状态，性能开销小
- animate：用于做动画，有帧的概念，可以重复触发且有中间状态，性能开销比较大，主动触发

> 使用一个元素显示以及隐藏的方式？

- display:none;
  - 结构上:元素在页面上将彻底消失，元素不占据空间且无法点击;
  - 继承性:父元素设置了display:none子元素无论怎么设置都无法显示
  - 性能:会引起浏览器重绘重排，性能消耗较大
- opacity: 0;
  - 结构上:元素在页面上消失，元素占据空间可以点击;
  - 继承性:父元素设置了opacity:0子元素无论怎么设置都无法显示;
  - 性能:重建图层，性能消耗小
- visibility:hidden;
  - 结构上:元素在页面消失，其占据的空间依旧会保留;无法点击
  - 继承性:visibility: hidden会被子元素继承，但是子元素可以通过设置visibility: visible;来取消隐藏。
  - 性能:只会导致浏览器重绘,性能消耗相对小
- 设置height，width等盒模型属性为0
  - 元素的margin,border，padding,height和width等影响元素盒模型的属性设置成0
  - 如果元素内有子元素或内容，还应该设置其overflow:hidden来隐藏其子元素

>选择器优先级

! important>行内样式>id选择器>类选择器>标签选择器>通配符>继承

> CSS Sprites是什么？它的优势和劣势？

CSS Sprite精灵图 把一堆小的图片整合到一张大的图片<br>
优：
1. 很好的减少网页的请求，大大提高页面的性能;
2. 减少图片的字节;
3. 解决了网页设计师在图片命名上的困扰;
4. 更换风格方便，维护方便。<br>
劣：
1. 图片合并时需预留好足够空间，宽屏、高分辨率的屏幕下易出现背景断裂;
2. 开发较麻烦，测量繁琐;（可使用样式生成器)
3. 维护麻烦，背景少许改动有可能影响整张图片，使得字节增加还要改动css。

>重排和重绘

重排：当渲染树的一部分必须更新并且节点的尺寸发生了变化，浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。简而言之，发生几何信息变化导致页面布局的改变.<br>
重绘：是在一个元素的外观被改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。也就是发生非几何信息的变化导致页面布局改变，比如改变某个元素的背景色、文字颜色、边框颜色等等<br>
『重绘』不一定会出现『重排』，『重排』必然会出现『重绘』。

>标准盒模型和IE盒模型

两者的区别在于content的不同，IE盒模型的content包括border、padding

>

>

## JS

>JavaScript的数据类型都有什么？
- 基本数据类型：Number、String、Boolean、Null、Undefined （es6新增：Symbol，bigInt）
- 复杂数据类型：Object（Function、Array、Date、RegExp）
  
>如何判断某变量数据类型？
Object.prototype.toString.call()

>new操作符具体干了什么呢?

1. 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
2. 属性和方法被加入到 this 引用的对象中。
3. 新创建的对象由 this 所引用，并且最后隐式的返回 this 。

>JavaScript作用域与作用域链

作用域：<br>
简单来说，作用域是指程序中定义变量的区域，它决定了当前执行代码对变量的访问权限<br>
作用域链：<br>
当可执行代码内部访问变量时，会先查找当前作用域下有无该变量，有则立即返回，没有的话则会去父级作用域中查找...一直找到全局作用域。我们把这种作用域的嵌套机制称为作用域链<br>


>说说你对原型链的理解？

每个函数（类）天生自带一个属性prototype，属性值是一个对象，里面存储了当前类供实例使用的属性和方法 「（显示原型）」<br>
在浏览器默认给原型开辟的堆内存中有一个constructor属性：存储的是当前类本身（⚠️注意：自己开辟的堆内存中默认没有constructor属性，需要自己手动添加）「（构造函数）」<br>
每个对象都有一个__proto__属性，这个属性指向当前实例所属类的原型（不确定所属类，都指向Object.prototype）「（隐式原型）」<br>
当你试图获取一个对象的某个属性时，如果这个对象本身没有这个属性，那么它会去它的隐式原型__proto__（也就是它的构造函数的显示原型prototype）中查找。「（原型链）」<br>
```js
function A(){}
var a=new A();
console.log(a.__proto__===A.prototype)//true
```

>说说什么是模块化开发？

模块化的开发方式可以提高代码复用率，方便进行代码的管理。通常一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数。

>闭包

外部环境可以访问函数内部变量<br>
优点
1. 可以从内部函数访问外部函数的作用域中的变量，且访问到的变量长期驻扎在内存中，可供之后使用
2. 避免变量污染全局
3. 把变量存到独立的作用域，作为私有成员存在
<br>
缺点
1. 对内存消耗有负面影响。因内部函数保存了对外部变量的引用，导致无法被垃圾回收，增大内存使用量，所以使用不当会导致内存泄漏
2. 对处理速度具有负面影响。闭包的层级决定了引用的外部变量在查找时经过的作用域链长度
3. 可能获取到意外的值(captured value)


>forEach如何跳出循环

forEach是不能通过break或者return来实现跳出循环的，forEach的回调函数形成了一个作用域，在里面使用return并不会跳出，只会被当做continue<br>
实现方法：try...catch<br>
```js
function getItemById(arr, id) {
    var item = null;
    try {
        arr.forEach(function (curItem, i) {
            if (curItem.id == id) {
                item = curItem;
                throw Error();
            }
        })
    } catch (e) {}
    return item;
}
```
>同步和异步

我们知道了浏览器页面是由任务队列和事件循环系统来驱动的，但是队列要一个一个执行，如果某个任务(http请求)是个耗时任务，那浏览器总不能一直卡着，所以为了防止主线程阻塞，就将任务分为同步任务和异步任务

- 同步任务：就是任务一个一个执行，如果某个任务执行时间过长，后面的任务只能一直等下去
- 异步任务：就是进程在执行某个任务时，该任务需要等一段时间才能返回，这时候就把这个任务放到专门处理异步任务的任务队列中去，执行栈则继续往下执行，不会因为这个任务而阻塞

>微任务和宏任务

JS执行时，V8会创建一个全局执行上下文，在创建上下文的同时，V8也会在内部创建一个微任务队列<br>
有微任务队列，自然就有宏任务队列，宏任务队列中的每一个任务则都称为宏任务，在当前宏任务执行过程中，如果有新的微任务产生，就添加到微任务队列中<br>

- 微任务包括：promise.then()、queueMicrotask()、MutationObserver(监听DOM)、node 中的 process.nextTick等
- 宏任务包括：渲染事件、请求、script、setTimeout、setInterval、Node中的setImmediate、I/O 等

>继承

1. 原型链继承

- 原理： 让父类中的属性和方法在子类实例的原型链上
- 缺点：多个实例对<font color="red">引用类型</font>的操作会被篡改，因为他们指向同一个父类的实例

```js
function Father (){
  this.name="1";
}
Father.prototype.log=function(){
  console.log(this,"this");
}
function Child(){}
Child.prototype=new Father();
var child1=new Child();
var child2=new Child();
console.log(child1.prototype==child2.prototype)//true
```

2. 借用构造函数继承

- 原理：在子类方法中把父类的方法当作普通函数来执行，让父类中的this指向子类的实例，相当于给子类实例是设置了很多私有的属性和方法
- 特点：可以在子类构造函数中向父类传参数，父类的引用属性不会被共享
- 缺点：
  - 只能继承父类的实例属性和方法，不能继承原型属性/方法
  - 无法实现复用，因为父类私有变为子类私有，每个子类都有父类实例函数的副本，影响性能

```js
function Father (){
  this.name="1";
}
Father.prototype.log=function(){
  console.log(this,"this");
}
function Child(){
   Father.call(this)
}
var child=new Child();
console.log(child.name)//1
console.log(child.log())//访问不到
```

3. 组合继承
- 原理： 综合借用构造函数继承和原型链继承
- 特点：组合继承综合了原型链继承和盗用构造函数继承(构造函数继承)，将两者的优点结合了起来，基本的思路就是使用原型链继承原型上的属性和方法，而通过构造函数继承实例属性，这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性

```js
function Father(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
Father.prototype.sayName = function(){
  console.log(this.name);
};

function Child(name, age){
  // 继承属性
  // 第二次调用Father()
  Father.call(this, name);
  this.age = age;
}

// 继承方法
// 构建原型链
// 第一次调用Father()
Child.prototype = new Father(); 
// 重写Child.prototype的constructor属性，指向自己的构造函数Child
Child.prototype.constructor = Child; 
Child.prototype.sayAge = function(){
  console.log(this.age);
};

var instance1 = new Child("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29

var instance2 = new Child("Greg", 27);
console.log(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27

instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29
console.log(instance1.prototype==instance2.prototype)
```

4. 原型式继承

- 原理：对参数对象的一种浅复制
- 特点：父类方法可复用
- 缺点 父类的引用会被所有子类所共享，子类实例不能向父类传参

```js
function objectCopy(obj) {
  function Fun() { };
  Fun.prototype = obj;
  return new Fun()
}

let father = {
  name: "yhd",
  age: 18,
  friends: ["jack", "tom", "rose"],
  sayName:function() {
    console.log(this.name);
  }
}

let father1 = objectCopy(father);
father1.name = "wxb";
father1.friends.push("lily");
father1.sayName(); // wxb

let father2 = objectCopy(father);
father2.name = "gsr";
father2.friends.push("kobe");
father2.sayName(); // "gsr"

console.log(father.friends); // ["jack", "tom", "rose", "lily", "kobe"]
```

5. 寄生式继承

- 原理：使用原型式继承对一个目标对象进行浅复制，增强这个浅复制的能力


6. 寄生式组合继承

- 原理：
- 特点：只调用一次父类构造函数，Child可以向Parent传参，父类方法可以复用，父类的引用属性不会被共享

```js
function objectCopy(obj) {
  function Fun() { };
  Fun.prototype = obj;
  return new Fun();
}

function inheritPrototype(child, parent) {
  let prototype = objectCopy(parent.prototype); // 创建对象
  prototype.constructor = child; // 增强对象
  Child.prototype = prototype; // 赋值对象
}

function Parent(name) {
  this.name = name;
  this.friends = ["rose", "lily", "tom"]
}

Parent.prototype.sayName = function () {
  console.log(this.name);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

inheritPrototype(Child, Parent);
Child.prototype.sayAge = function () {
  console.log(this.age);
}

let child1 = new Child("yhd", 23);
child1.sayAge(); // 23
child1.sayName(); // yhd
child1.friends.push("jack");
console.log(child1.friends); // ["rose", "lily", "tom", "jack"]

let child2 = new Child("yl", 22)
child2.sayAge(); // 22
child2.sayName(); // yl
console.log(child2.friends); // ["rose", "lily", "tom"]
```

7. es6的class继承

基本原理和6是差不多的

>JavaScript 中内存泄漏的几种情况？

内存泄漏一般是指系统进程不再用到的内存，没有及时释放，造成内存资源浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。
造成内存泄漏的原因有：<br>
1. 全局变量。在局部作用域中，函数执行完毕后，变量就没有存在的必要了，垃圾回收机制很快的做出判断并回收；但是对于全局变量，很难判断什么时候不用这些变量，无法正常回收。<br>
解决办法：<br>
① 尽量少使用全局变量；<br>
② 使用严格模式，在 js 文件头部或者函数的顶部加上use strict。<br>
2. 闭包引起的内存泄露。闭包可以读取函数内部的变量，然后让这些变量始终保存在内存中，如果在使用结束后没有将局部变量清除，就可能导致内存泄露。<br>
解决办法：将事件处理函数定义在外部，解除闭包。<br>
3. 被遗忘的定时器。定时器setInterval或者setTimeout不再需要使用时，且没有被清除，导致定时器的回调函数及其内部依赖的变量都不能被回收，就会造成内存泄漏。<br>
解决办法：当不需要定时器的时候，调用clearInterval或者clearTimeout手动清除。<br>
4. 事件监听。垃圾回收机制不好判断事件是否需要被解除，导致callback不能被释放，此时需要手动解除绑定。<br>
解决办法：及时使用removeEventListener移除事件监听。<br>
5. 元素引用没有清理。<br>
解决办法：移除元素后，手动设置元素的引用为null。<br>
6. console。传递给console.log的对象是不能被垃圾回收，可能会存在内存泄漏。<br>
解决办法：清除不必要的console。<br>




> 各种宽度，高度

1. screen.width：屏幕的宽。screen.height：屏幕的高。(指的显示器显示区域的宽高)
2. screen.availWidth：可利用的宽，等于屏幕的宽。screen.availHeight：可利用的高，等于屏幕的高减去 mac 顶部栏或 windows 底部栏。
3. screenTop：浏览器窗口左上角到屏幕上边缘的距离。screenLeft：浏览器窗口左上角到屏幕左边缘的距离。Firefox 浏览器不支持上述属性，但是可以使用👇:
- screenX：等于 screenLeft。
- screenY：等于 screenTop。
- 注意：
  - chrome/Opera:保存的是浏览器窗口左上角相对于屏幕的距离，全屏时四个值均为0
  - Firefox/Safari:保存的是浏览器窗口左上角相对于屏幕的距离
  - 当浏览器窗口全屏化时指的是整个浏览器与屏幕左上角的距离，因为在全屏化的时候浏览器边缘8px的边框不显示，所以screenX和screenY为-8
  - IE:保存的是浏览器窗口文档显示区域的左上角相对于屏幕左上角的位置。网页顶部到屏幕顶部的距离：window.screenTop（浏览器全屏为工具栏的高度），网页左边到屏幕左边的距离：window.screenLeft（浏览器全屏为0）
  - ie9+，浏览器窗口全屏化时screenX和screenY为-8
4. window.outerWidth：浏览器窗口的宽。window.outerHeight：浏览器窗口的高。
 - 注意：
   - 在Chrome和Opera中，当浏览器窗口全屏化时，outerWidth和outerHeight指的是可以看到的浏览器部分所占据的空间。
   - 在FireFox、Safari、IE9和IE10中，当浏览器窗口全屏化时，outerWidth和outerHeight指的不仅是可以看到的浏览器所占据的空间，还包括其未显示部分。当浏览器窗口退出全屏化时，其四周会有8px的边框。而当浏览器窗口全屏化时，边框虽然未被显示，但仍然是计算在outerWidth和outerHeight内。 
   - IE7、8不支持。

5. window.innerWidth：视口的宽。window.innerHeight：视口的高。（指可视窗口的宽高，包含滚动条的宽高）
6. clientWidth：内容可视区的宽度。clientHeight：内容可视区的高度。 （指文档可视内容的宽高，不包含滚动条的宽高）
7. scrollWidth：实际内容的宽度。没有垂直滚动条时与clientWidth相同。否则是等于实际内容的宽度 + padding。scrollWidth也包括 ::before 和 ::after这样的伪元素。scrollHeight：实际内容的高度。没有垂直滚动条时与clientHeight相同。否则是等于实际内容的高度 + padding。scrollHeight也包括 ::before 和 ::after这样的伪元素。
8. scrollLeft：元素最左端和窗口中可见内容的最左端之间的距离。即当前左滚的距离，scrollTop：元素最顶端和窗口中可见内容的最顶端之间的距离。即当前上滚的距离

9. 偏移量包括元素在屏幕上占用的所有可见的空间。元素的可见大小由其高度、宽度决定，包括所有内边距、滚动条和边框大小（注意，不包括外边距）。
- offsetHeight：元素在垂直方向上占用的空间大小，包括元素的高度、（可见的）水平滚动条的高度、上边框高度和下边框高度。
- offsetWidth：元素在水平方向上占用的空间大小。包括元素的宽度、（可见的）垂直滚动条的宽度、左边框宽度和右边框宽度。
- offsetLeft：当前元素内容区域（包括border）左边缘到 offsetParent 内容区域（不包括border）左边缘的距离。
- offsetTop：当前元素内容区域（包括border）顶部到 offsetParent 内容区域（不包括border）顶部的距离。
- offsetWidth = 元素宽 + padding（左右）+ border（左右）+ 滚动条宽度



>  缓存
1. cookie

- 当在客户端的浏览器上设置Cookie时，它可以持续数天，数月甚至数年。这样可以轻松保存用户首选项和访问信息<br>
- 不需要任何服务器资源，并存储在用户的计算机上，因此不会给服务器带来额外的负担。<br>
- 确实非常小，它的大小限制为4KB左右,不能储存大数据且不易读取<br>
2. localStorage

- 5M大小 只能存储字符串格式的数据，所以最好在每次存储时把数据转换成json格式， 取出的时候再转换回来 生命周期是永久的， 除非主动删除数据，否则数据永远不会消失<br>
3. sessionStorage

但当页面关闭后，sessionStorage 中的数据就会被清空。<br>
4. indexdb 

- 50mb 允许储存大量数据，提供查找接口，支持异步操作，还能建立索引。indexDB缺点是：不支持DO操作；不能跨域。<br>


> 用户打开首页，加载5s才看到了内容，优化方案都可以说说

这么久才看到页面有可能是因为数据资源大，用户网速慢，服务器响应慢
优化如下：

1. 对css，js和图片等静态资源进行压缩处理，减小文件大小，加快下载速度；
2. 将页面的非关键资源设置成延迟加载，使页面首页加载时只加载必要的内容，后再加载其他资源；
3. 不影响页面渲染的资源可以使用异步的方式进行加载；
4. 将静态资源部署到CDN上，利用cdn的分布式节点加速资源的传输
5. 利用浏览器缓存机制和服务端缓存机制，减少重复请求
6. 对前端代码进行优化，减少重复逻辑






## 算法题

### 排序
>冒泡

```js
function () {
    for(let i = 0; i < this.length - 1; i += 1) {
        //通过 this.length 次把第一位放到最后,完成排序
        //-i是因为最后的位置是会动态改变的，当完成一次后,最后一位会变成倒数第二位 
        for(let j = 0; j < this.length - 1 - i; j += 1) { 
            if(this[j] > this[j+1]) { 
                const temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
}
```
>选择
```js
 function() { 
    for(let i = 0; i < this.length - 1; ++i) { 
        // 假设最小的值是当前的下标
        let indexMin = i;
        //遍历剩余长度找到最小下标
        for(let j = i; j < this.length; ++j) { 
            if(this[j] < this[indexMin] ) { 
                indexMin = j;
            }
        }
        if(indexMin !== i) { 
            //交换当前下标i与最小下标的值，重复this.length次
            const temp = this[i];
            this[i] = this[indexMin];
            this[indexMin] = temp;
        }
    }
};
```
>快排
```js
function () { 
    const rec = (arr) => { 
       // 预防数组是空的或者只有一个元素, 当所有元素都大于等于基准值就会产生空的数组
       if(arr.length === 1 || arr.length === 0) { return arr; }
       const left = [];
       const right = [];
       //以第一个元素作为基准值   
       const mid = arr[0];
       //小于基准值的放左边，大于基准值的放右边
       for(let i = 1; i < arr.length; ++i) { 
           if(arr[i] < mid) { 
               left.push(arr[i]);
           } else { 
               right.push(arr[i]);
           }
       }
        //递归调用，最后放回数组    
       return [...rec(left),mid,...rec(right)];
    };
    const res = rec(this);
    res.forEach((n,i) => { this[i] = n; })
}

```
>归并
```js
 function () { 
    const rec = (arr) => {
        //如果数组长度为1，说明切完了，可以直接返回
        if (arr.length === 1) { return arr; }
        //切分数组，把每一项都单独切出来
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0,mid);
        const right = arr.slice(mid,arr.length);
        //有序的左边数组
        const orderLeft = rec(left);
        //有序的右边数组
        const orderRight = rec(right);
        //定义一个数组来存放顺序数组
        const res = [];
        // 把左右两个有序的合并为一个有序的返回
        while(orderLeft.length || orderRight.length) { 
            if(orderLeft.length && orderRight.length) { 
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            } else if (orderLeft.length) { 
                res.push(orderLeft.shift());
            } else if (orderRight.length) { 
                res.push(orderRight.shift());
            }
        }
        return res;
    };
    const res = rec(this);
    //拷贝到数组本身
    res.forEach((n,i) => { this[i] = n; });
}
```
>插入
```js
 function() { 
    //从第二个数开始往前比
    for(let i = 1; i<this.length; ++i) { 
        //先把值保存起来
        const temp = this[i];
        let j = i;
        while(j > 0) { 
            if(this[j-1] > temp) { 
                this[j] = this[j-1];
            } else { 
                //因为已经是排序过的了，如果比上一位大，那就没必要再跟上上位比较了
                break;
            }
            j -= 1;
        }
        //这里的j有可能是第0位，也有可能是到了一半停止了
        this[j] = temp;
    }
};
```
>ES6（ECMAScript 2015）引入了许多新特性和语法改进，以下是一些主要的新特性：

1. 块级作用域：在ES6中，使用let和const声明的变量具有块级作用域，这意味着这些变量只在其声明的代码块内有效。
2. 箭头函数：这是一种新的函数声明方式，使用箭头(=>)取代了传统的function关键字。箭头函数有几个优点，例如没有自己的this值，这使得在回调和事件处理器中更容易处理this。
3. 解构赋值：这是一种从数组或对象中提取值并赋值给变量的语法。它允许我们更简洁地提取数组或对象的属性。
4. 默认参数：在函数定义时，可以为参数提供默认值。如果调用函数时未提供某个参数的值，那么将使用该参数的默认值。
5. 扩展运算符：它可以将数组或对象展开，提取出其中的元素或属性。这在合并数组或对象时特别有用。
6. 模板字符串：模板字符串提供了一种更简洁、更易读的方式来构建字符串。它们使用反引号（`）来定义，并允许嵌入表达式。
7. 类和模块：ES6引入了类的概念，使得面向对象编程在JavaScript中更加直观和强大。同时，也提供了模块化的导入和导出功能，使得代码的组织和管理更加便捷。
8. 迭代器和生成器：迭代器使得遍历对象（如数组、Map和Set）更加容易，而生成器则提供了一种创建迭代器的简洁方式。
9. Promise对象：Promise用于处理异步操作，它代表了一个可能现在还不可用，但将来某个时间点会可用的值。Promise使得异步编程更加可预测和可维护。
此外，ES6还新增了两种数据类型：BigInt（用于表示任意精度的整数）和Symbol（用于创建唯一的、不可变的原始值）。同时，新增了两种数据结构：Set（类似于数组，但成员的值都是唯一的，没有重复的值）和Map（类似于对象，但键（key）可以是任何类型）。


## 其他
### HTTP

1. GET和POST的请求的区别

|区别	|GET|	POST|
|----|----|----|
|幂等性|是|否|
|应用场景|用于对服务器资源不会产生影响的场景（比如请求一个网页的资源等）|用于对服务器资源会产生影响的情景（比如注册用户等）|
|是否缓存|是|否|
|传参方式|查询字符串传参|请求体传参|
|安全性|将参数放入url中向服务器发送，不安全|在请求体中，安全|
|请求长度|浏览器对于url长度有限制，会受到影响|在请求体中，不会收到浏览器影响|
|参数类型|ASCII字符|文件、图片等|
|幂等性：指一个请求方法执行一次和多次的效果完全相同|

2. POST和PUT的请求的区别

|区别|POST|PUT|
|----|---|---|
|作用|创建数据|更新数据|

为什么POST请求会发送两次？<br><br>
第一次请求为options预检请求，状态码为204
作用1：询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求<br>
作用2： 检测服务器是否为同源请求，是否支持跨域<br>
第二次请求为真正的POST请求<br>


3. 常见的HTTP请求头和响应头

|HTTP Request Header|定义|
|----|----|
|Accept|浏览器能够处理的内容类型|
|Accept-Charset|浏览器能够显示的字符集|
|Accept-Encoding|浏览器能够处理的压缩编码|
|Accept-Language|浏览器当前设置的语言|
|Connection|浏览器与服务器之间连接的类型|
|Cookie|浏览器当前页面设置的任何Cookie|
|Host|当前发出请求的页面所在的域|
|Referer|当前发出请求的页面的URL|
|User-Agent|浏览器的用户代理字符串|

|HTTP Responses Header|定义|
|----|----|
|Date|表示消息发送的时间，时间的描述格式由rfc822定义|
|server|服务器名称|
|Connection|浏览器与服务器之间连接的类型|
|Cache-Control|控制HTTP缓存|
|content-type|表示后面的文档属于什么MIME类型|

|Content-Type|定义|
|----|----|
|application/x-www-form-urlencoded|浏览器原生form表单|
|multipart/form-data|表单上传文件|
|application/json|服务器消息主体是序列化后的 JSON 字符串|
|text/xml|提交 XML 格式的数据|

### 简单请求和非简单请求

简单请求是浏览器向服务器发送的一种特定类型的跨域请求，满足如下条件就不会触发浏览器的预检请求

- 使用以下方法：get,head,post
- 请求头只包含以下字段：accept,accept-language,content-language,content-type(有限制)

满足这些条件浏览器会将其视为简单请求，直接发送给后端，不会触发预检请求，服务器收到请求后，若允许跨域，则会返回响应
不满足那些条件就是非简单请求，这些请求会触发浏览器的预检请求，服务器接收到预检请求后，需要返回相应的cors头部信息来确认是否允许跨域

### 强缓存和协商缓存
强缓存和协商缓存是浏览器在缓存资源时使用的两种不同策略
强缓存：强缓存是通过设置http响应头的cache-control和expires字段来实现的，当浏览器发送请求时，会先检查缓存中是否存在资源以及是否过期，若没有则直接从缓存中获取资源，不会向服务器发送请求。
协商缓存：协商缓存是通过http响应头中的etag和last-modified字段来实现的，当浏览器发送请求时，会先向服务器发送一个验证请求，询问资源是否有更新，服务器收到验证请求后，会根据资源的内容来生成一个唯一标识etag和最后修改时间last-modified，若资源没有发生变化，则服务器返回304状态码，告诉浏览器可以继续使用缓存中的资源，若资源发生了变化，则服务器返回新的资源内容和相应的状态码
强缓存和协商缓存可以结合使用，浏览器在接收到服务器的响应时会根据cache-control和expires字段判断是否使用强缓存，如果强缓存失效，则会发送一个带有if-none-match或if-modified-since字段的请求，进行协商缓存验证。


### 前后端通讯

1. http请求
2. ajax，js异步与服务器进行通信
3. websocket，允许前端和后端建立持久连接，并进行双向实时通信，比如在线聊天
4. SSE(Server-Sent Events)，允许服务器向客户端推送实时更新的数据，与websocket不同，sse只能从服务器向客户端发送数据，不能双向通信

## webpack

> 简单说一下 webpack 的构建流程
> 
webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

1. 初始化参数：  从配置文件和shell 语句中读取与合并参数，得到最终的参数。
2. 开始编译：  用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行 compiler 对象的 run 方法开始执行编译。
3. 确定入口： 根据配置中的 entry 找出所有的入口文件。
4. 编译模块： 从入口文件出发，调用所有配置的 Loader 对模块进行编译，找出该模块依赖的模块，再递归本步骤直到所有依赖文件都经过本步骤的处理。
5. 完成模块编译： 在经过第 4 步使用 Loader 编译完所有模块之后，得到每个模块被编译后的最终内容以及它们之间的依赖关系。
6. 输出资源： 根据入口和模块之间的关系，组装成一个个包含多个模块的 chunk，再把每个 chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。
7. 输出完成： 在确定输出内容之后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

>Loader 和 Plugin 的区别

- Loader 本质就是一个函数，在该函数对接收到的内容进行转换，返回转换后的结果。你可以理解为是一个“管道”，在外部接收到的内容通过这个“管道”进行转换，然后再将转换后的结果输出。因为 webpack 只认识 js，所以，你也可以将 Loader 称之为“翻译官”，对其他类型的资源进行转译的预处理工作。
- Plugin 直译为插件，基于事件流框架 Tapable。Plugin 可以扩展 webpack 的功能，让 webpack 具有更多的灵活性。在 Webpack 运行的生命周期中会广播出许多事件，Plugin可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。

干货来了！！！（通过这个 Tapable 框架，你可以更深层的谈一下 webpack 底层 plugin 是如何实现的以及微内核，其实 webpack 就是微内核架构的一个例子，本质上就是一个是很小的功能，它并没有携带任何业务的功能，比如：打包多个页面，在打包页面上做相应的操作，其实它都没有，形象的来说它更像是一个底座，这底座可以插上各个地方增添的功能）
扩展：<br>
微内核系统一般分为两部分 ---核心系统和插件系统，这样就提供了很好的灵活性和可扩展性。核心系统是最小可运行的模块，它提供的是通用逻辑（比如 Tapable），而插件系统这些是具体的逻辑（比如HtmlWebpackPlugin插件），再比如系统怎么跑起来，插件之间怎么通信等模块都属于核心系统里面，让系统更加丰富多彩就是插件系统了。插件之间可以相互独立，也可以有依赖。<br>
核心系统怎么知道哪些插件可用呢？<br>
这就需要注册表了，其实我们的 webpack.config.js 就起到了这样的作用，它告诉我们需要使用哪些插件。<br>
插件系统和核心系统怎么通信呢？<br>
这就需要用到 Tapable 了，里面有各种 hooks，并且在运行各个生命周期过程中会执行对应的回调。我们的核心系统有生命周期的概念，插件里面也有，因为它们的架构是类似的。我们的核心系统在运行后会先读取注册表信息，这个过程其实就是订阅事件，主车回调的过程。插件可以在运行回调的过程中再不断订阅自己需要的其他事件，注册其他回调。服务于具体逻辑的插件模块是独立于核心系统之外的，但是它可能会需要操作核心模块的系统服务来实现这些规定的功能，此时核心系统需要提供一个上下文对象（context），当然，插件模块与外部进行交互只允许通过此上下文对象完成。上下文对象提供了基础操作（调起其他插件模块、调起系统服务，获取系统信息）的 API 和事件。
这样待核心系统的生命周期顺序执行的过程，也就伴随这对应的时期的插件的生命周期交替执行，生命周期走完了，整个程序流程也就结束了。
>说一下 webpack 的热更新原理

webpack 的热更新又称为热替换（Hot Module Replacement），缩写为 HMR，这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。
HMR 的核心就是客户端从服务端拉取更新后的文件，准确的说是 chunk diff（chunk需要更新的部分），实际上 webpack-dev-server 与浏览器之间维护了一个 WebSocket，当本地资源发生变化时，webpack-dev-server会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 webpack-dev-server 发起 ajax 请求来获取更改内容（文件列表、hash），这样客户端就可以再借助这些信息继续向 webpack-dev-server 发起 jsonp 请求获取该 chunk 的增量更新。后续的部分由 HotModulePlugin 来完成，提供了相关的 API 以供开发真针对自身场景进行处理，像 react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。
详细的HRM原理解析
>如何提高 webpack 的打包速度？

- 多入口情况下，使用 optimization.splitChunks 来提取公共代码。
- 通过 externals 配置来提取常用库。
- 利用 DllPlugin 和 DllReferencePlugin 预编译资源模块，通过 DllPlugin 来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin 将编译编译的模块加载进来。
- 使用 thread-loader 实现多进程加速编译。
- 使用 terser-webpack-plugin 对js进行代码压缩。
- 优化 resolve 配置缩小范围。
- 使用 tree-shaking 和 Scope hoisting 来剔除多余代码。
     
>如何减少 webpack 打包体积？

- 使用 externals 配置来提取常用库。
- 使用 tree-sjaking 和 scope hoisting 来剔除多余代码。
- 使用 optimize-css-assets-webpack-plugin 压缩css。
- 使用 terser-webpack-plugin 对 js 进行代码压缩。


> webpack优化方案

Webpack优化方案主要包括以下几个方面：

1. 代码分割：通过配置Webpack的代码分割功能，将项目代码分割成多个块（chunks），并在需要时按需加载。这有助于降低初始加载时间，提高用户体验。
2. Tree Shaking：利用Webpack的Tree Shaking功能，只保留项目中实际使用到的代码，剔除未使用的代码，从而减小打包后的文件大小。这通常通过ES6模块化导入和导出实现。
3. 优化加载速度：使用Webpack的插件如MiniCssExtractPlugin来提取CSS代码，以及利用babel-loader的缓存机制等，以减少构建时间和加载时间。
4. 并行构建：使用Webpack的thread-loader或happypack插件将任务分发给多个子进程并行处理，从而提高构建速度。
5. 优化文件体积：使用Webpack的压缩插件如terser-webpack-plugin来压缩JavaScript代码，以及使用cssnano等工具压缩CSS代码，进一步减小文件体积。
6. 减少文件数量：通过按需加载、动态导入等方式减少打包的文件数量，降低初始打包的体积和时间。
7. 优化Loader和插件：选择性能良好的Loader和插件，并通过配置参数和选项来提高其性能。
8. 启用缓存：利用Webpack的缓存机制来避免重复构建未改变的模块。可以使用cache-loader或babel-loader的缓存选项来提高构建性能。
9. 分包处理：通过手动或自动分包的方式，将代码拆分成多个包，实现代码的按需加载，提高加载效率。
10. 代码压缩：使用gzip等工具对打包后的文件进行压缩，减小传输体积，加快页面加载速度。


>webpack 有哪些常见的 loader？你用过哪些 loader？

- cache-loader：可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里。
- file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件（处理图片、字体、图标）。
- url-loader：与file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader，小于阈值时返回文件 base64 形式编码（处理图片）。
- image-loader：加载并且压缩图片文件。
- babel-loader：把 ES6 转换成 ES5。
- ts-loader：将 typescript 转换成 JavaScript。
- svg-inline-loader：将压缩后的SVG内容注入代码中。
- raw-loader：加载文件原始内容（utf-8）。
- sass-loader：将 scss/sass 代码转换成 css。
- css-loader：加载 css，支持模块化、压缩、文件导入等特性。
- less-loader：将 less 代码转换成 css。
- style-loader：生成 style 标签，将 js 中的样式资源插入，并添加到 header 中生效。
- postcss-loader：扩展 css 语法，使用下一代 css，可以配合 autoprefixer 插件自动补齐 css3 前缀。
- eslint-loader：通过 eslint 检查 JavaScript 代码。
- tslint-loader：通过tslint 检查 typesc 代码。
- vue-loader：加载 vue.js 单文件组件。
- awesome-typescript-loader：将 typescript 转换成 JavaScript，性能优于 ts-loader。

>webpack 有哪些常见的 plugin？你用过哪些 plugin？

- ignore-plugin：忽略部分文件。
- html-webpack-plugin：简化 html 文件创建。
- web-webpack-plugin：可以方便地为单页应用输出 html，比 html-webpack-plugin 好用。
- terser-webpack-plugin：支持压缩ES6。
- optimize-css-assets-webpack-plugin：压缩css代码。
- mini-css-extract-plugin：分离样式文件，css 提取为单独文件，支持按需加载。
- werviceworker-webpack-plugin：为网页应用追加离线缓存功能。
- clean-webpack-plugin：目录清理。
- ModuleconcatenationPlugin：开启 Scope Hoisting。
- webpack-bundle-analyzer：可视化 webpack 输出文件的体积（业务组件、依赖第三方模块）。
- speed-measure-webpack-plugin：可以看到每个 loader 和 plugin 执行耗时（这个打包耗时、plugin 和 loader 耗时）。
- HotModuleReplacementPlugin：模块热替换。

>在使用 webpack 开发时，你用过哪些可以提供效率的插件？

- webpack-dashboard：可以更有好的展示相关打包信息。
- webpack-merge：提取公共配置，减少重复配置代码。
- speed-measure-webpack-plugin：简称SMP，分析出 webpack 打包过程中 loader 和 plugin的耗时，有助于找到构建过程中的性能瓶颈。
- HotModuleReplacementPlugin：模块热替换。
- size-plugin：监控资源体积变化，尽早发现问题。

>source map 是什么？生产环境怎么用？

source map 是将编译、打包、压缩后的代码映射会源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 source map。<br>
map 文件只要不打开开发者工具，浏览器是不会加载的。<br>
显示环境一般有三种处理方案：

- hidden-source-map：借助第三方错误监控平台 Sentry 使用。
- nosource-source-map：只会显示具体行数以及查看源代码的错误栈。安全性比 source-map 高
- source-map：通过 nginx 设置将.map文件指对白名单开发。
注意：在生产环境中避免使用 inline- 和 eval-，因为它们会增加 bundle 体积大小，并降低整体性能。

>文件指纹是什么？

文件指纹是指打包后输出文件的名的后缀。

- hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 就会变化。
- chunkhash：和webpack打包的 chunk 有关，不同的 chunk、不同的 entry 会生成不同的 chunkhash。
- contenthash：根据文件内容来定义 hash，文件内容不发生变化，则contenthash就不会变化。
直接在输出文件名添加对应的 hash值即可。

>tree shaking 原理是什么？

webpack中，tree-shaking 的实现 一是先标记出模块导出值中哪些没有被动用过，二是 Terser 使用删除掉这些没被用到的导出语句。<br>
标记功能需要配置 optimization.usedExports = true 开启   <br>

标记过程大致可划分为三个步骤：


1. Make 阶段：收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中。
2. Seal 阶段：遍历 ModuleGraph 标记模块导出变量有没有被使用
3. 生成产物时：若变量没有被其他模块使用则删除对应的导出语句。

Webpack 中 Tree Shaking 的实现分为如下步骤：


1. 在 FlagDependencyExportsPlugin 插件中根据模块的 dependencies 列表收集模块导出值，并记录到 ModuleGraph 体系的 exportsInfo 中
2. 在 FlagDependencyUsagePlugin 插件中收集模块的导出值的使用情况，并记录到 exportInfo._usedInRuntime 集合中
3. 在 HarmonyExportXXXDependency.Template.apply 方法中根据导出值的使用情况生成不同的导出语句
4. 使用 DCE 工具删除 Dead Code，实现完整的树摇效果



> 说一下 Babel 原理

大多数JavaScript Parser遵循 estree 规范，Babel 最初基于 acorn 项目(轻量级现代 JavaScript 解析器) Babel大概分为三大部分：


1. 解析：将代码转换成 AST

- 词法分析：将代码(字符串)分割为token流，即语法单元成的数组
- 语法分析：分析token流(上面生成的数组)并生成 AST

2. 转换：访问 AST 的节点进行变换操作生产新的 AST

Taro就是利用 babel 完成的小程序语法转换



3. 生成：以新的 AST 为基础生成代码



>有写过 loader 吗？简单描述一下思路

没有。但是我知道其开发的基本思路：因为 loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 loader 只负责自己需要负责的事情。loader 拿到的是源文件的内容（content），通过this.getOptions() 拿到传入的参数，可以通过返回值的方式将处理后的内容输出或者通过 this.callback() 同步方式将内容返回出去，也可以调用 this.async() 生成一个异步的函数， callback 来处理传入的内容，再通过调用 cabllback（）将处理后的内容返回出去。开发的过程中尽量使用异步 loader。使用 schema-utils 来检验的我们的参数。然后再利用第三方提供的模块进行 loader 的开发。

> 有写过 plugin 吗？简答描述一下思路

没有。但是我知道其开发的基本思路： webpack 在运行生命周期中会广播出许多事件，PLugin 可以监听这些事件，在特定的阶段写入想要添加的自定义功能。webpack 的 tapable 事件流机制保证了插件的有序性，使得整个系统扩展性良好。
通过 consturctor 获取传入的配置参数，apply() 方法得到 compiler，compiler 暴露了和 webpack 整个生命周期相关的钩子，通过 conpiler.hooks.thiscompilation 初始 compilation。compilation 暴露了与模块和依赖有关的粒度更小的事件钩子，再使用相关的 hooks 对资源进行添加或者修改。emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改（emit 事件是修改 webpack 输出资源的最后时机）。
异步的事件需要再插件处理完任务时调用回调函数通知 webpack 进入下一个流程，不然会卡住。

## npm i  干了啥？

初次执行 npm i 命令之后，会进行以下步骤：

1. 检查 package.json 文件是否存在，如果不存在，则创建一个空的 package.json 文件；
2. 解析 package.json 文件中的 dependencies 和 devDependencies 字段，确定需要安装的依赖项及版本号；
3. 从 npm 服务器下载目标包和相关依赖，存储到本地的 node_modules 目录中；
4. 如果依赖项中有其他依赖，npm 会递归下载安装它们；
5. 安装完成后，npm 会将所有的依赖写入 package.json 文件中。
6. 在已有的node_modules项目中执行npm i 命令之后，更新项目的node_modules的配置，会进行一下命令：

- 从项目package.lock.json中查看依赖版本的integrity属性，比对是否跟本地版本一致，如果一致，就跳过这个包的安装如果不一致走2
- 参考package.json中包的版本，然后根据语义化版本更新机制，去下载合适的新版本
- 更新package.lock.json配置
- 如果依赖包的版本有更新，我们在新下载到的依赖包的package.json中会看到两个字段
- from和id，from就标识我们项目文件中配置的包版本，id标识当前下载到的包版本
- 语义化版本不会跟新到大版本，需要手动更新
- pm i xxx@2.0.0 或者 npm i xxx@latest 会更新到大版本，同时修改项目package.json中的依赖包版本
- 项目中新安装到的依赖包版本，默认都会以^开头
- package.lock.json中会锁定项目依赖包中的依赖包的具体版本