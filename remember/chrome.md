# 谷歌插件开发


[开发文档地址](https://developer.chrome.com/docs/extensions/mv3/manifest/)
<br>
manifest.json

```json
{
  "name": "",//插件名称
  "description": "",//插件介绍
  "version": "1.0",//插件版本
  "manifest_version": 3,//必填，使用的版本语言，目前最新的版本是v3
   "background": {//chrome浏览器的后台
    "service_worker": "background.js",//必须要放在插件的根目录下
    "persistent":true,//为true则常驻后台
  },
  "content_script":[{
    "match":"",//匹配的地址
    "js":["js/test.js"]//匹配到地址后执行的js文件
  }]
  "permissions": [//申请的权限
    "storage",//存储
    "tabs",//选项卡
    "activeTab",//当前激活的选项卡
    ]
}
```