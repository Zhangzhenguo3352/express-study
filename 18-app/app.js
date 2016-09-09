var express = require('express');
var app = express();

app.get('/test',function(req,res,next){  // 访问L http://localhost:3001/test
  res.status(200).json({name:'zhang',age:26})  // 前端就会得到 标准的 json 格式 ：{"name":"zhang","age":26}
})

app.listen(3001,function(){
  console.log('3001 访问')
});


// 讲了 res.status(200).json({}) 的用法




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
    //4, res.status(200)
    //5, res.status(200).send('xxx')
    //6, res.status(200).json({})
    //7, res.redirect
