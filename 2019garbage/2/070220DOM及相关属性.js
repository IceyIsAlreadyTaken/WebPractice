/**
 * 什么是DOM (Document Object Model)
 * 文档对象模型 (DOM) 是HTML和XML文档的编程接口。
 * 它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。
 * DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。
 * 
 * 你可以在任何html元素发生任何事件的时候，调用js来操作任何一个html元素的任何属性来达到交互效果
 */

//访问DOM
document //表示整个的 html
document.documentElement  //访问<html>标签
//标准的属性可以通过属性获得，其他属性则拿不到
document.documentElement.lang
//'en'
document.documentElement.getAttribute('xxx')
//获取非标准的xxx属性

//访问子元素
document.children
//以数组的方式显示出来
document.childNodes//子节点可以包含文本片段或者注释 类数组对象 

document.head
document.documentElement.head //为什么是undefined???

document.body.nodeType //表示表示节点的数字代码
//常规元素的值为1
//DOM也将该值定义为一个常量属性 属性名大写，不可赋值
document.ELEMENT_NODE  //1
document.TEXT_NODE //3
document.COMMENT_NODE //8
$0.nodeType === document.COMMENT_NODE  //
$0.nodeType === document.ELEMENT_NODE
$0.nodeType === document.TEXT_NODE

//文档类型声明的值为10

console.dir(document.documentElement)
//在控制台中通过类似文件树样式的交互列表显示对象的所有属性和方法

//把类数组对象转成数组
Array.from(document.body.childNodes)
Array.apply(null, document.body.childNodes)
[].slice.call(document.body.childNodes)

function slice(ary,start = 0,end = ary.length) {
  var result = []
  for (let i = start; i < end;i++) {
    result.push(ary[i])
  }
  return result //多态代码 只要是类数组对象就可以 字符串，数组都可以
}

//不好的设计
//无法在创建新的节点的同时立即为其添加孩子和属性
//相反首先创建节点，然后将孩子的节点逐个添加到节点中，最后利用副作用逐个设置属性
a = document.createElement('a')
a.setAttribute('href','baidu.com')
span = document.createElement('span')
a.appendChild(span) //附加孩子


//DOM 节点包含了许多指向相邻节点的链接
document.childNodes  //text常常为回车
document.childNodes[1].firstChild
document.childNodes[1].lastChild
document.childNodes[1].childNodes[1].previousSibling //前一个子元素 常常为回车
//对于第一个孩子 previousSibling 为null 
document.childNodes[1].childNodes[1].nextSibling //后一个子元素
//对于最后一个孩子 nextSibling 为null
//sibling意思为兄弟姐妹
parentNode
parentElement
$0.previousElementSilbing //总是指向前一个兄弟元素 
$0.nextElementSilbing //总是指向后一个兄弟元素
$0.firstElementChild //第一个元素节点
$0.lastElementChild //最后一个元素节点

//扫描文档搜索是否包含特定字符串的文本节点
function talksAbout(node,string) {
  if (node.nodeType == document.ELEMENT_NODE) {
    for (var i = 0; i < node.childNodes.length;i++) {
      if (talksAbout(node.childNodes[i],string)) {
        return true
      }
      return false
    } 
  } else if (node.nodeType == document.TEXT_NODE) {
      return node.nodeValue.indexOf(string) > - 1
  }
}
console.log(talksAbout(document.body,'book'))


















