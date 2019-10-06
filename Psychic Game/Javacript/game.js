// create array for computer choices
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// create variables with the proper values
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersUsed = [];

// create varialbe that allows computer guess to choose randomly from alphabet array
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// create a funtion that documents how many guesses user has left 

function trackGuessesleft() {
	document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
}
// create a function that tallies letters user has chosen so far

function chosenLetters() {
	document.getElementById("letter").textContent = "Your Guesses so far: " + lettersUsed.join(' ');
}

var restart = function() {
	guessesLeft = 9;
	lettersUsed = [];
	
}

// create a function that runs when guest user presses a key to try to match what the computer chose randomly and decreases
// the number of choices left by 1
document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	lettersUsed.push(userGuess);
	trackGuessesleft();
    chosenLetters();
    
// create conditional statements that determine the outcome of the game

	if (userGuess === computerGuess){
		wins++;
		document.getElementById("wins").textContent = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.getElementById("lose").textContent = "Loses: " + losses;
		restart();
	}
	
  };

    













