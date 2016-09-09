var http = require('http');
var express = require('express');
// 得到 app 对象 （函数）
var app = express();
// 将app对象
http.createServer(app);

// 处理用户请求,请求路径，/demo 就是路由
app.get('/demo',function(req,res){
	console.log('有人来了')
	res.send('服务器给浏览器打个招呼');
	res.end()
})

app.listen(3000)