//express+pug+sql 纯粹的后端网站 模板是 pug



//前后分离的架构
//express + html + js + css    前端向后端请求一个地址，后端响应一个json数据，前端再用框架 js+css 把数据渲染出来 

//用户发这个网址
//http://foo.com/post/5/comment/28
//实际上向后端请求的是这个，然后前端通过 ajax 再加载出来
//http:foo.com/


//SSR Server Side Rendering    前端的框架在后端渲染出来然后吐出目标页面的代码
//对 SEO 友好  vue 可以配置，中台


//===================================
//前端工程化
//cli 创建脚手架，import 引入乱七八糟的东西，写组件， webpack打包，编译，


//==================================
//js 是一个动态，弱类型语言(参与运算的时候作自动类型转换就是弱类型)
// var x = 8
// x = {}

//typescript   主流  微软   为 js 加上静态
//flow 