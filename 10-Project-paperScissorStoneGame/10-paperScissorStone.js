// 1. connect JS  to HTML (query / DIV)
// 2. functions 
// 3. Main function using fucntions 
// 4. Call main function 

const choicesQuery = document.querySelectorAll(".rpsButton"); 

const handsDiv = document.getElementById("hands");
const resultDiv = document.getElementById("result");
const playerScoreDiv = document.getElementById("player-score");
const endGameButtonDiv = document.getElementById("endGameButton");

const getComputerChoice = () => {
// !!!!! Need an Array to access elements by pos. not a node list

    const choicesArray = ["Rock", "Paper", "Scissors"]

    const choicesLength = choicesArray.length; 
    const pos = Math.floor(Math.random() * choicesLength); 
    const computerChoice = choicesArray[pos];

    // !!!!! Dont forget : 
    return computerChoice;
}

// const setInitialTotalScore = () => {return currentTotalScore = 0;}

let choicesQueryWithValue = {"Rock" : 3, "Scissors" : 2, "Paper" : 1};

function getResult(playerChoice, computerChoice) {
    const playerChoiceValue = choicesQueryWithValue[playerChoice]; 
    const computerChoiceValue = choicesQueryWithValue[computerChoice]; 

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

    return score; 
  
}

function updateResult(score, currentTotalScore) {
  // JavaScript passes primitives by value. This means that changes to currentTotalScore inside the function do not affect the original value.
  return currentTotalScore.value += score;
}

function updateShowResult(currentTotalScore) {

  playerScoreDiv.innerText = `Your score : ${currentTotalScore.value}`;

}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, currentTotalScore, playerChoice, computerChoice) {

  // computerChoice = getComputerChoice();
  // score = getResult(playerChoice, computerChoice); 

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

  // currentTotalScore = updateResult(score, currentTotalScore)

  handsDiv.innerText = `🙋🏻‍♀️${playerChoice} v.s. 🤖${computerChoice}`;
  updateShowResult(currentTotalScore);

}

//** once click, DOM get result and display the result */
const onClickRPS = (playerChoice, currentTotalScore) =>{

    // Using const rather than let 
    const computerChoice = getComputerChoice(); 
    const score = getResult(playerChoice, computerChoice); 
    updateResult(score, currentTotalScore)
    showResult(score, currentTotalScore, playerChoice, computerChoice);
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    resultDiv.innerText ="";
    handsDiv.innerText = "";
    playerScoreDiv.innerText = "";
}

function playGame() {

  // let currentTotalScore = setInitialTotalScore(); 
  const currentTotalScore = { value: 0 };

  choicesQuery.forEach(choice => {
    choice.onclick = () => {

        // !!!!! activate playerChoice once clicked
        // const playerChoice = choice;  
        const playerChoice = choice.value; 
        onClickRPS(playerChoice, currentTotalScore);
    }
  })
  // Add a click listener to the end game button that runs the endGame() function on click
  endGameButtonDiv.onclick = () => {
    endGame();

    currentTotalScore.value = 0; 
    updateShowResult(currentTotalScore);
  }
}

playGame();



// compare these 2 parts of codes below: 
// ==========================================================

// PART 1
// function updateResult(score, currentTotalScore) {
//   currentTotalScore += score;
// }

// let currentTotalScore = 0;
// updateResult(1, currentTotalScore);
// console.log(currentTotalScore);  // Outputs: 0, not 1

// PART 2
// function updateResult(score, currentTotalScore) {
//   currentTotalScore.value += score;
// }

// const currentTotalScore = { value: 0 };
// updateResult(1, currentTotalScore);
// console.log(currentTotalScore.value);  // Outputs: 1









