//--------------------------------------------------------------
//                            .map()
//             Loops and returns an array[] (check line26)
//             Syntax : arrray.map(variableName => action)
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
//           Loops and returns an array[] (check line26)
//           Syntax : arrray.map(variableName => action)
//--------------------------------------------------------------



