const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 8900

const users = [{ //内码保存用户名字防止同音冲突 id
  name:'zs',
  password:'123456',
  id:1,
},{ 
  name:'ls',
  password:'123456',
  id:2,
},{ 
  name:'ww',
  password:'123456',
  id:3,
},]
users.maxid = 4

const posts =[{  //帖子
  id:1, //id为了方便对留言进行删除等操作
  title:'hello',
  content:'hello contentTTTTTTT',
  timestamp:Date(Date.now()),
  userid:2,
},{
  id:2,
  title:'test',
  content:'testTTTTTfdsafdsa loremdsafdsaf',
  timestamp:Date(Date.now() - 10000),
  userid:3,
},{
  id:3,
  title:'wowww',
  content:'afdsa loremdwwwwwwwwwooowowowoww',
  timestamp:Date(Date.now() - 312323),
  userid:1,
},]
posts.maxid = 4

const comments = [{
  id:1,
  postid:2,
  userid:1,
  content:'好顶赞在哪宅男宅女',
  timestamp:Date(Date.now() - 56789),
},{
  id:2,
  postid:2,
  userid:1,
  content:'好顶赞哈哈哈哈哈哈',
  timestamp:Date(Date.now() -  32131239),
},{
  id:3,
  postid:2,
  userid:1,
  content:'笑死个人',
  timestamp:Date(Date.now() - 53213),
},{
  id:4,
  postid:2,
  userid:1,
  content:'太惨了',
  timestamp:Date(Date.now() - 51222289)
},]
comments.maxid = 5




app.set('views',path.join(__dirname,'./templates')) //设置views文件夹位置
app.locals.pretty = true


app.use((req,res,next) => {  //打印服务器接到的请求
  console.log(req.method,req.url)
  next()
})

app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded())  //请求体解析后放在 req.body

app.get('/',(req,res,next) => {
  users
  res.render('index.pug',{posts})//{posts:posts}
})

app.route('/register')  //去掉地址的.html
  .get((req,res,next) =>{
    res.sendFile(path.join(__dirname,'./static/register.html'))
  })
  .post((req,res,next) => {
    if (users.find(it => it.name == req.body.username)) {
      res.end('name has be used')
    } else {
      users.push({
        id:users.maxid++,
        name:req.body.username,
        password:req.body.password,
      })
      res.redirect('/login')
    }
  })

app.route('/login')
  .get((req,res,next) => {
    res.render('login.pug')
  })

//用户
app.get('/user/:userid',(req,res,next) => {
  var user = users.find(it => it.id == req.params.userid)
  var userPosts = posts.filter(it => it.userid == req.params.userid)
  if (user) {
    res.render('user.pug',{user,posts:userPosts})
  } else {
    res.render('user.pug',{user:null})
  }
})


//帖子
app.get('/post/:postid',(req,res,next) => {
  var postid = req.params.postid
  var post = posts.find(it => it.id == postid)  //find，filter过滤出所需的元素
  var comment = comments.filter(it => it.postid == postid)
  if(post) {
    res.render('post.pug',{post,comment}) //ES6语法属性和方法的简写
  } else {
    res.status(404).render('post-not-find.pug')
  }
})

//接评论的请求
app.post('/add-comment',(req,res,next) => {
  console.log(req.headers,req.body)
  comments.push({
    id:comments.maxid++,
    postid:req.body.postid,
    userid:2,
    content:req.body.content,
    timestamp:Date.now()
  })
  //响应重定向到当前页面，刷新
  res.redirect('/post/' + req.body.postid)
  res.end('OK')
})

app.listen(port,() => {
  console.log('listen to ', port)
})