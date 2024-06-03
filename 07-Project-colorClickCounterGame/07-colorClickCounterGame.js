
const redDiv = document.getElementById("red"); 
const yellowDiv = document.getElementById("yellow"); 
const greenDiv = document.getElementById("green"); 


let message = "I clicked the button : ";
redDiv.onclick = () => console.log(`${message}Red`);
yellowDiv.onclick = () => console.log(`${message}Yellow`);
greenDiv.onclick = () => console.log(`${message}Green`);

// 1. computer choice 
// 2. compare computerChoice to userChoice 
// 3. result -1 0 1
// 4. display on DOM 

// document.querySelectorAll : to get a NodeList of elements with a specific class or tag.
const squares = document.querySelectorAll(".colorSquare"); // .className
console.log(squares);

/*
console.log(squares[0].value)
console.log(squares[1].value)
console.log(squares[2].value)
*/

// Object : Assisgn values in the array 
const timeClicked = {"red" : 0, "yellow" : 0, "green" : 0};



//------------------------------------------------------------//
//      Flow of Click Event
//      1. Click: Button with value="red" is clicked
//      2. `square.value` is "red"
//      3. Increment : `timeClicked["red"]` is incremented
//      4. InnerText : Button's innerText is updated to new click count
//      5. Console logs: "red clicked: <new count>"
//------------------------------------------------------------//

// const color = square.value;
// forEach : array method that executes a provided function once for each array element.
squares.forEach(square => { // iterates over each element in the squares collection.
    square.onclick = () => { // value="red" is clicked.

        // const color = square.getAttribute('value');
        const color = square.value;

        // Retrieve the current click count for this color
        numClick = timeClicked[color]; 
   
        numClick += 1; 
        // console.log(timeClicked); //Object { red: 2, yellow: 2, green: 2 }

        // Important : Update the click count in the timeClicked object
        timeClicked[color] = numClick;

        square.innerText = numClick; // sets the button’s inner text to the updated click count
        
        console.log(
            `${color} clicked: ${numClick}`);
    }
})

const clearGameDiv = document.getElementById("clearGame");

function clearScores() {
    
    squares.forEach(square => {

        const color = square.value;

        timeClicked[color] = 0;

        // square.innerText = timeClicked[color]; 
        square.innerText = ""; 


        message = "Clear Game";
        console.log(message);

    })

}



clearGameDiv.onclick = () => clearScores();



