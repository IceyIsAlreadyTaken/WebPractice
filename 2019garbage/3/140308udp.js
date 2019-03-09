sock = dgram.createSocket('udp4')
sock.bind(10086)
sock.on('message',(data,info) => {console.log(data.toString(),info)})
sock.send('can u listen?',10086,'192.168.31.124')

sock.setBroadcast(true)
sock.on('message',console.log)
//发送
sock.send('lorem1000',10086,'255.255.255.255')

sock.send('lorem1000',10086,'192.168.31.255')
//只在局域网内播

//多播
sock.addMembership('225.0.0.1')


// sock = dgram.createSocket('udp4')

// sock.bind(10086)//绑定端口
// sock.setBoardcase(true)//设置广播发送（当使用广播地址时）
// sock.addMembership('225.0.0.1')//加入频道

// sock.on('message', console.log)

// sock.send('hello', 10086, '192.168.31.255')