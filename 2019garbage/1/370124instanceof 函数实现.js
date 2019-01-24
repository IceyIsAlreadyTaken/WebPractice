function INSTANCEOF(obj,c) {
  if(!obj) {
    return false
  }
  if(obj.__proto__ === c.prototype) {
    return true
  } else {
    return INSTANCEOF(obj.__proto__,c)
  }
}