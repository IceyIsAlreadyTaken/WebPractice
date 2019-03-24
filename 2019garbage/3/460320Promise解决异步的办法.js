//对所有异步操作的封装

//Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。

//一个 Promise有以下几种状态:
//pending: 初始状态，既不是成功，也不是失败状态。
//fulfilled: 意味着操作成功完成。
//rejected: 意味着操作失败。

var p = new Promise(function(resolve,reject){  //this没有明确设定，设置成箭头函数也可以
   //resolve 成功，函数
   //reject 失败函数
  var xhr = new XMLHttpRequest()
  xhr.open('get','a.txt')
  xhr.addEventListener('load',function() {
    resolve(xhr.responseText)
  })
  xhr.addEventListener('error',function(e) {
    reject(e)
  })
  xhr.send()
})

//接受两个参数onResolvedon(promis 成功了调这个函数)    
// Rejected（promise失败了掉这个函数）
//每次then 的调用会返回新的 Promise
p2 = p.then(function(value){    
  console.log(1)

  return 999
},function(reson){

  console.log(2)
  throw 888

})

//p2的状态由函数内的返回值决定
//如果是正常返回的话p2就是成功的，如果抛出错误 throw 就是失败的

//====================================
p = new Promise(function(resolve,reject){

  setTimeout(() => resolve(999),30000)
})
p.then(function(v){console.log(v)})
//30秒后打出 999
p.then(function(val){console.log(2)},function(){})

//============================================练习
new Promise(function(resolve,reject) {
  reject(5)
}).then(function(val) {
  return val * val
},function(reason) {
  return reason + 2
}).then(function(val) {
  console.log(val)     //7
},function(r) {
  console.log(r)
})
//===========================
p2 = p.then(null,f1)
//如果没有特定的函数,p成功的话，没有指定函数，那么p2就等于 p

new Promise((resolve,reject) => {
  setTimeout(() => resolve(5))
})
.then(f2,t3) //f2
.then(f3,f4)  //f3
.then(null,t6) //
.then(f7,f8)  //f7


//=====================================
new Promise(function(resolve) {
  
})
Promise.resolve2 = function(value){
  return new Promise(resolve =>
  })
}


p = Promise.race([p1,p2,p3,p4])
Promise.race2 = function(promises) {
  for (let a = 0;a < promises.length;a++) {

  }
}



//每个都成功，resolve出这个数组
//任何一个失败，以那个失败的原因失败
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  Promise.resolve(4)
])
.then(function(ary) {
  console.log(ary)
})

Promise.all2 = function(promises) {
  return new Promise(())
}




Promise.all2 = function(promises) {
  return new Promise((resolve, reject) => {
    var result = []
    var completed = 0
    var onResolved = val => {
      result[i] = val
      completed++
      if (completed === promises.length) {
        resolve(result)
      }
    }
    promises.forEach((p, i) => {
      p.then(onResolved, reject)
    })
  })
}


Promise.race2 = function(promises) {
  return new Promise((resolve, reject) => {
    for (var i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}


function get(url) {
  return new Promise((resolve,reject) => {
    
  })
}