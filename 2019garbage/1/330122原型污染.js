function hasOwn(obj,action) {
  var hasOwn = Object.prototype.hasOwnProperty
  for(var prop in a) {
    if (hasOwn.call(a,prop)) {
      action(prop)
    }
  }
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