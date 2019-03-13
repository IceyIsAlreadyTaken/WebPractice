/**
 * 原型
 * 每个对象除了拥有自己的属性外，几乎都包含一个原型
 * 原型是另一个对象，是对象的一个属性来源
 * 当开发人员访问一个对象不包含的属性时，就会从对象的原型中搜索属性
 * 接着是原型的原型，依次类推
 * 
 * 空对象的原型是 Object.prototype，他是所有对象中原型的福原型
 * 
 */





/**
 * 生成实例的传统方法是通过构造函数
 */


 function Point(x,y) {
   this.x = x;
   this.y = y;
 }

 Point.prototype.toString = function() {
   return '(' + this.x + ',' + this.y + ')'
 }

 var  p = new Point(1,2)


 /**
  * ES6 提供了跟接近传统语言的写法，引入了class(类)的概念
  * 
  * 定义类方法的时候其那边不需要加上function关键字，直接把函
  * *数定义放进去就可以了，方法之间不需要逗号分隔，加了会报错
  */

  class Point {
    constructor(x,y) {
      this.x = x;
      this.y = y;
    }

    toString() {
      return '(' + this.x + ',' + this.y + ')'
    }

    static test() { //这个方法是 Point 自己的方法
      return 'test'
    }
  }

  typeof Point // 'function'
  Point === Point.prototype.constructor // 'true
//类内部所有定义的方法，都是不可枚举的 （non-enumerable)
//使用 extends 创建子类
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes#%E4%BD%BF%E7%94%A8_extends_%E5%88%9B%E5%BB%BA%E5%AD%90%E7%B1%BB


/////////////////////class 效果
class A {}
class B extends A{}
B.prototype.__proto__ === A.prototype //true
var b = new B()
// b 在 B 的prototype上找不到方法时，就去 A上边找
B.__proto__ === A  //true 

// 父类的静态方法，子类也可以找到
/////////////////// 用function声明的话上述的方式就为false
function C(){}
function D(){}
D.prototype.__proto__ = C.prototype
D.__proto__ == C //false



//////////////////////////////////////////
// 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

// class Foo {
// }

// Foo.prop = 1;
// Foo.prop // 1
// 上面的写法为Foo类定义了一个静态属性prop。

// 目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。现在有一个提案提供了类的静态属性，写法是在实例属性法的前面，加上static关键字。