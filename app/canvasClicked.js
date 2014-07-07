"use strict";


var playAgain = require("./playAgain");
var checkForWinners = require("./checkForWinners");

module.exports = function (canvasNumber, painted, turn, content) {

  var squaresFilled = 0;
  var theCanvas = "canvas" + canvasNumber;
  var c = document.getElementById(theCanvas);
  var cxt = c.getContext("2d");

  if(painted[canvasNumber-1] === false){
    if(turn[0] % 2 === 0){
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
    turn[0] = turn[0] + 1;
    painted[canvasNumber-1] = true;
    squaresFilled++;
    checkForWinners(content[canvasNumber-1], content);

    if(squaresFilled === 9){
      window.alert("The Game Is Over!");
      playAgain();
    }

  } else {
    window.alert("That Space Is already Occupied!");
  }
};


