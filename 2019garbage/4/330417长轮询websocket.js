//Comet是一种用于web的推送技术，能使服务器实时地将更新的信息传送到客户端，而无须客户端发出请求，当前有两种实现方式，长轮询和iframe流。

//长轮询
// 长轮询是在打开一条连接以后保持，等待服务器推送来数据再关闭的方式。

// iframe流
// iframe流方式是在页面中插入一个隐藏的iframe，利用其src属性在服务器和客户端之间创建一条长链接，服务器向iframe传输数据（通常是HTML，内有负责插入信息的javascript），来实时更新页面。 iframe流方式的优点是浏览器兼容好，Google公司在一些产品中使用了iframe流，如Google Talk。



//websocket 协议
//承载 websocket 的协议是一直不断开的



//老浏览器没有websocket 只能使用 comet
//socketio  将 websocket 以及 comet 进行了封装
//https://socket.io/
//有重连的极致