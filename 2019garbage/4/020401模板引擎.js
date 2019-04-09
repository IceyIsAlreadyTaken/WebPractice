//template engine 模板引擎的库
//=============================
//handlebarsjs    做不了运算
//try handlebars  在线的引擎使用 
//http://tryhandlebarsjs.com/

//如何把数据变为想要的html结构？
// 新手写法，缺点难以维护
function data(d) {
  var result = "<div class =\"entry\">"
  result += "<h1>"
  result += d.title
  result += "</h1>"
}
//一般就写插值以及循环

//=============================
//dustjs 使用单大括号做插值

//==================================
//还有针对 HTML优化的模板引擎,减少 HTML 书写的模板引擎

//jade 专门针对html的模板,可以写的含块
//pug  jade改名为pug   可以做一些运算 常用
//ejs ...
//https://pugjs.org/api/getting-started.html


//=========================================
//lodash 模板语法
//https://lodash.com/docs/4.17.11#template
<ul>
  <% for(var i = 0;i < 10;i++){ %>
    <li> <%= i%></li>   //有等号相当于把这部分做插值
  <% } %>   //尖括号百分号内写 js代码
</ul>

//模板最后转化为
result = []
result.push('<ul>')
  for(var i = 0;i < 10;i++) {
    result.push('<li>')
    result.push(i)
    result.push('</li>')
  }
result.push('</ul>')
resturn result.join('')


//_.template([string=''], [options={}])
//例子

//把模板字符串传进去返回一个函数
t = _.template(`<ul>
  <% for(var i = 0;i < list.length;i++){ %>
    <li> <%= list[i]%></li>
  <% } %>
</ul>`)

(function anonymous(_
  ) {
  return function(obj){obj||(obj={});var __t,__p='',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}with(obj){__p+='<ul>\n  '; for(var i = 0;i < list.length;i++){ ;
  __p+='\n    <li> '+((__t=( list[i]))==null?'':__t)+'</li>   \n  '; } ;
  __p+='  \n</ul>';}return __p}
  })

//然后传入数据
t({list:['1','2','3','4','5']})
<ul>
  
    <li> 1</li>   
  
    <li> 2</li>   
  
    <li> 3</li>   
  
    <li> 4</li>   
  
    <li> 5</li>   
    
</ul>




//简单实现模板引擎
function template(str,data) {
  return str.replace(/\{\{.*?\}\}/g,function(match) {
    var field = match.match(/\{\{(.*?)\}\}/)[1]
    return data[field]
  })
}

function template(str,data) {
  return str.replace(/\{\{(.*?)\}\}/g,function(match,field) {
    return data[field]
  })
}
template(`<div class="entry">
<h1>{{title}} {{age}}</h1>
<div class="body">
  {{body}}
</div>
</div>`,{title:'11',age:'222',body:'333'})

<div class="entry">
<h1>11 222</h1>
<div class="body">
  333
</div>
</div>

//你可以指定一个函数作为第二个参数。在这种情况下，当匹配执行后，该函数就会执行。 函数的返回值作为替换字符串。 (注意：上面提到的特殊替换参数在这里不能被使用。) 另外要注意的是，如果第一个参数是正则表达式，并且其为全局匹配模式，那么这个方法将被多次调用，每次匹配都会被调用。

//文章20行代码简单实现模板引擎
//http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line