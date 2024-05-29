// ------------------------ Operators -------------------------------------- //
// Numbers in JS
var num1 = 10; 

// Increment by 1
num1++; 
console.log(num1); 

// decrement by 1
num1--; 
console.log(num1); 

// increment/decrement by any number you want 
num1 +=5;
console.log(num1); 

num1 -= 4; 
console.log(num1); 

/* Math Methoods 
Floor - Rounds donn
Ceil - Rounds up 
Random - gives you number between 0 and 1
*/

// var numRandom = 
// Math.random(); 
// console.log("Random Number = ", numRandom); 
// numRandom = Math.ceil(numRandom);
// console.log("Number rounds up = ", numRandom); 


// ------------------------ casting --------------------------------------- //
food = Number(prompt('How much was the food? ')); 
tipPercentage = Number(prompt('Tip % ')) / 100; 
tipAmount = food * tipPercentage; 
total = food + tipAmount

console.log("Tip Amount : ", tipAmount);
console.log("Total Amount : ", total);



// ----------------- Baby Level Weather App (conditionals)------------------ //
let weather = prompt("How is the weather [rainy / sunny]? "); 
if (weather == "rainy"){
    console.log("Grab your umbrella")
} else {
    console.log("Wear your sunglasses")
};
