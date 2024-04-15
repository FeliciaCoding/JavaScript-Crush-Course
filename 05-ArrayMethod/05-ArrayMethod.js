//--------------------------------------------------------------
//                            .map()
//             Loops and returns an array[] (check line26)
//             Syntax : arrray.map(elementName => action)
//--------------------------------------------------------------

// // the whole function 
// [1,2,3,4].map(number => {
//     console.log(number);
// })
// // 1 2 3 4

// // in one line
// [1,2,3,4].map(number => console.log(number)); // implicit return
// // 1 2 3 4


// // the whole function 
// [1,2,3,4].map(number => {
//     console.log(number)
//     console.log("check")
// });
// // 1 check 2 check 3 check 4 check

let result = [1,2,3,4].map(number => number*2);
console.log(result); // [ 2, 4, 6, 8 ]

//--------------------------------------------------------------
//                      Function: Double
//--------------------------------------------------------------

const doubleMap = (numbers) => {
    return numbers.map(number => number*2);
}

console.log(doubleMap([35,36,37,38])); // [ 70, 72, 74, 76 ]



//--------------------------------------------------------------
//                        .filter()
//           Loops and returns an array[] with matching conditions (Line 59)
//           Syntax : arrray.filter(variableName => action/condition)
//--------------------------------------------------------------

const filter =(numbers, graterThan) => {
    let result = [];
    for (const number of numbers){ // better to set number as "const"
        if (number > graterThan){ 
            result.push(number); 
        }
    }
    return result;
}

const nums = [3,5,18,19,21,89,50,4,58,20]; 
console.log(filter(nums, 10)); //[ 89, 50, 58, 20 ]

let resultFilter1 = nums.filter(num => num > 10); 
console.log(resultFilter1); // [ 89, 50, 58, 20 ]

let resultFilter2 = nums.filter(num => num > 10 && num < 20); 
console.log(resultFilter2);

// if (userIsAuthenticated || userIsPayingMmber) {
//     show youtube videos
// } else{
//    
// }

const actors = [
    {name : "Vanessa", netWorth: 200000000000000},
    {name : "Johnny", netWorth : 1000},
    {name : "Leonardo", netWorth : 100000000000}
]

let result3= actors.filter(actor => actor.netWorth > 100000)
console.log(result3); 
// { name: 'Vanessa', netWorth: 200000000000000 },
// { name: 'Leonardo', netWorth: 100000000000 }

//--------------------------------------------------------------
//                        .join(' deliminator ')
//       put into a string seperated by the deliminator 
//        
//--------------------------------------------------------------

let names = result3.map(actor => actor.name).join(', '); 
console.log(names); 
// Vanessa, Leonardo


//--------------------------------------------------------------
//                        .reduce()
//        loops and gives you back the accumulator
//     Higher over function: take a function ad an argument
//      Syntax = array.reduce(function)
//--------------------------------------------------------------

const nums1 = [1,2,3,4]; 
const result4 = nums1.reduce(function(prev,curr) {
    return prev + curr;
})

const result5 = nums1.reduce((prev, curr) => prev + curr) // implicit return

console.log(result4);
console.log(result5);


function sum(a,b) {
    return a+b
}

const resultSum  = nums1.reduce(sum);
// const resultSum = nums1reduce((a,b) => a+b)
console.log(resultSum );


//--------------------------------------------------------------
//                  Excercise : multiply
//        Using the .reduce to create a funciton 
//        that multiplies the numbers of a giving array 
//        with one another
//--------------------------------------------------------------

function multiply (a, b) {
    return a*b;
}

const resultMultiply = nums1.reduce(multiply); 
// const resultMultiply = nums1reduce((a,b) => a*b)
console.log(resultMultiply); // 24

// 3:38:08