//0.0.0.0 自己的所有ip地址
//一个进程会占用一个端口
//浏览器默认只扫描一个端口9229
//在node调控面板的connection
//远程调控程序




//node  --inspect

//node --inspect-brk=ip:port  文件名
//是会在代码的第一行暂停
//一般用这个
//浏览器界面远程调试
//跑在websocket 上边
//如果端口被占用 去node控制台把端口添加进去
//  chrome://inspet


//node --inspect=ip:port  
//适用于24小时运行的服务器
console.log(process.argv)


//vscode 需要把整个文件夹拖进去才能调试


//进入 node
//.exit退出
//.help
var i = 0
setInterval(() => {
  console.log(i++)
},1000) //不停的运行，退出的话按control + c

//调试 Node 包含回调的代码要打断点，否则会走到 Node 内部的代码

//node写的代码总是相对于当前模块的
// a
// | - b - x.js
// | _ c _ y.js
// x.js引用y.js的文件 调用y里边的f函数（./xx.js）传入一个xx.js文件
// 正常使用会认为是相对于x.js文件的路径，但是f函数是y.js的，所以这个路径是相对于y.js的
//所以应该传一个完整路径
//fs 模块在读取文件的时候总是相对于我们在运行node的时候命令行所在的目录
// 所以调用目录时应该传 （__dirname + '/xxx.js'）


//node有现有的模块帮你处理路径