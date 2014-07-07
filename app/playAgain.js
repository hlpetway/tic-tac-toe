"use strict";

module.exports = function playAgain(){
  var y = confirm("Play Again?");
  if(y === true){
    alert("Okay! ^^/>");
    document.location.reload(true);
  }
  else {
    alert("So Long, Sucker!");
  }
};
