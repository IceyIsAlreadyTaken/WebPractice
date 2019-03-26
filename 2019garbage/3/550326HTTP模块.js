//回顾用 TCP模块 如何写

var net = require('net')

var server = net.createServer()

server.on('connection',conn => {
  conn.on('data',data => {
    data = data.toString()
    data.split('\r\n')


    conn.write('HTTP/1.1 200 ok')
    conn.write('Content-Length:345\r\n')
    conn.write('Date:23414124\r\n')
    conn.write('\r\n')
    conn.write('<!doctype html>')
  })
})

//GET /HTTP/1.1
//Accept:
//User-Agernt:
//Content-Type:
//Content-Length:
//


//HTTP 模块

const http = require('http')
const port = 8088

const server = http.createServer() //底层是 HTTP 协议

server.on('request',(request,response) => {
  //可以拿到请求的各种字段
  //req.url
  //req.method
  //req.httpVersion
  //rq.headers['content-length']

  response.writeHead(200,{  //不用写相应文字 OK, 会自己帮你加上
    'Content-Length':345,  //
  })
})

server.listen(port,() => {
  console.log('listening on port',port)
})