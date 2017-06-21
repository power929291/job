/**
 * Created by Administrator on 2017-06-19.
 */

var datas = [
  {
    "width": 400,
    "top": 20,
    "left": 50,
    "opacity": 0.2,
    "zIndex": 2
  },
  {
    "width": 600,
    "top": 70,
    "left": 0,
    "opacity": 0.8,
    "zIndex": 3
  },
  {
    "width": 800,
    "top": 100,
    "left": 200,
    "opacity": 1,
    "zIndex": 4
  },
  {
    width: 600,
    top: 70,
    left: 600,
    opacity: 0.8,
    zIndex: 3
  },
  {
    "width": 400,
    "top": 20,
    "left": 750,
    "opacity": 0.2,
    "zIndex": 2
  }
];

var wrap = document.getElementById("wrap");
var slide = document.getElementById("slide");
var lis = slide.getElementsByTagName("li");
var arrow = document.getElementById("arrow");
var arrLeft = document.getElementById("arrLeft");
var arrRight = document.getElementById("arrRight");
var flag = true;
for (var i = 0; i < lis.length; i++) {
  animate(lis[i], datas[i]);
}
wrap.onmouseover = function () {
  animate(arrow, {opacity: 1});
};
wrap.onmouseout = function () {
  animate(arrow, {opacity: 0});
}
arrRight.onclick = function () {
  if(flag){
    flag = false;
    datas.unshift(datas.pop());
    for (var i = 0; i < lis.length; i++) {
      animate(lis[i], datas[i],function () {
        flag = true;
      });
    }

  }
};

//点击左箭头
arrLeft.onclick = function () {
    datas.push(datas.shift());
    for (var i = 0; i < lis.length; i++) {
      animate(lis[i], datas[i]);
    };
  };
