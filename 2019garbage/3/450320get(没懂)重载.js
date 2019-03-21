window.getURLCallback = function(obj) {
  callbackMap[obj.url](obj.data)
}

var callbackMap = {}

function get(url, cb) {
  if (callbackMap[url]) {
    var prev = callbackMap[url]
    callbackMap[url] = function(...args){
      prev(...args)
      getURL(url)
      callbackMap[url] = cb
    }
  } else {
    getURL(url)
    callbackMap[url] = cb
  }
}





///////重载

Function.reload = function(typedFunctions) {
  return function f(...args) {
    for(var typedFunction of typedFunctions) {
      var matchType = (arg, idx) => {
        return arg.constructor == typedFunction[idx]
      }
      if (args.every(matchType)) {
        return typedFunction[typedFunction.length - 1](...args)
      }
    }
  }
}


var f = Function.reload([
  [Number, String, () => 1],
  [Object, Boolean, () => 2],
])



