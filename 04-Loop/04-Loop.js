// ----------------------------- For --------------------------------- //
// #1 : Typical loop
// for (dataType i = 0; i < Max; Final instruction){
//    <instruction> 
// }
//
// #2 : "Element" is the value
// for ( <Parameter> <element> of <Array> ){
//      <instruction>    
// }
//
// #3 : "Index" is the position 
// for ( <Parameter> <index> in <String>){
//      <instruction>        
// }
//
// ------------------------------------------------------------------- //

// exercise 1
const alphabetsArray = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

for (let i = 0; i<alphabetsArray.length; ++i){
    console.log(alphabetsArray[i]);
}

// ------> c++
// for ( dataType e : c) {}
for (const element of alphabetsArray){
    console.log(element);
}


// exercise 2
const numArray = [1,2,3,4,5,6];

for (let i = 0; i < numArray.length; ++i){
    console.log(numArray[i]);
}

for (const element of numArray){
    console.log(element);
}

//--------------------------------------------------------------
//                      Function : sum
//              Sum up all numbers in array 
//--------------------------------------------------------------
const sum = (array) =>{
    let sumResult = 0; 
    for (const element of array){
        sumResult += element; 
    }
    return sumResult; 
    // return {sumResult};
}

console.log(sum(numArray)); 
//--------------------------------------------------------------
//                      Function : double
//          Double all values using normal function 
//--------------------------------------------------------------
function double(array){ // by value
    let result = []; 

    // cannot be const 
    for ( element of array){
        element *= 2; 
        result.push(element); 
        //result.push(element*2); 
    }
    return result; 
    
}

console.log("Double Array :", double(numArray)); // [ 2, 4, 6, 8, 10, 12 ]

//--------------------------------------------------------------
//                      Function : doubleArrayFunction
//                  Double all values using array function 
//--------------------------------------------------------------
const doubleArrowFunction = (array) =>{

    let result = []; 

    for ( element of array){
        result.push(element*2); 
    }

    return result; 

}

console.log("Double Array :", doubleArrowFunction(numArray));

console.log("Original Array :", numArray); // Value doesnt change[ 1, 2, 3, 4, 5, 6 ]

//--------------------------------------------------------------
//                      Function : square
// Square all the values in the array and create a new array
//--------------------------------------------------------------

// Arrow function can only be reclared as const? 
const square = (array) => {

    let resultArray = []; 

    for (element of array){
        //element *= element; 
        //resultArray.push(element); 
        resultArray.push(element ** 2); 
    }

    return resultArray;

}

console.log("Squared Array :", square(numArray));

//--------------------------------------------------------------
//                      Function : max
//--------------------------------------------------------------

const max = (array) => {
    // Do i have to specify the value or it will set value to 0 by default?
    // Have to initialize the value, there is no by default value. 

    // let valueMax = 0; 
    let valueMax = array[0]; 
    for (const element of array){
        if (element > valueMax){
            valueMax = element; 
        }
    }
    return {valueMax}; 
}
console.log(max(numArray));

//--------------------------------------------------------------
//                      Function : numFrequency
//                  Frequency for specific number 
//--------------------------------------------------------------

const numFrequency= (array, number) => {
    let resultFrequency = 0; 
    for (let i = 0; i < array.length; ++i){
        // if (array[i]=number){ // must use comparison "==" rather than assignation "="
        if (array[i]===number){
            ++resultFrequency;
        }
    }
    // return {resultFrequency};    
    return resultFrequency; // / Return the frequency directly (no need for an object)
}


console.log(numFrequency(numArray, 1)); // 1 not string"1"

//--------------------------------------------------------------
//                      Function : numAllFrequency
//                      Frequency for all numbers 
//--------------------------------------------------------------

const numAllFrequency = (array) =>{
    const frequencies = {};
    let numer = "";

    for (const number of array){
        if (frequencies[number]){ //non-zero
            frequencies[number]++;
        } else {
            frequencies[number] = 1;
        }
    }

    for (const number in frequencies) {
        console.log(`${number} : ${frequencies[number]}`);
    }

}
const numArray2 = [1,2,3,4,5,6,5,3,3,3,2,2,6,7];
numAllFrequency(numArray2);

//--------------------------------------------------------------
//                      Function : letterCounter
//                Count how many letters in the phrase
//--------------------------------------------------------------

const letterCounter1 = (phrase) => {
    let counter = 0; 
    // for element of A -> value
    for (const letter of phrase) {
        counter++; 
    }
    return counter; 
}

const phrase = "Hey, i am writing a letter counter function";
// const phrase = prompt("Write your phrase : ");

console.log("There are", letterCounter1(phrase), "letters including spaces.");
console.log(`There are ${letterCounter1(phrase)} letters including spaces.`); 
// There are 43 letters including spaces.

const letterCounter2 = (phrase) => {
    // cannot declare while assign the value ? 
    let numletter; // No, need to declare before using, cannot declare and use at the same time 
    
    // for index in A -> number of position 
    for (const index in phrase){
        numletter= Number(index)+1;
    }

    // numletter += 1; // 421 as let is "string" by default
    // Number(numletter)+=1; // Error, Invalid left-hand side in assignment
    // let numletter= Number(numletter)+1;// Error, Cannot access 'numletter' before initialization

    return numletter; 
}

console.log(`There are ${letterCounter2(phrase)} letters including spaces.`); 
// There are 43 letters including spaces.

//--------------------------------------------------------------
//                      return { } 
//             Repeat the title when print out
//--------------------------------------------------------------

const letterCounter3 = (phrase) => {
    let numletter; 
    for (const index in phrase){
        numletter = Number(index)+1; 
    }
    return {numletter}; // { numletter: 43 }

}

// using return { result }; when console.log the return, it will print also the title string 
console.log(letterCounter3(phrase)); //{ numletter: '43' }

// .lengh

const letterCounter4 = (phrase) => {
    return { result : phrase.length};
}

console.log(letterCounter4(phrase)); // { result: 43 }

//--------------------------------------------------------------
//                      Function : letterFrequency
//--------------------------------------------------------------
/* My Attempt :: 
const letterFrequency =(phrase) => {

    for (const letter of phrase){ 
    
    // 1. put outside/inside of the loop ? 
    // declare before the loop so it can be used outside of the loop 

    // 2. `this.` v.s. `letter.` 
    // this : refers to the current function scope
    // letter.: refer to the letter object
      const letters = {
        letter, 
        frequencyInit : "0", // 3. algorithm wrong : Didnt check if the letter already exist !! 
        resultFrequency : function () {
            if (this.resultFrequency>this.frequencyInit){
                return this.resultFrequency = Number(his.resultFrequency)+1; //2
            }else{
                return this.resultFrequency = Number(this.frequencyInit)+1; //1
            }
        }
      }
    }

    console.log(`${letters.letter} : ${letters.resultFrequency}`);

}
letterFrequency(phrase);
// expect outcome -> "h" : 1, "l":3 ...
 */


const letterFrequency =(phrase) => {
    // declare an empty object
    const frequencies = {}; 
    
    // Loop through each letter in the phrase
    for (const letter of phrase) {
        // check if the letter exists already in the frequencies object 
        if (frequencies[letter]){ // if (letter in frequencies )
            // If it exists, increment its frequency
            frequencies[letter]++; // frequencies[letter] = frequencies[letter] + 1
        }else { // if its new letter, set frequency as 1
            frequencies[letter] = 1;
        }

        console.log(`${frequencies[letter]}`);


    }

    for (const letter in frequencies) {
        console.log(`${letter} : ${frequencies[letter]}`);
    }

}
letterFrequency(phrase);

//--------------------------------------------------------------
//                      Function : wordFrequency
// call function: wordFrequency ("hello world hello")
// output : {"hello" : 2 , "world" :1 }
//--------------------------------------------------------------

// method 1 : use space to split words
function wordFrequency1(phrase) {

    const frequencies = {}; // create an empty object to store data

    // let word; // undefind: initializing word without assigning it an initial value, which means it will start as undefined
    let word = "";

    for (const letter of phrase) {

        // if (letter != " " || letter !="."){ // will always be true
        if (letter != " " && letter != ".") {
            word += letter;
        } else {
            if (frequencies[word]) {
                frequencies[word]++;
                word = "";
            } else {
                frequencies[word] = 1;
                word = "";
            }
        }

    }

    for (const word in frequencies) {
        console.log(`${word} : ${frequencies[word]}`);
    }

}
let phraseWithSpaceEnd= "I am coding in javascript and I like to code in javascript ";
// this code wont works if there is no " " space in the end of the sentence !! 
wordFrequency1(phraseWithSpaceEnd);

// Method 2 : Use split()
const wordFrequency2 = (phrase) => {
    frequencies = {}; // object to store the pairs [word : frequency]

    // words = []; // arrow to store words 
    words = phrase.split(" "); // words are seperated by space 
    console.log(words);
    // ['I', 'am', 'coding', 'in', 'javascript', 'and', 'I', 'like', 'to', 'code', 'in', 'javascript']

    // run the words' array 
    for (const word of words){
        if (frequencies[word]){
            frequencies[word]++;
        } else {
            frequencies[word] = 1; 
        }

    }
    // run the object 
    for (const word in frequencies){
        console.log(`${word} : ${frequencies[word]}`); 
    }
} 

let phrase1= "I am coding in javascript and I like to code in javascript";
wordFrequency2(phrase1);




