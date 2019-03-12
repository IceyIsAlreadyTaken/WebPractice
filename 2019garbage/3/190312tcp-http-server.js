var net = require('net')

var server = net.createServer()

server.on('connection', conn => {
  conn.on('data', d => {
    // console.log(d.toString()) //输入本机地址加任何的路径会在控制台打印出来 HTTP请求的内容
    //回车在http中是有意义的
    var lines = d.toString().split('\r\n')
    var firstLine = lines.shift()

    var [method,path,protocol] = firstLine.split(' ')  //es6语法,变量的解构赋值
    var headers = lines.map(it => it.split(': ')).reduce((headers,kv) => {
      var k = kv[0]
      var v = kv[1]
      headers[k] = v
      return headers
    },{})

    console.log(method,path,headers)


    conn.write(
`HTTP/1.1 301 Moved
Location:https://www.baidu.com`
// Content-Type:text/html

// <h1>hello you are visiting ${path}<br>
// its ${new Date()} now</h1>
    )
  })
})

server.listen(8080, () => {
  console.log('server listening on port 8080')
  console.log('服务器监听8080端口！')
})

//本机ip 127.0.0.1 本机域名是 localhost
// \r\n 双回车

//telnet baidu.com
//GET /fafasf HTTP/1.1

//nc github.com 80
//GET / HTTP/1.1
//http://github.com/   相当于主页