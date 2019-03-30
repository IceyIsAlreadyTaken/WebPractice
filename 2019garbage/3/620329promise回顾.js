fs.promises.readdir('.').then(files => {return  Promise.all(files.map(fs.promises.stat))}) .then(console.log)  //返回一个stat数组组成的




//js 本身是单线程的
//Node,浏览器 本身是多线程的,他们只是用一个线程运行js的



//promise 复习
p2 = p1.then(f1,f2) 
//1. f1,f2最多会调用一个  
//2. then会返回一个promise，这个promise得状态由由f1,f2决定；正常返回就是成功的promise,抛出错误的形式就是失败的promise
//3. f1或者f2返回一个promise ,p2就取这个promise得状态为这个状态
//4. 如果f1或者f2不存在 就取p1得状态