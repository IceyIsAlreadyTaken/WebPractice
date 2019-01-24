function hasOwn(obj,action) {
  var hasOwn = Object.prototype.hasOwnProperty
  for(var prop in a) {
    if (hasOwn.call(a,prop)) {
      action(prop)
    }
  }
}


//返回一个以proto为原型的对象
function create(proto) {
  var a = Object.create(proto)
  return a
}

//实现assign函数
function assign(target,...sources) {
  for(var source of sources){
    for (let a in source) {
      target[a] = source[key]
    }
  }
  return target
}