# http状态码

| 状态码 | 英文描述                        | 中文描述                                                                                                                                                         |
| ------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100    | Continue                        | 继续。客户端应继续其请求                                                                                                                                         |
| 101    | Switching Protocols             | 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议                                                                   |
|        |                                 |
| 200    | OK                              | 请求成功。一般用于GET与POST请求                                                                                                                                  |
| 201    | Created                         | 已创建。成功请求并创建了新的资源                                                                                                                                 |
| 202    | Accepted                        | 已接受。已经接受请求，但未处理完成                                                                                                                               |
| 203    | Non-Authoritative Information   | 非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本                                                                                             |
| 204    | No Content                      | 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档                                                                         |
| 205    | Reset Content                   | 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域                                                               |
| 206    | Partial Content                 | 部分内容。服务器成功处理了部分GET请求                                                                                                                            |
|        |                                 |
| 300    | Multiple Choices                | 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择                                                           |
| 301    | Moved Permanently               | 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替                                   |
| 302    | Found                           | 临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI                                                                                               |
| 303    | See Other                       | 查看其它地址。与301 类似。使用GET和POST请求查看                                                                                                                  |
| 304    | Not Modified                    | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
| 305    | Use Proxy                       | 使用代理。所请求的资源必须通过代理访问                                                                                                                           |
| 306    | Unused                          | 已经被废弃的HTTP状态码                                                                                                                                           |
| 307    | Temporary Redirect              | 临时重定向。与302类似。使用GET请求重定向                                                                                                                         |
|        |                                 |
| 400    | Bad Request                     | 客户端请求的语法错误，服务器无法理解                                                                                                                             |
| 401    | Unauthorized                    | 请求要求用户的身份认证                                                                                                                                           |
| 402    | Payment Required                | 保留，将来使用                                                                                                                                                   |
| 403    | Forbidden                       | 服务器理解请求客户端的请求，但是拒绝执行此请求                                                                                                                   |
| 404    | Not Found                       | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面                                                     |
| 405    | Method Not Allowed              | 客户端请求中的方法被禁止                                                                                                                                         |
| 406    | Not Acceptable                  | 服务器无法根据客户端请求的内容特性完成请求                                                                                                                       |
| 407    | Proxy Authentication Required   | 请求要求代理的身份认证，与 401类似，但请求者应当使用代理进行授权                                                                                                 |
| 408    | Request Time-out                | 服务器等待客户端发送的请求时间过长，超时                                                                                                                         |
| 409    | Conflict                        | 服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突                                                                                          |
| 410    | Gone                            | 客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置                                 |
| 411    | Length Required                 | 服务器无法处理客户端发送的不带Content-Length的请求信息                                                                                                           |
| 412    | Precondition Failed             | 客户端请求信息的先决条件错误                                                                                                                                     |
| 413    | Request Entity Too Large        | 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息    |
| 414    | Request-URI Too Large           | 请求的URI过长（URI通常为网址），服务器无法处理                                                                                                                   |
| 415    | Unsupported Media Type          | 服务器无法处理请求附带的媒体格式                                                                                                                                 |
| 416    | Requested range not satisfiable | 客户端请求的范围无效                                                                                                                                             |
| 417    | Expectation Failed              | 服务器无法满足Expect的请求头信息                                                                                                                                 |
|        |                                 |
| 500    | Internal Server Error           | 服务器内部错误，无法完成请求                                                                                                                                     |
| 501    | Not Implemented                 | 服务器不支持请求的功能，无法完成请求                                                                                                                             |
| 502    | Bad Gateway                     | 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应                                                                                   |
| 503    | Service Unavailable             | 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中                                                              |
| 504    | Gateway Time-out                | 充当网关或代理的服务器，未及时从远端服务器获取请求                                                                                                               |
| 505    | HTTP Version not supported      | 服务器不支持请求的HTTP协议的版本，无法完成处理                                                                                                                   |

### 常见的Content-type类型

Content-type是Http的实体首部字段，在request的请求行（或response的状态码）之后，也是首部的一部分。用于说明请求或返回的消息主体是用何种方式编码.<br>
MediaType，即是Internet Media Type，互联网媒体类型；也叫做MIME类型，在Http协议消息头中，使用Content-Type来表示具体请求中的媒体类型信息。<br>
类型格式：type/subtype(;parameter)? type<br>
主类型，任意的字符串，如text，如果是号代表所有；<br>
subtype 子类型，任意的字符串，如html，如果是号代表所有；<br>
parameter 可选，一些参数，如Accept请求头的q参数， Content-Type的 charset参数。<br>


| 类型                              | 描述                                                                                                |
| --------------------------------- | --------------------------------------------------------------------------------------------------- |
| application/x-www-form-urlencoded | 浏览器的原生form表单<br> 提交的数据按照 key1=val1&key2=val2 的方式进行编码，key和val都进行了URL转码 |
| multipart/form-data               | 常见的 POST 数据提交的方式。我们使用表单上传文件时，必须让 form 的 enctype 等于这个值。             |
| application/json                  | 消息主体是序列化后的 JSON 字符串,这个类型越来越多地被大家所使用                                     |
| text/xml                          | 是一种使用 HTTP 作为传输协议，XML 作为编码方式的远程调用规范                                        |
| application/octet-stream          | 二进制流数据（如常见的文件下载）                                                                    |
| image/jpeg                        | jpg图片格式                                                                                         |
| image/png                         | png图片格式                                                                                         |
| text/plain                        | 纯文本格式                                                                                          |
| image/gif                         | gif图片格式                                                                                         |
| application/pdf                   | pdf格式                                                                                             |
