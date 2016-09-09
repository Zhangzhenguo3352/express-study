var express = require('express');
var app = express();
// app.get('访问的路径',fnCd_1,fnCd_1)  最多三个参数
app.get('/',function(req,res,next){
  console.log(1)
  next(); // 继续进行
},function(req,res,next){
  console.log(2)
  next(); // 继续进行
})

app.get('/',function(req,res,next){
  console.log(3) // 继续进行
  next();
},function(req,res,next){
  console.log(4) // 继续进行
  res.end('访问结束了')
})

// 打印结果
// 1
// 2
// 3
// 4
// 这时候打开了页面，页面显示：访问结束了

app.listen(3001,function(){
  console.log('3001 可以访问')
})

// 6-app 想说明是 next() 会继续执行下去
