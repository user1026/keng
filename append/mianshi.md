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


>

>

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

>

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



7. es6的class继承

基本原理和6是差不多的



## 算法题

## 计算机网络基础

一、HTTP<br>
1.GET和POST的请求的区别<br>

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

2.POST和PUT的请求的区别

|区别|POST|PUT|
|----|---|---|
|作用|创建数据|更新数据|

为什么POST请求会发送两次？<br><br>
第一次请求为options预检请求，状态码为204
作用1：询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的请求<br>
作用2： 检测服务器是否为同源请求，是否支持跨域<br>
第二次请求为真正的POST请求<br>


3.常见的HTTP请求头和响应头

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

