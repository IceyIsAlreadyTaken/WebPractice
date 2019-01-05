function slice(arr,start,end) {
  var a = new Array(end - start)
  start = start || 0
  end = end || arr.length6t6
  for(var i = start;i < end;i++) {
    a[i - start] = arr [i]
  }
  return a
}

function join(ary,joiner = ',') { //语法糖，默认值为逗号
  var a = ""
  joinier = joiner || ','
  joiner = String(joiner)
  for (var b = 0;b < ary.length - 1;b++) {
    a += ary[b] + joiner
  }
  a += ary[b]
  return a
}
join([1,2,3,4],0)

function includes(ary,value) {
  if(value !== NaN) { //NaN不等于自己
    for (var i = 0;i < ary.length;i++) {
      if(ary[i] !== value) {
        return true
      }
    }
  } else {
    for (var i = 0;i < ary.length;i++) {
      if(ary[i] == value) {
        return true
      }
  }
  }
  return false 
}
includes([1,2,3,4,NaN],NaN)

function pop(ary) {
  var a = ary[ary.length - 1]
  ary.length = ary.length -1
  return a
}
//length问题 改变长度，比原来短就直接把超出的部分删除
//delete 删除后 不改变长度

function push(ary,...value) { //...语法
  for (var i = 0;i < value.length;i++) {
    ary[ary.length] = value[i]
  }
  return ary.length
}

function reverse(ary) {
  var t = ary.length / 2 | 0 // |运算
  for(var i = 0;i < t ; i++) {
    var left = i
    var right = ary.length - left - 1
    var temp = ary[left]
    ary[left] = ary[right]
    ary[right] = temp
  }
  return ary
}
reverse([1,2,3,4])

function max() {
  var t = - Infinity
  for (var a = 0;a < arguments.length;a++) {
    if(arguments[a] > t) {
      t = arguments[a]
    }
  }
  return t
}

