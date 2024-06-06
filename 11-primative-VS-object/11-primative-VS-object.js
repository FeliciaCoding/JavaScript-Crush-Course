/*
Primitive Types (Passed by Value)
====================================================================================================
Primitive types in JavaScript (like number, string, boolean, null, undefined, and symbol) 
are passed by value. This means when you assign a primitive value to a variable or pass 
it to a function, the actual value is copied.

*/

let a = 10;
let b = a; // Copy the value of 'a' into 'b'

b = 20;
console.log(a); // Outputs: 10
console.log(b); // Outputs: 20

//In this example, a and b are independent variables with their own copies of the value 10. Changing b does not affect a.



/*

Object Types (Passed by Reference)
====================================================================================================
Object types in JavaScript (like object, array, function, etc.) are passed by reference. 
When you assign an object to a variable or pass it to a function, only the reference to the object is copied, 
not the actual object itself.



Reference : 
====================================================================================================
a "reference" is essentially a pointer or link to a memory location where the actual data is stored. 
When you deal with objects, JavaScript handles them by reference. This means that instead of copying 
the entire object, only the reference (or address) of the object in memory is copied.

*/


let house = { color: 'blue' };
let person1 = house;
let person2 = house;

person1.color = 'red';
console.log(house.color); // Outputs: red
console.log(person2.color); // Outputs: red

// In this example, obj1 and obj2 both refer to the same object in memory. 
// Changing the name property via obj2 also affects obj1 because both variables hold a reference to the same object.