function get(value) {
  console.log('开始请求',value)
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log(value,'请求结束')
      resolve(value)
    }, 3000 + Math.random() * 1000)
  })
}

function * g() {  //从形式上看 异步的代码被表示成同步的
  var five = yield get(5)
  try {
    var seven = yield Promise.reject(7)
    console.log(seven)
  } catch(e) {
    seven = e
  }
  var eleven = yield get(11)
  return (five + seven + eleven)
}

//传递给next()的值将被视为暂停生成器的最后一个yield表达式的结果。
//你可以通过调用其throw()方法强制生成器抛出异常，并传递应该抛出的异常值。这个异常将从当前挂起的生成器的上下文中抛出，就好像当前挂起的yield是一个throwvalue语句。

var iter = g()
var generated = iter.next() //返回一个对象value 为promise
// {
//   value:promise<5>,
//   done:false,
// }

generated.value.then(function(value){
  generated = iter.next(value)
  generated.value.then(function(value) {
    generated = iter.next(value)
    generated.value.then(function(value) {
      generated = iter.next(value)
    })
  })
})

////把高度相似的代码抽取出来
run(g).then(function(num){
  console.log(num)
})


function run(g) {
  return new Promise((resolve,reject) => {
    var iter = g()
    var generated = iter.next()
  
    start()
  
    function start(){
      if (!generated.done) {
        generated.value.then(value => {
          generated = iter.next(value)
          start()
        },reason => {
          generated = iter.throw(reason)
          start()
        })
      } else {
        resolve(generated.value)
      }
    }
  })
}


//=========================================================
async function foo(){
  var a = await get(55)
  return 8
}

foo().then(function(){

},function(){

})  //返回一个promise

async function x(){
  await foo()
}

///===========================
await fetch('https://xieranmaya.github.io/images/cats/cats/json').then(it => it.json())
//response 对象？？？
