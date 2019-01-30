Array.prototype.slice2 = function(start = 0, end = this.length) {
  var temp = []
  for (let a = start; a < end;a++) {
    temp.push(this[a])
  }
  return temp
}


function matches(target) {
  for(let a in target) {
    if(users[a] != target[a]) {
      
    }
  }
}