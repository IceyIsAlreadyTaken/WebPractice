//冒泡排序
//时间复杂度 O(n^2)
function bubbleSort(ary) {
  for (let a = ary.length - 1;a >= 0;a--) {
    var swaped = false //记录是否交换过
    for (let b = 0;b < a;b++) {
      if (ary[b] > ary[b+1]) {
        ary[b] = ary[b] + ary[b+1]
        ary[b+1] = ary[b] - ary[b+1]
        ary[b] = ary[b] - ary[b+1]
        swaped = true
      }
    }
    if (!swaped) {
      return ary //如果一次都没有交换过则说明这个次序已经是从小到大的
    }
  }
  return ary
}
//选择排序
//算法复杂度 O(n^2)
function selectSort(ary) {
  for (let a = 0;a < ary.length - 1;a++) {
    let minIndex = a
    for (let b = a + 1;b < ary.length;b++) {
      if(ary[b] < ary[minIndex]){
        minIndex = b
      }
    }
    if(minIndex !== a) {
      ary[a] = ary[a] + ary[minIndex]
      ary[minIndex] = ary[a] - ary[minIndex]
      ary[a] = ary[a] - ary[minIndex]
    }
  }
  return ary
}