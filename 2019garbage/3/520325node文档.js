//异步函数 通过callback返回的

//fs上的函数 以f开头的
// fxx 不带 f开头的
// 以f开头的 都是c语言 或者 C++ 语言的 binding
//都是封装
//f 开头的用的很少
// 接受的fd 文件描述符



// 不带f开头的

// process

// Buffer 不需要require 构造函数就在全局
var b = Buffer.alloc(8)
b
b.read
b.readUInt8(0) //无符号号整形
b.readUInt16BE(0)
b.readUInt16LE(0)  //编号为小的那一端为末尾
b.readInt16LE(0)