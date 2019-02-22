var a = document.body.getElementsByTagName('a')[0]
//获得body中所有的标签名为a的元素
a.href 
var a = document.getElementsById('')

var a = document.getElementsByClassName('')

//p标签有个 nodeValue





function getElementByName(id) {
  var result = []
  tagName = tageName.toUpperCase()
  traverse(node,n => {
    if (n.tagName == tagName) {
      result.push(n)
    }
  })
  return result
}

//不带根节点的多叉树遍历
function traverse(node,action) {
  if (node.nodeType == document.ELEMENT_NODE) {
    for (let i = 0; i < node.children.length;i++) {
      action(node.children[i])
      traverse(node.children[i],action)
    }
  }
}

//带根结点的多叉树遍历
function getElementsByTagName(node,tagName) {
  if (node.nodeType == document.ELEMENT_NODE) {
    action(node.children[i])
    for (let i = 0; i < node.children.length;i++) {
      traverse(node.children[i],action)
    }
  }
}





function getElementById(id) {
  if (node.id == id) {
    return node
  } else {
    for (let i = 0;i < node.children.length;i++) {
      let ret = getElementById(node.children[i])
      if (ret) {
        return ret
      }
    }
    return null
  }
}

function getElementById(id) {
  var result = null
  traverse(document.documentElement, node => {
    if (node.id == id) {
      result = node
      return false
    }
  })
  return result
}


function getElementById(id, node = document.documentElement) {
  if (node.id == id) {
    return node
  } else {
    for(var i = 0; i < node.children.length; i++) {
      var ret = getElementById(id, node.children[i])
      if (ret) {
        return ret
      }
    }
    return null
  }
}


function traverse(root, action) {
  var r
  if (root) {
    r = action(root.left)
    if (r === false) return
    traverse(root.left, action)
    r = action(root.right)
    if (r === false) return
    traverse(root.right, action)
  }
}

document.all
//拿到文档的所有标签
document.all.id 
//拿到文档所有指定id的标签
document.all.name
//拿到稳当所有指定name的标签


function elt(nodeName,...children) {
   var a = document.createElement(nodeName)
   for (let i = 0;i < children.length;i++) {
     a.appendChild(children[i])
   }
   return a 
}
