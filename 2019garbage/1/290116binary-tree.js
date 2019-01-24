//http://bigocheatsheet.com/
//Linked List 就是特殊化的 Tree
//Tree 就是特殊化的 Graph

//树的两边数据没有顺序的摆放的话，这个数据结构就比较低效
//因此科学家们发明了二叉搜索树，来提高数据的效率
//二叉查找树相比于其他数据结构的优势在于查找、插入的时间复杂度较低。为 O(log n)。

//二叉树的第i层至多拥有2^(i-1)个节点；
//深度为k的二叉树至多总共有 2^(k+1) - 1个节点（
//定义根节点所在深度k = 0

//左子树，右子树，根结点，叶子结点

//二叉搜索树（Binary Search Tree),也称二叉搜索树、有序二叉树(ordered binary tree)，排序二叉树(sorted binary tree),是指一棵空树（null)或者具有下列性质的二叉树：
//1.左子树 上所有结点的值均小于它的根结点的值（一定要整个左子树都要小于根结点）
//2.右子树 上所有结点的值均大于等于它的根节点的值（一定要整个右子树都要大于等于根结点）
//3.Recursively(递归)，左、右子树也分别满足二叉搜索树

//满二叉树：每一层节点都是满的，满足2^(i-1)
//完全二叉树：假如深度为h,从1~(h-1)层的节点都排满,第h层所有的结点都连续集中在最左边，这就是完全二叉树.
//平衡二叉树

//二叉树,结构递归，定义递归

//      n
//     / \
//   2n+1 2n+2

//根结点
var root = {
  val:null,
  left:null,
  right:null
}


//把根结点在rootPos位置的顺序储存的二叉树(数组)转换为一个链式二叉树（二叉链表）
//递归顺序是一直算左子树直到为null然后返回
function ary2tree(ary,rootPos = 0) {
  if (ary.lenght == 0) {
    return null
  }
  if (rootPos > ary.length - 1) {
    return null
  }
  if (ary[rootPos] === null) {
    return null
  }
  var node = {
    val:ary[rootPost],
    left:null,
    right:null
  }
  var leftRootPos = rootPos * 2 + 1
  var rightRootPos = rootPos * 2 + 2
  node.left = ary2tree(ary,leftRootPos)
  node.right = ary2tree(ary,rightRootPos)
  return node
}

//简化后
function ary2tree(ary,rootPos = 0) {
  if (ary.lenght == 0) {
    return null
  }
  if (rootPos > ary.length - 1) {
    return null
  }
  if (ary[rootPos] === null) {
    return null
  }
  return {
    val:ary[rootPos],
    left:ary2tree(ary,rootPos * 2 + 1),
    right:ary2tree(ary,rootPos * 2 + 2)
  }
}


//将二叉树root放入一个数组
//根结点放在rootPos的位置
var ary = []
function tree2ary(root, ary = [], rootPos = 0) {
  if (!root) {
    return null
  }
  ary[rootPos] = root.val
  tree2ary(root.left,ary,rootPos * 2 + 1)
  tree2ary(root.right,ary,rootPos * 2 + 2)
  return ary
}


//leetcode 将数组转换成树 ?
//队列方式
function ary2treeLC(ary) {
  if (ary.length == 0) {
    return null
  }
  var queue = []
  var root = {
    val:ary[0],
    left:null,
    right:null
  }
  queue.push(root)
  for(var val of ary) {
    if (val) {
      var node = {
        val:val,
        left:null,
        right:null
      }
    }
  }
}


//树的遍历
function reOrderTraverse(root,action = console.log) {
  if(root) {
    action(root.val)
    preOrderTraverse(root.left)
    preOrderTraverse(root.right)
  }
}


//Binary search tree
//将val插入BST中，并返回bst的根结点
function insertIntoBST(bst,val) {
  let bst = {
    val = val[0],
    left:null,
    right:null
  }
}


function mergeSort(ary) {

}

function quickSort(ary) {
  if(ary.length < 2) {
    return ary
    return ary.slice()
  }

}