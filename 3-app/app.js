var http = require('http');
var express = require('express');

var app = express();
// 静态文件处理的中间价
app.use(express.static(__dirname+'/public'));
// 日志处理中间件 , 过时了
// app.use(express.logger())
// post 方式提交的数据
app.use(express.bodyParser());

// 只要是 ‘/’ 下面的路径访问的我们都可以得到
app.all('/',function(req,res){
  console.log('=====');
  console.log(req.query);
})

//解析get 方式提交的数据
app.use(express.query())
http.createServer(app).listen(3001)
