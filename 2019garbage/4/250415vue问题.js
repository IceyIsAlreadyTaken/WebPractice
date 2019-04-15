
//标签以及 标签的属性小写
//vue 中 methods 属性的一般用驼峰命名法

//插值的用的变量，一般在 app 中找，没有的话在全局作用域找

<ul>
  <li v-for="(todo,idx) of todos">
    <span>{{todo}}</span>
    <input type="text" v-model="todos[idx]">
  </li>
</ul>



//什么时候用 watch  什么时候使用computed
//当某一个字段发生变化时,其他依赖该字段的字段也会响应式更新 用computed就比较方便
//watch 用在单一某一个字段发生变化时做出什么操作
//在模板里使用的话不用this


//为什么app.xx=66改值 页面值也会直接更改
//因为 xx 已经被vue 改成了getter 和 setter 感应到了你的设置
// computed 会被缓存，只有需要改变数据的时候才需要变化
