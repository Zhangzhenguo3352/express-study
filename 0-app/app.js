var http = require('http');
var express = require('express');
// 中间件 讲解 express的方法
var app = express();
// '/ ' 是默认路径
// __dirname  是 我这个文件夹的 真实路径，也就是 0-app ,的路径
// 我们想找的是 index.html ,所以我们还要加一个    /index.html   这样我们才能访问到我们的 index.html
// 其实我们 只要访问到 0-app这个文件就可以得到 index.html, 因为 0-app 到会自己 找到，index.html,我们就不用谢  +'/index.html' 了
// app.use('/',express.static(__dirname+'/index.html'))
// 斜杠 '/' 结尾的 都可以访问到
app.use('/',express.static(__dirname))  //访问 http://localhost:3000/index.html  得到静态页面,
//all  所有 get   post 请求都能监听到

app.all('/index',function(req,res){  // 访问 http://localhost:3000/index   是请求index 的参数
	console.log('Hello server');
	// 让浏览器响应数据
	res.send('服务器 给 浏览器点数据');
	res.end();
})

http.createServer(app).listen(3000,function(err){
	if(err){
		cconsole.log('启动时错误')
	}else{
		console.log('3000 成功启动')
	}
})

// 这是 0-app 的文件
//    display: block;
   // width: 52px;
    //height: 50px;