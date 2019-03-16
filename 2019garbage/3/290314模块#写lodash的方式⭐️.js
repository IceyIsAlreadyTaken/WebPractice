//使用对象作为接口

//lodash的写法
//第一种写法， 返回一个对象，调用对象的属性，属性的值是
//好处是里边的函数可以相互调用
var foo = function(){

  function name (){
    return '你调用了name函数'
  }
  function baba (){
    return '你调用了baba函数'
  }

  return {
    name,
    baba:baba  //相当于 baba属性读取了baba变量
  }
}()


//第二种写法 这种写法太麻烦，且不容易看
var dayName = function() {
  var names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return {
    name:function (name) {
      return names[name]
    },
    num:function (num) {
      return num
    }
  }
}()



///第三种 声明一个对象，直接将这个对象返回

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


//第四种 从外边传一个对象进来

(function(exports) {
  var nemes = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  exports.name = function(number) {
    return names[number]
  }
  exports.number = function(name) {
    return names.indexOf(name)
  }
})(this.weekDay = {})




//避免全局作用域污染，构建一个模块叫做 require()\
//这样就和全局作用域完全脱离
//让程序的依赖变得显示