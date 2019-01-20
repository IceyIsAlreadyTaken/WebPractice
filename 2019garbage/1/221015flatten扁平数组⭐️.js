//实现一次展开flatten
function flatten(ary) {
  var result = []
  for (var item of ary) {
    if (Array.isArray(item)) {
      for (var val of item) {
        result.push(val)
      }
    } else {
      result.push(item)
    }
  }
}

//concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
function flatten(ary) {
  return [].concat(...ary)
}

//全部展平 递归写法⭐️
function flattenDeep(ary) {
  var result = []
  for (var item of ary) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item))
    } else { 
      result.push(item)
    }
  }
  return result
}

//全部展平 递归reduce写法
function flattenDeep(ary) {
  return ary.reduce((result,item) => {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item))
    } else {
      result.push(item)
    }
    return result
  },[])
}

//全部展平 递归reduce写法 简写
var flattenDeep = ary => ary.reduce((result,item) => (Array.isArray(item) ? result.push(...flattenDeep(item)) : result.push(item),result),[])

//展平指定次数
function flattenDeepth(ary,deepth = 1) {
  if (deepth == 0) {
    return ary.slice()
  }
  return ary.reduce((result,item) => {
    if (Array.isArray(item)) {
      result.push(...flattenDeepth(item,deepth - 1))
    } else {
      result.push(item)
    }
    return result
  },[])
}

function flattenDeep(ary) {
  return flattenDepth(ary, Infinity)
}

