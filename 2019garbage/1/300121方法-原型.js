//this
var rabbit = {
  name:'dabai',
  speak:function() {
    console.log('hello,my name is' + this.name)
  }
}

//this 是一个特殊变量，是指向当前方法所属的对象
//this 不能赋值
//js中所有的值都可以理解为指向关系，不是所属关系

var dog = {
  name:'泰迪'
}
dog.speak = rabbit.speak  
//dog的speak属性指向了rabbit.speak属性
//rabbit 的speak属性指向了一个匿名函数
//dog
dog.speak()
//hello,my name is泰迪


function speak() {
  console.log('(speak函数) my name is' + this.name)
}
var elephant = {
  name:'🐘',
  speak:speak
}
var cat = {
  name:'😹',
  speak:speak
}
cat.speak
elephant.speak

speak.apply({name:' apply的name'},[1,2,3,4])
var sp = speak.bind({name:'bind绑定'},1)

//
var jiantou = {
  name:'jiantouhanshu',
  speak:() => {
    console.log(this.name) //箭头函数里的this要看成 包裹在if语句中（就是不把箭头函数看成函数）
    //这时候的this要从外部的函数找
    //外部函数就是全局函数了
  }
}

//原型
var empty = {}
empty.__proto__ 
//空对象的原型就是 Object.prototype 也是所有对象的最终原型
empty.__proto__.__proto__ //null
//父原型的原型就是 Null

empty.__proto__  === object.prototype
//object是一个函数

Object.prototype.__proto__
//null
Object.getPrototypeOf(Object.prototype)
//null

function f(){}
f.__proto__ === Function.prototype
[].__proto__ === Array.prototype
Function.prototype.__proto__ === Object.prototype