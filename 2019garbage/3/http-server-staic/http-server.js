const http = require('http')
const server = http.createServer() //底层是 HTTP 协议
const port = 80

server.on('request',(request,response) => { //监听请求
  response.setHeader('Content-Type','text/html;charset=UTF-8')
  response.write(`    
    您正在用 ${request.method} 方法请求${request.url} <br><br><br><br>
    您的浏览器为 ${request.headers['user-agent']}
  `)//响应体
  response.write(`    
    <h1>Copy That~!</h1>
  `)//响应体
  console.log("copy right!~")
  
  response.end()
})

server.listen(port,() => { 
  console.log('listening on port监听',port)
})

