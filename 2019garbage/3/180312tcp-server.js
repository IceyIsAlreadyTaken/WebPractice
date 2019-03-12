///服务器端

var net = require('net') //先不管是啥

var server = net.creatServer()

server.on('connetion',function(conn) {
  console.log('got a conn from',conn.address())

  conn.on('data', d => { //接收消息
    console.log(d.toString())
    conn.write(d.toString().toUpperCase()) //发送消息
  })

  conn.on('error',() => {})
})

server.listen(8090,function(){
  console.log('server listening on port', 8090)
})  //服务监听8090端口，监听函数


/////客服端

conn = net.connect(8090,'192.168.31.124') //后边不传的话链接自己的地址
conn.write('hello....fdsaf.dsa.f.dsa.fsa')

conn.on('data', d => console.log(d.toString()))  //接受服务器端的数据