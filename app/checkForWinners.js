module.exports = function checkForWinners(symbol) {
  for(var a = 0; a < winningCombinations.length; a++){
    if(content[winningCombinations[a][0]]==symbol&&content[winningCombinations[a][1]]==
    symbol&&content[winningCombinations[a][2]]==symbol){
      console.log(symbol + "Won!");
      playAgain();
    }
    }
};
