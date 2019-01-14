//冒泡排序
function bubbleSort(ary) {

}
//选择排序
function selectSort(ary) {
  let minIndex = -Infinity
  for (let a = 0;a < ary.length - 1;a++) {
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