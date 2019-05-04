// grunt   基于配置文件的 任务管理工具 比较慢，需要占用磁盘
// gulp    

//seajs  require.js 用 gulp 打包

// browserity   
// 只能打包 js 
// 依赖已经是树状结构了

// webpack
// 所有页面的资源 img,css,js 都可以 require
// 甚至可以 require 任何文件 要有 loader 编译转换这些功能 less,sass,ts,jsx
// 编译，拼接，压缩，转换
// 配置起来很麻烦


// pracle

//webpack 打包工具
//webpack 也支持反向代理


//正向代理 浏览器告诉远程服务器连哪个网站，然后去连该网站，
//反向代理 浏览器连接到一台远程服务器上，然后认为这个服务器就是远程服务器，这个服务器再从其他服务器拿到数据，浏览器认为是这个服务器发过来的，帮你访问其他不同的服务器，不会有跨域问题
// nginx 效率非常高


//去哪网 项目


// tree shakeing  摇树优化功能 对没用到的功能删掉   webpack 有这个功能
// 依赖 es6 的 import export
// import 和 export 只能放在顶层 无缩进


// webpack --mode=production index.js


//================================================
//webpack 最主要的功能 tree shaking  静态分析 减少代码量
//
//code spliting 代码分割 如果发现某些东西一开始不需要使用
// 可以等到需要的时候加载进来 var xxx = await import('xxxx')
// 加快加载时间


// 不过这种方式很少写了
// require.ensure('./help',function() {  先异步加载
//   var xxx = require('./help')  后边再直接 require
// })
//
// expport defalut add  ======== import add from './xxx'
// expport add  ======== import {add} from './xxx'

//import help默认导出的是一个整个模块    help.defalut 
//import 进来的东西相当于常量不能被赋值 


//================================================
//浏览器里的
//<script type="module" sec="./index.js"></script>