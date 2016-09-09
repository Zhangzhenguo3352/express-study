var express = require('express');
var hds = require('express-handlebars');
var app = express();

app.get('/test',function(req,res,next){
  console.log();
  res.locals = {
    name:'zhangzhenguo'
  }
  next();
},function(req,res,next){
  res.render('render')
})

app.listen(3001,function(){
  console.log('3001 访问')
})



// 没有实现


// 这节课对 req.render() 模板渲染讲解
// 用到了 express-handlebars   ,下载 ：npm install --save express-handlebars


//Request
    //1. req.params
    //2. req.query
    //3. req.body
    //4. req.files
    //5. req.param()
      //  params - body - query
    //6. req.cookie
    //7. req.header === req.get
//Response
    //1, res.render
    //2, res.locals
    //3, res.set
    //4, res.send(body[status],[body])
    //5, res.json(status[body],[body])
    //6, res.redirect
