const express = require('express')
const port = 3005
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')


const server = app.listen(port,() => {
  console.log('server listening on port',port)
})

// app.use(express.static(path.join(__dirname,'./dist)))
const pixelData = [
  ['red','green','blue','white'],
  ['red','green','blue','white'],
  ['red','green','blue','white'],
  ['red','green','blue','white'],
]

io.on('connection',(ws) => {

})