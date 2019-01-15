function every(ary, test) {
  for(var i = 0; i < ary.length; i++) {
    if (!test(ary[i], i, ary)) {
      return false
    }
  }
  return true
}

function some(ary, test) {
  return !every(ary, function(...args) {
    return !test(...args)
  })
}


function some(ary, test) {
  for(var i = 0; i < ary.length; i++) {
    if (test(ary[i], i, ary)) {
      return true
    }
  }
  return false
}

function every(ary, test) {
  return !some(ary, (...args) => !test(...args))
}