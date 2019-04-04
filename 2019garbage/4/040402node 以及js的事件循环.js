//事件循环
//被异步的函数在什么时间调用就是由事件循环机制决定的
// https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/


//process.nextTick() 方法将 callback 添加到下一个时间点的队列。 一旦当轮的事件循环全部完成，则调用下一个时间点的队列中的所有回调。
//这不是 setTimeout(fn, 0) 的简单别名。 它的效率更高。 它会在事件循环的下一个时间点中触发任何其他 I/O 事件（包括定时器）之前运行。

process.nextTick(f1)

setTimeout(f2)  //时间传0会被改为1

setImmediate(f3) //类似 setTimeout(0)


//    ┌───────────────────────────┐
// ┌─>│           timers          │             setTimeout() 和 setInterval() 的回调函数
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │     pending callbacks     │
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// │  │       idle, prepare       │
// │  └─────────────┬─────────────┘      ┌───────────────┐
// │  ┌─────────────┴─────────────┐      │   incoming:   │
// │  │           poll            │<─────┤  connections, │ 接受其他线程的回调
// │  └─────────────┬─────────────┘      │   data, etc.  │
// │  ┌─────────────┴─────────────┐      └───────────────┘
// │  │           check           │               setImmediate()的回调函数
// │  └─────────────┬─────────────┘
// │  ┌─────────────┴─────────────┐
// └──┤      close callbacks      │
//    └───────────────────────────┘

// 阶段概述
// 定时器：本阶段执行已经安排的 setTimeout() 和 setInterval() 的回调函数。
// 待定回调：执行延迟到下一个循环迭代的 I/O 回调。
// idle, prepare：仅系统内部使用。
// 轮询：检索新的 I/O 事件;执行与 I/O 相关的回调（几乎所有情况下，除了关闭的回调函数，它们由计时器和 setImmediate() 排定的之外），其余情况 node 将在此处阻塞。
// 检测：setImmediate() 回调函数在这里执行。
// 关闭的回调函数：一些准备关闭的回调函数，如：socket.on('close', ...)。


setTimeout(function(){
  console.log(1)
},1)

setImmediate(function(){
  console.log(2)
})



//=================================
setImmediate(() => console.log('immediate'))

var c = 0
var start = Date.now()
process.nextTick(function f() {
  c++
  if(Date.now() - start < 1000) {
    process.nextTick(f)
  } else {
    console.log(c)
  }
})

//====================================var c = 0
var start = Date.now()
setImmediate(function f() {
  c++
  if(Date.now() - start < 1000) {
    setImmediate(f)
  } else {
    console.log(c)
  }
})

//=====================================then
var p = Promise.resolve()
setTimeout(() => {
  setImmediate(() => console.log(3))
  p.then(() => console.log(1)) //说明在nextTick之后  immediate 之前
  process.nextTick(() => console.log(2))
})//2 1 3
//===============================
var fs = require('fs')
var p = Promise.resolve()
fs.readFile(__filename,() => {
  setImmediate(() => console.log(3))
  p.then(() => console.log(1)) //说明在nextTick之后,紧跟着nexttick执行  immediate 之前
  process.nextTick(() => console.log(2))
})//2 1 3

///============================================
var fs = require('fs')
var p = Promise.resolve()
fs.readFile(__filename,() => {
  process.nextTick(function f(){
    process.nextTick(f)
  })
  p.then(() => console.log(1)) 
}) //一直无法打出一 说明 then在事件之间运行