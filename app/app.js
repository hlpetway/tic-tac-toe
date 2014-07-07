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
