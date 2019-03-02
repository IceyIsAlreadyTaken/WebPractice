//实现防抖函数

el.addEventListener('mousemove',_.debounce(f,500))

function debounce(f,duration){
  var id
  return function(...args) {
    clearTimeout(id)
    id = setTImeout(f.bind(this,...args),duration)
  }
}

el.addEventListener('mousemove',_.throttle(f,500))
