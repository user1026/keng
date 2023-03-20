# 面试题

## HTML

> 如果理解 HTML 语义化

HTML标签的语义化，简单来说，就是用正确的标签做正确的事情，给某块内容用上一个最恰当最合适的标签，使页面有良好的结构，页面元素有含义，无论是谁都能看懂这块内容是什么。<br>
语义化的优点如下：
- 在没有CSS样式情况下也能够让页面呈现出清晰的结构
- 有利于SEO和搜索引擎建立良好的沟通，有助于爬虫抓取更多的有效信息，爬虫是依赖于- 标签来确定上下文和各个关键字的权重
- 方便团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化


> 块状元素&内联元素？

块级元素：display:block/table;有 div h1 h2 table ul ol p 等
内联元素：display:inline/inline-block;有 span img input button 等

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
>

>

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

>css可以继承属性

一是 文本相关的属性： font-family, font-size, font-style,font-variant, font-weight, font, letter-spacing,line-height，text-align, text-indent, text-transform,word-spacing ,color

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
