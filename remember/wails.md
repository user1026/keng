# wails客户端开发

[官方文档](https://wails.io/zh-Hans/docs/introduction)

## Go主动向js发送数据

```Go
//触发事件向js发送数据
runtime.EventsEmit(Global.Global_ConText, "openFile", "123")
```

```js
//js接收数据,其中data是个数组
window.runtime.EventsOn("openFile",(data)=>{
    count.value=data;
    console.log(data);
})
```

## js主动向Go发送数据

```js
```

```GO
```

## app 内的函数在js中使用方法

```Go

```

```js
```