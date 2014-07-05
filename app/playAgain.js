module.exports = function playAgain(){
  var y;
  y = window.prompt("Play Again?");
  if(y === true){
    console.log("Okay! ^^/>");
    location.reload(true);
  }
  else {
    console.log("So Long, Sucker!");
  }
}
};
