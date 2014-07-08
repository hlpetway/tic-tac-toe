"use strict";
var canvasClicked = require("./canvasClicked");

  //Instanciate Arrays
window.onload=function(){

  var painted = [];
  var content = [];
  var turn = [0];     //Todo: Replace this with a closure in canvasClicked
  var squaresFilled = [0];

  for(var i = 0; i <= 8; i++) {
  painted[i] = false;
  content[i] = "";
  }

  //Todo: Turn canvasclicked's parameters into an options object.

  var canvas1 = document.getElementById("canvas1");
  canvas1.addEventListener("click", function(){canvasClicked(1, painted, turn, squaresFilled, content)});

  var canvas2 = document.getElementById("canvas2");
  canvas2.addEventListener("click", function(){canvasClicked(2, painted, turn, squaresFilled, content)});

  var canvas3 = document.getElementById("canvas3");
  canvas3.addEventListener("click", function(){canvasClicked(3, painted, turn, squaresFilled, content)});

  var canvas4 = document.getElementById("canvas4");
  canvas4.addEventListener("click", function(){canvasClicked(4, painted, turn, squaresFilled, content)});

  var canvas5 = document.getElementById("canvas5");
  canvas5.addEventListener("click", function(){canvasClicked(5, painted, turn, squaresFilled, content)});

  var canvas6 = document.getElementById("canvas6");
  canvas6.addEventListener("click", function(){canvasClicked(6, painted, turn, squaresFilled, content)});

  var canvas7 = document.getElementById("canvas7");
  canvas7.addEventListener("click", function(){canvasClicked(7, painted, turn, squaresFilled, content)});

  var canvas8 = document.getElementById("canvas8");
  canvas8.addEventListener("click", function(){canvasClicked(8, painted, turn, squaresFilled, content)});

  var canvas9 = document.getElementById("canvas9");
  canvas9.addEventListener("click", function(){canvasClicked(9, painted, turn, squaresFilled, content)});

};
