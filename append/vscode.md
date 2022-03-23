# Vscode 相关配置和问题

### open in brower 找不到chrome

找到chrome.exe的地址（桌面快捷方式复制目标的地址，复制到chrome.exe即可），然后填入open in brower插件设置里<br>
样例：<br>
***注意：需要转译***
```javascript
//错误示范
"open-in-browser.default":"C:\Users\Administrator\AppData\Local\Google\Chrome\Application\chrome.exe"

//正确示范
"open-in-browser.default":"C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe"
```