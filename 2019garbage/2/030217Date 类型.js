/**
 * 日期类型
 * 需要注意的是只能通过调用 Date 构造函数来实例化日期对象：以常规函数调用它（即不加 new 操作符）将会返回一个字符串，而不是一个日期对象。
 * 
 * 当Date作为构造函数调用并传入多个参数时，如果数值大于合理范围时（如月份为13或者分钟数为70），相邻的数值会被调整。
 * 
 * 当Date作为构造函数调用并传入多个参数时，所定义参数代表的是当地时间。
 * 
 * 库 Moment.js
 */
console.log(new Date())

var a = new Date()//
a.getMonth()//月份是从零开始表示的，非常坑


a.getTime() //时间戳，记录1970年到现在的毫秒
a.getDay() //获取星期几
a.getMonth() //获取月份
a.getTimezoneOffset() //时区偏移，以格林威治分割线为

//千年虫问题
// https://zh.wikipedia.org/wiki/2000%E5%B9%B4%E9%97%AE%E9%A2%98
//对于当前在世界上广泛用作服务器软件的Unix系统来讲，由于传统的Unix系统使用32位的整型数表示日期（这个32位数字表示从1970年1月1日起至所存储日期过去了多少秒），因此在2038年日期将会被卷回，这类似于两千年问题。时间将可能重新从1970年1月1日开始计算，这将可能引起世界范围的计算机故障。这被称为2038年问题。
//https://zh.wikipedia.org/wiki/2038%E5%B9%B4%E9%97%AE%E9%A2%98

Date.now() //当前时间戳

//书上121代码
function findDate(string) {
  var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/
  var match =  dateTime.exec(string)  //match 匹配
  return new Date(Number(match[3]),
                  Number(match[2]),
                  Number(match[1]))
}