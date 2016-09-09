var express = require('express');
var app = express();

// 可以省略模板后缀
app.set('view engine','jade') // 第一个是固定写法，第二个是 哪个结尾的模板引擎
app.get('/jade',function(req,res,next){ // 访问：   http://localhost:3001/jade
  // res.render('index.jade')
  res.render('index')
})

app.listen(3001,function(){
  console.log('3001 访问')
});


// 讲了 jade 的使用
// express 默认是 支持 ejs 、jade  的语法的，但你必须的下载
// express 默认自带，因此要下载，但不用引用

// 还要下载 views 文件，它会找这个文件里的内容，你写上了 index.jade 就是 views/index.jade
// 也要知道 index.jade 里面的 语法怎么写
