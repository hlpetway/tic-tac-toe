(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var canvasClicked = require("./canvasClicked");
var checkForWinners = require("./checkForWinners");
var playAgain = require("./playAgain");

var app = function(){

  var painted;
  var content;
  var winningCombinations;

  painted = [];
  content = [];
  winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for(var i = 0; i <= 8; i++) {
  painted[i] = false;
  content[i] = "";
  }
};

//we need a click listener to queue the canvasClicked().

},{"./canvasClicked":2,"./checkForWinners":3,"./playAgain":4}],2:[function(require,module,exports){
module.exports = function canvasClicked (canvasNumber) {
  var turn = 0;
  var squaresFilled = 0;
  var theCanvas = "canvas" + canvasNumber;
  var c = document.getElemenById(theCanvas);
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
    checkForWinners(content[canvasNumber-1]);

    if(squaresFilled == 9){
      console.log("The Game Is Over!");
      playAgain();
    }

  } else {
    console.log("That Space Is already Occupied With Your Heart!");
  }
};

},{}],3:[function(require,module,exports){
module.exports = function checkForWinners(symbol) {
  for(var a = 0; a < winningCombinations.length; a++){
    if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==
    symbol&&content[winningCombinations[a][2]]==symbol){
      console.log(symbol + "Won!");
      playAgain();
    }
    }
};

},{}],4:[function(require,module,exports){
"use strict";

module.exports = function playAgain(){
  var y = prompt("Play Again?");
  if(y === true){
    console.log("Okay! ^^/>");
    document.location.reload(true);
  }
  else {
    console.log("So Long, Sucker!");
  }
};

},{}]},{},[1,2,3,4]);