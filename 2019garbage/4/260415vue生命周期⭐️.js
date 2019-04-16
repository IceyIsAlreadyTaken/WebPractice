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

// dom diff 算法 一般要 On^3 方   vue 是 On的算法
// https://github.com/fiduswriter/diffDOM



//小米应用商店整个是个网页
//因为是个很大的入口，做广告的需求很大，所以要经常变化
//vue性能太低，单单是初始化数据 getter 和 setter 过程就花费很长时间
//后来用jQuery  性能提高了，但是很难维护


//react reconciliation diff 算法


//对于dom树 只对同级做对比
//性能优化 +key值
//有 Key 只闪一下
//没有 key 全闪



//异步更新队列
//可能你还没有注意到，Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。
//异步函数中是不能使用$0等为控制台提供的

//react 是 更新dom时不会把所有数据都更新，每次只渲染一部分， 用户不会感受到卡顿
//fiber  
//或者使用 worker 线程