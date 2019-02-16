//init 初始值
// reduce 三个参数 数组，操作函数，初始值
function reduce(ary,reducer,initVal) {
  var start = 0
  if (arguments.length == 2) { //传入两个参数时，默认数组第一项为默认值
    initVal = ary[0]
    start = 1
  }
  for(var i = start; i < ary.length;i++) {
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
  return max + curr
},0)

//课本代码，返回最早出生的人
ancestry.reduce((a,b) => {
  if (b.born < a.born) {
    return b
  } else {
    return a
  }})

//返回奇数数组 相当于实现了filter函数
[1,2,3,4,5,6,7].reduce((init,ele) => {
  if (ele % 2 == 1) {
   init.push(ele)     //不能直接写 return 因为push不返回数组
  }
  return result
},[])

//reduce实现map
[1,2,3,4,5].reduce((init,ele) => {
  init.push(ele * ele)
  return init
},[])
//简写
[1,2,3,4,5].reduce((init,ele) => {
  return init.push(ele * ele),init
},[])
//简写
[1,2,3,4,5].reduce((init,ele) => (init.push(ele * ele),init),[])


// map标准方法是什么
// reduce标准方法是什么
// 晕晕


// 抄代码 实现reduce
function reduce(ary,reducer,initialvalue) {
  var start = 0
  if (arguments.length == 2) {
    start = 1
    initialvalue = ary[0]
  }
  for (let i = start; i < ary.length;i++) {
    initialvalue = reducer(initialvalue,ary[i],i,ary)
  }   
  return initialvalue
}

function reduce(ary,reducer,initialvalue) {
  var start = 0
  if (arguments.length == 2) {
    start = 1
    initialvalue = ary[0]
  }
  for (let i = start;i < ary.length;i++) {
    initialvalue = reducer(initialvalue,ary[i],i,ary)
  }
  return initialvalue
}