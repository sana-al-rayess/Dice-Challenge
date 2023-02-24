
function rollDice() {
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var result1 = Math.floor(Math.random() * 6) + 1;
    var result2 = Math.floor(Math.random() * 6) + 1;
    dice1.src = "dice" + result1 + ".png";
    dice2.src = "dice" + result2 + ".png";
    
    var winnerElement = document.getElementById("winner");
    if (result1 > result2) {
        winnerElement.textContent = "Player 1 Wins!"
    } else if (result1 < result2) {
        winnerElement.textContent = "Player 2 Wins!"
    } else {
        winnerElement.textContent = "Draw!";
    }
  }
  
