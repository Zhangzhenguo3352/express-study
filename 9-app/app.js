var express = require('express');
var app = express();

app.get('/list/:listen',function(req,res,next){  //  访问 ： http://localhost:3001/list/111111111111111111
	//  req.params   -》 { listen: '11111111111111111111111' }
	var listen = req.params.listen;
	res.send('这个路径是http://localhost:3001/list/ 中以 '+listen+' 结尾的')

})

// 多套了一层
app.get('/list/:listen/:id',function(req,res,next){   //  访问 ： http://localhost:3001/list/listen/213231231
	//  req.params   -》 {"listen":"listen","id":"213231231"}
	var listen = req.params.listen;
	var id = req.params.id;
	res.send('这个路径是http://localhost:3001/list/listen/ 中以 '+id+' 结尾的,j结尾前面的参数是'+listen+'')

})

app.listen(3001,function(){
	console.log('3001 访问')
})

// 路由操作

// 访问什么 在页面上显现，我访问的路径