function indexof (ary,searchElement) {
    for(var a = 0;a < ary.length;a++) {
      if(ary[a] === searchElement) {
        return a
      }
    }
    return -1
}