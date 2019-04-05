//npm i express
//koa 
//创建 packjason 把依赖的模块写到dependencies 中
// {
//   'dependencies':{
//     'express':"4.16.3"
//   }
// }
//之后在这个文件夹运行npm install就会把所用的模块安装好



var express = require('express')

var server = express()

var port  = 8095

var path = require('path')
server.use(function(req,res,next) {
  //不管什么请求总是返回json
  // res.json({ //结束掉请求,返回给一个json
  //   a:1,
  //   b:2
  // })

  // res.jsonp({ //结束掉请求,返回给一个json
  //   a:'jsonp返回',
  //   b:2
  // })

  // res.sendFile(path.join(__dirname,'070404expressjs.js'))
  console.log(req.method,req.url)
  req.foo = 8
  next()
})


//中间件 就是这个函数 ，处理这个请求的中间函数
//每个函数都可以对这个请求做一些处理
server.use(function(req,res,next) {
  console.log(req.foo)
  var body = ''
  req.on('data',function(data){
    body += data.toString()
  })
  req.on('end',function() {
    req.body = body
    next()
  })

})


server.use(function(req,res,next) {
  try{
    req.body = JSON.parser(req.body)
  } catch(e) {
    console.log(e)
  } finally {
    next()
  }
})


server.use(function(req,res,next) {

})

server.listen(port,() => {
  console.log('server listening on port',port)
})

//基于httpserver的封装
// http.createServer((req,res) => { 

// })

//==========================================
//express 中实现了use方法后其他大多数方法都可以实现
server.get('/bar',function(req,res,next) {
  xxxxx
})

server.use(function(req,res,next) {
  if (req.method === 'GET' && res.url === '/bar') {
    xxxx
  } elsd {
    next()
  }
})

//================listen方法
function listen() {
  var server = http.createServer(this)
  return server.listen.appply(server.arguments)
}


//=========================use方法实现
server.middlewares = []
server.use = function(middleware) {
  this.middlewares.push(middleware)
}
function server(incoming,res) {
  var i = 0
  function next(){
    server.middlewares[i++] (incoming,res,next)
  }
  next()
}
//一坨函数串成一个 reduce解决这个问题
var funcs = [function(next) {
  console.log(1)
  next()
},function(next) {
  console.log(2)
  setTimeout(next,2000)
},function(next) {
  console.log(3)
  next()
},function(next) {
  console.log(4)
}]
var server = funcs.reduceRight((preNext,f) => {
  return function next(){
    return f(preNext)
  }
},() => {})

server()