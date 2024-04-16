# Vue面试题


> 谈一谈对 MVVM 的理解？

参考答案：
MVVM 是 Model-View-ViewModel 的缩写。MVVM 是一种设计思想。<br>
Model 层代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑;<br>
View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来，View 是一个同步 View 和 Model 的对象<br>
在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互， Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。<br>
对 ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的 同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

>vue2 生命周期有几个阶段

- beforeCreate：是 new Vue( ) 之后触发的第一个钩子，在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问。
- created：在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 updated 函数。可以做一些初始数据的获取，在当前阶段无法与 DOM 进行交互，如果非要想，可以通过 vm.$nextTick 来访问 DOM 。
- beforeMount：发生在挂载之前，在这之前 template 模板已导入渲染函数编译。而当前阶段虚拟 DOM 已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发 updated。
- mounted：在挂载完成后发生，在当前阶段，真实的 DOM 挂载完毕，数据完成双向绑定，可以访问到 DOM 节点，使用 $refs 属性对 DOM 进行操作。
- beforeUpdate：发生在更新之前，也就是响应式数据发生更新，虚拟 DOM 重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。
- updated：发生在更新完成之后，当前阶段组件 DOM 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。
- beforeDestroy：发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。
- destroyed：发生在实例销毁之后，这个时候只剩下了 DOM 空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。

>vue响应式原理是什么？

Vue在初始化数据时，会使用Object.defineProperty重新定义data中的所有属性，当页面使用对应属性时，首先会进行依赖收集(收集当前组件的watcher)如果属性发生变化会通知相关依赖进行更新操作(发布订阅)。


>多组件（父子组件）中生命周期的调用顺序说一下

组件的调用顺序都是先父后子，渲染完成的顺序是先子后父。组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

- 加载渲染过程：父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount- >子mounted->父mounted
- 子组件更新过程：父beforeUpdate->子beforeUpdate->子updated->父updated
- 父组件更新过程：父 beforeUpdate -> 父 updated
- 销毁过程：父beforeDestroy->子beforeDestroy->子destroyed->父destroyed



>在 Vue2.x 中如何检测数组的变化？

使用了函数劫持的方式，重写了数组的方法，Vue将data中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组api时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。

>父子组件的传值

1. 父->子props，子->父 this.$on、this.$emit
2. 获取父子组件实例 :$parent、$children
3. Ref 获取实例的方式调用组件的属性或者方法
4. Provide、inject 官方不推荐使用，但是写组件库时很常用
5. vuex

>Vue 实现双向数据绑定原理是什么？

Vue2.x 采用数据劫持结合发布订阅模式（PubSub 模式）的方式，通过 Object.defineProperty 来劫持各个属性的 setter、getter，在数据变动时发布消息给订阅者，触发相应的监听回调。<br>
当把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项时，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。用户看不到 getter/setter，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。<br>
Vue 的数据双向绑定整合了 Observer，Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 的数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化->视图更新，视图交互变化（例如 input 操作）->数据 model 变更的双向绑定效果。<br>
Vue3.x 放弃了 Object.defineProperty ，使用 ES6 原生的 Proxy，来解决以前使用 Object.defineProperty 所存在的一些问题。

>说一下在 Vue2.x 中如何检测数组的变化？

Vue2.x 中实现检测数组变化的方法，是将数组的常用方法进行了重写。Vue 将 data 中的数组进行了原型链重写，指向了自己定义的数组原型方法。这样当调用数组 api 时，可以通知依赖更新。如果数组中包含着引用类型，会对数组中的引用类型再次递归遍历进行监控。这样就实现了监测数组变化。
流程:

- 初始化传入 data 数据执行 initData
- 将数据进行观测 new Observer
- 将数组原型方法指向重写的原型
- 深度观察数组中的引用类型

有两种情况无法检测到数组的变化。
- 当利用索引直接设置一个数组项时，例如 vm.items[indexOfItem] = newValue
- 当修改数组的长度时，例如 vm.items.length = newLength

不过这两种场景都有对应的解决方案。

- 利用索引设置数组项的替代方案 this.$set(items, indexOfItem, newValue)
- 修改数组的长度的替代方案 this.items.splice(indexOfItem, 1, newValue)

>diff 算法分别说一下？

简单来说，diff 算法有以下过程
- 同级比较，再比较子节点
- 先判断一方有子节点一方没有子节点的情况(如果新的 children 没有子节点，将旧的子节点移除)
- 比较都有子节点的情况(核心 diff)
- 递归比较子节点

<br>
正常 Diff 两个树的时间复杂度是 O(n^3)，但实际情况下我们很少会进行跨层级的移动 DOM，所以 Vue 将 Diff 进行了优化，从O(n^3) -> O(n)，只有当新旧 children 都为多个子节点时才需要用核心的 Diff 算法进行同层级比较。
<br>
Vue2 的核心 Diff 算法采用了双端比较的算法，同时从新旧 children 的两端开始进行比较，借助 key 值找到可复用的节点，再进行相关操作。相比 React 的 Diff 算法，同样情况下可以减少移动节点次数，减少不必要的性能损耗，更加的优雅。
<br>
Vue3.x 借鉴了 ivi 算法和 inferno 算法
在创建 VNode 时就确定其类型，以及在 mount/patch 的过程中采用位运算来判断一个 VNode 的类型，在这个基础之上再配合核心的 Diff 算法，使得性能上较 Vue2.x 有了提升。该算法中还运用了动态规划的思想求解最长递归子序列。


>说一下 v-if 与 v-show 的区别

共同点：都是动态显示 DOM 元素<br>
区别点:
1. 手段
- v-if 是动态的向 DOM 树内添加或者删除 DOM 元素
- v-show 是通过设置 DOM 元素的 display 样式属性控制显隐
1. 编译过程
- v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件
- v-show 只是简单的基于 css 切换
1. 编译条件
- v-if 是惰性的，如果初始条件为假，则什么也不做。只有在条件第一次变为真时才开始局部编译
- v-show 是在任何条件下(首次条件是否为真)都被编译，然后被缓存，而且 DOM 元素保留
1. 性能消耗
- v-if 有更高的切换消耗
- v-show 有更高的初始渲染消耗
1. 使用场景
- v-if 适合运营条件不大可能改变
- v-show 适合频繁切换

>keep-alive 相关

keep-alive 组件是 vue 的内置组件，用于缓存内部组件实例。这样做的目的在于，keep-alive 内部的组件切回时，不用重新创建组件实例，而直接使用缓存中的实例，一方面能够避免创建组件带来的开销，另一方面可以保留组件的状态。<br>
keep-alive 具有 include 和 exclude 属性，通过它们可以控制哪些组件进入缓存。另外它还提供了 max 属性，通过它可以设置最大缓存数，当缓存的实例超过该数时，vue 会移除最久没有使用的组件缓存。<br>
受keep-alive的影响，其内部所有嵌套的组件都具有两个生命周期钩子函数，分别是 activated 和 deactivated，它们分别在组件激活和失活时触发。第一次 activated 触发是在 mounted 之后<br>
在具体的实现上，keep-alive 在内部维护了一个 key 数组和一个缓存对象<br>


>nextTick 的作用是什么？他的实现原理是什么？

作用：vue 更新 DOM 是异步更新的，数据变化，DOM 的更新不会马上完成，nextTick 的回调是在下次 DOM 更新循环结束之后执行的延迟回调。
<br>
实现原理：nextTick 主要使用了宏任务和微任务。根据执行环境分别尝试采用

- Promise：可以将函数延迟到当前函数调用栈最末端
- MutationObserver ：是 H5 新加的一个功能，其功能是监听 DOM 节点的变动，在所有 DOM 变动完成后，执行回调函数
- setImmediate：用于中断长时间运行的操作，并在浏览器完成其他操作（如事件和显示更新）后立即运行回调函数
- 如果以上都不行则采用 setTimeout 把函数延迟到 DOM 更新之后再使用，原因是宏任务消耗大于微任务，优先使用微任务，最后使用消耗最大的宏任务。


>Proxy 相比 defineProperty 的优势在哪里


Vue3.x 改用 Proxy 替代 Object.defineProperty<br>
原因在于 Object.defineProperty 本身存在的一些问题：
- Object.defineProperty 只能劫持对象属性的 getter 和 setter 方法。
- Object.definedProperty 不支持数组(可以监听数组,不过数组方法无法监听自己重写)，更准确的说是不支持数组的各种 API(所以 Vue 重写了数组方法。

而相比 Object.defineProperty，Proxy 的优点在于：
- Proxy 是直接代理劫持整个对象。
- Proxy 可以直接监听对象和数组的变化，并且有多达 13 种拦截方法。

目前，Object.definedProperty 唯一比 Proxy 好的一点就是兼容性，不过 Proxy 新标准也受到浏览器厂商重点持续的性能优化当中。

>说一下 watch 与 computed 的区别是什么？以及他们的使用场景分别是什么？

区别：

- 都是观察数据变化的（相同）
- 计算属性将会混入到 vue 的实例中，所以需要监听自定义变量；watch 监听 data 、props 里面数据的变化；
- computed 有缓存，它依赖的值变了才会重新计算，watch 没有；
- watch 支持异步，computed 不支持；
- watch 是一对多（监听某一个值变化，执行对应操作）；computed 是多对一（监听属性依赖于其他属性）
- watch 监听函数接收两个参数，第一个是最新值，第二个是输入之前的值；
- computed 属性是函数时，都有 get 和 set 方法，默认走 get 方法，get 必须有返回值（return）

watch 的 参数：

- deep：深度监听
- immediate ：组件加载立即触发回调函数执行

computed 缓存原理：<br>
conputed本质是一个惰性的观察者；当计算数据存在于 data 或者 props里时会被警告；<br>
vue 初次运行会对 computed 属性做初始化处理（initComputed），初始化的时候会对每一个 computed 属性用 watcher 包装起来 ，这里面会生成一个 dirty 属性值为 true；然后执行 defineComputed 函数来计算，计算之后会将 dirty 值变为 false，这里会根据 dirty 值来判断是否需要重新计算；如果属性依赖的数据发生变化，computed 的 watcher 会把 dirty 变为 true，这样就会重新计算 computed 属性的值。

>Vue 组件的 data 为什么必须是函数

组件中的 data 写成一个函数，数据以函数返回值形式定义。这样每复用一次组件，就会返回一份新的 data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式，就使得所有组件实例共用了一份 data，就会造成一个变了全都会变的结果。

>Vue 中的 Key 的作用是什么？

key 的作用主要是为了高效的更新虚拟 DOM 。另外 vue 中在使用相同标签名元素的过渡切换时，也会使用到 key 属性，其目的也是为了让 vue 可以区分它们，否则 vue 只会替换其内部属性而不会触发过渡效果。

>说一下 ref 的作用是什么？

ref 的作用是被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。其特点是：

- 如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素
- 如果用在子组件上，引用就指向组件实例

所以常见的使用场景有：

- 基本用法，本页面获取 DOM 元素
- 获取子组件中的 data
- 调用子组件中的方法

>你的接口请求一般放在哪个生命周期中？为什么要这样做？

接口请求可以放在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。<br>
但是推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：

1. 能更快获取到服务端数据，减少页面 loading 时间
2. SSR 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于代码的一致性
3. created 是在模板渲染成 html 前调用，即通常初始化某些属性值，然后再渲染成视图。如果在 mounted 钩子函数中请求数据可能导致页面闪屏问题

>Vue 的路由实现

解释 hash 模式和 history 模式的实现原理
- 后面 hash 值的变化，不会导致浏览器向服务器发出请求，浏览器不发出请求，就不会刷新页面；通过监听 hashchange 事件可以知道 hash 发生了哪些变化，然后根据 hash 变化来实现更新页面部分内容的操作。
- history 模式的实现，主要是 HTML5 标准发布的两个 API，pushState 和 replaceState，这两个 API 可以在改变 URL，但是不会发送请求。这样就可以监听 url 变化来实现更新页面部分内容的操作。


两种模式的区别：

- 首先是在 URL 的展示上，hash 模式有“#”，history 模式没有
- 刷新页面时，hash 模式可以正常加载到 hash 值对应的页面，而 history 没有处理的话，会返回 404，一般需要后端将所有页面都配置重定向到首页路由
- 在兼容性上，hash 可以支持低版本浏览器和 IE

说一下 router与route 的区别<br>
 $route 对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query 对象等。<br>

- $route.params： 一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。
- route.query：一个key/value对象，表示URL查询参数。例如对于路径/foo?user=1，则有route.query：一个 key/value 对象，表示 URL 查询参数。例如对于路径 /foo?user=1，则有 route.query：一个key/value对象，表示URL查询参数。例如对于路径/foo?user=1，则有route.- query.user == 1，如果没有查询参数，则是个空对象。
- $route.hash：当前路由的 hash 值 (不带 #) ，如果没有 hash 值，则为空字符串。
- $route.fullPath：完成解析后的 URL，包含查询参数和 hash 的完整路径。
- $route.matched：数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
- $route.name：当前路径名字
- $route.meta：路由元信息

$route 对象出现在多个地方:
- 组件内的 this.$route 和 route watcher 回调（监测变化处理）
- router.match(location) 的返回值
- scrollBehavior 方法的参数
- 导航钩子的参数，例如 router.beforeEach 导航守卫的钩子函数中，to 和 from 都是这个路由信息对象。

$router 对象是全局路由的实例，是 router 构造方法的实例。<br>
$router 对象常用的方法有：

- push：向 history 栈添加一个新的记录
- go：页面路由跳转前进或者后退
- replace：替换当前的页面，不会向 history 栈添加一个新的记录

vueRouter 有哪几种导航守卫？

- 全局前置/钩子：beforeEach、beforeR-esolve、afterEach
- 路由独享的守卫：beforeEnter
- 组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

解释一下 vueRouter 的完整的导航解析流程是什么
一次完整的导航解析流程如下：

1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫（2.2+）。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫（2.5+）。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

>说一下你知道的 vue 修饰符都有哪些？
在 vue 中修饰符可以分为 3 类：

- 事件修饰符
- 按键修饰符
- 表单修饰符

1. 事件修饰符
在事件处理程序中调用 event.preventDefault 或 event.stopPropagation 方法是非常常见的需求。尽管可以在 methods 中轻松实现这点，但更好的方式是：methods 只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
为了解决这个问题，vue 为 v-on 提供了事件修饰符。通过由点 . 表示的指令后缀来调用修饰符。<br>
常见的事件修饰符如下：

- .stop：阻止冒泡。
- .prevent：阻止默认事件。
- .capture：使用事件捕获模式。
- .self：只在当前元素本身触发。
- .once：只触发一次。
- .passive：默认行为将会立即触发。

2. 按键修饰符
除了事件修饰符以外，在 vue 中还提供了有鼠标修饰符，键值修饰符，系统修饰符等功能。

- .left：左键
- .right：右键
- .middle：滚轮
- .enter：回车
- .tab：制表键
- .delete：捕获 “删除” 和 “退格” 键
- .esc：返回
- .space：空格
- .up：上
- .down：下
- .left：左
- .right：右
- .ctrl：ctrl 键
- .alt：alt 键
- .shift：shift 键
- .meta：meta 键

3. 表单修饰符
vue 同样也为表单控件也提供了修饰符，常见的有 .lazy、 .number 和 .trim。

- .lazy：在文本框失去焦点时才会渲染
- .number：将文本框中所输入的内容转换为number类型
- .trim：可以自动过滤输入首尾的空格

## vuex

>vuex是什么？怎么使用？哪种功能场景使用它？

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。简单来说就是：应用遇到多个组件共享状态时，使用vuex。<br>
场景：
- 多个组件共享数据或者是跨组件传递数据时，比如：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车



>vuex的流程

页面通过mapAction异步提交事件到action。action通过commit把对应参数同步提交到mutation，mutation会修改state中对应的值。最后通过getter把对应值跑出去，在页面的计算属性中，通过，mapGetter来动态获取state中的值

>vuex有哪几种属性？vuex的store有几个属性值？分别讲讲它们的作用是什么？

有五种,分别是State , Getter , Mutation , Action , Module (就是mapAction)

- state => 基本数据(数据源存放地)
- getters => 从基本数据派生出来的数据
- mutations => 提交更改数据的方法，同步！
- actions => 像一个装饰器，包裹mutations，使之可以异步。
- modules => 模块化Vuex

1. state：vuex的基本数据，用来存储变量
2. geeter：从基本数据(state)派生的数据，相当于state的计算属性
3. mutation：提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，提交载荷作为第二个参数。
4. action：和mutation的功能大致相同，不同之处在于 ==》1. Action 提交的是 mutation，而不是直接变更状态。 2. Action 可以包含任意异步操作。
5. modules：模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。


>页面刷新后vuex的state数据丢失怎么解决？

放在localStorage 或者sessionStorage中 ，或者借用辅助插vuex-persistedstate,vuex-persistedstate的createPersistedState()方法

>使用vuex的优势是什么？

作为全局变量来用；vue是单向数据流，有一个vuex来建一个”全局仓库“，可以减少很多开发时候的”传参地狱“。其实vuex中的所有功能都能够通过其他的方式进行实现，只不过vuex对这些方法进行了整合处理，使用起来更加便捷，同时也便于维护。



>vue 中 ajax 请求代码应该写在组件的 methods 中还是 vuex 的 action 中？请求数据是写在组件的methods中还是在vuex的action中？

如果请求的数据是多个组件共享的，为了方便只写一份，就写vuex里面，如果是组件独用的就写在当前组件里面。<br>
如果请求来的数据不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入 vuex 的 state 里<br>
如果被其他地方复用，请将请求放入 action 里，方便复用，并包装成 promise 返回<br>

>怎么监听vuex数据的变化？

先用计算属性、然后再监听

>vuex使用actions时不支持多参数传递怎么办？

放在对象里面

>你觉得vuex有什么缺点？

页面刷新时会使state的数据初始化

>你觉得要是不用vuex的话会带来哪些问题？

组件之间传值麻烦复杂
- 可维护性会下降，你要修改数据，你得维护 3 个地方
- 可读性下降，因为一个组件里的数据，你根本就看不出来是从哪里来的
- 增加耦合，大量的上传派发，会让耦合性大大的增加，本来 Vue 用 Component 就是为了减少耦合，现在这么用，和组件化的初衷相背
 

>vuex 原理

 vuex 仅仅是作为 vue 的一个插件而存在，不像 Redux,MobX 等库可以应用于所有框架，vuex 只能使用在 vue 上，很大的程度是因为其高度依赖于 vue 的 computed 依赖检测系统以及其插件系统，vuex 整体思想诞生于 flux,可其的实现方式完完全全的使用了 vue 自身的响应式设计，依赖监听、依赖收集都属于 vue 对对象 Property set get 方法的代理劫持。最后一句话结束 vuex 工作原理，vuex 中的 store 本质就是没有 template 的隐藏着的 vue 组件；

>使用 Vuex 只需执行 Vue.use(Vuex)，并在 Vue 的配置中传入一个 store 对象的示例，store 是如何实现注入的？

        Vue.use(Vuex) 方法执行的是 install 方法，它实现了 Vue 实例对象的 init 方法封装和注入，使传入的 store 对象被设置到 Vue 上下文环境的store中。因此在VueComponent任意地方都能够通过this.store 访问到该 store。

>Vuex 如何区分 state 是外部直接修改，还是通过 mutation 方法修改的？vuex怎么知道state是通过mutation修改还是外部直接修改的？

通过$watch监听mutation的commit函数中_committing是否为true；严格模式下不允许直接修改。<br>
Vuex 中修改 state 的唯一渠道就是执行 commit('xx', payload) 方法，其底层通过执行 this._withCommit(fn) 设置_committing 标志变量为 true，然后才能修改 state，修改完毕还需要还原_committing 变量。外部修改虽然能够直接修改 state，但是并没有修改_committing 标志位，所以只要 watch 一下 state，state change 时判断是否_committing 值为 true，即可判断修改的合法性。
 

>vuex怎样赋值？vuex存储数据的方法有哪些？

使用下面这两种方法存储数据：

- dispatch：异步操作，写法： this.$store.dispatch('actions方法名',值)

- commit：同步操作，写法：this.$store.commit('mutations方法名',值)

>Vuex中如何异步修改状态

actions与mutations作用类似，都是可以对状态进行修改。不同的是actions是异步操作的。

actions是可以调用Mutations里的方法的。
>Vuex中状态储存在哪里，怎么改变它？

存储在state中，改变Vuex中的状态的唯一途径就是显式地提交 (commit) mutation。

>Vuex中状态是对象时，使用时要注意什么？

对象是引用类型，复制后改变属性还是会影响原始数据，这样会改变state里面的状态，是不允许，所以先用深度克隆复制对象，再修改。

>怎么在组件中批量使用Vuex的state状态？

使用mapState辅助函数, 利用对象展开运算符将state混入computed对象中
```js
import {mapState} from 'vuex' 
export default{ 
   computed:{ 
      ...mapState(['price','number']) 
   } 
}
```

>你有使用过vuex的module吗？主要是在什么场景下使用？

把状态全部集中在状态树上，非常难以维护。按模块分成多个module，状态树延伸多个分支，模块的状态内聚，主枝干放全局共享状态

## vue2与vue3对比

Vue 2 和 Vue 3 是 Vue.js 框架的两个不同版本。Vue 3 在设计上进行了重构，以提供更好的性能、更多的工具库支持和更清晰的代码结构。

主要区别：

1. diff算法的提升
  - vue2中的虚拟DOM是全量的对比，也就是不管是写死的还是动态节点都会一层层比较，浪费时间在静态节点上。
  - vue3新增静态标记（patchflag ），与之前虚拟节点对比，只对比带有patch flag 的节点，可通过flag信息得知当前节点要对比的具体内容。
2. 静态提升
   - vue2不管是否参与更新，都会重新创建再渲染。
   - vue3对于不参与更新的元素，会做静态提升，只被创建一次，在渲染时直接复用即可。
3. 生命周期
  |vue2|vue3|
  |----|---|
  |beforeCreate||
  |created||
  |beforeMount|onBeforeMount|
  |mounted|onMounted|
  |beforeUpdate|onBeforeUpdate|
  |updated|onUpdated|
  |beforeDestroy|onBeforeUnmount|
  |destroyed|onUnmounted|

4. 双向绑定（响应式原理）
   - vue2 Object.defineProperty 缺点：无法监听对象或数组新增、删除的元素
     - Vue2 相应解决方案：针对常用数组原型方法push、pop、shift、unshift、splice、sort、reverse进行了hack处理；提供Vue.set监听对象/数组新增属性。对象的新增/删除响应，还可以new个新对象，新增则合并新属性和旧对象；删除则将删除属性后的对象深拷贝给新对象。
   - vue3 Proxy 
5. API
   - vue2 选项API ，一个逻辑会散乱在文件不同位置（data、props、computed、watch、生命周期钩子等），导致代码的可读性变差。当需要修改某个逻辑时，需要上下来回跳转文件位置。
   - vue3 组合式API， 则很好地解决了这个问题，可将同一逻辑的内容写到一起，增强了代码的可读性、内聚性，其还提供了较为完美的逻辑复用性方案。
6. TS
   - vue3有更好的TS支持