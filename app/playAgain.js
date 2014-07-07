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
