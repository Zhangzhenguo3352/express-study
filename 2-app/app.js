var http = require('http');
var express = require('express');

var app = express();

// 静态文件处理 中间件
app.use(express.static(__dirname+'/public'))

http.createServer(app).listen(3001,function(err){
	if(err){
		console.log('服务器访问错误')
	}else{
		console.log('3001 端口启动')
	}
})

// 访问  http://localhost:3001/index.html
// 访问  http://localhost:3001/login.html

// 2-app 页面