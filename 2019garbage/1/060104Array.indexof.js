function indexof (ary,searchElement,fromIndex) {
  if(fromIndex === undefined) {
    fromIndex =0
  }
  for(var a = 0;a < ary.length;a++) {
    if(ary[a] === searchElement) {
      return a
    }
  }
  return -1
}