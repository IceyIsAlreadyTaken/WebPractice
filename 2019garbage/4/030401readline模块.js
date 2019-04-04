//readline
//让代码停在控制台等待输入 从控制台读出内容

//nslookup 显示ip服务器名字

const readline = require('readline')
const dns = require('dns')
var rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
  prompt:'>>>>>'
})

rl.question('how are you',answer =>{
  rl.prompt()
  console.log('you are born at',2018 - Number(answer))
  rl.question(`what's your name`,answer =>{
    console.log(answer)
  })
})

rl.on('line',line => {
  // console.log(line.toUpperCase())
  if(!line.trim()) {
    rl.prompt()
  } else {
    dns.resolve(line,(err,records) => {
      console.log(records)
      rl.prompt()
    })
  }
})


//telnet命令

//==========
//repl //交互式命令行
//基于 Line实现的

//============
//vm 让代码运行在一个沙箱中一样不会影响外界的函数