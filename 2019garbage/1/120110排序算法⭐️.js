//冒泡排序 最优写法，无法再优化写法
//冒泡排序算法的运作如下：
// 1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。
// 2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
// 3.针对所有的元素重复以上的步骤，除了最后一个。
// 4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
//时间复杂度 O(n^2)
//空间复杂度 O(1)
function bubbleSort(ary) {
  for (let a = ary.length - 1;a >= 0;a--) { //最后一位不扫描
    var swap = false //记录是否交换过
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
//选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理如下。首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕
//算法复杂度 O(n^2)
function selectSort(ary) {
  for (let a = 0;a < ary.length - 1;a++) { //最后两个元素比出比较小的那个即可
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

function mergeSort(ary) {

}

function quickSort(ary) {
  if(ary.length < 2) {
    return ary
    return ary.slice()
  }
}



// 排序算法的稳定性：
//    指排序前后，相同元素的相对位置是否发生变化
//    如果发生变化，则称此排序算法为不稳定的排序算法
//    如果不发生变化，则称此排序算法为稳定的排序算法

// 冒泡排序：稳定（可以写成不稳定）
// 选择排序：不稳定
// bst/插入排序：稳定
// 归并排序：稳定（可以写成不稳定）
// 快速排序：不稳定