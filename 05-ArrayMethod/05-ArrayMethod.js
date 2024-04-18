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


function sum1(a,b) {
    return a+b
}

// const resultSum = num1.reduce((a,b) => a+b, 0)
const resultSum  = nums1.reduce(sum1);
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

//--------------------------------------------------------------
//                 Using .ruduce() in a class 
//--------------------------------------------------------------

// Excercise 1

//const sum = (a,b) => {a+b}; 
//let sumNetworth = actors.reduce(sum(actors.netWorth,0)); 
//console.log(sumNetworth); 
console.log(actors.reduce((prev,curr) => prev + curr.netWorth, 0))


// Excercise 2

const students = [
    {name : "Amy", age: 8, grade: 89},
    {name : "Branda", age : 9, grade : 90},
    {name : "Cindy", age : 10, grade : 91}
]

function averageGradeFunction (array){
    let sumGrade = 0;
    let n = array.length;
    // for ( const e of array){
    //     sum+=e;
    // }

    for (const student of array){
        sumGrade += student.grade;

    }
    return sumGrade/n;
}

let averageGrade = averageGradeFunction(students); 

function averageGradeFunctionReduce(array){
    // By providing 0 as the initial value, 
    // it ensures that even if the array is empty, 
    // the initial value of sum will be 0, 
    // and the reduce() function will still work correctly.
    let sumGrade = array.reduce((sum,element) => sum + element.grade, 0);
    let n = array.length;

    //return sumGrade/(array.length);
    return sumGrade/n;
}

let averageGradeUsingReduce = averageGradeFunctionReduce(students); 

console.log(averageGrade);
console.log(averageGradeUsingReduce);

// 3:38:08