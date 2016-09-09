var express = require('express');
var app = express();

//  /\/mobile\/1\d{10}$/  访问时 必须是 mobile下的 以 1 开头，后面 数字 10 位 结束
app.get(/^\/mobile\/1\d{10}$/,function(req,res,next){  // 比如：http://localhost:3001/mobile/11234567890
	console.log('你访问了mobile下的11位数字，以1开头');
	res.send('你访问了mobile下的11位数字，以1开头');
})

app.listen(3001,function(){
	console.log('3001 访问')
})

// 正则表达式 在路由中的 使用方法