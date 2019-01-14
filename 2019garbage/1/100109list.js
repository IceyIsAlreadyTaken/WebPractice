//node 节点
//tail 尾节点
//head 头结点
//previous 前节点
//recursive 递归
//string.slice

//数组转链表
//将节点储存到数组中，然后串起来成链表
function array2list(ary) {
  if (ary.length == 0) {
    return null
  }
  let nodes = []
  for (let a = 0;a < ary.length;a++) {
    let list = {
      value: ary[a],
      next:null
    }
    nodes.push(list)
  }
  for (let a = 0;a < nodes.length - 1;a++) {
    nodes[a].next = nodes[i + 1]
  }
  return nodes[0]
}

//数组转链表函数 算法最佳实现 时间O(n) 空间为O(1)
//节点连接节点
function arrayToList2(ary) {
  if (ary.length == 0) {
    return null
  }
  var head = {   //声明头节点
    value:ary[0],
    next:null
  }
  var pre = head //声明前节点
  for(var i = 1;i < ary.length;i++) {
    var node = { //新建后节点
      value:ary[i], 
      next:null
    }
    pre.next = node //前一个节点指向后一个节点
    pre = node //让后节点变成前节点
  }
  return head
}

//递归实现 数组转链表 
//空间复杂度 O(n^2) 时间复杂度为 O（n^2)
//保持调用栈要用的空间为
function arrayTolistRecursive(ary) {
  if (ary.length == 0) {
    return null
  }
  var head = {
    value:ary[0],
    next:null
  }
  var tail = ary.slice(1) //slice 时间复杂度为O(n) 
  //递归后的空间复杂度为 (n-1) + (n-2) + (n-3) + … + 1  O(n^2) 
  //递归 每次调用栈使用的空间为 2 总为 n  
  var tailHead = arrayTolistRecursive(tail)
  head.next = tailHead
  return head
}

//递归实现数组转链表 优化空间后 时间复杂度空间复杂度都为 O(n)
//返回转换后的头节点
function arrayTolistRecusive(ary,start = 0) {
  if (ary.length == start) {
    return null
  }
  var head = {
    value:ary[start],
    next:null
  }
  var tailHead = arrayTolistRecusive(ary,start+1)
  head.next = tailHead
  return head
}



//链表转数组
function listToArray(head) {
  let ary = []
  while (head) {
    ary.push(head.value)
    head = head.next
  }
  return ary
}

//链表转数组   递归
var ary = []
function listToArrayRecursive(head) {
  if (head == null) {
    return []
  }
  var firstValue = head.value
  var tail = head.next
  var tailArray = listToArrayRecursive(tail)
  tailArray.unshift(firstValue)
  return tailArray
}

//push
function push(ary,val) {
  ary[ary.length] = val
}
// unshit 函数运行时间为 n
function unshift(ary,val) {
  for (let a = ary.length;a > 0;a--) {
    ary[a] = ary[a - 1]
  }
  ary[0] = val
}

//工具函数prepend
//接受一个元素和一个链表，把元素添加到链表的头部，返回新链表
function prepend(val,head) {
  return list = {
    value:val,
    next:head
  }
}

//在链表的末尾添加节点
function append(val,head) {
  let newNode = {value:val,next:null}
  if (!head) {
    return newNode
  }
  let newH = head
  while (newH.next != null) {
    newH = newH.next
  }
  newH.next = newNode
  return head
}

//函数nth 给一个链表 返回第n个链表的值
function nth(head,n) {
  if (!head) {
    return undefined
  }
  let p = head
  let c = 0
  while(p) {
    if (c == n) {
      return p.value
    }
    c++
    p = p.next
  }
  return undefined
}