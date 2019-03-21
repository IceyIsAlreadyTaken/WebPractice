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