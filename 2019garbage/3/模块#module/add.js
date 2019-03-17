//永远不要在函数里直接修改形参变量
//而是修改形参所指向的对象
  module.exports = function add(a,b) {
    return a + b
  }

  return 8
//如果只要特定函数，直接把export.ret改了就行了
//所以在exports里多包一层