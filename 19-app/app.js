var express = require('express');
var app = express();

app.get('/json',function(req,res,next){
  res.status(200).json({name:'zhang',age:26})  // 前端就会得到 标准的 json 格式 ：{"name":"zhang","age":26}
})

app.get('/test',function(req,res,next){ // 访问L http://localhost:3001/test  自动转成了 http://localhost:3001/json
  res.redirect('/json')
})
app.listen(3001,function(){
  console.log('3001 访问')
});

// res.redirect('/xxx')  我访问的是 /test,redirect 会自动跳转 ，到 /json 里面

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
    //7, res.redirect('/xxx')
