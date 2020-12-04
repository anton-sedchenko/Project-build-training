import '../node_modules/focus-visible/dist/focus-visible';
import '../css/style.css';
import '../scss/main.scss';
import '../index.html';
import {highlight} from '../js/btn_highlight_module';
import {npc} from '../js/npc_module';
import {winnerCheck} from '../js/winnerCheck_module';
import {round} from '../js/round_module';

const buttonsBox = document.querySelector('.btn-container');
const resultsBox = document.querySelector('.results-container');
let resultsStr = document.querySelector('.round-result');
let resultsNpcStr = document.querySelector('.npc-choice');
let currentPlStatsEl = document.querySelector('.current-player-stats');
let currentNpcStatsEl = document.querySelector('.current-npc-stats');
let totalPlScoreEl = document.querySelector('.player-total-score');
let totalNpcScoreEl = document.querySelector('.npc-total-score');
let roundNum = 0;
let playerPoints = 0;
let npcPoints = 0;
let totalPlScore = 0;
let totalNpcScore = 0;

let store = {
   totalPlScoreEl: totalPlScoreEl,
   totalNpcScoreEl: totalNpcScoreEl,
   totalPlScore: totalPlScore,
   totalNpcScore: totalNpcScore,
   currentPlStatsEl: currentPlStatsEl,
   currentNpcStatsEl: currentNpcStatsEl,
   resultsStr: resultsStr,
   resultsNpcStr: resultsNpcStr,
   npcChoice: npc(),
   resultsBox: resultsBox,
   roundNum: roundNum,
   playerPoints: playerPoints,
   npcPoints: npcPoints
}

currentPlStatsEl.textContent = 'Your wins: 0';
currentNpcStatsEl.textContent = 'Computer\'s wins: 0';
totalNpcScoreEl.textContent = 'Computer: ' + totalNpcScore;
totalPlScoreEl.textContent = 'You: ' + totalPlScore;

buttonsBox.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'BUTTON') {
    return;
  }

  highlight(target);
  round(target, store, winnerCheck);
};
