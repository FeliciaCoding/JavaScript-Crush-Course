/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/


const choices = document.querySelectorAll(".rpsButton"); 

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'

const getComputerChoice = () => {
// !!!!! Need an Array to access elements by pos. not a node list

    const choiceArray = ["Rock", "Paper", "Scissors"]
    const choicesLength = choiceArray.length; 
    const pos = Math.floor(Math.random() * choicesLength); 
    const messageConsole = "Random Computer Choice : "; 
    const computerChoice = choiceArray[pos];
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
  // return the result of score based on if you won, drew, or lost
  
  let score; 

  //const choice = choices.value;
  const playerChoiceValue = choicesNum[playerChoice]; 
  const computerChoiceValue = choicesNum[computerChoice]; 


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

  return score; 
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

  computerChoice = getComputerChoice();
  score = getResult(playerChoice,computerChoice); 

  const resultDiv = document.getElementById("result");
  if (score = 1){
    resultDiv.innerText = "You Win!"; 
  } else if (score = -1){
    resultDiv.innerText = "You Lose!";
  } else if (score = 0){
    resultDiv.innerText = "It's a Draw!";
  } else {
    resultDiv.innerText = "There is an error";
  }

  const handsDiv = document.getElementById("hands");
  handsDiv.innerText = `${playerChoice} v.s. ${computerChoice}`;

  const playerScoreDiv = document.getElementById("player-score"); 
  playerScoreDiv.innerText = score;

}

//** once click, DOM get result and display the result */
const onClickRPS = (playerChoice) =>{

    let computerChoice = getComputerChoice(); 
    let score = getResult(playerChoice, computerChoice); 
    showResult(score, playerChoice, computerChoice); 
    

}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
}

function playGame() {

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
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
  const endGameButtonDiv = document.getElementById("endGameButton"); 
  endGameButtonDiv.onclick = () => {
    endGame();
  }
}

playGame()