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

//二叉搜索树（Binary Search Tree(BST),也称二叉搜索树、有序二叉树(ordered binary tree)，排序二叉树(sorted binary tree),是指一棵空树（null)或者具有下列性质的二叉树：
//1.左子树 上所有结点的值均小于它的根结点的值（一定要整个左子树都要小于根结点）
//2.右子树 上所有结点的值均大于等于它的根节点的值（一定要整个右子树都要大于等于根结点）
//3.Recursively(递归)，左、右子树也分别满足二叉搜索树

//满二叉树：每一层节点都是满的，满足2^(i-1)
//完全二叉树：假如深度为h,从1~(h-1)层的节点都排满,第h层所有的结点都连续集中在最左边，这就是完全二叉树.
//平衡二叉树:平衡二叉搜索树（英语：Balanced Binary Tree）是一种结构平衡的二叉搜索树，即叶节点高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。它能在O(log n)内完成插入、查找和删除操作，最早被发明的平衡二叉搜索树为AVL树。

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
function ary2tree(ary,rootPos = 0) { //默认树根为0
  if (ary.length == 0) {
    return null
  }
  if (rootPos > ary.length - 1) {
    return null
  }
  if (ary[rootPos] === null) {    //如果根结点为 Null 返回 null
    return null
  }
  var node = {
    val:ary[rootPos],
    left:null,
    right:null
  }
  var leftRootPos = rootPos * 2 + 1
  var rightRootPos = rootPos * 2 + 2
  node.left = ary2tree(ary,leftRootPos)
  node.right = ary2tree(ary,rightRootPos)
  return node
}

//简化版本
function ary2tree(ary,rootPos = 0) {
  if (ary.length == 0) {
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


//leetcode 将数组转换成树 (用一个额外数组来保存非空节点)
//方法一
function ary2treeLC(ary) {
  if (ary.length == 0) {
    return null
  }
  var rootNode = {  //声明根结点
    val:ary[0],
    left:null,
    right:null
  }
  var queue = [rootNode]
  var leftUsed = false
  for (var i = 1;i < ary.length;i++) {
    var val = ary[i]
    if (val) {
      var node = {
        val: val,
        left:null,
        right:null
      }
      queue.push(node)
    } else {
      node = null
    }
    if (!leftUsed) {
      queue[0].left = node
      leftUsed = true
    } else {
      queue[0].right = node
      leftUsed = false
      queue.shift()
    }
  }
  return rootNode
}
//方法二 队列方式
function condensedArray2Tree(ary) {
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
  var node
  for(var i = 1;i < ary.length;i++) {
    node = queue.shift()
    if (ary[i] != null) {
      node.left = {
        val:ary[i],
        left:null,
        right:null
      }
      queue.push(node.left)
    }
    i++
    if (ary[i] != null) {
      node.right = {
        val:ary[i],
        left:null,
        right:null
      }
      queue.push(node.right)
    }
  }
  return root
}

//将LC树转换成数组
function tree2aryLC(root) {
  if (!root) {
    return []
  }
  var result = []
  var queue = [root]
  while(queue.length) {
    var node = queue.shift()
    if (node) {
      result.push(node.val)
      queue.push(node.left,node.right)
    } else {
      result.push(null)
    }
  }
  return result
}


//树的遍历 tree traverse
//先序遍历（先遍历根结点，再遍历左节点，右节点）
//中序遍历 (左节点，中节点，右节点)
//后序遍历（左节点，右节点，中节点）

//先序遍历
// 绕着轮廓走
function preOrderTraverse(root,action = console.log) {
  if(root) {
    action(root.val)
    preOrderTraverse(root.left,action)
    preOrderTraverse(root.right,action)
  }
}

//中序遍历
// 用一条垂直的线扫描
function inOrderTraverse(root,action = console.log) {
  if(root.left) {
    inOrderTraverse(root.left,action)
    action(root.left)
    inOrderTraverse(root.right,action)
  }
}

//后序遍历
function postOrderTraverse(root,action = console.log) {
  if(root) {
    postOrderTraverse(root.left,action)
    postOrderTraverse(root.right,action)
    action(root.val)
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