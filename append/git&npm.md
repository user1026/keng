# git和npm


## git

>配置用户名及邮箱

在使用Git提交前，必须配置用户名和邮箱，这些信息会永久保存到历史记录中。
```
git config --global user.name "Tocy"
git config --global user.email zyvj@qq.com
```
>关联远程仓库

```
git remote add origin 你的远程仓库地址
```
>关联远程仓库分支

```
// 不会切换当前分支；
git branch newBranchName origin/remoteBranchName



// 如果想要创建分支的同时，切换到新分支
git checkout -b newBranchName origin/remoteBranchName
```


>提交的基本流程

1. git add .(.为全部的修改文件，也可以写具体的文件名)
2. git commit -m "描述"
3. git pull
4. git push
   
>还原与回退

通过git revert来实现线主干代码的回滚。如下命令<br>

对于 merge类型的commit对象，还需要“-m”参数<br>
git revert -m 1  commit-id<br>

对于普通的commtit对象<br>
git revert commit-id<br>

>其他常用命令

| 命令                            | 描述                                             |
| ------------------------------- | ------------------------------------------------ |
| git branch 分支名               | 创建本地分支                                     |
| git branch                      | 查看本地分支，当前分支前面会标一个 * 号          |
| git branch -r                   | 查看远程分支                                     |
| git branch -d  分支名           | 删除本地指定分支                                 |
| git branch -m 原分支名 新分支名 | 分支重命名                                       |
|                                 |                                                  |
| git checkout -b 分支名          | 创建并切换到指定分支                             |
|                                 |                                                  |
| git checkout 分支名             | 切换到指定分支（部分翻译软件翻译成检出指定分支） |
|                                 |                                                  |
| git clone  路径                 | 从指定路径下载代码                               |
| git config 属性                 | 查看设置属性                                     |
| git log                         | 看你commit的日志                                 |
| git merge  分支名               | 将指定分支与当前分支合并                         |
| git status                      | 查看在你上次提交之后是否有对文件进行再次修改。   |
| git stash push                  | 将文件给push到一个临时空间中                     |
| git stash pop                   | 将文件从临时空间pop下来                          |
| git remote rm origin            | 删除remote                                       |
| git rm 文件名(包括路径)         | 从git中删除指定文件                              |
>.gitignore文件样例

```git
# 忽略所有的 .a 文件
*.a

# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a

# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO

# 忽略任何目录下名为 build 的文件夹
build/

# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt

# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
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