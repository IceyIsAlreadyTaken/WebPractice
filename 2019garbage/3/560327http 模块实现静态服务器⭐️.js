//http://username.github.io/xxx.js

//实际上访问
// \zhaiyuanhang\xxx.js文件
// http://username.github.io/
// 不写某个文件就是访问index.html
// 没有index.html的话就是返回404.html
// 或者把这个文件夹的内容都列出来
//127.0.0.1:8088

//访问服务器地址，那么会默认访问index.html文件
// 如果访问一个不存在的页面 就会找404.html
const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const base = '/Users/zhaiyuanhang/找工作' 
const server = http.createServer()
const mime = require('mime')
const port = 8088



//开启服务
server.on('request',(req,res) => {  //需要告诉浏览器打开文件的 MIME type
  //浏览器通常使用MIME类型（而不是文件扩展名）来确定如何处理文档；因此服务器设置正确以将正确的MIME类型附加到响应对象的头部是非常重要的。
  //res.setHeader('Content-Type','text/html;charset=UTF-8')
  var urlObj = url.parse(decodeURIComponent(req.url)) 
  var finalPath = path.join(base,urlObj.pathname)  //注意中文url解析问题
  // res.write(`    
  //   您正在用 ${req.method} 方法请求${req.url} <br><br>
  //   您的浏览器为 ${req.headers['user-agent']} <br><br>
  //   访问的服务器base ${base} <br><br>
  //   访问的服务器 ${filePath}
  // `)
  //debugger;
  // console.log(req.url)
  // console.log(finalPath)
  // console.log(decodeURIComponent(req.url))

  fs.stat(finalPath,(err,stat) => {
    if (err) {
      res.writeHead(404)
      res.end('404没找到目标文件夹')
    } else {
        if (stat.isDirectory()) {
          finalPath = path.join(finalPath,'index.html')
          //console.log(finalPath)
        }
        //debugger;
        fs.readFile(finalPath,(err,content) => {
          if (err) {
            finalPath = path.join(base,req.url)
            //console.log(req.url)
            res.setHeader('Content-Type','text/html;charset=UTF-8')
            fs.readdir(finalPath,{withFileTypes:true},(err,list) => {
              res.end(list.map(entry => {
                var ending = entry.isDirectory() ? '/' : ''
                return `
                  <div>
                  <a href="./${entry.name}${ending}">
                  ${entry.name}${ending}</a>
                  </div>
                `
              }).join(' '))
            })
          } else {
            //console.log(content)
            res.setHeader('Content-Type',mime.getType(finalPath)) //默认填字节流
            res.end(content)
          }

        })
    }
  })
  // 异步s
  //node里也有decodeURIComponent 中文网址拿过来会变成乱码
  

  //同步
  // try {
  //   var content = fs.readFileSync(filePath)
  //   res.end(content)
  // } catch(e) {
  //   res.end('404没找到目标文件')
  // }

})
//监听端口
server.listen(port,() => {
  console.log(('listenting on port'),port)
})

//先处理get请求




//node 命令行工具
//nodemon 监听文件变化
//在命令行窗口就不太好调试了
//hs -o 将本地以服务器的方式打开
