//--------------------------------------------------------------//
//                           Arrow
// C++ :
// array<Type, Taille> nom {v1,v2,v3; 
//          0 par default, error when more elements than its size 
// vector<Type> nom (Taille, Valleur); 0 par default
//
// Syntax: 
// nom = [[a1, a2, a3], [b1, b2, b3], [c1,c2, c3]];
//--------------------------------------------------------------//

fruits = ["apple", "orange", "banana", "pear"]; 

// Arrow methods : 
// 1. .push("a","b") 
fruits.push("pineapple");
console.log(fruits); // [ 'apple', 'orange', 'banana', 'pear', 'pineapple' ]

// 2. .slice(pos,n) (from position a, pick up n);
console.log(fruits.slice(1,3)); // [ 'orange', 'banana' ]
console.log(fruits.slice()); // take all

// 3. .indexOf()
console.log(fruits.indexOf("Apple")); // -1
console.log(fruits.indexOf("apple"));


// 4. .length
console.log(fruits.length); // 5



//--------------------------------------------------------------//
//                      Math.random()
// returns a floating-point, pseudo-random number that <= 0 && < 1
//--------------------------------------------------------------//

// Example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1

// =========== Funciton : randomFruit ===================
const randomFruit = (fruits) => {
    let lengthArray = fruits.length; 
    let pos = Math.floor (Math.random() * lengthArray); 
    return fruits[pos]; 
}

console.log(randomFruit(fruits));
console.log(randomFruit(fruits));
console.log(randomFruit(fruits));
console.log(randomFruit(fruits));






//--------------------------------------------------------------//
//
//
//
//--------------------------------------------------------------//

//--------------------------------------------------------------//
//
//
//
//--------------------------------------------------------------//
