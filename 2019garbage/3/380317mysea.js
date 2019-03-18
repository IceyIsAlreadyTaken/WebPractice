//webpack原理
//打包格式是node commonJS格式
//先对入口文件进行静态分析，得到所有依赖，把这些依赖保存起来
//能够通过模块名反查出模块代码,之后打包成一个文件
//之后require从打包出来cache文件查询模块名和模块代码
//然后 构造模块函数执行模块函数 返回模块保存对象


(function(){
  var seajs = {}
  window.seajs
  seajs.use = function(path) {
    getModule(paht,function(){
      require(path)
    })
  }

  var cache = Object.create(null)
  var modCache = Object.creat(null)

  /**
   * 
   */
  function getModule(path,done) {
    var script = document.createElement('script')
    script.src = path
    document.body.appendChild(script)
    script.onload = function() {
      cache[path] = modFun
      var modFunSouce = modFun.toString()
      var requireCalls = modFunSouce.match(/require\s*\(\s*(['"])[ \-_\w]+\1\)/g)
      
      if(requireCalls) {
        var deps = requireCalls.map(requireCall => {
          return requireCall.match(/require\s*\(\s*(['"])([ \-_\w]+)\1\)/g)[2]
        })

        var loaded = 0
        deps.forEach(dep => {
          getModule(dep,function(){
            loaded++
            if(loaded == deps.length) {
              done()
            }
          })
        })
      } else {
        done()
      }
    }
  }

  var modFun
  this.require = function(){
    modFun = moduleFunction
  }

  function require(path){
    if (modCache[path]) {
      return modCache[path].exports
    }
    var moduleFunction = cache[path]

    var module = {exports:{}}

    modCache[path] = module

    moduleFunction(require,module.exports,module)

    return module.exports
  }

  this.require = require
})