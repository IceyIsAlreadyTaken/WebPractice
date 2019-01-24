function f() {
  this.a = 1
  this.b = 2
}
f() //此时 this 指向 window 给window增加了两个属性

var x = new f() //

function f() {
  this.a = 11
  this.b = 22
  return 99
}
var x = new f() //除非return 返回的是一个对象的值


function f() {
  this.a = 11
  this.b = 22
  return [1,2,3,4]
}
var x = new f() //除非return 返回的是一个对象的值
[1,2,3,4]


function Rabbit(type) {
  this.type = type;
}
var killerRabbit = new Rabbit('killer') //实例
var fatRabbit = new Rabbit('fat')
console.log(killerRabbit.type)

fatRabbit.__proto__ === Rabbit.prototype
//为所有使用 Rabbit 构造函数创建的对象添加speak方法
Rabbit.prototype.speak = function(x){
  console.log(this.type + 'speak' + x)
}

Object.getPrototypeOf(Rabbit) === Function.prototype//true
Rabbit.__proto__ === Function.prototype//true

//展开function.prototype属性
console.dir(Function.prototype) 

Rabbit.toString()
"function Rabbit(type) {  this.type = type;}"


Rabbit.toString = Object.prototype.toString
//ƒ toString() { [native code] }
Rabbit.toString()
//"[object Function]"

Rabbit.__proto__.__proto__.toString.call(Rabbit)
//"[object Function]"

// 一般使用 直接量 来新建对象

var a ={}
a.__proto__.toString()
//"[object Object]"
a.__proto__.toString.call(function(){})
//"[object Function]"
a.__proto__.toString.call(2)
//"[object Number]"
a.__proto__.toString.call(true)
//"[object Boolean]"
a.__proto__.toString.call(null)
//"[object Null]"
a.__proto__.toString.call(undefined)
//"[object Undefined]"

//数字的toString是转换进制
//数组的toString是转换成字符串
//对象的toString是转换成[object 这个对象的类型]
//布尔的toString是转成字符串


//类型判断
//自己实现的函数无法判断类型
function isNumber(val) {
  return Object.prototype.toString.call(val) == '[object Number]'
}

function isArray(val) {
  return Object.prototype.toString.call(val) == '[object Array]'
}

function isBoolean(val) {
  return Object.prototype.toString.call(val) == '[object Boolean]'
}

function isString(val) {
  return Object.prototype.toString.call(val) == '[object String]'
}

function isObject(val) {
  return Object.prototype.toString.call(val) == '[object Object]'
}

function isFunction(val) {
  return Object.prototype.toString.call(val) == '[object Function]'
}

//对于原始类型
//使用构造函数声明的话会变成对象
var a = 1
typeof a //"number"
a = new Number(1)
typeof a //"object"

var a = '123'
typeof a //"string"
a = new Number(1)
typeof a //"object"

a = true
typeof a //"boolean"
a = new Boolean(true)
typeof a //"object"