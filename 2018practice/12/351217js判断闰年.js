
// 判断闰年
var year = prompt("请输入年份","");
if (year % 400==0 || year % 4 == 0 && year % 100 != 0){
  alert(year + "是闰年");
}
else{
  alert(year + "不是闰年");
}

// 输入数字求平方
var number = prompt("请输入数字","");
if (!isNaN(number)){
  alert("该数字的平方为" + number * number);
}
else{
  alert("您输入的不是数字");
}

// 输入数字求平方
var old = Number(prompt("请输入你的年龄",""));
alert(typeof(old));
if ( 0 < old && old < 6)
  alert("这么小就会上网了，真是个牛逼宝宝");
else if( 7 < old && old < 16)
  alert("绝对是个牛逼儿童");
else if( 17 < old && old < 30)
  alert("你绝对是个帅小伙，要不就是个大美女");
else if( 31 < old && old < 60)
  alert("人到中年当自强");
else if( 61 < old && old < 80)
  alert("真是个老顽童");
else if( old < 0)
  alert("请输入正值");
else
  alert("祝您长命百岁");

// 输出100以内的偶数
var even = 0;
while(even <100){
  console.log(even);
  even=even+2;
}

// 显示二的乘方
var result=1;
var counter=0;
while (counter<10){
  result=result * 2;
  counter =counter +1;
  console.log("2的"+counter+"次幂为"+result);
}

//do 循环
do{
  var name =prompt("who are you?");
}while(!name);
console.log(name);

//for 循环
var content=1;
for(var number = 1; number <10;number+=1){
  content = content + "+1";
  console.log(content+"="+(number+1));
}

//打印九九乘法表
for(var n=0;n<10;n+=1){
  console.log(" ")
  for(var m=1;m<=n;m+=1){
    console.log(m+" * "+n+" = "+m*n);
  }
}

//调用7次 console.log 打印三角形
var b="#";
for (var a = 1; a < 8; a++) {
  console.log(b);
  b=b+"#";
}

//打印 FizzBuzz
var a=1;
while(a<100){
  if(a%3==0&&a%5==0){
    console.log("FizzBuzz");
  }else if(a%3==0){
    console.log("Fizz");
  }else if(a%5==0){
    console.log("Buzz");
  }else{
    console.log(a);
  }
  a++;
}

//编写棋盘
var size = 8;
var c="#";
var d=1;
while(d<size){
  var a=0;
  var e="";
  while(a<size){
    e=e+c;
    a+=1;
  }
  console.log(e);
  console.log(" ");
  d+=1;
}


  // if(a%2==0){
  //   while(d<=size){
  //     if(d%2==0){
  //       e+=b;
  //     }else{
  //       e+=c;
  //     }
  //     d+=1;
  //   }
  //   console.log(e);
  // }else{
  //   while(d<=size){
  //     if(d%2==0){
  //       f+=c;
  //     }else{
  //       f+=d;
  //     }
  //     d+=1;
  //   }
  //   console.log(f);
  // }
}
