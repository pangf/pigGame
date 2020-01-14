/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores,activePlayer;
scores=[0,0];
roundScores=0;
activePlayer=0;


/*player1 current scores*/
// $("#current-"+activePlayer).html(dice);
/*hide dice at the beginner of the game*/
$(".dice").css("display","none");
$(".btn-roll").click(function(){
    //create an random number
     var dice=Math.floor(Math.random()*6)+1;
    //dispaly result 
    $(".dice").css("display","block");
    $(".dice").attr("src",'dice-'+dice+'.png');
    //update round score if the rolled number is not 1
    

    if (dice!=1){
        //add score
        roundScores+=dice;
        $("#current-"+activePlayer).html(roundScores);
 
    }else{

        nextPlayer()

    }
});

//hold function 
$(".btn-hold").click(function(){
    //add current to global
    scores[activePlayer]+=roundScores;
    roundScores=0;
    //update UI
    $("#score-"+activePlayer).html(scores[activePlayer]); 
         //if player win 
    if (scores[activePlayer]>=10){
       
        $("#name-"+activePlayer).html("winner!!");
    }else{
    nextPlayer()
    }
});

function nextPlayer(){
    activePlayer===0? activePlayer=1:activePlayer=0;
    roundScores=0;
    $("#current-"+activePlayer).html(0);
    $(".player-0-panel").toggleClass("active");
    $(".player-1-panel").toggleClass("active");
    $(".dice").css("display","none");

}