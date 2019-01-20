//every 实现
function every(ary,test) {
  for (let i = 0; i < ary.length;i++) {
    if (!test(ary[i],i,ary)) {
      return false
    }
  }
  return true
}

//some实现
function some(ary,test) {
  for (let i = 0; i < ary.length;i++) {
    if (test(ary[i],i,ary)) {
      return true
    }
  }
  return false
}

//摩根公式
// 非（p 且 q）等价于（非 p）或（非 q）
// 非（p 或 q）等价于（非 p）且（非 q)

//every 实现 some
function some(ary, test) {
  return !every(ary, function(...args) {
    return !test(...args)
  })
}

//some 实现 every
function every(ary, test) {
  return !some(ary, (...args) => !test(...args))
}