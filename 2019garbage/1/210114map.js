function map(ary,mapper) {
  var result = []
  for (let a = 0;a < ary.length;a++) {
    result.push(mapper(ary[i],i,ary))
  }
  return result
}