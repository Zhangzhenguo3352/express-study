var express = require('express');
var app = express();

app.get('/test',function(req,res,next){  // 访问L http://localhost:3001/test
  // res.send(200,'Found')  老的用法,它以后就不支持了
  // 正确的方法
  //res.status(200).send('Found')
  res.status(200).send('<h1>text</h1>')
})

app.listen(3001,function(){
  console.log('3001 访问')
});

// 这节讲了 res.send(第一个是状态码，第二个是浏览器看到的内容)
  // res.send(200,'Found')  老的用法,它以后就不支持了

  // 正确的方法
  // res.status(200).send('Found')
  // 也可以写 一个标签
  // res.status(200).send('<h1>text</h1>')




  
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
