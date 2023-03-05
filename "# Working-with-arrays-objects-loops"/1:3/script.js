function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function startGame() {
    const a = { name: 'A', rolls: 0 };
    const b = { name: 'B', rolls: 0 };
  
    while (true) {
      const rollA = rollDice();
      a.rolls++;
  
      if (rollA === 3) {
        break;
      }
    }
  
    while (true) {
      const rollB = rollDice();
      b.rolls++;
  
      if (rollB === 3) {
        break;
      }
    }
  
    let winner = '';
    if (a.rolls < b.rolls) {
      winner = a.name;
    } else if (b.rolls < a.rolls) {
      winner = b.name;
    } else {
      winner = 'It\'s a tie!';
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Winner: ${winner}`;
  }
  