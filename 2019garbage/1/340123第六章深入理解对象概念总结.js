// 面相对象：（英语：Object-oriented programming，缩写：OOP）
// 继承（Inheritance）：是指，在某种情况下，一个类会有“子类”。子类比原本的类（称为父类）要更加具体化。
// 封装（Encapsulation）：是将内部的复杂性与外部接口区分开来。
// 多态（Polymorphism）：是指由继承而产生的相关的不同的类，其对象对同一消息会做出不同的响应。
// 抽象（Abstraction）：是简化复杂的现实问题的途径，它可以为具体问题找到最恰当的类定义，并且可以在最恰当的继承级别解释问题。


// 方法：引入了函数值的属性就是方法。
// 将函数作为对象的方法调用时，会找到对象中对应的属性并直接调用。
// 在调用object.method()时，对象中的一个特殊变量this会指向当前方法所属的对象
//（箭头函数没有this,不能绑定也不能设定）
//（把箭头函数看成if语句，内部有this时，要找最外层函数，也就是window）

// 调用函数的方法
// function(a,b) 等价于 function.call(undefined, a, b)
// object.child.method(p1, p2) 等价于 obj.child.method.call(obj.child, p1, p2)
// function.call(context, a, b) 才是调用函数的正常方法


// 原型：每个对象除了拥有自己的属性外，几乎都包含一个原型，原型是另一个对象，是对象的一个属性来源。

// 坑点：原型的两个含义
// 1.是对象的属性来源
// 2.指 prototype 属性, 一个 对象的原型 就是其 原型对象的prototype属性

// 空对象的原型就是 Object.prototype （Object.prototype也是所有对象的最终原型）
    Object.prototype.__proto__  == null 
//Object.prototype也是所有对象的最终原型,所以它的原型就是null，形成了树状结构也就是原型链
    Object.getPrototypeOf({}) == Object.prototype
    ({}).__proto__ == Object.prototype
// Object.prototype 提供了一些可以在所有对象中使用的方法
// 许多对象并不直接将 Object.prototype 作为原型，而会使用另一个原型对象，用于提供对象自己的默认属性
// 函数继承自 Function.prototype
// 数组继承自 Array.prototype
    Object.__proto__ == Function.prototype
//
// 使用 Object.creat 方法来创建一个指定原型的对象          （创建对象

// 构造函数
// 调用函数之前添加一个关键字new表示调用其构造函数
// 构造函数中包含了指向新对象的变量 this,除非构造函数显示的返回了另一个对象的值，否则构造函数会返回这个新创建的对象
// 通过关键字 new 创建的对象称之为构造函数的实例
// 构造函数的名称一般以大写字母开头
// 对于构造函数来说（实际上，对所有函数使用），都会自动获得一个名为 prototype 的属性。在默认情况下，该属性是一个普通的派生自 Object.prototype的空对象。所有使用特定构造函数创建的对象都会将构造函数的prototype 属性作为其原型
// 如果构造函数返回的是原始值，那么这个返回值会被忽略，如果返回的是对象，就会覆盖构造的实例
//
//
//
//
//
//
//
//
// 属性分为'可枚举属性(enumerable)' 与'不可枚举属性(nonenumerable)'
// 我们创建并赋予对象的所有属性都是可枚举的。
// Object.prototype中的标准属性都不可枚举，因此这些标准属性不会出现在 for/in 循环中
// 可以使用Object.defineProperty函数定义自己的不可枚举属性,该函数允许我们在创建属性时控制属性类型
// hasOwnProperty该方法告知我们对象自身是否包含某个属性，而不会搜索其原型
//
//
//
//
//
//
//
//
