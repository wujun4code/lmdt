// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();
app.use(express.static('public'));
// App 全局配置
app.set('views', 'cloud/views'); // 设置模板目录
app.set('view engine', 'ejs'); // 设置 template 引擎
app.use(express.bodyParser()); // 读取请求 body 的中间件

var request = require('request');

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/hello', function (req, res) {
    res.render('hello', {
        message: 'Congrats, you just set up your app!'
    });
});
app.post('/validate', function (req, res) {
    console.log(req.body);

    res.sendStatus(200);
});
app.post('/send', function (req, res) {
    var client_id = req.body['clientId'];
    var conv_id = req.body['convId'];
    var appId = req.body['appId'];
    var masterKey = req.body['masterKey'];
    var text = req.body['content'];

    var options = {
        url: 'https://leancloud.cn/1.1/rtm/messages',
        //url: 'http://localhost:3000/validate',
        headers: {
            'User-Agent': 'lmdt',
            'X-AVOSCloud-Application-Id': appId,
            'X-AVOSCloud-Master-Key': masterKey,
            'Content-Type': 'application/json'
        },
        method: 'POST',
        json: {
            'from_peer': client_id,
            'message': text,
            'conv_id':conv_id
        }
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response);
            var result = {success:true};
            res.send(result);
        } else {
            console.log(error);
        }
    });

});


// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();