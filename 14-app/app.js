var express = require('express');
var app = express();

app.post('/test',function(req,res,next){
  console.log(req.get('content-type'));
  res.send(req.header('content-type')) // application/x-www-form-urlencoded
})

app.listen(3001,function(){
  console.log('3001 访问');
})


// 14-app 这个页面是 前端的html 页面。点击submit 发生的 post请求，服务器 返回的浏览器 content-type 上面的参数
// 体现的是 req.get() 或者 req.header() ,都一样的 都是获取 头部


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
