const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const mime = require('mime')

const server = http.createServer()
const _ = require('lodash')
var lsTemplateSrc = fs.readFileSync('./050403handlebarjs.html')
var lsTemplate = _.template(lsTemplateSrc)

const base = '/Users/zhaiyuanhang/找工作' 
const port = 8088


//开启服务
server.on('request',(req,res) => {  //需要告诉浏览器打开文件的 MIME type
  //浏览器通常使用MIME类型（而不是文件扩展名）来确定如何处理文档；因此服务器设置正确以将正确的MIME类型附加到响应对象的头部是非常重要的。
  //res.setHeader('Content-Type','text/html;charset=UTF-8')
  var urlObj = url.parse(decodeURIComponent(req.url)) 
  var finalPath = path.join(base,urlObj.pathname)  //注意中文url解析问题

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
            fs.readdir(finalPath,{withFileTypes:true},(err,list) => {
              res.end(lsTemplate({list:list})) //啥意思？为啥这样写？？？
            })
          } else {
            res.setHeader('Content-Type',mime.getType(finalPath)) //默认填字节流
            res.end(content)
          }

        })
    }
  })

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
