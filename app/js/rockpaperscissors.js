////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    if (move != null)
        return move;
    else {
        return getInput();
    }
}

function getComputerMove(move) {
    if (move != null) {
        return move;
    }
    else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
   } 
   else if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "paper")) {
        winner = "player";
   } 
   else {
        winner = "computer";
    }
        return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var pMove = getPlayerMove();
    var cMove = getComputerMove();
    var winner = getWinner(pMove, cMove);

    while (playerWins < 5 && computerWins < 5)
    if (winner === 'player'){
        playerWins ++;
        console.log ("You won that game with " + pMove + " against "  + cMove + ". The scores are " + playerWins + " to you and "  + computerWins + " to the  computer.");
    }
    else if (winner === 'computer'){
        computerWins ++;
        console.log ("You lost that game with "  + pMove + " against " + cMove + ". The scores are "   + playerWins + " to you and "  + computerWins + " to the computer.");
    }
    else if (winner === "tie") {
       console.log ("Thats was a tie. The scores are " + playerWins + " to you and "  + computerWins + " to the computer.");
    }  

    return [playerWins, computerWins];
}

playToFive();

if (playerWins == 5){
    console.log("Player wins 5 times");
}
if (computerWins == 5){
    console.log("Computer wins 5 times");
}
