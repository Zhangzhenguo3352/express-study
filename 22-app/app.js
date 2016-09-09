var express = require('express');
var hbs = require('express-handlebars');
var app = express();

// 重点是这句话，告诉express, 我们用 hbs() 注册 hbs
app.engine('hbs',hbs());


//省略后缀，自动补全
app.set('view engine','hbs');
//自定义 模板访问的目录
app.set('views','templates');

app.get('/templates',function(req,res,next){ // 访问： http://localhost:3001/templates
  res.render('index') // 浏览器显示templates/index.hbs内容 ： ZHANG.zhenguo
})

app.listen(3001,function(){
  console.log('3001 访问')
})





// 22-app
// 用 express-handlebars 模板来写，看它的方式
