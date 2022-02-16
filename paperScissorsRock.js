// Paper Scissors Rock project for The Odin Project


// Create global variables
const possibleMoves = ['Rock','Paper','Scissors']

let roundNumber = 1
let computerScore = 0
let playerScore = 0
let drawScore = 0

// Create the computerPlay function to randomise the computer move
function computerPlay() {
    const rand = possibleMoves[(Math.random() * possibleMoves.length) | 0]
    return rand
}

// playRound function with game rules declared
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" & computerSelection.toLowerCase() === "paper") {
        console.log("You Win! Rock beats paper")
        playerScore++
    } else if (playerSelection.toLowerCase() === "rock" & computerSelection.toLowerCase() === "scissors") {
        console.log("You Win! Rock beats scissors")
        playerScore++
    } else if (playerSelection.toLowerCase() === "rock" & computerSelection.toLowerCase() === "rock") {
        console.log("Draw!")
        drawScore++
    } else if (playerSelection.toLowerCase() === "paper" & computerSelection.toLowerCase() === "rock") {
        console.log("You lose... Rock beats paper")
        computerScore++
    } else if (playerSelection.toLowerCase() === "paper" & computerSelection.toLowerCase() === "scissors") {
        console.log("You lose... Scissors beat paper")
        computerScore++
    } else if (playerSelection.toLowerCase() === "paper" & computerSelection.toLowerCase() === "paper") {
        console.log("Draw!")
        drawScore++
    } else if (playerSelection.toLowerCase() === "scissors" & computerSelection.toLowerCase() === "rock") {
        console.log("You lose... Rock beats scissors")
        computerScore++
    } else if (playerSelection.toLowerCase() === "scissors" & computerSelection.toLowerCase() === "paper") {
        console.log("You Win! Scissors beat paper")
        playerScore++
    } else if (playerSelection.toLowerCase() === "scissors" & computerSelection.toLowerCase() === "scissors") {
        console.log("Draw!")
        drawScore++
    }
    else {
        console.log("Error, check code")
    }
}

// function to play 5 games with scores displayed
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Paper, Scissors or Rock?")
        let computerSelection = computerPlay()

        console.log("Round " + roundNumber)
        console.log("You chose " + playerSelection.toLowerCase())
        console.log("The computer chose " + computerSelection.toLowerCase())
        playRound(playerSelection, computerSelection)
        roundNumber++
        console.log(" ")
        console.log("Score:")
        console.log("Player: " + playerScore)
        console.log("Computer: " + computerScore)
        console.log("Draws: " + drawScore)
        console.log(" ")
        console.log(" ")
    }
    if (playerScore > computerScore) {
        console.log("You won! Final score:")
        console.log("Player: " + playerScore)
        console.log("Computer: " + computerScore)
        console.log("Draws: " + drawScore)
    } else if (playerScore < computerScore) {
        console.log("You lose... Final score:")
        console.log("Player: " + playerScore)
        console.log("Computer: " + computerScore)
        console.log("Draws: " + drawScore)
    } else {
        console.log("It's a draw! Final score:")
        console.log("Player: " + playerScore)
        console.log("Computer: " + computerScore)
        console.log("Draws: " + drawScore)
    }
}

// Start game
game();
