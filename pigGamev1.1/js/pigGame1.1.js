/*
GAME RULES:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScores, activePlayer, gamePlaying, lastDice;
init();
/*game switch*/
$('.dice').css('display', 'none');

$('.btn-roll').click(function() {
	if (gamePlaying) {
		//create an random number
		var dice = Math.floor(Math.random() * 6) + 1;
		//dispaly result
		$('.dice').css('display', 'block');
		$('.dice').attr('src', 'images/dice-' + dice + '.png');
		//if player rows 2 6 in one round, player will lose mark and lose game.
		if (dice===6 && lastDice===6){
			scores[activePlayer]=0;
			$("current-"+activePlayer).html(0);
			nextPlayer();
	
		}else if (dice != 1) {
			//add score
			roundScores += dice;
			$('#current-' + activePlayer).html(roundScores);
		} else {
			nextPlayer();
		}
	}
	
		
});
//hold function
$('.btn-hold').click(function() {
	if (gamePlaying) {
		//add current to global
		scores[activePlayer] += roundScores;
		roundScores = 0;
		//update UI
		$('#score-' + activePlayer).html(scores[activePlayer]);
		//get final win number
		if(input){
			var winPoint=$(".finalScore").val();
			console.log(winPoint);
			$(".btn-win").click(function() {
				$(".point-win").html(winPoint);
				console.log(winPoint);
			});

		}else{
			winPoint=100;
		}
	
	
		//if player win
		if (scores[activePlayer] >=winPoint) {
			$('#name-' + activePlayer).html('winner!!');
			$('.dice').css('display', 'none');
			$('.player-' + activePlayer + '-panel').addClass('winner');
			$('.player-' + activePlayer + '-panel').removeClass('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
		lastDice=dice;

	}
});

//statrt a new game
$('.btn-new').click(function() {
	init();
	$('.player-0-panel').addClass('active');
	$('.player-1-panel').removeClass('active');
	$('.player-' + activePlayer + '-panel').removeClass('winner');
	$('#name-0').html('player-1');
    $('#name-1').html('player-2');
   
});

function nextPlayer() {
    $('#current-' + activePlayer).html(0);
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	roundScores = 0;
	$('#current-' + activePlayer).html(0);
	$('.player-0-panel').toggleClass('active');
	$('.player-1-panel').toggleClass('active');
	$('.dice').css('display', 'none');
}

function init() {
	scores = [ 0, 0 ];
	roundScores = 0;
	activePlayer = 0;
    gamePlaying = true;
    $(".player-score").html(0);
    $(".player-current-score").html(0);
}
