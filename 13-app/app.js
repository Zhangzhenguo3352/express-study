var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.post('/abc',function(req,res,next){  // 用 index,html 直接点击打开 。提交看到结果
  console.log(req.body) // { some_name: 'sss' }
})

app.listen(3001,function(){
  console.log('3001 访问')
})

// 解析 post 数据的
  //1, 建立 idenx.html 文件夹
  //2, 下载 body-parser 插件
  //3, app.use(bodyParser.urlencoded({extended:true}));
  /*4, abc  和 index.html  保持一致
        app.post('/abc',function(req,res,next){
          console.log(req.body)
        })
  */

// 这个页面讲述了 req.body 的使用，它主要是。
// 1. 用在 post 类型的，还可以用 。
// 2， json  的形式传入

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
