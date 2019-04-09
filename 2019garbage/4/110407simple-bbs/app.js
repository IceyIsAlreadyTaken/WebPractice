const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const sqlite = require('sqlite')
const cookieParser = require('cookie-parser')


const app = express()

const port = 8900

var dbPromise = sqlite.open(path.join(__dirname,'./bbs'),{Promise})
var db



// const users = [{ //内码保存用户名字防止同音冲突 id
//   name:'zs',
//   password:'123456',
//   id:1,
// },{ 
//   name:'ls',
//   password:'123456',
//   id:2,
// },{ 
//   name:'ww',
//   password:'123456',
//   id:3,
// },]
// users.maxid = 4

// const posts =[{  //帖子
//   id:1, //id为了方便对留言进行删除等操作
//   title:'hello',
//   content:'hello contentTTTTTTT',
//   timestamp:Date(Date.now()),
//   userid:2,
// },{
//   id:2,
//   title:'test',
//   content:'testTTTTTfdsafdsa loremdsafdsaf',
//   timestamp:Date(Date.now() - 10000),
//   userid:3,
// },{
//   id:3,
//   title:'wowww',
//   content:'afdsa loremdwwwwwwwwwooowowowoww',
//   timestamp:Date(Date.now() - 312323),
//   userid:1,
// },]
// posts.maxid = 4

// const comments = [{
//   id:1,
//   postid:2,
//   userid:1,
//   content:'好顶赞在哪宅男宅女',
//   timestamp:Date(Date.now() - 56789),
// },{
//   id:2,
//   postid:2,
//   userid:1,
//   content:'好顶赞哈哈哈哈哈哈',
//   timestamp:Date(Date.now() -  32131239),
// },{
//   id:3,
//   postid:2,
//   userid:1,
//   content:'笑死个人',
//   timestamp:Date(Date.now() - 53213),
// },{
//   id:4,
//   postid:2,
//   userid:1,
//   content:'太惨了',
//   timestamp:Date(Date.now() - 51222289)
// },]
// comments.maxid = 5

app.set('views',path.join(__dirname,'./templates')) //设置views文件夹位置
app.locals.pretty = true


app.use((req,res,next) => {  //打印服务器接到的请求
  console.log(req.method,req.url)
  next()
})

app.use('/static',express.static(__dirname + '/static'))
app.use(cookieParser('fdsafsaf'))//传一个密码，随便写
app.use(bodyParser.urlencoded())  //请求体解析后放在 req.body

app.get('/',async (req,res,next) => {
  var posts = await db.all('SELECT * FROM posts')
  res.render('index.pug',{posts})//{posts:posts}
})


//发帖
app.route('/add-post')
  .get((req,res,next) => {
    res.render('add-post.pug')
  })
  .post(async (req,res,next) => {
    console.log(req.body,req.cookies,req.signedCookies)
    if (req.signedCookies.userId) {
      await db.run('INSERT INTO posts (userId,title,content,timestamp) VALUES (?,?,?,?)',req.signedCookies.userId,req.body.title,req.body.content,Date.now())
      //查询存入帖子的 
      var newPost = await db.get('SELECT * FROM posts ORDER BY timestamp DESC LIMIT 1')
      res.redirect('/post/' + newPost.id)
    } else {
      res.end('you are not logged in!')
    }
  })


//注册页面
app.route('/register')  //去掉地址的.html
  .get((req,res,next) => {
    res.render('register.pug')
    // res.sendFile(path.join(__dirname,'./static/register.html'))
  })
  .post(async (req,res,next) => {
    var user = await db.get('SELECT * FROM users WHERE name=?',req.body.username)
    if (user) {
      res.end('name has been used')
    } else {
      await db.run('INSERT INTO users (name,password) VALUES (?,?)',req.body.username,req.body.password)
      res.redirect('/login')
    }
  })

//登录
app.route('/login')
  .get((req,res,next) => {
    res.render('login.pug')
  })
  .post(async (req,res,next) => {
    var user = await db.get("SELECT * FROM users WHERE name=? and password=?",req.body.username,req.body.password)
    if (user) {
      res.cookie('userId',user.id,{
        signed:true//签名后客服端无法伪造
      })
      res.redirect('/') 
    } else {
      res.end('username or password is not correct')
    }
  })

//登出 前端把cookie 删掉 后端清除cookie
app.get('/logout',(req,res,next) => {
  res.clearCookie('userId')
  res.redirect('/')
})

//用户
app.get('/user/:userId',async (req,res,next) => {
  var user = await db.get('SELECT * FROM users WHERE id=?',req.params.userId)
  if (user) {
    var userPosts = await db.all('SELECT * FROM posts WHERE userId=?',req.params.userId)
    var userComments = await db.all('SELECT comments.*,title as postTitle FROM comments JOIN posts ON comments.postId=posts.id WHERE comments.userId=?',req.params.userId)

    res.render('user.pug',{
      user,
      posts:userPosts,
      comments:userComments,
    })
  } else {
    res.render('user.pug',{user:null})
  }
})


//帖子
app.get('/post/:postId',async (req,res,next) => {
  var post = await db.get('SELECT posts.*,name FROM posts JOIN users ON posts.userId=users.id WHERE posts.id = ?',req.params.postId)
  //console.log(post)
  if(post) {
    var comments = await db.all('SELECT comments.*,name FROM comments JOIN users ON comments.userId=users.id WHERE postId =?',req.params.postId)
    res.render('post.pug',{post,comments}) //ES6语法属性和方法的简写
  } else {
    res.status(404).render('post-not-find.pug')
  }
})

//接评论的请求
app.post('/add-comment',async (req,res,next) => {
  //console.log(req.headers,req.body)
  // comments.push({
  //   id:comments.maxid++,
  //   postid:req.body.postid,
  //   userid:2,
  //   content:req.body.content,
  //   timestamp:Date.now()
  // })
  //响应重定向到当前页面，刷新
  if (req.signedCookies.userId) {
    await db.run(`
      INSERT INTO comments (postId,userId,content,timestamp)
      VALUES (?,?,?,?)
    `,req.body.postId,req.signedCookies.userId,req.body.content,Date.now())
    res.redirect('/post/' + req.body.postId)
  } else {
    res.end('not allowd to comment,you are not logged in')
  }
})


;(async function() {
  db = await dbPromise;
  app.listen(port,() => {
    console.log('listen to ', port)
  })
}())








// get /flight/bj-gz
// app.get('flight/:from-:to',(req) => {
//   req.params.from -> 'bj'
//   req.paramas.to -> 'gz'
// })