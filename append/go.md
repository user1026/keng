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

## go工具库

### excelize

#### 安装

```
go get github.com/xuri/excelize/v2@latest
```

### viper

#### 安装

```
go get github.com/spf13/viper@latest
```


### gorm
#### 安装

```
go get gorm.io/gorm@latest
```
