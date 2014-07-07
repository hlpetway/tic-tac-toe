(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./canvasClicked":2}],2:[function(require,module,exports){
"use strict";


var playAgain = require("./playAgain");
var checkForWinners = require("./checkForWinners");

module.exports = function (canvasNumber, painted, content) {

  var turn = 0;
  var squaresFilled = 0;
  var theCanvas = "canvas" + canvasNumber;
  var c = document.getElementById(theCanvas);
  var cxt = c.getContext("2d");

  if(painted[canvasNumber-1] === false){
    if(turn % 2 === 0){
      cxt.beginPath();
      cxt.moveTo(10,10);
      cxt.lineTo(40,40);
      cxt.moveTo(40,10);
      cxt.lineTo(10,40);
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = "X";
    }
    else {
      cxt.beginPath();
      cxt.arc(25,25,20,0,Math.PI*2, true);
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = "0";
    }
    turn++;
    painted[canvasNumber-1] = true;
    squaresFilled++;
    checkForWinners(content[canvasNumber-1], content);

    if(squaresFilled === 9){
      console.log("The Game Is Over!");
      playAgain();
    }

  } else {
    console.log("That Space Is already Occupied With Your Heart!");
  }
};



},{"./checkForWinners":3,"./playAgain":4}],3:[function(require,module,exports){
var playAgain = require("./playAgain");

module.exports = function checkForWinners(symbol, content) {

  var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for(var i = 0; i < winningCombinations.length; i++){
    if(content[winningCombinations[i][0]] ===
    symbol && content[winningCombinations[i][1]] ===
    symbol && content[winningCombinations[i][2]] === symbol){
      console.log(symbol + " Won!");
      playAgain();
    }
    }
};

},{"./playAgain":4}],4:[function(require,module,exports){
"use strict";

module.exports = function playAgain(){
  var y = confirm("Play Again?");
  if(y === true){
    console.log("Okay! ^^/>");
    document.location.reload(true);
  }
  else {
    console.log("So Long, Sucker!");
  }
};

},{}]},{},[1,2,3,4]);