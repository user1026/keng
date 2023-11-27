# 鸿蒙开发


# http发送请求报201 Permission denied

使用Stage模型的应用，需要在module.json5配置文件中声明权限。
```json
{
  "module" : {
    // ...
    "requestPermissions":[
      {
         "name" : "ohos.permission.INTERNET",
        "reason": "$string:reason",
        "usedScene": {
          "abilities": [
            "FormAbility"
          ],
          "when":"inuse"
        }
      },
    ]
  }
}
```