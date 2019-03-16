//立即执行函数 IIFE
(function() {
  function square(X) {
    return x * x
  }
  var hundred = 100
  console.log(square(hundred))
})()

//函数体外边的括号代表一个表达式
//在外添加括号是一种技巧，目的是把函数声明转化为函数表达式
//对于裸的一对括号只能是函数调用
//直接function开头的代表一个函数声明
//以前会用这种方式模拟块级作用域
//  或者给原型增加一个方法
//  现在严格禁止给原型增加方法
Array.prototype.isxxx = function(){}
//这种方式会把 isxxx变成可枚举属性  for in 会直接把这个枚举出来
//只有写 Polyfill的时候才能用这种方式 
//polyfill 在老浏览器实现新浏览器的功能


//例子 报错会报错在左括号的部分，因为这个是函数声明
function () {
  var a = 8
  console.log(a)
}

//函数表达式
//语句      有明确的开始和结束，语句没有返回结果
//函数声明




(function(){
  console.log(1)
}())