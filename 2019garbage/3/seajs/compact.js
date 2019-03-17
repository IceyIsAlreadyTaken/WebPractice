define(function(require,exports,module){
  module.exports = function compact(ary){
    return ary.filter(it => it)
  }
})