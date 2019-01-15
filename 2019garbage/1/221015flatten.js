function flattenDeep(ary) {
  return flattenDepth(ary, Infinity)
}

function flattenDepth(ary, depth = 1) {
  if (depth == 0) {
    return ary.slice()
  }
  return ary.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flattenDepth(item, depth - 1))
    } else {
      result.push(item)
    }
    return result
  }, [])
}

function flattenDepth(ary, depth = 1) {
  while(depth--) {
    ary = flatten(ary)
  }
  return ary
}

function flattenDeep(ary) {
  return flattenDepth(ary, Infinity)
}
function flattenDeep(ary) {
  var result = []
  for(var item of ary) {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item))
    } else {
      result.push(item)
    }
  }
  return result
}

var flattenDeep = ary => ary.reduce((result, item) => (Array.isArray(item) ? result.push(...flattenDeep(item)) : result.push(item), result), [])


function flattenDeep(ary) {
  return ary.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flattenDeep(item))
    } else {
      result.push(item)
    }
    return result
  }, [])
}

function flatten(ary) {
  // return flattenDepth(ary)
  // return [].concat(...ary)
  var result = []

  for(var item of ary) {
    if (Array.isArray(item)) {
      for(var val of item) {
        result.push(val)
      }
    } else {
      result.push(item)
    }
  }

  return result
}