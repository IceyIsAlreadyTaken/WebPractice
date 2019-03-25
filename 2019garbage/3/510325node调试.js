//0.0.0.0 自己的所有ip地址
//一个进程会占用一个端口
//浏览器默认只扫描一个端口9229
//在node调控面板的connection
//远程调控程序




//node  --inspect

//node --inspect-brk=ip:port  
//是会在代码的第一行暂停
//一般用这个
//浏览器界面远程调试
//跑在websocket 上边

//node --inspect=ip:port  
//适用于24小时运行的服务器
console.log(process.argv)


//vscode 需要把整个文件夹拖进去才能调试