var foo = function(){

  function name (){
    return '你调用了name函数'
  }
  function baba (){
    return '你调用了baba函数'
  }

  return {
    name,
    baba:baba
  }
}()



///另一种写法

var foo = function(){
  var exports = {}
  exports.name = function name(){
    return '你调用了name函数'
  }
  exports.baba = function baba (){
    return '你调用了baba函数'
    exports.name()
  }

  return exports
}()


//语句没有返回结果