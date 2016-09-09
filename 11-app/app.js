
var express = require('express');
var app = express();

app.param('name',function(req,res,next,listname){
  console.log(listname);
  req.list = ['name1','name2','name3'];
  next()
})

app.get('/list/:name',function(req,res,next){ //  访问：http://localhost:3001/list/sss
  console.log('到list 定义的地方了')
  res.send(req.list.join(' ')) // res.list 的所有 数据： name1 name2 name3
  next();
})

app.get('/list/:name/:id',function(req,res,next){ // 访问： http://localhost:3001/list/sss/1 ，注意我们的参数是 1，
  var name = req.params.name;
  var id = req.params.id;
  res.send(req.list[id]) // 得到是 req.list 数组的第一个 ，也就是 name2 。
})

app.listen(3001,function(){
  console.log('3001 访问')
})


// tudu 例子，服务器把数据 拿到手，我前端 发送请求，查询服务器拿到的数据
// 真实的例子应该是 ，前端发送数据，后端在数据库里拿数据，然后把数据展示出来
// 你可以 修改你最后传的 参数是几 ， 来拿到 数值的第几项， http://localhost:3001/list/sss/2   比如传 2
// 你也可以 同时把所有东西 拿到，访问：http://localhost:3001/list/sss ，拿到   name1 name2 name3
