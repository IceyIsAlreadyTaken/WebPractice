//
var ary = [2,3,4,5,7]
var sum = {}
for (let i = 0;i < ary.length;i++) {
  sum =(sum[ary[i]] = i,sum)
}
return sum

// reduce 三个参数 数组，操作函数，初始值

function reduce(ary,reducer,initVal) {
  for(var i = 0; i < ary.length;i++) {
    initVal = reducer(initVal,ary[i],i,ary)
  }
  return initVal
}
//current 当前值
reduce([1,2,3,4,5],(max,curr) => { //求最大数
  return max > curr ? max : curr
},-Infinity)

reduce([1,2,3,4,5],(max,curr) => { //求乘积
  return max * curr
},1)
  
reduce([1,2,3,4,5],(max,curr) => { //求和
  return max * curr
},0)

function filter(ary, test) {
  return ary.reduce((result, currItem, i, ary) => {
    if (test(currItem, i, ary)) {
      result.push(currItem)
    }
    return result
  }, [])
}

//使用 reduce 实现 map
???

// map标准方法是什么
// reduce标准方法是什么
// 晕晕