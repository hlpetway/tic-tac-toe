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
