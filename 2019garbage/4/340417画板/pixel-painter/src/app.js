const http = require('http')
const fs = require('fs')
const path = require('path')
const ws = require('ws')
const express = require('express')

const port = 9095

const app = express()
const server = http.createServer(app)
const wss = new ws.Server({server})

const width = 500
const height = 500
let pixelData 
try {
  pixelData = require('./pixel.json')
  console.log('!!!!!!!!!!!!!!!W!WW!W!W!W!W!')
} catch(e) {
  pixelData = new Array(height).fill(0).map(it => new Array(width).fill('white'))
  console.log('????????Dont read pixel.json')
  //new 一个数组为稀疏数组没有下标
}


//将数据储存在文件之中

setInterval(() => {
  fs.writeFile(path.join(__dirname,'./pixel.json'),JSON.stringify(pixelData),(err) => {
    console.log('data saved!')
  })
},10000)

wss.on('connection',(ws,req) => {  //req建立
  ws.send(JSON.stringify({
    type:'init',
    pixelData:pixelData,
  })) //建立请求后发送画板数据
  
  var lastDraw = 0

  ws.on('message', msg => {
    msg = JSON.parse(msg)
    var now = Date.now()   
    var {x,y,color} = msg //解构出来
    console.log(msg)

    if (msg.type == 'drawDot') {
      if (now - lastDraw < 500) {
        return 
      }
      if (x >= 0 && x < width && y >= 0 && y < height) {
        lastDraw = now
        pixelData[y][x] = color
        //告诉每一个客户端
        wss.clients.forEach(client => {
          client.send(JSON.stringify({
            type:'updateDot',
            x:x,
            y:y,
            color:color,
          }))
        })
      }

    }

  }) //监听事件


})

app.use(express.static(path.join(__dirname,'./static')))

server.listen(port,() => {
  console.log('server listening on port',port)
})