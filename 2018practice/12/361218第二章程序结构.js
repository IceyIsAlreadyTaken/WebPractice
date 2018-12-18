//解一元二次方程 a*x^2+b*x+c=0
var a =1
var b =12
var c =6 
var x1=(-b+Math.sqrt(b*b-4*a*c))/(2*a)
var x2=(-b-Math.sqrt(b*b-4*a*c))/(2*a)
console.log(x1)
console.log(x2)

//解二元一次方程
// ax+by=c 30x+15y=675
// dx+ey=f 12x+5y=265
var a=30,b=15,c=675,d=12,e=5,f=265
var x=(a*a*b*f+a*a*c*e-2*a*b*c*d)/(e*a-b*d)
var y=(a*f-c*d)/(e*a-b*d)
console.log(x)
console.log(y)