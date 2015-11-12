////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
// 'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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

var move;

function getPlayerMove(move) {
	return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    console.log("The player move: " +playerMove);
    console.log("The computer move: "+computerMove);
	if (playerMove == "rock" && computerMove == "scissors")	 {
			winner = 'player';			
		}
		else if (playerMove == "paper" && computerMove == "rock") {
			winner = 'player';
		}
		else if (playerMove == "scissors" && computerMove == "paper") {
		        winner = 'player';
		}	
		else if (playerMove == computerMove) {
			winner = "tie";
		}
		else {
			winner = 'computer';
		}
    return winner || 'error';
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    // Play to five
    while ( (playerWins < 5) && (computerWins < 5)) {
        result = getWinner(getPlayerMove(), getComputerMove());
        if (result == 'player') { 
            playerWins++;
        }
        else if (result == 'computer') {
            computerWins++;
        }
        console.log("Player: "+playerWins+", Computer: "+computerWins);
    }
    
    if (playerWins == 5 ){
        return 'Congratulations, you have won the game!';
    }
    else if (computerWins == 5) {
        return 'Too bad, the computer has won the game.'
    }
}

playToFive();