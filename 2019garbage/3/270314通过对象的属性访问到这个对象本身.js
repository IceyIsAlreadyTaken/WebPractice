//通过对象的属性访问到这个对象本身

var dayName = function() {
  var names = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return function(number) {
    return names[number];
  }
}()

Object.defineProperty(Object.prototype,'self',{
  get:function(){
    return this
  }
})

dayName('self')