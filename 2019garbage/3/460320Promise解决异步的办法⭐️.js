//对所有异步操作的封装

//Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。

//一个 Promise有以下几种状态:
//pending: 初始状态，既不是成功，也不是失败状态。
//fulfilled: 意味着操作成功完成。
//rejected: 意味着操作失败。
//函数一般叫executor 执行器
//当异步任务顺利完成且返回结果值时，会调用 resolve 函数；返回一个有值的成功状态的promise
//而当异步任务失败且返回失败原因（通常是一个错误对象）时，会调用reject 函数。
//then
//成功状态的promise调取then，会把值传给这个then地第一个函数，正常返回值的话视为成功
//,并将返回值变成一个含有返回值的成功状态的promise
// 如果是throw的话则视为失败，并返回一个失败状态的promise



var p = new Promise(function executor(resolve,reject){  //this没有明确设定，设置成箭头函数也可以
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

  setTimeout(() => resolve(999),10000)
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
})
.then(function(val) {
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

Promise.resolve(value) 
//创建一个以 val为值的成功的promise 对象
Promise.reject(reason) 
//创建一个以 reason 为原因的失败的promise对象

//实现resolve函数
Promise.resolve2 = function(value){
  return new Promise(resolve => {
    resolve(value)
  })
}
//实现 reject函数
Promise.reject2 = function(value){
  return new Promise(reject => {
    reject(value)
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


//=============================================

p2 = Promise.resolve(p)
p3 = Promise.reject(p)

//=============================================
//每个都成功，resolve出这个数组
//任何一个失败，以那个失败的原因失败
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
    Promise.resolve(4)
  ])
  .then(function(ary){
  console.log(ary)
})

Promise.all2 = function(promises) {
  return new Promise((resolve, reject) => {
    var result = []
    var completed = 0
    promises.forEach((p, i) => {
      p.then(val => {
        result[i] = val
        completed++
        if (completed === promises.length) {
          resolve(result)
        }
      }, reject)

    })
  })
}

//======================================
//Promise.race(iterable)
//当iterable参数里的任意一个子promise被成功或失败后，父promise马上也会用子promise的成功返回值或失败详情作为参数调用父promise绑定的相应句柄，并返回该promise对象。
Promise.race2 = function(promises) {
  return new Promise((resolve, reject) => {
    for (var i = 0; i < promises.length; i++) {
      promises[i].then(resolve,reject) 
    }
  })
}

//=============================================
// 真正使用Promise是把它封装起来使用，而不是裸着使用
//map封装
map(['fil1.text','file2'],fs.readFile,cb)

fs.readFile(name,function(err,data) {

})

function readFilePromise(filename) {
  return new Promise((resolve,reject) => {
    fs.readFile(filename,function(err,data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

Promise.all(filenames.map(readFilePromise)).then(filesContent => {

},reason => {
  
})
//===============================================
// get
function get(url) {
  return new Promise((resolve,reject) => {

    var xhr = new XMLHttpRequest()
    xhr.open('get',url)
    xhr.addEventListener('load',() => {
      resolve(xhr.responseText)
    })
    xhr.addEventListener('error',e => {
      reject(e)
    })
    xhr.send()

  })
}
//请求 url将拿到的 JSON内容返回
function getJSON(url) {
  return get(url).then(JSON.parse(data))

  // return get(url).then(data => {
  //   return JSON.parse(data)
  // })
} 

//链式执行
Promise.resolve()
.then(() => {
  return task1()
})
.then(() => {
  return task2()
})


var tasks = [f1,f2,f3]

var p = Promise.resolve()
for (var task of tasks) {
  p = p.then(() => task())
}

//===============url串行
var p = Promise.resolve()
for (var url of urls) {
  p = p.then(() => {
    return get(url)
  })
}

urls.reduce((p,url) => {
  return p.then(() => get(url))
},Promise.resolve())



///=====================promise 标准
Promise /A+
        B 
ES6 Promise

///=========================
p = Promise.resolve(5)
p.
then(null,f2)
.catch(f2) //只想给then传第二个参数的时候可以写成catch //.then(null,f2)
.then(f3)


.finally()


//==
//promise相关文章
https://developers.google.com/web/fundamentals/primers/promises
【链接】Wehaveaproblemwithpromises
https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html