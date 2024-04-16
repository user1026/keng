# GO

>学习网站  

[一个不错的学习网站](https://www.topgoer.com/)
[go中文社区](https://studygolang.com)
## 文件读写

>相关包:ioutil和os

## 正则
>相关包:regexp

## excel文件操作

[excelize](https://xuri.me/excelize/zh-hans/)
## 数据类型

## Time

go获取时间

```GO
timeUnix:=time.Now().Unix() //返回值为时间戳
t:=time.Now().Format("2006-01-02 15:04:05")//2006-01-02 15:04:05为固定写法
```

# 类型转换： strconv


# Go硬件开发

在Golang中，有几个流行的硬件驱动库可供选择。以下是其中一些常用的库：

- periph.io：这是一个功能强大的库，提供了许多硬件驱动的接口和实现，支持多种接口类型，如GPIO、I2C、SPI等。
- go-ole：这个库提供了与Windows系统中的COM接口进行交互的功能，适用于控制一些外部设备或传感器。
- gohid：这是一个用于USB HID设备的库，适用于与USB键盘、鼠标等设备进行交互。
- go-serial：这是一个用于串口通信的库，适用于与串口设备进行交互。