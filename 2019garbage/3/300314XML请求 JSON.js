var xhr = new XMLHttpRequest()
xhr.open("GET","https://xieranmaya.github.io/images/cats/cats.json",false)
xhr.send()

xhr.responseText

JSON.parse(xhr.responseText)




AJAX



//JSON 格式编码的字符串
//JSON 一种是对象格式，一种是数组格式
var a = "[
  {
    "url": "photo-103450229.jpg",
    "width": 675,
    "height": 900
  },
  {
    "url": "photo-108273877.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-115203323.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "photo-23583825.jpg",
    "width": 2048,
    "height": 1536
  },
  {
    "url": "stock-photo-123942383.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-124559545.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-132046989.jpg",
    "width": 1170,
    "height": 780
  },
  {
    "url": "stock-photo-132118343.jpg",
    "width": 2000,
    "height": 1339
  },
  {
    "url": "stock-photo-132311221.jpg",
    "width": 1920,
    "height": 1080
  },
  {
    "url": "stock-photo-132586903.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-135203031.jpg",
    "width": 1000,
    "height": 668
  },
  {
    "url": "stock-photo-135626379.jpg",
    "width": 2000,
    "height": 1500
  },
  {
    "url": "stock-photo-136947953.jpg",
    "width": 2000,
    "height": 1348
  },
  {
    "url": "stock-photo-138378295.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-138436811.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-142950305.jpg",
    "width": 2000,
    "height": 1125
  },
  {
    "url": "stock-photo-143046061.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-143181649.jpg",
    "width": 2000,
    "height": 1298
  },
  {
    "url": "stock-photo-144530143.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-144730939.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-145414771.jpg",
    "width": 780,
    "height": 1170
  },
  {
    "url": "stock-photo-146038669.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146231033.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-146914861.jpg",
    "width": 843,
    "height": 1000
  },
  {
    "url": "stock-photo-147877407.jpg",
    "width": 2000,
    "height": 1334
  },
  {
    "url": "stock-photo-147969173.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-148015373.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148704233.jpg",
    "width": 1170,
    "height": 884
  },
  {
    "url": "stock-photo-148928293.jpg",
    "width": 1170,
    "height": 781
  },
  {
    "url": "stock-photo-148950715.jpg",
    "width": 1170,
    "height": 775
  },
  {
    "url": "stock-photo-21951271.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-21964829.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-22618399.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-31201539.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-34598868.jpg",
    "width": 542,
    "height": 768
  },
  {
    "url": "stock-photo-47252094.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-51980510.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-55601508.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-65681789.jpg",
    "width": 1840,
    "height": 1232
  },
  {
    "url": "stock-photo-70461471.jpg",
    "width": 1000,
    "height": 1000
  },
  {
    "url": "stock-photo-71801901.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-71913567.jpg",
    "width": 2000,
    "height": 1328
  },
  {
    "url": "stock-photo-72223295.jpg",
    "width": 2000,
    "height": 1335
  },
  {
    "url": "stock-photo-72620185.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-74402039.jpg",
    "width": 666,
    "height": 1000
  },
  {
    "url": "stock-photo-75097491.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-75186237.jpg",
    "width": 2000,
    "height": 1333
  },
  {
    "url": "stock-photo-79250373.jpg",
    "width": 2000,
    "height": 1325
  },
  {
    "url": "stock-photo-79692589.jpg",
    "width": 670,
    "height": 1000
  },
  {
    "url": "stock-photo-7979718.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-7980252.jpg",
    "width": 1024,
    "height": 680
  },
  {
    "url": "stock-photo-81390687.jpg",
    "width": 2000,
    "height": 1591
  },
  {
    "url": "stock-photo-81988949.jpg",
    "width": 667,
    "height": 1000
  },
  {
    "url": "stock-photo-83149705.jpg",
    "width": 775,
    "height": 1170
  }
]
"