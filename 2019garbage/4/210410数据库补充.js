// 事务 transaction  交易
// 一手交钱，一手交货

// 锁 为了防止同时操作数据库同一份数据
// 要在处理时将表锁起来，处理后再解锁



// 主数据库，从数据库   主从数据库

// 缓存


// 数据库脱敏 
// DBA 数据库管理员


//对密码做 md5
//数据加盐       md5(md5(pw)+md5(salt))


//数据库表的设计
//范式 用来描述数据库的设计


//========================================
//把表当做类
//把表的一个行数据当做一个实例
//ORM Object Realitional Model 对象关系模型

var user = User.find({id:55})
var zs = User.create({
  name:'zs',
  password:'12345',
  email:'zs@gmail.com,'
})
user.set('password','34567')
user.save()

//bookshelf.js
//sequelize.js      js中的orm封装
//=======================================


//LeanCloud