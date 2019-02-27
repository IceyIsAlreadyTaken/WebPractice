el.addEventListener('mousemove',_.debounce(f,500))
function debounce(f,digit){
  var a = Date.now()
  return function(...args) {
    clearTimeout(id)
    id = setTImeout(f.bind(this,...args),duration)
  }
}

el.addEventListener('mousemove',_.throttle(f,500))
