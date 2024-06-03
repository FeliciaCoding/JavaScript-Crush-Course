

let number = 12345.6789;

//--------------------------------------------------------------//
//                         .toFixed()
//       Formats a number to a fixed number of decimal places.
//--------------------------------------------------------------//

let fixed = number.toFixed(2);
console.log(`Fixed (2 decimals): ${fixed}`); // Output: "12345.68"


//--------------------------------------------------------------//
//                         .toPrecision()
//       Formats a number to a specified length.
//--------------------------------------------------------------//

let precise = number.toPrecision(5);
console.log(`Precision (5 digits): ${precise}`); // Output: "12345.68"

//--------------------------------------------------------------//
//                         .toLocaleString()
// Formats a number according to the local conventions of a particular locale.
//--------------------------------------------------------------//

let localStringUS = number.toLocaleString('en-US'); // US English
console.log(`Locale String (en-US): ${localStringUS}`); // Output: "1,234,567.89"

let localStringDE = number.toLocaleString('de-DE'); // German
console.log(`Locale String (de-DE): ${localStringDE}`); // Output: "1.234.567,89"

//--------------------------------------------------------------//
//                         .Number.prototype.toString()
// Converts a number to a string in a specified base (e.g., binary, hexadecimal).
//--------------------------------------------------------------//

let number2 = 255;
let binaryString = number2.toString(2); // Convert to binary
console.log(`Binary: ${binaryString}`); // Output: "11111111"

let hexString = number2.toString(16); // Convert to hexadecimal
console.log(`Hexadecimal: ${hexString}`); // Output: "ff"

//--------------------------------------------------------------//
//                         .parseInt() and .parseFloat()
// Parse a string and return an integer or a floating-point number respectively.
//--------------------------------------------------------------//

let intString = "123";
let intValue = parseInt(intString);
console.log(`Parsed Integer: ${intValue}`); // Output: 123

let floatString = "123.45";
let floatValue = parseFloat(floatString);
console.log(`Parsed Float: ${floatValue}`); // Output: 123.45

//--------------------------------------------------------------//
//                         .Intl.NumberFormat
// Provides a way to format numbers using a specified locale and options.
//--------------------------------------------------------------//

let number3 = 1234567.89;
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
console.log(`Currency Format: ${formatter.format(number3)}`); // Output: "$1,234,567.89"

//--------------------------------------------------------------//
//                         Template Literals
// Embeds expressions inside string literals using backticks () and ${}`.
//--------------------------------------------------------------//

let name = "Alice";
let age = 28;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: "Hello, my name is Alice and I am 28 years old."


