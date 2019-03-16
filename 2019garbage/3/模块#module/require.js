var cache = Object.create(null)
var fs = require('fs')

function readFile(path) {
  return fs.readFileSync(path)
}

function require2(path) {
  if (path in cache) {
    return cache[path]
  }
  var code = readFile(path)
  var moduleFunction = new Function('moudle,exports',code) //
  var module = {exports:{}}
  var modulReturn = moduleFunction(module,module.exports)

  if (moduleReturn !== undefined) {
    cache[path] = moduleReturn
    return moduleReturn
  } else {
    cache[path] = module.exports
    return module.exports
  }
  // var exports = {}
  // //var exports = {ret:{}}
  // moduleFunction(exports)
  // cache[path] = exports
  // return exports
  global.require2 = require2
}

//把只把require函数暴露给全局变量
var weekDay = require2('weekday.js')
var _ = require2('lodash.js')

//1.由模块直接返回对象
//console.log(weekDay,_)

//2.把传进去的对象加上对象
console.log(weekDay.weekDay.number,_.lodash.chunk)

//1.由模块函数返回对象
//2.更改传进去的对象





var exports = {}
function f(exports) {
  exports = {a:1,b:2} //function 内这个 exports 指向的变了，但是外边那个还是空对象
}
f(exports) 
console.log(exports) //{}
