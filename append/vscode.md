# 编辑器配置和相关问题

windows10操作系统！！！！！

## VSCode
### VSCode 快捷键

>1、快速复制一行

```
快捷键： shift+alt+ 下箭头/上箭头 或者 ctrl+c 然后 ctrl+v
```

>2、选定多个相同的单词

```
快捷键： ctrl + d
先双击选定一个单词，然后按下 ctrl + d 可以往下依次选择相同的单词。 这样同时修改相同的单词就非常方便
```
>3、全局替换某写单词

```
当我们一个页面需要修改大量相同的文字的时候，我们一个的修改超级麻烦，此时我们可以使用全局替换
快捷键： ctrl + h 注意选择全部替换即可
```
>4、快速定位到某一行

```
当我们页面比较长的时候，上下滚动页面布方便，其实我们可以利用快捷键，快速的调到指定的行数上。
快捷键： ctrl + g
```
>5、放大缩小整个编辑器界面

```
快捷键： ctrl + + / -
```
>6、添加多个光标

```
快捷键： Ctrl + Alt + 上箭头/下箭头
```

>7、选择某个区块

```
可以选择一个区块进行操作
快捷键： 按住alt + shift 然后拖动鼠标
也可以添加多个光标
```
>8、选中行

```
快捷键： 按住alt + shift + 左箭头/ 右箭头
```
>9、光标定位到单词首/单词尾

```
快捷键 Ctrl + 左箭头/ 右箭头
```
>10、选中单词

```
快捷键 Ctrl + shift + 左箭头/ 右箭头
```

### vscode问题
> open in brower 找不到chrome

找到chrome.exe的地址（桌面快捷方式复制目标的地址，复制到chrome.exe即可），然后填入open in brower插件设置里或者在vscode里的setting.son里设置<br>
样例：<br>
***注意：需要转译***
```json
//错误示范
"open-in-browser.default":"C:\Users\Administrator\AppData\Local\Google\Chrome\Application\chrome.exe"

//正确示范
"open-in-browser.default":"C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe"
```
## goland

### goland问题

>下完包飘红

先删除.idea文件，再打开goland然后右键go.mod选择Go Mod Tidy


