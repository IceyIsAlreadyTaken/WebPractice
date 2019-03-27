//回顾用 TCP模块 如何写

// var net = require('net')

// var server = net.createServer()

// server.on('connection',conn => {  //TCP链接
//   conn.on('data',data => {
//     data = data.toString()
//     data.split('\r\n')


//     conn.write('HTTP/1.1 200 ok')
//     conn.write('Content-Length:345\r\n')
//     conn.write('Date:23414124\r\n')
//     conn.write('\r\n')
//     conn.write('<!doctype html>')
//   })
// })

//GET /HTTP/1.1
//Accept:
//User-Agernt:
//Content-Type:
//Content-Length:
//


//HTTP 模块
//HTTP 模块是基于 TCP 封装好的模块

const http = require('http')
const port = 8089

const server = http.createServer() //底层是 HTTP 协议

server.on('request',(request,response) => {
  //可以拿到请求的各种字段
  //req.url
  //req.method
  //req.httpVersion
  //rq.headers['content-length']

  // response.writeHead(200,{  //不用写相应文字 OK, 会自己帮你加上
  //   'Content-Length':345,  //也可以不写参数
  // })
  //debugger;
  //response.writeHead(200)
  //response.writeHeader()可能是用其他方式调用的函数 待看
  //response.writeHead == response.writeHeader
  response.setHeader('Content-Type','text/html;charset=UTF-8')
  response.write(`    
    您正在用 ${request.method} 方法请求${request.url} <br><br><br><br>
    您的浏览器为 ${request.headers['user-agent']}
  `)//响应体

  // 拿到请求体 发 post 请求体才能拿到
  var body = ''
  request.on('data',data => {
    body += data.toString()
  })
  // //拿完请求体
  request.on('end',() => {
    //JSON.parse(body) //
    if (body) {
      try {
        console.log(JSON.parse(body))
      } catch(e) {
        console.log(e)
      }
    }
  })


  response.end()
})

server.listen(port,() => {
  console.log('listening on port监听',port)
})


//可以读到请求相关的
//request 里的socket属性 是承载 HTTP链接的 TCP 属性
// request.socket === request.client

//可以读到响应相关的
//http的请求与响应是走在同一个 TCP 链接上的
// request.socket === response.connection