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

// Function Sum : Sum up all numbers in array 
const sum = (array) =>{
    let sumResult = 0; 
    for (const element of array){
        sumResult += element; 
    }
    return sumResult; 
    // return {sumResult};
}

console.log(sum(numArray)); 

// Function double : Double each number
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

const doubleArrowFunction = (array) =>{

    let result = []; 

    for ( element of array){
        result.push(element*2); 
    }

    return result; 

}

console.log("Double Array :", doubleArrowFunction(numArray));

console.log("Original Array :", numArray); // Value doesnt change[ 1, 2, 3, 4, 5, 6 ]

// Function square : square all the values in the array and create a new array
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

// Function max : 

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

// // Function numFrequency : frequency for specific number 
// const numFrequency= (array, number) => {
//     let resultFrequency = 0; 
//     for (let i = 0; 0 < array.length; ++i){
//         if (array[i]=number){
//             ++resultFrequency;
//         }
//     }
//     return {resultFrequency};
// }
// console.log(numFrequency(numArray, "1"));

// ---------------- Excercise : class + loop 
// function letterFrequency 
    // letterFrequency("haha") -> ('h':2, 'a':2)


// Function : LetterCounter

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

// return { } 
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
    const frequencies = {}; // declare an empty object
    
    // Loop through each letter in the phrase
    for (const letter of phrase) {
        // check if the letter exists already in the frequencies object 
        if (frequencies[letter]){ 
            // If it exists, increment its frequency
            frequencies[letter]++;
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