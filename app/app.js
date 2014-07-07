"use strict";
var canvasClicked = require("./canvasClicked");

  //Instanciate Arrays
window.onload=function(){

  var painted = [];
  var content = [];

  for(var i = 0; i <= 8; i++) {
  painted[i] = false;
  content[i] = "";
  }

  var canvas1 = document.getElementById("canvas1");
  canvas1.addEventListener("dblclick", function(){canvasClicked(1, painted, content)});

  var canvas2 = document.getElementById("canvas2");
  canvas2.addEventListener("dblclick", function(){canvasClicked(2, painted, content)});

  var canvas3 = document.getElementById("canvas3");
  canvas3.addEventListener("dblclick", function(){canvasClicked(3, painted, content)});

  var canvas4 = document.getElementById("canvas4");
  canvas4.addEventListener("dblclick", function(){canvasClicked(4, painted, content)});

  var canvas5 = document.getElementById("canvas5");
  canvas5.addEventListener("dblclick", function(){canvasClicked(5, painted, content)});

  var canvas6 = document.getElementById("canvas6");
  canvas6.addEventListener("dblclick", function(){canvasClicked(6, painted, content)});

  var canvas7 = document.getElementById("canvas7");
  canvas7.addEventListener("dblclick", function(){canvasClicked(7, painted, content)});

  var canvas8 = document.getElementById("canvas8");
  canvas8.addEventListener("dblclick", function(){canvasClicked(8, painted, content)});

  var canvas9 = document.getElementById("canvas9");
  canvas9.addEventListener("dblclick", function(){canvasClicked(9, painted, content)});

};
