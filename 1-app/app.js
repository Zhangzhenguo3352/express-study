var http = require('http');
var express = require('express');

//说明 中间件 自定义   app.use()



// 得到 app 对象 （函数）
var app = express();

// app.use() 第一个参数不传 默认是  '/'
// 这里我们是自定义的，不同之处是 第二参数是 function(req,res){}
// next  下一个 中间件 指定
app.use('/user',function(req,res,next){  //访问 http://localhost:3000/user
	console.log('进入 自定义 中间件');
	next();  // 没有 next() 中间件一下的内容 不 继续进行

})
//app.use('/',express.static(__dirname))   express 里面自带的



// all 监听get  post 请求
// 默认   '/'
app.all('/data',function(req,res){ //访问 http://localhost:3000/data    ， data 作为参数 
	console.log('有人用 data 作为参数 访问了');
	// 服务器 给浏览器点 数据 , 浏览器显现出来
	res.send('服务器 给浏览器点 数据');
	res.end();
})

http.createServer(app).listen(3000,function(err){
	if(err){
		console.log('服务器访问有问题');
	}else{
		console.log('3000 访问成功');
	}
})


// 这是 1-app 文件的内容
// 主要访问 自定义 中间件 ，要体现的是  中间件，没有 next() 不会继续下去