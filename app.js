/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores,activePlayer,dice;
scores=[0,0];
roundScores=0;
activePlayer=0;
dice=Math.floor(Math.random()*6)+1;
console.log(dice);
/*player1 current scores*/
$("#current-"+activePlayer).html(dice);
/*hide dice at the beginner of the game*/

$(".dice").css("display","none");