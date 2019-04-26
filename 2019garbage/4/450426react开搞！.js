//react 仅关心一点，用数据渲染 virtual dom 跟上一次的做对比，然后更新
//vue 的双向绑定，指令 都没有
//也没有奇奇怪怪的模板语法
//react 本身是 web components 的实现

//react 的代码是需要编译的  JSX
//也有生成一整套脚手架的 cli


// react 只是创建一个虚拟组建树  表达的是个 UI
// 可以渲染到任何平台上边包括浏览器

//不同平台 实现页面的工具
// .NET  XAML
//android xml
//java   swing  spring
//c++   Qt
//js  dom

//babel 把 ES6789 转换到 ES34
//大多情况是把 代码转好再把代码上线
//极少数情况是把代码在线转换
//babel-standalone 找到所有 script 名为 babel 的标签 ，把 react 的代码转换成 浏览器能够运行的代码


//sourcemap 记录生成的代码由源代码的哪一部分生成
//当看不明白莫名函数 或者语法糖的时候去  babel 里试一下