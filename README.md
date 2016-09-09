# express-study

```
var http = require('http');
var express = require('express');
// 得到 app 对象 （函数）
var app = express();
// 将app对象
http.createServer(app);

// 处理用户请求,请求路径，/demo 就是路由
app.get('/demo',function(req,res){
	console.log('有人来了')
	res.send('服务器给浏览器打个招呼');
	res.end()
})

app.listen(3000)

```

```
var http = require('http');
var express = require('express');

//说明 中间件 自定义   app.use()



// 得到 app 对象 （函数）
var app = express();

// app.use() 第一个参数不传 默认是  '/'
// 这里我们是自定义的，不同之处是 第二参数是 function(req,res){}
// next  下一个 中间件 指定
app.use('/user',function(req,res,next){  //访问 http://localhost:3000/user
	console.log('进入 自定义 中间件');
	next();  // 没有 next() 中间件一下的内容 不 继续进行

})
//app.use('/',express.static(__dirname))   express 里面自带的



// all 监听get  post 请求
// 默认   '/'
app.all('/data',function(req,res){ //访问 http://localhost:3000/data    ， data 作为参数 
	console.log('有人用 data 作为参数 访问了');
	// 服务器 给浏览器点 数据 , 浏览器显现出来
	res.send('服务器 给浏览器点 数据');
	res.end();
})

http.createServer(app).listen(3000,function(err){
	if(err){
		console.log('服务器访问有问题');
	}else{
		console.log('3000 访问成功');
	}
})


// 这是 1-app 文件的内容
// 主要访问 自定义 中间件 ，要体现的是  中间件，没有 next() 不会继续下去
```

```
var express = require('express');
var hbs = require('express-handlebars');
var app = express();

// 重点是这句话，告诉express, 我们用 hbs() 注册 hbs
app.engine('hbs',hbs());


//省略后缀，自动补全
app.set('view engine','hbs');
//自定义 模板访问的目录
app.set('views','templates');

app.get('/templates',function(req,res,next){ // 访问： http://localhost:3001/templates
  res.render('index') // 浏览器显示templates/index.hbs内容 ： ZHANG.zhenguo
})

app.listen(3001,function(){
  console.log('3001 访问')
})





// 22-app
// 用 express-handlebars 模板来写，看它的方式

```

```
var express = require('express');
var app = express();
//不添加后缀，自动补全
app.set('view engine','jade');
//自定义 解析模板目录
app.set('views','templates');
app.get('/templates',function(req,res,next){ // 访问：  http://localhost:3001/templates
  // 服务给 浏览器
  res.render('index')
})

app.listen(3001,function(){
  console.log('3001 访问')
})

// 21-app
// 自定义解析 jade 模板目录

```
```
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

```
```
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

```
```
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

```
```
var express = require('express');
var app = express();

app.get('/test',function(req,res,next){  // 访问L http://localhost:3001/test
  // res.send(200,'Found')  老的用法,它以后就不支持了
  // 正确的方法
  //res.status(200).send('Found')
  res.status(200).send('<h1>text</h1>')
})

app.listen(3001,function(){
  console.log('3001 访问')
});

// 这节讲了 res.send(第一个是状态码，第二个是浏览器看到的内容)
  // res.send(200,'Found')  老的用法,它以后就不支持了

  // 正确的方法
  // res.status(200).send('Found')
  // 也可以写 一个标签
  // res.status(200).send('<h1>text</h1>')




  
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

```
```
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

```
```
var express = require('express');
var hds = require('express-handlebars');
var app = express();

app.get('/test',function(req,res,next){
  console.log();
  res.locals = {
    name:'zhangzhenguo'
  }
  next();
},function(req,res,next){
  res.render('render')
})

app.listen(3001,function(){
  console.log('3001 访问')
})



// 没有实现


// 这节课对 req.render() 模板渲染讲解
// 用到了 express-handlebars   ,下载 ：npm install --save express-handlebars


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

```
```
var express = require('express');
var app = express();

app.post('/test',function(req,res,next){
  console.log(req.get('content-type'));
  res.send(req.header('content-type')) // application/x-www-form-urlencoded
})

app.listen(3001,function(){
  console.log('3001 访问');
})


// 14-app 这个页面是 前端的html 页面。点击submit 发生的 post请求，服务器 返回的浏览器 content-type 上面的参数
// 体现的是 req.get() 或者 req.header() ,都一样的 都是获取 头部


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

```
```
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

// 13-app 这个页面讲述了 req.body 的使用，它主要是。
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

```
```

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




// 12-app 这节课 演示 req.query 的语法

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

```
```

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

//11-app

// tudu 例子，服务器把数据 拿到手，我前端 发送请求，查询服务器拿到的数据
// 真实的例子应该是 ，前端发送数据，后端在数据库里拿数据，然后把数据展示出来
// 你可以 修改你最后传的 参数是几 ， 来拿到 数值的第几项， http://localhost:3001/list/sss/2   比如传 2
// 你也可以 同时把所有东西 拿到，访问：http://localhost:3001/list/sss ，拿到   name1 name2 name3

```
```
var express = require('express');
var app = express();

app.param('wwww',function(req,res,next,listname){ // 访问： http://localhost:3001/list/sss
	console.log(listname) // 直接拿到 我访问的 数据最后面的  sss
	res.send('你访问的是 http://localhost:3001/list/ 下的'+listname)  //  sss
  next(); // 中间件 ，没有的话，下面的中间价 不会 继续执行
})
app.get('/list/:wwww',function(req,res){
	console.log('sds')
})

app.listen(3001,function(){
	console.log('3001 访问')
})

// 10-app 这个页面说明： app.param(req,res,next,listname)  其中第四个参数是 你要访问的,最后面的参数

```
```
var express = require('express');
var app = express();

app.get('/list/:listen',function(req,res,next){  //  访问 ： http://localhost:3001/list/111111111111111111
	//  req.params   -》 { listen: '11111111111111111111111' }
	var listen = req.params.listen;
	res.send('这个路径是http://localhost:3001/list/ 中以 '+listen+' 结尾的')

})

// 多套了一层
app.get('/list/:listen/:id',function(req,res,next){   //  访问 ： http://localhost:3001/list/listen/213231231
	//  req.params   -》 {"listen":"listen","id":"213231231"}
	var listen = req.params.listen;
	var id = req.params.id;
	res.send('这个路径是http://localhost:3001/list/listen/ 中以 '+id+' 结尾的,j结尾前面的参数是'+listen+'')

})

app.listen(3001,function(){
	console.log('3001 访问')
})

// 9-app
// 路由操作

// 访问什么 在页面上显现，我访问的路径
```
```
var express = require('express');
var app = express();

//  /\/mobile\/1\d{10}$/  访问时 必须是 mobile下的 以 1 开头，后面 数字 10 位 结束
app.get(/^\/mobile\/1\d{10}$/,function(req,res,next){  // 比如：http://localhost:3001/mobile/11234567890
	console.log('你访问了mobile下的11位数字，以1开头');
	res.send('你访问了mobile下的11位数字，以1开头');
})

app.listen(3001,function(){
	console.log('3001 访问')
})
// 8-app
// 正则表达式 在路由中的 使用方法
```
```
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

```