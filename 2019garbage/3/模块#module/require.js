(function(){
  var cache = Object.create(null)
  var fs = require('fs')

  function readFile(path) {
    return fs.readFileSync(path)
  }

  //浏览器端的读取文件
  function readFile(path) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET",path,false)
    xhr.send()
    return xhr.responseText
  }

  function require2(path) {
    if (path in cache) {
      return cache[path].exports
    }
    var code = readFile(path) //拿到模块的代码
    var moduleFunction = new Function('module,exports',code) //把代码包在moduleFunction中
    //如果要导出多个东西 就在代码里直接修改exports
    //如果要导出一个东西 在代码里直接把module.exports覆盖掉
    //永远不要在函数里直接修改形参变量，而是修改形参所指向的对象
    var module = {exports:{}} //
    cache[path] = module  //防止循环依赖
    var moduleReturn = moduleFunction(module,module.exports) //暴露给全局作用域的接口

    if (moduleReturn !== undefined) {
      cache[path] = moduleReturn
      return moduleReturn
    } else {
      cache[path] = module
      return module.exports
    }
  }
  this.require2 = require2
}())
debugger;
//把只把require函数暴露给全局变量
var week = require2('weekday.js')
var _ = require2('lodash.js')
var add = require2('add.js')
//1.由模块直接返回对象
//console.log(weekDay,_)

//2.把传进去的对象加上对象
console.log(week)

//1.由模块函数返回对象
//2.更改传进去的对象





var exports = {}
function f(exports) {
  exports = {a:1,b:2} //function 内这个 exports 指向的变了，但是外边那个还是空对象
}
f(exports) 
console.log(exports) //{}
