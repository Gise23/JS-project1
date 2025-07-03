/* getComputerChoice will return "rock", "paper", or "scissors" 
1. Create the function sintax.
2. Get a random number and save it on a vble.
3. Divide the possible numbers in 3 groups, (to make it easier multiply *10 so it's up to 10)
4. Assign a word to each of the groups
5. Return the assigned value */

/*getHumanChoice will return one of the valid choices depending on what the user inputs.
1. create the function
1.1 to save the user option
2. ask the user for the variable
3. save the user entry in the created variable*/

/*Player scores
1. create variables humanScore and computerScore
2. initialize them to 0
*/

/*Logic to play a single round. Function that takes the choices as arguments, plays an increments the round winner score and logs a winner announcement. 
    1. Create the sintax of function playRound.
    2. Define humanChoice and computerChoice as arguments.
    3. Make humanChoice parameter case-sensitive in this case transform to lower case always.
    4. Write the code for playground to console.log a string value representing the round winner ex. "You lose! Paper beats Rock"
    5. Increment the humanScore/computerScore based on the round winner.

 Playground function
    1. write the sintax with arguments humanChoice,computerChoice
    2. compare the inputs. first validate if the answer is the same. 
    3 if humanChoice = rock and computer choice = scissors then human wins 
    4. return a string wth the result.
    5. humanScore + 1 
    6. steps 3 to 5 for each of the possible combinations rock-paper, rock-scissor, paper-scissor. for one of them only because if 1 loses the other wins.
*/

/* Write PlayGame, calls playRound 5 times and keeps track of the score + declares final winner. 
    1.Create the function sintax.
    2. Move playRound and score vbles to be declared inside playGame.
    3. Call playRound 5 times.
playGame
    1. Create a vble numGames that counts the times the function has been called
    2. Validate if numGames is <=5 to continue calling playRound or if >5 to finish the game
    3. if numGames is <5 we need to validate which value is higher if the human or computer score 
    4. print a message with the winner 
    5. Restart the game, set variables score and numGames to 0.
*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum =  Math.floor(Math.random() * 10);

    if (randomNum <= 3) {
        return "rock"
    } else if (3 < randomNum <= 6) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    const humanInput = prompt("Write below one of the following: rock,paper or scissors")
                    .toLowerCase();

    if (humanInput === "rock"){
        return "rock"
    }else if (humanInput === "paper") {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        console.log(`It's a tie! You both chose ${humanChoice}.`);
        return;
    }

    const humanLoses = 
        (humanChoice === "rock" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "rock");
        
    if (humanLoses == true) {
        computerScore ++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else{
        humanScore ++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
}

function playOneRound (){

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    console.log(`Score - You: ${humanScore} Vs. Computer: ${computerScore}`);
}

function playGame(){
    for (let i = 0; i <= 5; i++) playOneRound();

    const result = 
        humanScore > computerScore ? "You win the match!" :
        humanScore < computerScore ? "Computer wins!":
        "It’s a draw overall!";
        computerScore = 0;
        humanScore = 0; 
    console.log(result);
}

playGame();
