# git和npm相关配置和问题


## git

>配置用户名及邮箱

在使用Git提交前，必须配置用户名和邮箱，这些信息会永久保存到历史记录中。
```
git config --global user.name "Tocy"
git config --global user.email zyvj@qq.com
```
## npm

>配置淘宝镜像地址

原镜像地址：http://npm.taobao.org 和 http://registry.npm.taobao.org 将在 2022.06.30 号正式下线和停止 DNS 解析。
```
npm config set registry https://registry.npmmirror.com

```
>查看镜像地址
```
npm config get registry
```
>取消镜像地址
```
npm config delete registry
```
>安装包

-g为全局安装，不加为当前文件夹安装
```
npm i [包名] -g
```

>卸载包

-g为全局卸载，不加为当前文件夹卸载
```
npm uninstall [包名] -g
```