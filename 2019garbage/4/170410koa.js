//express还有一点问题 await next()无法返回


//koa express原版团队做的
// awaite next()

var Koa = require('koa')
var app = new Koa()

//只有use这一个安函数
//接受异步函数

app.use(async (ctx,next) => { //ctx 上下文，
  //http原生模块
  //ctx.req
  //ctx.res
  
  //封装后的
  //ctx.request
  //ctx.response

  //把请求和响应合并在了一起
  //ctx.status.aaa = 200 //命名空间专门用来放东西
  //ctx.url
  //ctx.method

  //ctx.body = <buffer>
})


app.use(async (ctx,next) => {
  var start = Date.now()
  await next()
  var duration = Date.now() - start
  console.log('the request takes', duration, 'to proceed')
})


//===============================
app.use(async (ctx,next) => {
  await next()
  ctx.body = 'Hello World'
})

app.use(async (ctx,next) => {
  console.log(1)
  await new Promise(resolve => {
    setTimeout(resolve,10000)
  })
})





//========================
//egg.js
