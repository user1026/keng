# Vue面试题


> 谈一谈对 MVVM 的理解？

参考答案：
MVVM 是 Model-View-ViewModel 的缩写。MVVM 是一种设计思想。<br>
Model 层代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑;<br>
View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来，View 是一个同步 View 和 Model 的对象<br>
在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互， Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。<br>
对 ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的 同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

>vue 生命周期有几个阶段

- beforeCreate：是 new Vue( ) 之后触发的第一个钩子，在当前阶段 data、methods、computed 以及 watch 上的数据和方法都不能被访问。
- created：在实例创建完成后发生，当前阶段已经完成了数据观测，也就是可以使用数据，更改数据，在这里更改数据不会触发 updated 函数。可以做一些初始数据的获取，在当前阶段无法与 DOM 进行交互，如果非要想，可以通过 vm.$nextTick 来访问 DOM 。
- beforeMount：发生在挂载之前，在这之前 template 模板已导入渲染函数编译。而当前阶段虚拟 DOM 已经创建完成，即将开始渲染。在此时也可以对数据进行更改，不会触发 updated。
- mounted：在挂载完成后发生，在当前阶段，真实的 DOM 挂载完毕，数据完成双向绑定，可以访问到 DOM 节点，使用 $refs 属性对 DOM 进行操作。
- beforeUpdate：发生在更新之前，也就是响应式数据发生更新，虚拟 DOM 重新渲染之前被触发，你可以在当前阶段进行更改数据，不会造成重渲染。
- updated：发生在更新完成之后，当前阶段组件 DOM 已完成更新。要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。
- beforeDestroy：发生在实例销毁之前，在当前阶段实例完全可以被使用，我们可以在这时进行善后收尾工作，比如清除计时器。
- destroyed：发生在实例销毁之后，这个时候只剩下了 DOM 空壳。组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁。

>多组件（父子组件）中生命周期的调用顺序说一下

组件的调用顺序都是先父后子，渲染完成的顺序是先子后父。组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

- 加载渲染过程：父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount- >子mounted->父mounted
- 子组件更新过程：父beforeUpdate->子beforeUpdate->子updated->父updated
- 父组件更新过程：父 beforeUpdate -> 父 updated
- 销毁过程：父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

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
2. 编译过程
- v-if 切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件
- v-show 只是简单的基于 css 切换
3. 编译条件
- v-if 是惰性的，如果初始条件为假，则什么也不做。只有在条件第一次变为真时才开始局部编译
- v-show 是在任何条件下(首次条件是否为真)都被编译，然后被缓存，而且 DOM 元素保留
4. 性能消耗
- v-if 有更高的切换消耗
- v-show 有更高的初始渲染消耗
5. 使用场景
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