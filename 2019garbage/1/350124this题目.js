//1.写出以下代码的输出结构
var leng = 1
function fn(){
  console.log(this.leng)
}
var obj = {
  leng : 2,
  method1:function(fn) {
    fn();//输出  此时this为 window 所以 输出 2
    fn.call(this);//输出 此时的this是 外层函数的this 指向了obj 所以输出 2
    arguments[0]();//输出 arguments[0] -> arguments.fn this指向arguments 所以 this.leng为 undefined
    //
  },
  method2:function(){
    doucument.addEventListener('click',evt => this.method3(evt.type),false);
  },
  method3:function(type){
    console.log(type +':'+this.leng);
  }
}
obj.method1(fn);
obj.method2(fn);//点击页面后输出 2

//2
var length = 10;
function fn(){
  console.log(this.length);
}

var obj = {
  length:5,
  method:function(fn){
    fn(); //10  window
    arguments[0](); //arguments.fn() 2
  }
}

obj.method(fn,1)


//3
1 in [1,2,4] //这个1表示的是下标 true
1 in [1] // false

1 in {1:1} // true 

//4
a = []
!a //false
a == false //true 调了 a的toString函数 空数组的 tostring 属性是 '' 空字符串     空字符串为falss
所有的对象判断真假都是真
a === false //直接看实体 [] ! =false


//4 写出程序结果
console.log(Function instanceof Object) //函数是对象，所以函数的构造函数是Object  
//原始类型是假 所有对象类型都是真
console.log(Object instanceof Function) //鸡生蛋蛋生鸡的感觉
console.log(Function instanceof Function) //函数的构造函数也是函数
console.log(Object instanceof Object)
console.log(null instanceof Object) 
console.log(typeof null)
//在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"。（reference）
console.log(typeof undefined) // undefined



//5
var obj = {
  birth:1990,
  getAge: function() {
      var b = this.birth; //1990
      var fn = function() {
        return new Date().getFullYear() - this.birth //window
      };
      return fn();
  }
}
obj.getAge()  //NaN


//6
function foo() {
	console.log( this.a );
}
var obj2 = {
	a: 42,
	foo: foo
};
var obj1 = {
	a: 2,
	obj2: obj2 //{a: 42,	foo: foo}
};
obj1.obj2.foo(); //42


//7
function foo(){
  console.log(this.a)
}

var obj = {
  a:2,
  foo:foo
}
var bar = obj.foo;
var a = 'oops,global';
bar(); // oops,global

//8
function foo(something) {
    console.log(this.a,something);
    return this.a + something
}
var obj = {
  a:2
}

var bar = function() {
  return foo.apply(obj,arguments);
}

var b = bar(3) //2,3   
console.log(b) //5

//9
[1,2,3,4,5].forEach(function(val,idx) {
  console.log(this) //window
})

Object.prototype.forEach2 = function (action) {
  for(var i = 0;i < this.length;i++) {
    action(this[i],i,this)
  }
}

//10
var obj = {
  val:3,
  foo:function(){
    return this.val
  }
}
[1,2,3].map(obj.foo) //打印出3个undefined
//map用形参接受的 foo函数，没有设置this，所以this是window

//11
var obj = {
  a: 1,
  foo: function() {
    console.log(this.a)
  }
}
function run(f) {
  f()
}
run(obj.foo) //undefined
run(obj.foo.bind(obj)) 