//Array.forEach函数实现
function forEach(array,action) {
  for (let a = 0;a < array.length;a++) {
    action(array[a])
  }
}

//箭头函数实现一遍
let forEach = (array,action) => {
  for (let a = 0;a < array.length;a++) {
    action(array[a])
  }
}


var a = [-1,-2,-3,-4,-5,-6]
a.forEach(console.log)
a.forEach(alert)
//写函数把每个元素的绝对值打印出来
a.forEach(function(i) {
  console.log(Math.abs(i))
})
a.forEach(i => console.log(Math.abs(i)))

a.forEach((currentValue,index,array) => console.log(currentValue,index,array))
//等同于
a.forEach(console.log)

//array.forEach(callback(currentValue, index, array){
////do something
//}, this)

// currentValue
// 数组中正在处理的当前元素。
// index(可选)
// 数组中正在处理的当前元素的索引。
// array(可选)
// forEach()方法正在操作的数组。