(()=>{var t={246:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o=n.p+"img/fon.338e19ddca278bd3b8d4ab28cf0a3a96.jpeg"},202:function(){!function(){"use strict";function t(t){var e=!0,n=!1,o=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function r(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function c(t){var e=t.type,n=t.tagName;return!("INPUT"!==n||!s[e]||t.readOnly)||"TEXTAREA"===n&&!t.readOnly||!!t.isContentEditable}function i(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function u(t){t.hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added"))}function a(n){n.metaKey||n.altKey||n.ctrlKey||(r(t.activeElement)&&i(t.activeElement),e=!0)}function d(t){e=!1}function l(t){r(t.target)&&(e||c(t.target))&&i(t.target)}function p(t){r(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),u(t.target))}function m(t){"hidden"===document.visibilityState&&(n&&(e=!0),v())}function v(){document.addEventListener("mousemove",y),document.addEventListener("mousedown",y),document.addEventListener("mouseup",y),document.addEventListener("pointermove",y),document.addEventListener("pointerdown",y),document.addEventListener("pointerup",y),document.addEventListener("touchmove",y),document.addEventListener("touchstart",y),document.addEventListener("touchend",y)}function C(){document.removeEventListener("mousemove",y),document.removeEventListener("mousedown",y),document.removeEventListener("mouseup",y),document.removeEventListener("pointermove",y),document.removeEventListener("pointerdown",y),document.removeEventListener("pointerup",y),document.removeEventListener("touchmove",y),document.removeEventListener("touchstart",y),document.removeEventListener("touchend",y)}function y(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,C())}document.addEventListener("keydown",a,!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",m,!0),v(),t.addEventListener("focus",l,!0),t.addEventListener("blur",p,!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&t(document)}()},831:(t,e,n)=>{var o='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Tools</title> </head> <body> <header> <div class="header-content"> <div class="total-score-container"> <h2>Total score:</h2> <p class="player-total-score"></p> <p class="npc-total-score"></p> </div> <div class="rules__img-container"> <img class="fon-image" src="'+n(91)(n(246))+'"> </div> <div class="rules__text-container"> <h3>Rules:</h3> <p>- Scissors beats a paper,</p> <p>- Paper beats rock,</p> <p>- Rock beats scissors.</p> <p>- And we play up to three wins!</p> </div> </div> <h1>Let\'s play!</h1> </header> <main> <div class="btn-container"> <button id="rock" class="btn">Rock</button> <button id="paper" class="btn">Paper</button> <button id="scissors" class="btn">Scissors</button> </div> <div class="reset-container"> <a class="reset-link" href="">Reset</a> </div> <div class="results-container"> <p class="npc-choice"></p> <p class="round-result"></p> </div> <div class="current-stats-container"> <p class="current-player-stats"></p> <p class="current-npc-stats"></p> </div> </main> </body> </html>';t.exports=o},91:t=>{"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}}},e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,n),s.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.p="",(()=>{"use strict";n(202),n(831);const t=(t,e,n)=>3===t?(setTimeout((()=>{n.totalPlScore+=1,n.resultsNpcStr.textContent="Computer: "+n.npcChoice,n.resultsStr.textContent="=== You won! ===",n.resultsBox.style.backgroundColor="#5B9543",t=0,e=0,n.currentNpcStatsEl.textContent="Computer's wins: "+e,n.currentPlStatsEl.textContent="Your wins: "+t,n.totalPlScoreEl.textContent="You: "+n.totalPlScore}),1e3),"end"):3===e?(setTimeout((()=>{n.totalNpcScore+=1,n.resultsNpcStr.textContent="Computer: "+n.npcChoice,n.resultsStr.textContent="=== Computer won! ===",n.resultsBox.style.backgroundColor="#95435B",t=0,e=0,n.currentNpcStatsEl.textContent="Computer's wins: "+e,n.currentPlStatsEl.textContent="Your wins: "+t,n.totalNpcScoreEl.textContent="Computer: "+n.totalNpcScore}),1e3),"end"):void 0,e=document.querySelector(".btn-container"),o=document.querySelector(".results-container");let s=document.querySelector(".round-result"),r=document.querySelector(".npc-choice"),c=document.querySelector(".current-player-stats"),i=document.querySelector(".current-npc-stats"),u=document.querySelector(".player-total-score"),a=document.querySelector(".npc-total-score"),d={totalPlScoreEl:u,totalNpcScoreEl:a,totalPlScore:0,totalNpcScore:0,currentPlStatsEl:c,currentNpcStatsEl:i,resultsStr:s,resultsNpcStr:r,npcChoice:["Rock","Paper","Scissors"][Math.floor(Math.random()*Math.floor(3))],resultsBox:o,roundNum:0,playerPoints:0,npcPoints:0};c.textContent="Your wins: 0",i.textContent="Computer's wins: 0",a.textContent="Computer: 0",u.textContent="You: 0",e.onclick=function(e){let n=e.target;"BUTTON"==n.tagName&&((t=>{let e=t;e.classList.add("highlight"),setTimeout((()=>{e.classList.remove("highlight")}),2e3)})(n),((t,e,n)=>{let o=t.textContent;if(o!==e.npcChoice)return"Rock"===o?"Paper"===e.npcChoice?void setTimeout((()=>{if(e.roundNum+=1,e.npcPoints+=1,"end"===n(e.playerPoints,e.npcPoints,e))return e.roundNum=0,e.npcPoints=0,void(e.playerPoints=0);e.resultsNpcStr.textContent="Computer: "+e.npcChoice,e.resultsStr.textContent="Round "+e.roundNum+", "+o+" vs "+e.npcChoice+", You've LOST!",e.resultsBox.style.backgroundColor="#95435B",e.currentNpcStatsEl.textContent="Computer's wins: "+e.npcPoints}),1e3):void setTimeout((()=>{if(e.roundNum+=1,e.playerPoints+=1,"end"===n(e.playerPoints,e.npcPoints,e))return e.roundNum=0,e.npcPoints=0,void(e.playerPoints=0);e.resultsNpcStr.textContent="Computer: "+e.npcChoice,e.resultsStr.textContent="Round "+e.roundNum+", "+o+" vs "+e.npcChoice+", You've WIN!",e.resultsBox.style.backgroundColor="#5B9543",e.currentPlStatsEl.textContent="Your wins: "+e.playerPoints}),1e3):"Paper"===o?"Scissors"===e.npcChoice?void setTimeout((()=>{if(e.roundNum+=1,e.npcPoints+=1,"end"===n(e.playerPoints,e.npcPoints,e))return e.roundNum=0,e.npcPoints=0,void(e.playerPoints=0);e.resultsNpcStr.textContent="Computer: "+e.npcChoice,e.resultsStr.textContent="Round "+e.roundNum+", "+o+" vs "+e.npcChoice+", You've LOST!",e.resultsBox.style.backgroundColor="#95435B",e.currentNpcStatsEl.textContent="Computer's wins: "+e.npcPoints}),1e3):void setTimeout((()=>{if(e.roundNum+=1,e.playerPoints+=1,"end"===n(e.playerPoints,e.npcPoints,e))return e.roundNum=0,e.npcPoints=0,void(e.playerPoints=0);e.resultsNpcStr.textContent="Computer: "+e.npcChoice,e.resultsStr.textContent="Round "+e.roundNum+", "+o+" vs "+e.npcChoice+", You've WIN!",e.resultsBox.style.backgroundColor="#5B9543",e.currentPlStatsEl.textContent="Your wins: "+e.playerPoints}),1e3):"Scissors"===o?"Rock"===e.npcChoice?void setTimeout((()=>{if(e.roundNum+=1,e.npcPoints+=1,"end"===n(e.playerPoints,e.npcPoints,e))return e.roundNum=0,e.npcPoints=0,void(e.playerPoints=0);e.resultsNpcStr.textContent="Computer: "+e.npcChoice,e.resultsStr.textContent="Round "+e.roundNum+", "+o+" vs "+e.npcChoice+", You've LOST!",e.resultsBox.style.backgroundColor="#95435B",e.currentNpcStatsEl.textContent="Computer's wins: "+e.npcPoints}),1e3):void setTimeout((()=>{if(e.roundNum+=1,e.playerPoints+=1,"end"===n(e.playerPoints,e.npcPoints,e))return e.roundNum=0,e.playerPoints=0,void(e.npcPoints=0);e.resultsNpcStr.textContent="Computer: "+e.npcChoice,e.resultsStr.textContent="Round "+e.roundNum+", "+o+" vs "+e.npcChoice+", You've WIN!",e.resultsBox.style.backgroundColor="#5B9543",e.currentPlStatsEl.textContent="Your wins: "+e.playerPoints}),1e3):void 0;setTimeout((()=>{e.resultsNpcStr.textContent="Computer: "+e.npcChoice,e.resultsStr.textContent="Round draw",e.resultsBox.style.backgroundColor="yellow"}),1e3)})(n,d,t))}})()})();