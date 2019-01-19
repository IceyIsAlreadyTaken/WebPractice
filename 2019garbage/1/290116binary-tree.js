//把根结点在rootPos位置的顺序储存的二叉树转换为一个链式二叉树（二叉链表）
function ary2tree(ary,rootPos = 0) {
  var root = {
    val:ary[0]
    left:{}
    right:{}
  }
  var leftpos = ary2tree()
  var rightpos =ary2tree()
  return root
}

//将二叉树root放入一个数组
//根结点放在rootPos的位置
function tree2ary(root, rootPos = 0) {


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