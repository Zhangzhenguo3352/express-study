var express = require('express');
var app = express();

app.get('/test',function(req,res,next){
  res.set('content-type','text/html')

})

app.listen(3001,function(){
  console.log('3001 访问')
});

// 也没有出来

// 这节讲了 res.set()


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
