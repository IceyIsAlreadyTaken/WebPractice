//npm i express
//koa 

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