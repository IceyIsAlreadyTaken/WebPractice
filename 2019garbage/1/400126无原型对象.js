var a = Object.create(null)
//以null为原型  就是无原型

//返回一个以 proto 为原型的对象
function creat(proto) {
  function Object(){} //局部变量 可以再次声明，非关键字
  Object.prototype = proto
  return new Object
}


//polyfill
//在老浏览器中把新功能完全实现
//shim

//Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
function assign(target,...sources) {
  for (var source of source) {
    for (var key in source) {
      target[key] =  source[key]
    }
  }
  return target
}