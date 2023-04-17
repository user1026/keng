# wails客户端开发

[官方文档](https://wails.io/zh-Hans/docs/introduction)

## Go主动向js发送数据

```Go
//触发事件向js发送数据
runtime.EventsEmit(Global.Global_ConText, "openFile", "123")
```

```js
//js接收数据
window.runtime.EventsOn("openFile",(data)=>{
    count.value=data;
    console.log(data);
})
```