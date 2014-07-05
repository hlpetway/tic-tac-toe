"use strict";

var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var y;

//Instanciate Arrays
window.onload=function(){
  painted = [];
  content = [];
  winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for(var i = 0; i <= 8; i++) {
  painted[i] = false;
  content[i] = "";
  }
};

  //Game methods
var canvasClicked = function(canvasNumber){
  theCanvas = "canvas" + canvasNumber;
  c = document.getElemenById(theCanvas);
  cxt = c.getContext("2d");

  if(painted[canvasNumber -1] === false){
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
      alert("The Game Is Over!");
      location.reload(true);
    }

  } else {
    alert("That Space Is already Occupied With Your Heart!");
  }
};

function checkForWinners(symbol) {
  for(var a = 0; a < winningCombinations.length; a++){
    if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==
    symbol&&content[winningCombinations[a][2]]==symbol){
      alert(symbol + "Won!");
      playAgain();
    }
    }
}

function playAgain(){
  y = confirm("Play Again?");
  if(y === true){
    alert("Okay! ^^/>");
    location.reload(true);
  }
  else {
    alert("So Long, Sucker!");
  }
}
