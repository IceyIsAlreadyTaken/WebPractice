define(function(require,exports,module){
  var compact = require('compact')
  module.exports = function chunk(){
    console.log(compact([1,2,false,4]))
  }
}) 