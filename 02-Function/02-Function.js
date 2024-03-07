// ----------------------------- Function --------------------------------- //
// ------------> 1.  Function with 0 arguments
function sayMyName(){
    console.log("Felicia");
}
sayMyName();

// ------------> 2. Function with 1 argument
//      Template literals< `   ` >: To interpolate cariables and xpressions into strings
//      Interpolation: an efficient way of concatenation.  
//        - String Interpolation < ${Variables} > :  Referencing a variable within a string 
function greeting (name){
    greet = `Hi ${name}, nice to meet you`; 
    console.log(greet);
}
// -> while in c++: 
// cout << "Hi" << name << ", nice to meet you" << endl;

greeting("Vanessa");

// ------------> 3. Function with 2 multiple arguments
function multipale (a, b){
    product = a * b; 
    calcu = `${a} x ${b} = ${product}`; 
    console.log(calcu);
}

multipale (3,5); 

function exponant (base,power){
    product = base ** power;
    calcu = `${base} ^ ${power} = ${power}`;
    console.log(calcu);  
}

exponant(3,5);

// ------------> Reuturn Method
function sumReturnFunction(a,b){
    return a+b;
}
// sumResult = sumReturn(1,2);
// //sumOutput = `sum ${a} + ${b} = ${sumResult}`;
// //console.log(sumOutput);
// // Error : a is not defined 
// console.log(sumResult);


function calculateFoodTotal(foodPrice, tipPercentage){
    tipPercentage = tipPercentage / 100; 
    tipAmount = foodPrice * tipPercentage; 
    total = sumReturnFunction(foodPrice, tipAmount);
    return total;
}

//calculateFoodTotal(30, 2);
//console.log("Tip Amount : ", tipAmount);
//console.log("Total Amount : ", total);

console.log("Total Amount : ", calculateFoodTotal(30, 2));

// ------------> ES6 - Arrow function 
// write shorter function syntax 

// Regular function (old) 
function greetingFunction(name){
    console.log(`Hi ${name} (Regular function)`);
}

function sumReturnFunction(a,b){
   return a+b;
}

// ----------------------------- Arrow function (new) --------------------------------- //
// - Syntax : 
// const <functionName> = (auguments) => {
//          <Instruction>
// }
const greetingArrowFunction = (name) => {
    console.log(`Hi ${name} (Arrow function)`);
}

// - Benifit : Returning implicitly if it doesnt use the return method 
// Arrow function with explicit return

const sumReturnArrowFunction = (a,b) => { // Multiple lines
    return a+b;
}

// Arrow function with implicit return 
// IMPORTANT : Remove curly braces
const sumArrowFunction = (a,b) => a+b; // One line

console.log(sumReturnArrowFunction(5,6)); // 11
console.log(sumArrowFunction(7,8)); // 15


// ----------------------------- Arrow --------------------------------- //
fruits = ["apple", "orange", "banana", "pear"]; 

// Arrow methods : 
// 1. .push("a","b") 
fruits.push("pineapple");
console.log(fruits); // [ 'apple', 'orange', 'banana', 'pear', 'pineapple' ]

// 2. .slice(pos,n) (from position a, pick up n);
console.log(fruits.slice(1,3)); // [ 'orange', 'banana' ]
console.log(fruits.slice()); // take all

// 3. .ndexOf()
console.log(fruits.indexOf("Apple")); // -1
console.log(fruits.indexOf("apple"));


// 4. .length
console.log(fruits.length); // 5


// --> C++
// array<Type, Taille> nom {v1,v2,v3; 0 par default, error when there are more element than size 
// vector<Type> nom (Taille, Valleur); 0 par default

// nom = [[a1, a2, a3], [b1, b2, b3], [c1,c2, c3]];
