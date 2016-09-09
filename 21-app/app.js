var express = require('express');
var app = express();
//不添加后缀，自动补全
app.set('view engine','jade');
//自定义 解析模板目录
app.set('views','templates');
app.get('/templates',function(req,res,next){ // 访问：  http://localhost:3001/templates
  // 服务给 浏览器
  res.render('index')
})

app.listen(3001,function(){
  console.log('3001 访问')
})

// 21-app
// 自定义解析 jade 模板目录
