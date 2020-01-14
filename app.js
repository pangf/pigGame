/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying;
init();
/*game switch*/
$('.dice').css('display', 'none');

$('.btn-roll').click(function() {
	if (gamePlaying) {
		//create an random number
		var dice = Math.floor(Math.random() * 6) + 1;
		//dispaly result
		$('.dice').css('display', 'block');
		$('.dice').attr('src', 'dice-' + dice + '.png');
		//update round score if the rolled number is not 1
		if (dice != 1) {
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
		//if player win
		if (scores[activePlayer] >= 10) {
			$('#name-' + activePlayer).html('winner!!');
			$('.dice').css('display', 'none');
			$('.player-' + activePlayer + '-panel').addClass('winner');
			$('.player-' + activePlayer + '-panel').removeClass('active');
			gamePlaying = false;
		} else {
			nextPlayer();
		}
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
