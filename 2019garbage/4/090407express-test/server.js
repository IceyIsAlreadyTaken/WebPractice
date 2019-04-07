var express = require('express')
var path = require('path')
var app = express()
var fs = require('fs')
var port = 9000
var bodyParser = require('body-parser')
var cors = require('cors')


app.locals.pretty = true;//源代码本地格式化
app.set('view engine','pug') //设置要使用的模板引擎
app.set('views',path.join(__dirname,'template'))
//var baseDir = '/Users/zhaiyuanhang/WebPractice/2019garbage/4/090407express-test'

// app.use((req,res,next) => {
//   var filePath = path.join(baseDir,req.url)
//   false.readFile(filePath,(err,content) => {
//     if (err) {
//       next()
//     } else {
//       res.end(content)
//     }
//   })
// })
// express 已经有了
//app.use(logger()) //用来打日志的
app.use((req,res,next) => {
  console.log(new Date(),req.method,req.url)
  next()
})
app.use(cors({
  maxAge:86400
})) //cors

app.use(express.static('/Users/zhaiyuanhang/WebPractice/2019garbage/4/090407express-test'))
//意思是如果请求的文件在这个文文件夹中，那么就返回
//app.use(express.static('/Users/zhaiyuanhang/WebPractice/2019garbage/4/090407express-test/test.html'))//可以用多次上边的找不到就找这个
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
//cors中间件 在响应头上帮你装上cors

// app.use((req,res,next) => { 
//   //解析请求体 只能处理请求体为字符串的情况
//   //或者查看content-type 根据类型解析
//   //请求体解析中间件npm上也有实现好的
//   var body = ''
//   req.on('data',data => {
//     body += data.toString()
//   })
//   req.on('end',() => {
//     try {
//       req.body = JSON.parse(body)
//     } catch(e) {
//       try {
//         req.body = querystring.parse(body)
//       } catch(e) {
//         req.body = body
//       }
//     }
//     next()
//   })
// })

//简单实现static函数
// function static(base) {
//   return (req,res,next) => {
//     if (req.method === 'GET') {
//       var filePath = path.join(base,req.url)
//       fs.readFile(filePath,(err,content) => {
//         if (err) {
//           fs.readFile(path.join(filePath,'index.html'),(err,content)=>{ //找不到返回index.html文件
//             if(err) {
//               next()
//             } else {
//               res.end(content)
//             }
//           })
//         } else {
//           res.end(content)
//         }
//       })
//     } else {
//       next()
//     }  
//   }
// }
app.get('/tpl-test',(req,res,next) => {
  res.render('index.pug',{
    title:'hello world',
    message:'it works',
  })
})
app.get('/download',(req,res,next) => {
  res.download(__dirname + '/vanilla.js','超级无敌牛逼的原生vanilla.js')   //貌似存在路径问题，需要加上dirname

})
//响应头的accept-ranges 断点续传
//jsonp  /search?callback=foo

//res.redirect()  重定向请求
//res.rend() 呈现视图模板
//res.send() 发送各种各样的数据

//res.sendfile octet-stream  直接发送字节流
//res.sendStatus() 发送状态码

//express 本身不支持数据库\
//抽象程度较低，只是在http上对其简单的封装了一层

//

app.get('/userinfo/:username',(req,res,next) => {
  res.json({
    name:req.params.username,
    age:userMap[req.params.username],
    gender:1
  })
  next({error:'xxxxx'})
})

app.get('/userinfo/:id',(req,res,next) => {
  res.json({
    name:req.params.username,
    age:userMap[req.params.username],
    gender:1
  })
})

var userMap = {
  zhangsan:666,
  lisi:28,
  wangwu:88
}

//错误处理中间件
app.use(function(err,req,res,next) {
  console.error(err.stack)
})

//模板引擎

app.listen(port,() => {
  console.log('listen to ',port)
})