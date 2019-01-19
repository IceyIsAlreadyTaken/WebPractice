//数组求和
var numbers = [1,2,3,4,5], sum = 0
//forEach实现
function forEach(array,action) {
    for (var i = 0; i < array.length;i++) {
      action(array[i])
    }
}
forEach(numbers,function(number) {
  sum += number;
})
console.log(sum)

//forEach 是数组的一个方法
numbers.forEach(function(number) {
  sum += number
})

//forEach 是数组的一个方法
numbers.forEach(function(number,xiabiao,shuzu) { //第一个参数是该数组操作的元素内容，第二个是元素的下表，第三个是该数组
  sum += number
  console.log(number,xiabiao,shuzu)
})

//使用高阶函数新建函数
// 新建一个与某个数比大小的函数
function greaterThan(n) {
  return function(m) {
    return m > n
  }
}
var greaterThan100 = greaterThan(100)
greaterThan100(99)
greaterThan100(20)
greaterThan100(180)



//求函数的导函数
function square(x) {
  return x * x
}
function a(f) {
  return function dao(x){
    var a = x + 0.000001
    var b = x - 0.000001
    return (f(a) - f(b)) / (a - b)
  }
}
square(3) //为9
var dao = a(square) // 返回的是求square的导函数
dao(3) //即为求在3处的导数 为6 



//高阶函数来修改其他函数
//为某个函数增加'噪音'
function noisy(f) {
  return function(arg) {
    console.log('要操作的数字为',arg)
    var caozuo = f(arg)
    console.log(arg,'的Boolean值为',caozuo)
    return val
  }
}



//高阶函数实现新的控制流
//从 0 到 times 的数字，如果为偶数的话，则打印出来
function unless(test,then) {    //除非 test 然后
  if(test) then()
}
function repeat(times,body) {
  for (var i = 0;i < times;i++) {
    body(i) //注意传入实参
  }
}
repeat(10,function(n) {
  unless(n % 2,function(n) {
    console.log(n,'是奇数')
  })
})

//https://wikimedia.org/api/rest_v1/media/math/render/svg/467cf813e1be327172fa6def9ed61afb54f37f19
//正弦函数 泰勒公式求近似值
//sin(x) = sigma(0,1000,f)
function factorial(n) { //n的阶乘  factorial 阶乘的
    if(n == 0) {
      return 1
    } else {
      return n * factorial(n-1)
    }
}
function sigma(start,end,f) {  //start到end相加f 的值
  var result = 0
  for (let a = start; a <= end;a++) {
    result += f(a)
  }
  return result
}
function sin(x) {
  function f(n) { //x未定义，放在外层的函数内才能访问
  return Math.pow(-1,n) * Math.pow(x,2 * n + 1) / factorial(2 * n + 1)
}
  return sigma(0,10,f)
}



//参数传递
function noisy(f) {
  return function(arg) {
    console.log('函数噪音')
    var val = f(arg)
    return val
  }
}

var con = noisy(console.log)
con('啊','你还能接受到嘛','啊之后的接收不到')

//参数传递的会产生一个问题，这个问题是不能接受可变参数个数的问题
//传递多个参数的时候，将会接收不到

var a = [1,2,3,4,5,6,7,8,9,10]
Math.max.apply(null,a)
//apply方法会把数组 a 的每一项传给max
//这个方法接受一个参数数组并使用这些参数并调用其所属的函数
//apply接受数组也接受类数组对象，如arguments
function noisy(f) {
  return function() {
    console.log('函数噪音')
    var val = f.apply(null,arguments)
    return val
  }
}
var con = noisy(console.log)
con('啊','你还能接受到嘛','多余的参数也能接受到了耶')

//用...展开运算符接受多个参数
function noisy(f) {
  return function(...arg) {
    console.log('函数噪音')
    var val = f(...arg)
    return val
  }
}
var con = noisy(console.log)
con('啊','你还能接受到嘛','多余的参数也能接受到了耶','这样也行？？')
//...展开运算符是ES6的新语法，用来替换ES6的apply方法
//...展开运算符 spread operator
//1.替换apply
var a = [1,2,3,4,5,6,7,8,9,10]
Math.max.apply(null,a)
Math.max(...a)

//2.合并数组
//可以理解为...和中括号抵消掉了
var a = [1,1,1,1,1]
var b = [6,6,7,8,9]
var c = [...a,0,0,0,...b]//[1, 1, 1, 1, 1, 0, 0, 0, 6, 6, 7, 8, 9]

//3.结构赋值
function jiegou(a,...b) {
  console.log(a,b)
}
jiegou(1,2,3,4,5)
//a = 1
//b = [2,3,4,5]
//用在函数形参里为剩余参数
