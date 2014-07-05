module.exports = function canvasClicked (canvasNumber) {
  var turn = 0;
  var squaresFilled = 0;
  var theCanvas = canvasNumber.toString();
  var c = document.getElemenById(theCanvas);
  var cxt = c.getContext("2d");

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
      console.log("The Game Is Over!");
      playAgain();
    }

  } else {
    console.log("That Space Is already Occupied With Your Heart!");
  }
};
