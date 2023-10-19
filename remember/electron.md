# Electron


## 预加载preload

为了让渲染进程与主进程进行通信从而形成一个整体，预加载脚本的作用就是他们之间的桥梁。预加载脚本与渲染进程共享同一个全局window，因此可以通过window来传递数据。但并不是简单地通过给window添加属性就能使用。因为Electron的语境隔离（Context Isolation），使得预加载脚本与渲染进程的主要运行环境是隔离的，以避免将任何API都加入到渲染进程的网页中。因此，需要使用contextBridge来安全地实现交互。
```js
// 预加载脚本（preload.js）
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
  desktop: true
})
```
```js
// 渲染进程
console.log(window.myAPI)
// => { desktop: true } (成功获取)
```

## 主进程main

每个Electron应用都有一个单一的主进程，作为应用程序的入口点。主进程运行在Node.js 环境，因此可以使用Node.js的所有API能力。主进程并不在浏览器环境中运行，因此不进行页面渲染。

## 渲染进程render

渲染进程说白了就是平时的Web页面前端开发。每个Electron应用都会为每个打开的BrowserWindow生成一个单独的渲染器进程。但是渲染进程是无法直接调用Node.js的API的。

## app生命周期


## 主进程和渲染进程的通信

主进程->渲染进程：用  ipcMain <br>
渲染进程->主进程：用 ipcRenderer 

### 渲染进程 向 主进程 传递数据

渲染进程向主进程传递数据：
- 主进程监听一个事件名
- 渲染进程发送一个同名的事件名并附带一些数据
1. 主进程需要做的是监听
通过在 main.js 中使用 ipcMain.on() 方法来监听一个事件来获取渲染进程发来的数据，比如监听一个事件名 setNewData
```js
const { ipcMain } = require('electron')
ipcMain.on('setNewData', (event, data) => {
    // event 是事件本身
    // data 是渲染进程发送过来的附加数据，发的时候加了这边就能获取到，也可以不加，只响应事件
})
```
2. 渲染进程需要做的是发送

通过 ipcRenderer.send() 发送事件和对应的数据
```js
const { ipcRenderer } = require('electron')
ipcRenderer.send('setNewData', data)
```
### 主进程 向 渲染进程 传递数据

1. 渲染进程需要做的是监听,通过 ipcRenderer.on() 来监听对应事件和对应的数据
```js
const { ipcRenderer } = require('electron')
ipRenderer.on('setNewData', (event, data) => {
    // event 是事件本身
    // data 事件附加数据
})
```
2. 主进程需要做的是发送

主进程发送数据是通过对应窗口的方法来发送的，ipcMain 本身没有 send() 方法
```js
const { ipcMain } = require('electron')
let data = {code: 'nntt', word: '五笔'}
mainWindow.webContents.send('setNewData',data)
// mainwindow 是前面已经定义好的窗口实例

```