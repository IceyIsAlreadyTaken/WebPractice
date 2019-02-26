parentNode.removeChild(childNode)  //移除特定节点
parentNode.appendChild(childNode)  //添加孩子节点并将其放置在孩子节点的列表末尾
parentNode.insertBefore(newNode,baseNode) //将第一个参数表示的节点插入到第二个参数表示的节点前面
//每个节点只能存在于文档中的某一位置，只能存在一次
parentNode.replaceChild(newNode,oldNode) //方法用于将一个孩子节点替换为两一个孩子节点

document.createElement('x')//创建节点xxx
document.createComment('foo') //创建注释节点
Node.attributes  //获取到元素对象的所有属性

//克隆节点简单实现  没有复制标签属性
function cloneNode(node){
  if (node.nodeType == document.ELEMENT_NODE) {
    var result = document.createElement(node.tagName)
    for (var i = 0; i < node.childNodes.length;i++) {
      result.appendChild(cloneNode(node.childNodes[i]))
    }
    return result
  } else if (node.nodeType == document.TEXT_NODE) { //是文本节点
    return document.createTextNode(node.nodeValue)
  } else if (node.nodeType == document.COMMENT_NODE){ //注释节点
    return document.createComment(node.data)  //注释内容 用data属性拿到
  }
  
}
Node.cloneNode() //克隆函数 参数填true的话意思为

node.style.backgroundColor = 'red' //获取 Node的属性
          .border
          .height
    styleTag = document.createElement('style') //创建style标签
    styleTag.textContent = 'p{color:red;}'
    document.head.appendChild(styleTag)

node.classList.add/remove/toggle/contains  //增加删除类名
    $0.classList.add()
    $0.classList.remove()
    $0.classList.toggle() //有这个类的话删除，没有这个类的话增加这个类
node.dataset.foo = 'foo' //操作标签的 data-set 的属性
                         //操作自定义属性 dataset.foo dataset.baz
                         //不能打横杠要用横杠代替

//IE 浏览器发明的
innerHTML //节点当前内部的HTML标签文本，是实时的
outerHTML //包含节点自己的所有 HTML标签文本
innerText //去掉标签只留下文本
outerText //去掉包括外层的标签留下文本 跟 innerText 差不多相同
textConter //innerText 显示的文本会受css影响,textConter不会受其影响

//添加元素的两种方式
//一种是
document.body.innerHTML = '<p><a>foo</a></p>'
//另一种是
p = document.createElement('p')
p.appendChild(document.createElement('a'))
p.firstChild.appendChild(document.createTextNode('foo'))

$0.normalize()//合并相邻的注释节点


//elt函数 
function elt(nodeName,...children) {
  var node = document.createElement(nodeName)
  for (var child of children) {
    if (typeof child == 'string') {
      node.appendChild(document.createTextNode(child))
    } else {
      node.appendChild(child)
    }
  }
  return node
}

elt('p',document.creatElement('a'))
elt('p',elt('a'))