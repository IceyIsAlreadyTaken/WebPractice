console.log(0)
p
.then()
.then( function(){
  //在未来执行
})
.then()
.then()
.then()
console.log(1)

//在0和1之间运行
//看起来是同步执行的
//第一个then 完成了调用下一个then
//第二个then 完成了调用了下一个then

p2 = p1.then(f1,f2)
//p1成功调f1
//p1失败调f2
// 失败的话就直接抛出，不赋值给p2
//然后将该状态的 Promise 返回给 p2

//数组，对象中的额外逗号是可以有的
[1,2,3,]
var a ={
  a:bar,
}


///
//【链接】Wehaveaproblemwithpromises
//https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
//then只能接函数不能接promise
//then(promise相当于什么都没传)
//


//区分setTimeout以下几种情况
setTimeout(console.log(1),2000)
//1先打1

setTimeout(() => console.log(1),2000)
//2秒后运行1
setTimeout('console.log(1)',2000)
//也是两秒后 传一个字符串会把这个字符串内的东西2秒后当函数体运行





//==============================================promise文章后边加载文章的promise写法
.then(urls => {
  return urls.reduce((p,url) => {
    return p
      .then(() => {
        return get(url)
      })
      .then(addChapter)
  },Promise.resolve())


  var p = Promise.resolve()
  for (var url of urls) {
    p = p
      .then(() => {
        return get(url)
      })
      .then(addChapter)
  }

  return p
})

//==================
var urls = [u1,u2,u3,u4,u5]

var chapterPromises = urls.map(get)

chapterPromises.reduce((chain,promise) =>{
  return chain.then(() => promise).then(addChapter)
},Promise.resolve())

Promise.resolve()
  .then(() => {
    return chapterPromises[0]
  })
  .then(addChapter)
  .then(() => {
    return chapterPromises[1]
  })
  .then(addChapter)
  .then(() => {
    return chapterPromises[2]
  })
  .then(addChapter)
  .then(() => {
    return chapterPromises[3]
  })
  .then(addChapter)
  .then(() => {
    return chapterPromises[4]
  })
  .then(addChapter)

//============================最优
var urls = [1,2,3,4,5,6]

function get(val) {
  console.log(val,'start loaded')
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(val)
      console.log(val,'loaded')
    },1000 + 4000 * Math.random())
  })
}

var chapterPromises = urls.map(get)

chapterPromises.reduce((chain,promise) => {
  return chain.then(() => promise).then(console.log)
},Promise.resolve())

//待研究