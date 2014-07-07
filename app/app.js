"use strict";
var canvasClicked = require("./canvasClicked");

  //Instanciate Arrays
window.onload=function(){

console.log("hello!");

  var painted = [];
  var content = [];

  for(var i = 0; i <= 8; i++) {
  painted[i] = false;
  content[i] = "";
  }

  console.log("This is before we add the listeners");

  var canvas1 = document.getElementById("canvas1");
  canvas1.addEventListener("dblclick", canvasClicked(1, painted, content), false);

  var canvas2 = document.getElementById("canvas2");
  canvas2.addEventListener("dblclick", canvasClicked(2, painted, content), false);

  var canvas3 = document.getElementById("canvas3");
  canvas3.addEventListener("dblclick", canvasClicked(3, painted, content), false);

  var canvas4 = document.getElementById("canvas4");
  canvas4.addEventListener("dblclick", canvasClicked(4, painted, content), false);

  var canvas5 = document.getElementById("canvas5");
  canvas5.addEventListener("dblclick", canvasClicked(5, painted, content), false);

  var canvas6 = document.getElementById("canvas6");
  canvas6.addEventListener("dblclick", canvasClicked(6, painted, content), false);

  var canvas7 = document.getElementById("canvas7");
  canvas7.addEventListener("dblclick", canvasClicked(7, painted, content), false);

  var canvas8 = document.getElementById("canvas8");
  canvas8.addEventListener("dblclick", canvasClicked(8, painted, content), false);

  var canvas9 = document.getElementById("canvas9");
  canvas9.addEventListener("dblclick", canvasClicked(9, painted, content), false);

  console.log("This is after we add the listeners");

};
