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