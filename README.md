# LeanMessage Debug Tool

## 简介
这是一个简单的通过调用 REST API 给 Client 发送实时消息的调试工具。

LeanCloud 推出的聊天功能组件——LeanMessage 全面支持各平台上实时聊天服务，在开发期间，需要发送一些简单的消息进行调试，这个工具可以帮助您。

参数详解：

```
App ID: LeanCloud 应用的 App ID
Master Key: LeanCloud 应用的 Master Key
Client Id: AVIMClient 对应的 Client Id 
Conversation Id: 对话的 ID
Text: 要发送的文本消息
```

## 测试网址
[LeanMessage Debug Tool](http://lmdt.avosapps.com/)

## 部署

* 注册 [LeanCloud](https://leancloud.cn) 账户，并且创建一个应用
* Clone master 分支上的源代码到本地
* 安装 [LeanCloud 命令行工具](https://www.npmjs.com/package/avoscloud-code)
* 把 /config/global.json 中的以下两项：

```
    "applicationId": " YOUR LeanCloud APP ID",
    "applicationKey": " YOUR LeanCloud APP KEY"
```
替换成您的应用的对应的 App Id 以及 App Key

* 然后在命令行执行:

```
avoscloud deploy
avoscloud publish
```
两条命令，请注意按顺序执行

* 回到 LeanCloud 控制台，进入 存储->云代码->设置 里面，输入一个自定义的 Web 主机域名
* 然后就可以正常使用。