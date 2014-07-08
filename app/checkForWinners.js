var playAgain = require("./playAgain");

module.exports = function checkForWinners(symbol, content) {

  var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  for(var i = 0; i < winningCombinations.length; i++){
    if(content[winningCombinations[i][0]] ===
    symbol && content[winningCombinations[i][1]] ===
    symbol && content[winningCombinations[i][2]] === symbol){
      window.alert(symbol + " Won!");
      playAgain();
    }
    }
};
