//实现防抖函数

el.addEventListener('mousemove',_.debounce(f,500))

function debounce(f,duration){
  var id
  return function(...args) {
    clearTimeout(id)
    id = setTImeout(f.bind(this,...args),duration)
  }
}

//节流
el.addEventListener('mousemove',_.throttle(f,500))

function throttle(f,duration){
  var lastRunTime = 0
  return function(...args) {
    var now = Date.now()
    if (now - lastTime > duration) {
      lastRunTime = now
      return f.call(this,...args)
    }
  }
}

//lodash 复杂的多
//必考题
