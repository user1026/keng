# GO


## $GOPATH/go.mod exists but should not

开启模块支持后，并不能与$GOPATH共存,所以把项目从$GOPATH中移出即可，例如：GOPATH路径为E:/test,那么go.mod不能在上面这个文件夹里
## 文件操作
在用Go进行文件操作时，使用os.OpenFile()函数是常用的手段，但是在使用过程中也踩了一些坑，记录一下。os.OpenFile()的定义如下：
```GO
func os.OpenFile(name string, flag int, perm fs.FileMode) (*os.File, error)

```

第二个参数flag有一个是os.O_CREATE，表示如果如果文件不存在就新建，但是在实操中发现这个新建文件只能在当前目录下有效，也就是说name只能是现有的路径。比如说，我给name传入一个`./test/xxx.txt`，这时候如果/test文件夹不存在，os.OpenFile()还是回返回文件或路径不存在的错误，不会自己新建路径。<br>
所以这种情况需要我们自己加上新建文件路径的代码，比如：
```GO
os.MkdirAll(prefix, 0644)
```
但是这时候虽然路径文件夹./log已经存在了，但是os.OpenFile()还是会返回permission denied<br>
这是因为os.MkdirAll()新建的文件夹的权限是0644，我们用户并没有执行权限，所以我们不可以操作这个文件夹(Linux系统下一切皆文件)，包括cd进入这个文件夹和在这个文件夹里面创建文件，所以将`os.MkdirAll(prefix, 0644)`改成`os.MkdirAll(prefix, 0744)`就可以了。
注意之前创建的无执行权利的log文件夹并不会被执行的新代码覆盖掉，所以我们要手动删除一下。

## go 无法在非局部类型 'VO.UserInfo' 上定义新方法

在VO包中定义一个UserInfo的结构体
```GO
package VO
type UserInfo struct {
  userId String
  userName String
}
```
然后在user.go中使用
```GO
package user
import "./VO"
func (info VO.UserInfo) getUser(){//报无法在非局部类型 'VO.UserInfo' 上定义新方法

}
```
解决方案：<br>
- <font color="blue">定义 models 中的方法包裹。这是处理您自己的代码时最简单的方法，但当然不适用于 3rd-party 类型。</font><br>
- <font color="blue">创建一个常规函数而不是一个方法( func String(meter models.Meter) string )。不过，这可能不太惯用(特别是对于 String 方法)，并且也无法访问私有(private)字段(除非您在 models 包中定义函数，在这种情况下，您可以改为定义该方法) .</font><br>
- <font color="blue">创建一个嵌入原始类型的新类型。这使用起来有点麻烦，但允许您扩展现有行为</font>

## GO切片和容量

```GO
func main () {
    q:=[]int{1,2,3,4,5,6}
    q=q[:3]
    fmt.Println(q,cap(q))//[1 2 3] 6
    q=q[:1]
    fmt.Println(q,cap(q))//[1] 6
    q=q[:0]
    fmt.Println(q,cap(q))//[] 6
    q=q[:6]
    fmt.Println(q,cap(q))//[1 2 3 4 5 6] 6
    fmt.Println("--------------")
    s:=[]int{1,2,3,4,5,6}
    s=s[1:4]
    fmt.Println(s,cap(s))//[2 3 4] 5
    s=s[:2]
    fmt.Println(s,cap(s))//[2 3] 5
    s=s[1:]
    fmt.Println(s,cap(s))//[3] 4
    s=s[:0]
    fmt.Println(s,cap(s))//[] 4
    s=s[:6]
    fmt.Println(s,cap(s))//报错panic: runtime error: slice bounds out of range [:6] with capacity 4
}
```
报错原因是容量不够 s[start:end:max] start是几就减少多少容量

