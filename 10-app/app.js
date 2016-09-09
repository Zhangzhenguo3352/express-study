var express = require('express');
var app = express();

app.param('wwww',function(req,res,next,listname){ // 访问： http://localhost:3001/list/sss
	console.log(listname) // 直接拿到 我访问的 数据最后面的  sss
	res.send('你访问的是 http://localhost:3001/list/ 下的'+listname)  //  sss
  next(); // 中间件 ，没有的话，下面的中间价 不会 继续执行
})
app.get('/list/:wwww',function(req,res){
	console.log('sds')
})

app.listen(3001,function(){
	console.log('3001 访问')
})

// 10-app 这个页面说明： app.param(req,res,next,listname)  其中第四个参数是 你要访问的,最后面的参数
