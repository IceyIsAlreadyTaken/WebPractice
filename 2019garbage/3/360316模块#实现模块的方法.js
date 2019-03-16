//用Function 构造函数来解释代码
//第一个参数包含参数名列表的字符串，参数之间以逗号分隔
//第二个参数是包含函数体的字符串

var plusOne = new Function("n","return n + 1")
//console.log(plusOne(4)) 


//结构方式也可以
var f = new Function("a,b,[c,d]","return a + b * c + d")
console.log(f(1,2,[3,4])) 
//总是在全局作用域运行











//eval 这种方法不方便

// function f(a,b,c,code) {
//   return eval(code)
// }
// f(1,2,3,'a + b * c')