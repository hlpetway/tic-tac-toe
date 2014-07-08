(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./canvasClicked":2}],2:[function(require,module,exports){
"use strict";


var playAgain = require("./playAgain");
var checkForWinners = require("./checkForWinners");

module.exports = function (canvasNumber, painted, turn, squaresFilled, content) {

  var theCanvas = "canvas" + canvasNumber;
  var c = document.getElementById(theCanvas);
  var cxt = c.getContext("2d");

  if(painted[canvasNumber-1] === false){
    if(turn[0] % 2 === 0){                //Todo: Replace this with a closure.
      cxt.beginPath();
      cxt.moveTo(10,10);
      cxt.lineTo(40,40);
      cxt.moveTo(40,10);
      cxt.lineTo(10,40);
      cxt.strokeStyle = "#ff0000";
      cxt.lineWidth = 3;
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = "X";
    }
    else {
      cxt.beginPath();
      cxt.arc(25,25,20,0,Math.PI*2, true);
      cxt.strokeStyle = "#ff0000";
      cxt.lineWidth = 3;
      cxt.stroke();
      cxt.closePath();
      content[canvasNumber-1] = "0";
    }
    turn[0] = turn[0] + 1;                //Todo: Replace this with a closure.
    painted[canvasNumber-1] = true;
    squaresFilled[0] = squaresFilled[0] + 1;
    checkForWinners(content[canvasNumber-1], content);

    if(squaresFilled[0] === 9){
      window.alert("The Game Is Over!");
      playAgain();
    }

  } else {
    window.alert("That Space Is already Occupied!");
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
      window.alert(symbol + " Won!");
      playAgain();
    }
    }
};

},{"./playAgain":4}],4:[function(require,module,exports){
"use strict";

module.exports = function playAgain(){
  var y = confirm("Play Again?");
  if(y === true){
    window.alert("Okay! Here goes!");
    document.location.reload(true);
  }
  else {
    window.alert("So Long, Sucker!");
  }
};

},{}]},{},[1,2,3,4]);