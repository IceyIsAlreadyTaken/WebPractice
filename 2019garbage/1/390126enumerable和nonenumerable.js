/**
 * enumerable     可枚举属性 （一no 默 ruo bou)
 * nonenumerable  不可枚举属性
 * 
 * 我们创建并赋予对象的所有属性都是可枚举的 enumerable
 * 而 Object.prototype 中的标准属性都是不可枚举的，因此这些属性都不会出现在for in 循环中
 * 
 * 我们可以使用 Object.difineProperty 函数定义自己的不可枚举属性 
 * 该函数允许我们在创建属性时控制属性类型
 * 
 * 用 in 来判断属性是否在该对象的中，或者对象原型，及其原型的原型的属性中，只要存在，无论是否为 枚举类型，都会返回true
 * 
 * 而 for (in) 只遍历 可枚举属性
 * 
 * 
 */

Object.defineProperty(a,'d',{
	enumerable:false, //默认为false
  writable:false,    //可写，默认为false
  configurable:false, //可配置，默认为false
	value:'hahahha'
})

//只要在原型链上是可枚举属性，则都可以枚举出来
//object.prototype 除外
var a = {
  apple:'apple',
  orange:'orange',
  pear:'pear'
}
var b = Object.create(a)
b.cat = 'cat'
var c = Object.create(b)
c.elephant='elephant'
for (let i in c) {
 if(Object.prototype.hasOwnProperty.call(c,i)){
    console.log(i) 
 } 
}


//遍历一个对象 查看它的自有属性
var hasOwn = Object.prototype.hasOwnProperty
for (var prop in a) {
  if (hasOwn.call(a,prop)) {
    console.log(prop)
  }
}
