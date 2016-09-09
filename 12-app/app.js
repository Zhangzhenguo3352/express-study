
var  express = require('express');
var app = express();
// app.get() 是专门接受 get  请求的
// 默认是  ’/‘
app.get('/',function(req,res,next){
  console.log(req.query) // 访问 http://localhost:3001/?name=zhang&age=26  得到 { name: 'zhang', age: '26' }
})

app.listen(3001,function(){
  console.log('3001 访问')
})




// 这节课 演示 req.query 的语法

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
