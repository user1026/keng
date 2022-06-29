# GO安装

## 安装过程可参考https://www.topgoer.com/开发环境/go的安装.html

### 注意的几个问题

>GOPROXY

我们国内因为都懂的原因没法下包，这里提供几个国内的镜像

复制命令到终端就行

```
//GOPROXY.IO，我目前用的
go env -w GOPROXY=https://proxy.golang.com.cn,direct
//七牛云
go env -w GOPROXY=https://goproxy.cn,direct
//阿里
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/
```

## go包

### excelize

|函数|参数说明|函数说明|举例|
|-----------|--------|-------------|---------------|

|OpenFile(filename)|filename:文件路径|打开指定文件|f, err := excelize.OpenFile("../1.xlsx")|
|Close()|无参|关闭文件|f.Close()|
|GetCellValue(sheetname,position)|sheetname:工作表名，position:单元格位置|获取工作表中指定单元格的值|res, _ := f.GetCellValue("a", "A2")|
|GetRows(sheetname)|sheetname:工作表名|获取指定工作表全部单元格| rows, err := f.GetRows("Sheet1")|
|Save()|无参|保存文件|err := f.Save()|
|SaveAs(filename)|filename:文件路径|另存为|err := f.SaveAs("../1.xlsx")|
|NewSheet(sheetname)|sheetname:工作表名|在当前打开文件里新建工作表|index:=f.NewSheet("b")|
|DeleteSheet(sheetname)|sheetname:工作表名|删除指定工作表|err:=f.DeleteSheet("b")|
|||||