// 现在是完全 写 express， 没有 connect
var express = require('express');
var app = express();

//现在我们用 http://localhost:3001/aaa/about.html 访问 about.html  目录
app.use('/aaa',express.static(__dirname+'/public'))

app.use(function(req,res,next){ // 访问 http://localhost:3001/
  if(req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('这是 Hemo');
  }else{
    next();  // 继续执行，下一个中间价
  }
})
app.use(function(req,res,next){
  if(req.url === '/bbb'){  // 访问 http://localhost:3001/bbb
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('你访问了 bbb 为参数的')

  }else{
    next(); // 继续进行，不是 访问 /bbb  为参数的
  }
})
app.use(function(req,res,next){
  res.writeHead(404,{'Content-Type':'text/plain'});
  res.end('404 not found!\n')
})
app.listen(3001,function(){
  console.log('可以访问了')
})

// 5-APP 这个页面将了 自定义 中间件，完全 express 的写法
// 下节课 ，介绍简单的 方法写，要简化的多。
