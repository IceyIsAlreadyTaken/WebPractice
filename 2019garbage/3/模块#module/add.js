function modFunc(exports){
  exports.ret = function add(a,b) {
    return a + b
  }
  exports.ret.chunk = function add(a,b) {
    return a + b
  }
}
//如果只要特定函数，直接把export.ret改了就行了
//所以在exports里多包一层