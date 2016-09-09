var express = require('express');
var app = express();
// app.get('访问的路径',fnCd_1,fnCd_1)  最多三个参数
app.get('/',function(req,res,next){
  console.log(1)
  next(); // 本 app.get() 中的函数不在进行，跳出去执行下一个 app.get()
},function(req,res,next){
  console.log(2)
  next(); // 不会执行 2 了 ，因为上面的 route 中参数跳出了
})

app.get('/',function(req,res,next){
  console.log(3) // 继续进行
  next();
},function(req,res,next){
  console.log(4) // 继续进行
  res.end('访问结束了')
})

// 打印结果，注意这里少了一个 2
// 1
// 3
// 4
// 这时候打开了页面，页面显示：访问结束了

app.listen(3001,function(){
  console.log('3001 可以访问')
})

// 7-app 想说明的是：next('route')  添加参数，会在本 app.get() 内部，跳出执行下一个 app.get()方法
