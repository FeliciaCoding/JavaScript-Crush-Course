// ------------------------ <cout> ----------------------------------------- //
console.log('Here shows in the console log');
console.log('Here shows again in the console log');

// ------------------------ <cerr> ----------------------------------------- //
// alert('Hello, it is connecting to home.js')

// ------------------------ Variables: var, const, let --------------------- //
let b = 'smoothie';
console.log(b);

let number = 45; 
console.log(number);

// ------------------------ user input ------------------------------------- // 
// <cout> Question, <cin> Assign Varibales 
// var age = prompt('What is your age?');

// document.getElementById('userInputAge').innerHTML= age; // write the user input on the page

// --------------------- Modify HTML pages from JS ------------------------- //

// find an element in the HTML document with the id attribute "title" and return it. 
let title = document.getElementById('title');
console.log(title); // ReferenceError: document is not defined

// .interText : show the HTML content on copnsole 
console.log('Before : ', title.innerText);


// Revise the content from JS, print on Web 
let message = 'Hello from JS, JS will change color from blue to red';
title.innerText = message; 

console.log('After : ', title.innerText) ;

// .innerHTML = to change tags from JS
let title_dev = document.getElementById('title_dev');
title_dev.innerHTML = '<p>Hello with p tag</p>'; 
title_dev.innerHTML = `<p>${message}</p>`;

// .style.color => change color 
title_dev.style.color = "red";
title_dev.style.backgroundColor = "blue";








  