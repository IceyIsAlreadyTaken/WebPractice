//三种写法
<p onclick = 'this;event.stopxxx()'></p>

var p = document.querySelector('p')
p.onclick = function(e) {

}
p.addEventListener('eventName',function(){},true/false)

p.removeEventListener('eventName',同一个函数)

window.addEventListener('keydown',console.log) //这时给log函数传递事件，然后打印出来