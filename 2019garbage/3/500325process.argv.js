//process.argv来获取传递给脚本的命令行参数

console.log(process.argv)
console.log(process.execArgv) //能够显示传给 Node 的命令

//node --inspect 500325process.argv.js test lalala

// [ '/usr/local/bin/node',
// '/Users/zhaiyuanhang/WebPractice/2019garbage/3/500325process.argv.js',
// 'test',
// 'lalala' ]
// [ '--inspect' ]


//node 程序退出状态码 成功退出显示0
// 怎么将命令行的prompt设置含有状态码啊？？？？？？？