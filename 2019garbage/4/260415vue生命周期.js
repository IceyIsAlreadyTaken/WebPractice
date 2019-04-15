//https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA

//
//虽然没有完全遵循 MVVM 模型，但是 Vue 的设计也受到了它的启发。
//因此在文档中经常会使用 vm (ViewModel 的缩写) 这个变量名表示 Vue 实例。
new vue()

init events & lifecycle
    初始化vue自己，把它变成事件监听触发器 以及 生命周期

运行钩子函数 beforeCreate

init injections & reactivity
    初始化 插值   和   响应式
    将computed 以及 data 字段中的函数变成 getter 和 setter

运行钩子函数 created

has "el" option?  有没有el选项

has 'template' option? 有没有 template 选项


yes Compile template into render function *  有的话编译模板为 render 函数

no Compile el's outerHTML as template * 没有的话编译el的 outerHTML属性为模板


运行钩子函数 beforeMount

Create vm.$el and replace 'el' with it   
    将模板和数据拼接后成为el 替代 el元素     div#app称为挂载点

运行钩子函数 mounted  安装好的；就是页面数据被第一次渲染好




在组建销毁时使用，一般在关闭窗口时运行
beforeDestroy() {
  
},
destroyed() {
  
},


//https://segmentfault.com/a/1190000011381906   参考文章

//虚拟dom
//直接创建原生dom节点太重了，太多的依赖，属性，继承等等，所以vue传建一个虚拟的dom来表达一个节点
//节省内存 时间
function el(tag,attrs,children) {
  return {
    tag:tag,
    attrs:attrs,
    children:children
  }
}

el('div',{
  title:'foo',
  bar:'baz',
},[el('a',{href:"#"})])

//diff信息  一个东西做怎样的改变变成另一个东西  

//拿到 diff信息后再更改dom
//更改dom是最耗费时间的、


//现代框架原理就是 更改数据后跟之前的虚拟 dom 作对比 拿到diff信息 然后更改dom
//只要数据发生一点点变化就去对比dom么？


//可以找一些 virtual dom 的一些实现

// dom diff 算法 一般要 On^3 方
// https://github.com/fiduswriter/diffDOM