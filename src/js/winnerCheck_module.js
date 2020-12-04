export const winnerCheck = (playerPoints, npcPoints, store) => {
  if (playerPoints === 3) {
    setTimeout(() => {
      store.totalPlScore += 1;
      store.resultsNpcStr.textContent = 'Computer: ' + store.npcChoice;
      store.resultsStr.textContent = '=== You won! ===';
      store.resultsBox.style.backgroundColor = '#5B9543';
      playerPoints = 0;
      npcPoints = 0;
      store.currentNpcStatsEl.textContent = 'Computer\'s wins: ' + npcPoints;
      store.currentPlStatsEl.textContent = 'Your wins: ' + playerPoints;
      store.totalPlScoreEl.textContent = 'You: ' + store.totalPlScore;
    }, 1000);

    return 'end';
  }

  if (npcPoints === 3) {
    setTimeout(() => {
      store.totalNpcScore += 1;
      store.resultsNpcStr.textContent = 'Computer: ' + store.npcChoice;
      store.resultsStr.textContent = '=== Computer won! ===';
      store.resultsBox.style.backgroundColor = '#95435B';
      playerPoints = 0;
      npcPoints = 0;
      store.currentNpcStatsEl.textContent = 'Computer\'s wins: ' + npcPoints;
      store.currentPlStatsEl.textContent = 'Your wins: ' + playerPoints;
      store.totalNpcScoreEl.textContent = 'Computer: ' + store.totalNpcScore;
    }, 1000);

    return 'end';
  }
}
