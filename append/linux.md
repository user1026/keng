# linux常用命令

## 关机与开机

| 命令行   | 参数   | 解释                   |
| -------- | ------ | ---------------------- |
| shutdown | -h     | 默认一分钟后关闭虚拟机 |
| shutdown | -h 30  | 30分钟后关闭虚拟机     |
| shutdown | -h now | 立刻关闭虚拟机         |
| shutdown | -c     | 取消关机               |
| shutdown | -r     | 默认一分钟后重启虚拟机 |
| shutdown | -r 30  | 30分钟后重启虚拟机     |
| shutdown | -r now | 立即重启虚拟机         |
| reboot   |        | 重启                   |
| logout   |        | 注销                   |

## 目录说明

>文件类型

- 黑色——TXT

- 蓝色——文件夹

- 天蓝色——连接文件（快捷方式）

- 黄色——块设备文件

- 绿色——可执行文件

- 红色——压缩包

| 目录              | 功能                                             | 缩写备注       |
| ----------------- | ------------------------------------------------ | -------------- |
| /bin ->/usr/bin   | 普通用户使用的命令                               | Binary(二进制) |
| /boot             | 系统内核，引导程序相关文件                       |
| /dev              | 设备文件                                         | Device(设备)   |
| /etc              | 配置文件                                         |
| /home             | 普通用户的默认家目录                             |
| /lib ->/usr/lib   | 库文件                                           |
| /lib64            | 库文件                                           |
| /media            | 挂载目录。系统建议用来挂载媒体设备，如软盘和光盘 |
| /mnt              | 挂载目录。如u盘,移动硬盘和其他操作系统的分区     |
| /opt              | 第三方安装的软件保存位置                         |
| /proc             | 虚拟的文件系统（反映内核信息）                   |
| /root             | 管理员root的家目录                               |
| /sbin ->/usr/sbin | 管理员使用的命令                                 | Super User     |
| /sys              | 文件系统sysfs                                    |
| /tmp              | 存放临时文件                                     |
| /var              | 日志文件                                         |

## 绝对路径和相对路径

>绝对路径

1、唯一一个绝对描述文件所在路径的方式

2、“/”根目录是Linux操作系统最顶级的目录

>相对路径

1、相对于当前所在路径

>cd

| 改变目录 | 解释                                        |
| -------- | ------------------------------------------- |
| cd       | 切换到家目录                                |
| cd ./    | 当前路径                                    |
| cd ../   | 上级路径                                    |
| cd -     | 切换到上次工作路径                          |
| cd ~     | 切换到root下的家目录                        |
| pwd      | （print working directory）打印当前工作路径 |


## 文件操作

>查询 

| 命令  | 解释                                                             |
| ----- | ---------------------------------------------------------------- |
| ls -a | 列出目录所有文件，包含以.开始的隐藏文件                          |
| ls -A | 列出除.及..的其它文件                                            |
| ls -r | 反序排列                                                         |
| ls -t | 以文件修改时间排序                                               |
| ls -S | 以文件大小排序                                                   |
| ls -h | 以易读大小显示                                                   |
| ls -l | 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来 |
| find  | 查找文件                                                         |
| cat   | 正向查看文件内容                                                 |
| tac   | 反向查看文件内容                                                 |

>创建 mkdir [选项] [文件名]

| 命令          | 解释                                  |
| ------------- | ------------------------------------- |
| mkdir dir     | 在当前目录下创建dir1                  |
| mkdir /dir1   | 在根目录下创建dir1                    |
| mkdir ./dir1  | 在当前目录下创建dir1                  |
| mkdir ../dir1 | 在上一个目录下创建dir1                |
| mkdir -p a/b  | 递归创建，创建a文件并在a文件夹下创建b |

>修改

| 命令   | 修改         |
| ------ | ------------ |
| rename | 重命名       |
| vi     | 修改文件内容 |

使用vi修改文件内容时
1、执行 vi [文件名]  进入编辑器（默认命令模式）
2、点击a或i进入编辑模式，敲入内容
3、然后按键盘上的esc键退出编辑模式（进入到命令模式）
4、最后敲冒号：
5、再敲wq保存并退出

>删除 rm [文件或目录]

| 命令  | 解释                         |
| ----- | ---------------------------- |
| rm -r | 删除目录（系统提示是否删除） |
| rm -f | 强制执行删除（系统不提示）   |

>移动 mv [选项] [源文件或目录] [目标文件或目录]

| 命令  | 解释                                                                                         |
| ----- | -------------------------------------------------------------------------------------------- |
| mv -b | 若需覆盖文件，则覆盖前先行备份                                                               |
| mv -f | force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖                                   |
| mv -i | 若目标文件 (destination) 已经存在时，就会询问是否覆盖                                        |
| mv -u | 若目标文件已经存在，且 source 比较新，才会更新(update)                                       |
| mv -t | 即指定mv的目标目录，该选项适用于移动多个源文件到一个目录的情况，此时目标目录在前，源文件在后 |

>复制 cp [选项]










# linux安装telnet
```
tep 1、rpm -qa telnet-server（无输出表示telnet-server未安装，则执行step2；否则执行step3）

step 2、yum -y install telnet-server（安装telnet-server）

step 3、rpm -qa telnet（无输出表示telnet未安装，则执行step4，否则执行step5）

    [root@dev09 xinetd.d]# rpm -qa telnet
    telnet-0.17-64.el7.x86_64

step 4、yum -y install telnet（安装）
```