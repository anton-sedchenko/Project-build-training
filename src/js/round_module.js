export const round = (el, store, winnerCheck) => {
  let playerChoice = el.textContent;

  if (playerChoice === store.npcChoice) {
    setTimeout(() => {
      store.resultsNpcStr.textContent = 'Computer: ' + store.npcChoice;
      store.resultsStr.textContent = 'Round draw';
      store.resultsBox.style.backgroundColor = 'yellow';
    }, 1000);

    return;
  }

  if (playerChoice === 'Rock') {
    if (store.npcChoice === 'Paper') {
      setTimeout(() => {
        store.roundNum += 1;
        store.npcPoints += 1;

        if (winnerCheck(store.playerPoints, store.npcPoints, store) === 'end') {
          store.roundNum = 0;
          store.npcPoints = 0;
          store.playerPoints = 0;

          return;
        }

        store.resultsNpcStr.textContent = 'Computer: ' + store.npcChoice;
        store.resultsStr.textContent = 'Round ' + store.roundNum + ', ' + playerChoice + ' vs ' + store.npcChoice + ', You\'ve LOST!';
        store.resultsBox.style.backgroundColor = '#95435B';
        store.currentNpcStatsEl.textContent = 'Computer\'s wins: ' + store.npcPoints;
      }, 1000);

      return;
    } else {
      setTimeout(() => {
        store.roundNum += 1;
        store.playerPoints += 1;

        if (winnerCheck(store.playerPoints, store.npcPoints, store) === 'end') {
          store.roundNum = 0;
          store.npcPoints = 0;
          store.playerPoints = 0;
          
          return;
        }

        store.resultsNpcStr.textContent = 'Computer: ' + store.npcChoice;
        store.resultsStr.textContent = 'Round ' + store.roundNum + ', ' + playerChoice + ' vs ' + store.npcChoice + ', You\'ve WIN!';
        store.resultsBox.style.backgroundColor = '#5B9543';
        store.currentPlStatsEl.textContent = 'Your wins: ' + store.playerPoints;
      }, 1000);

      return;
    }
  }

  if (playerChoice === 'Paper') {
    if (store.npcChoice === 'Scissors') {
      setTimeout(() => {
        store.roundNum += 1;
        store.npcPoints += 1;

        if (winnerCheck(store.playerPoints, store.npcPoints, store) === 'end') {
          store.roundNum = 0;
          store.npcPoints = 0;
          store.playerPoints = 0;
          
          return;
        }

        store.resultsNpcStr.textContent = 'Computer: ' + store.npcChoice;
        store.resultsStr.textContent = 'Round ' + store.roundNum + ', ' + playerChoice + ' vs ' + store.npcChoice + ', You\'ve LOST!';
        store.resultsBox.style.backgroundColor = '#95435B';
        store.currentNpcStatsEl.textContent = 'Computer\'s wins: ' + store.npcPoints;
      }, 1000);

      return;
    } else {
      setTimeout(() => {
        store.roundNum += 1;
        store.playerPoints += 1;

        if (winnerCheck(store.playerPoints, store.npcPoints, store) === 'end') {
          store.roundNum = 0;
          store.npcPoints = 0;
          store.playerPoints = 0;
          
          return;
        }

        store.resultsNpcStr.textContent = 'Computer: ' + store.npcChoice;
        store.resultsStr.textContent = 'Round ' + store.roundNum + ', ' + playerChoice + ' vs ' + store.npcChoice + ', You\'ve WIN!';
        store.resultsBox.style.backgroundColor = '#5B9543';
        store.currentPlStatsEl.textContent = 'Your wins: ' + store.playerPoints;

      }, 1000);

      return;
    }
  }

  if (playerChoice === 'Scissors') {
    if (store.npcChoice === 'Rock') {
      setTimeout(() => {
        store.roundNum += 1;
        store.npcPoints += 1;

        if (winnerCheck(store.playerPoints, store.npcPoints, store) === 'end') {
          store.roundNum = 0;
          store.npcPoints = 0;
          store.playerPoints = 0;
          
          return;
        }

        store.resultsNpcStr.textContent = 'Computer: ' + store.npcChoice;
        store.resultsStr.textContent = 'Round ' + store.roundNum + ', ' + playerChoice + ' vs ' + store.npcChoice + ', You\'ve LOST!';
        store.resultsBox.style.backgroundColor = '#95435B';
        store.currentNpcStatsEl.textContent = 'Computer\'s wins: ' + store.npcPoints;
      }, 1000);

      return;
    } else {
      setTimeout(() => {
        store.roundNum += 1;
        store.playerPoints += 1;

        if (winnerCheck(store.playerPoints, store.npcPoints, store) === 'end') {
          store.roundNum = 0;
          store.playerPoints = 0;
          store.npcPoints = 0;
          
          return;
        }

        store.resultsNpcStr.textContent = 'Computer: ' + store.npcChoice;
        store.resultsStr.textContent = 'Round ' + store.roundNum + ', ' + playerChoice + ' vs ' + store.npcChoice + ', You\'ve WIN!';
        store.resultsBox.style.backgroundColor = '#5B9543';
        store.currentPlStatsEl.textContent = 'Your wins: ' + store.playerPoints;
      }, 1000);

      return;
    }
  }
}
