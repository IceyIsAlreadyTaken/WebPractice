//==================================================
//events事件  事件监听 触发器 及相关实现
///    events.EventEmitter === events   环状

const EventEmitter = require('events')

var obj = new EventEmitter()

obj.on('foo',function(a,b) {
  console.log(a + b)
})
obj.on('foo',function(a,b){
  console.log(a - b)
})
obj.on('foo',function(a,b){
  console.log(a * b)
})
obj.emit('foo',4,5)   //触发事件 输出 9 -1 20 
console.log(1)
//先触发 事件  再打出1
//对应浏览器 e.dispatchEvent
//传的额外的参数

//  大多时候使用来继承 的 EventEmitter
//EventEmitter 实现⭐️

class EventEmitter {
  constructor() {
    this.eventMap = Object.create(null)
  }

  on(type,handler) { //type 事件名称 handler//函数名字
    if (type in this.eventMap) {
      this.eventMap[type].push(handler)  //事件名字对应的是个数组
    } else {                            //存在这个事件的活就把这个回调函数增加进去
      this.eventMap[type] = [handler]  //如果不存在这个事件就保存起来
    }
    return this
  }

  off(type,handler) {
    if(type in this.eventMap) {
      this.eventMap[type] = this.eventMap[type].filter(it => it != handler)
    }
    return this
  }

  once(type,handler) {
    return this.on(type,function temp(...args) {
      handler.apply(this,args)
      this.off(type,temp)
    })
  }

  emit(type,...args) {
    if (type in this.eventMap) {
      this.eventMap[type].forEach(handler => handler.apply(this,args)) 
      //调用每一个回调函数
    }
    return this
  }
}
var obj = new EventEmitter()

obj.on('foo',function(a,b) {
  console.log(a + b)
})
obj.on('foo',function(a,b){
  console.log(a - b)
})
obj.on('foo',function(a,b){
  console.log(a * b)
})
obj.emit('foo',2,3)   //触发事件 输出 9 -1 20 



