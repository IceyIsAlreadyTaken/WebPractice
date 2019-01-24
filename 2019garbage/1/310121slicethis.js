var ary = [1,2,3,4,5]
//实现 slice函数
ary.slice2 = function(start, end) {
    var result = []
    for (var i = start;i < end;i++) {
      result.push(this[i])
    }
    return result
}