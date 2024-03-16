// ----------------- Object ---------------------------------------------------------
// Definition: A type of variable, similar to Arrays but they have key-value pairs. 
// Syntax: 
//                  const objectName = { }
// ----------------------------------------------------------------------------------

const person = { 
    name : "Leonardo", 
    shirt : "white"};

// ------------------- Access to objects---------------------------------------------   
// 1. dot notation .
//                     object.nemberName
console.log (person.name); // Leonardo
console.log (person.shirt); // white

// 2. bracket notation []
//                      object["member"] 
console.log(person["name"]); // Leonardo
console.log(person["shirt"]); // white


// ------------------- Create new members `object[ ]`: Assign object "=" ------------
// Syntax: 
//          object["member"] = " memberValue"; 
//------------------------------------------------------------------------------------
console.log(person); // { name: 'Leonardo', shirt: 'white' }
person["phone"] = "1-222-333-4444"; 
console.log(person.phone); // 1-222-333-4444

console.log(person); // { name: 'Leonardo', shirt: 'white', phone: '1-222-333-4444' }

// Person 2 
const person2 = {
    name : "Felicia",
    shirt : "violet"
}; 

console.log(person2); // { name: 'Felicia', shirt: 'violet' }
console.log(person2.name); // Felicia
console.log(person2["shirt"]); // violet

// ------------------- Method  -------------------------------------
// Definition : a property containing a function definition
// IMPORTANT : using `this.` to access to member within the object
// Syntax: 
//          memberFunctionName(){
//              return `algorithm`   
//          }
//------------------------------------------------------------------------------------

const person1 = {
    firstName: "John",
    lastName: "Doe",
    // Shorthand method definition
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person1.fullName()); // Output: John Doe

// Introducer Function 
// using object + template literals for accessing data
// using methods Math.floor()
const introducer = (name, shirt, assets, liabilites) => {
    const person2= {
        name : name,
        shirt : shirt,
        assets : assets,
        liabilities : liabilites,
        // -------- > function member: function in the object
        // netWorth : person.assets - person.liabilities -> undefine 
        // using `this` to point to the Object 
        netWorth : function() {
            return this.assets - this.liabilities; 
        }
    }

    const intro =`Hi, my name is ${person2.name} and the color of my shirt is ${person2.shirt} and my net worth is $${person2.assets-person2.liabilities} USD`; 

    return intro; 
}

// data type is string in parameter: 
console.log(introducer("Vanessa","white", "1000000", "50000" )); 
// Hi, my name is undefined and the color of my shirt is white


