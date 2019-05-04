//babeljs 编译器

//把高版本的语法编译到 低版本的语法

//新语法不认识 可以来这里看一下转一下


//for (let i =0;i<10;i++){console.log(i)}
//for (let i =0;i<10;i++){i++;console.log(i)}
//例如 i 的作用域的问题  可以理解为三层作用域
//里边设置了 i 之后就读取不到往外边的 i 了
for (let i =0;i<10;i++){
  let i = i;//语法错误  TDZ Temper Dead Zone
  console.log(i)
}


//plugin  插件

//babel-preset 预制
//babel-preset-env 根据你的环境对你的代码进行编译
//说你要运行的什么版本的浏览器以及什么版本的 Node
// touch .babelrc      //json 文件
// 大部分情况下不用直接使用 bebel

//webpack 编译的 js 都是通过 babel 编译的


//babel 把源代码 转换成语法树 加入各种插件迭代后 再转换为语法树
//再通过 babel 转化为 旧的语法

//ASTexploreer     在线生成语法树