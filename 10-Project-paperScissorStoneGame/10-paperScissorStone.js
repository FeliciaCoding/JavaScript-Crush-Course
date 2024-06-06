
const choices = document.querySelectorAll(".rpsButton"); 

const handsDiv = document.getElementById("hands");
const resultDiv = document.getElementById("result");
const playerScoreDiv = document.getElementById("player-score");
const endGameButtonDiv = document.getElementById("endGameButton");

const getComputerChoice = () => {
// !!!!! Need an Array to access elements by pos. not a node list

    const choiceArray = ["Rock", "Paper", "Scissors"]

    const choicesLength = choiceArray.length; 
    const pos = Math.floor(Math.random() * choicesLength); 
    const computerChoice = choiceArray[pos];

    const messageConsole = "Random Computer Choice : "; 
    console.log(`${messageConsole}${computerChoice}`);

    // !!!!! Dont forget : 
    return computerChoice;
}


let choicesNum = {"Rock" : 3, "Scissors" : 2, "Paper" : 1};

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    const playerChoiceValue = choicesNum[playerChoice]; 
    const computerChoiceValue = choicesNum[computerChoice]; 

    let score; 

    /*
    if (playerChoiceValue == computerChoiceValue){
        score = 0; 
    } else if (playerChoiceValue == 1 && computerChoiceValue == 3){
        score = 1; 
    } else if (playerChoiceValue == 3 && computerChoiceValue == 1){
        score = -1; 
    } else if (playerChoiceValue > computerChoiceValue){
        score = 1; 
    } else if (playerChoiceValue < computerChoiceValue){
        score = -1; 
    }
    */

    if (playerChoiceValue === computerChoiceValue){
        score = 0; 
    } else if ((playerChoiceValue === 1 && computerChoiceValue === 3) || 
               (playerChoiceValue === 3 && computerChoiceValue === 1)){
        score = (playerChoiceValue === 1) ? 1 : -1; // Rock (1) wins against Scissors (3)
    } else {
        score = (playerChoiceValue > computerChoiceValue) ? 1 : -1;
    }




/*
  // modular arithmetic to determine the result
  const result = (playerChoiceValue - computerChoiceValue + 3) % 3;

  if (result === 0) {
    score = 0; 
  } else if (result === 1) {
    score = 1; 
  } else {
    score = -1; 
  }
*/
    return score; 
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

  //computerChoice = getComputerChoice();
  score = getResult(playerChoice,computerChoice); 

  // !!!!! using == instead of = 
  if (score == 1){
    resultDiv.innerText = "You Win!"; 
  } else if (score == -1){
    resultDiv.innerText = "You Lose!";
  } else if (score == 0){
    resultDiv.innerText = "It's a Draw!";
  } else {
    resultDiv.innerText = "There is an error";
  }

  
  handsDiv.innerText = `${playerChoice} v.s. ${computerChoice}`;

  playerScoreDiv.innerText = score;

}

//** once click, DOM get result and display the result */
const onClickRPS = (playerChoice) =>{

    // Using const rather than let 
    const computerChoice = getComputerChoice(); 
    const score = getResult(playerChoice, computerChoice); 
    showResult(score, playerChoice, computerChoice); 
    
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    resultDiv.innerText ="";
    handsDiv.innerText = "";
    playerScoreDiv.innerText = "";
}

function playGame() {

  choices.forEach(choice => {
    choice.onclick = () => {

        // !!!!! activate playerChoice once clicked
        // const playerChoice = choice;  
        const playerChoice = choice.value; 
        onClickRPS(playerChoice);
        console.log(`I clicked : ${playerChoice}` );
    }
  })
  // Add a click listener to the end game button that runs the endGame() function on click
  endGameButtonDiv.onclick = () => {
    endGame();
  }
}

playGame()