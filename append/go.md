# GO安装

## 安装过程可参考https://www.topgoer.com/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/go%E7%9A%84%E5%AE%89%E8%A3%85.html这个网址

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