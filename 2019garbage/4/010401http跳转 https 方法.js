import { Server } from "tls";

//http跳转到https
//3种方法


//第一种  301或者302跳转
server.on('request',(req,res) => {
  console.log(req.method,req.url,req.headers.host)
  res.writeHead(301,{
    Location:`https://${req.headers.host}/${req.url}`
  })
  res.end()
})







//把地址栏的协议头改为https
res.setHeader('Content-Type','text/html')
res.end(`
  <script>
    location.protocol = 'https:'
  </script>  
  `)


//hsts HTTP Strict Transport Security HTTP严格传输安全
//网站可以选择使用HSTS策略，来让浏览器强制使用HTTPS与网站进行通信，以减少会话劫持风险[1][2]。
//https://zh.wikipedia.org/zh-hans/HTTP%E4%B8%A5%E6%A0%BC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8
//307 浏览器收到这个请求头的时候
//用户首次访问某网站是不受HSTS保护的。这是因为首次访问时，浏览器还未收到HSTS，所以仍有可能通过明文HTTP来访问。解决这个不足当前有两种方案，一是浏览器预置HSTS域名列表，Google Chrome、Firefox、Internet Explorer和Microsoft Edge实现了这一方案[11][12]。二是将HSTS信息加入到域名系统记录中。但这需要保证DNS的安全性，也就是需要部署域名系统安全扩展。截至2016年这一方案没有大规模部署。
