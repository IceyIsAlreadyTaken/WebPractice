const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const mime = require('mime')
const util = require('util') //将回调函数与promise函数进行转换

const stat = util.promisify(fs.stat)
const readFile = util.promisify(fs.readFile)
const readdir = util.promisify(fs.readdir)
//从node10开始 fs 里的函数都提供promise 函数 
const server = http.createServer()
const base = '/Users/zhaiyuanhang/找工作' 
const port = 8088


//开启服务
server.on('request',(req,res) => {  
  var urlObj = url.parse(decodeURIComponent(req.url))
  var finalPath = path.join(base,urlObj.pathname)  //注意中文url解析问题


  //更好的改写的方法是只写then  
  stat(finalPath)
  .catch(err => {
    res.writeHead(404)
    res.end('404没找到目标文件夹')
  })
  .then(stat => {
    if (stat.isDirectory()) {
      finalPath = path.join(finalPath,'index.html')
    }
    return readFile(finalPath)
  })
  .then(content => {
    res.setHeader('Content-Type',mime.getType(finalPath)) //默认填字节流
    res.end(content)
  },err => {
    finalPath = path.join(base,req.url)
    res.setHeader('Content-Type','text/html;charset=UTF-8')
    return readdir(finalPath,{withFileTypes:true})
  })
  .then(list => {
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
  .catch(err => {
    res.writeHead(404)
    res.end('404没找到目标文件夹')
  })

})

//监听端口
server.listen(port,() => {
  console.log(('listenting on port'),port)
})


