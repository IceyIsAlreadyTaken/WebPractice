var fs = require('fs')

fs.readFile('/xxxxx',function(err,buffer) {
  fs.writeFile('./copyxxx',buffer,function(err){
    console.log('文件复制成功')
  })
})

//stream 一段一段的处理数据 操作的一般是buffer对象
//可读流 
var readStream = fs.createReadStream('xxxx') 

var writeStream = fs.createWriteStream('./copyxxx')

readStream.pipe(writeStream) //相当于 on 和 end 两段代码  核心功能，降低内存占用

// readstream.on('data',data => {
//   writeStream.write(data,function(){
    
//   })
// })

// readstream.end('data',data => {
//   writeStream.end()
// })

//粗略 实现 pipe函数
// function pipe(readStream,writeStream) {
//   readStream.on('data',data => {
//     writeStream.write(data)
//   })

//   readStream.end('data',data => {
//     writeStream.end()
//   })
//   return writeStream
// }


//======================================
//transform 转换流
// zilb node 提供的压缩的工具
//

//http://nodejs.cn/api/stream.html#stream_api_for_stream_consumers


//=====相关函数的实现后头研究。。。。