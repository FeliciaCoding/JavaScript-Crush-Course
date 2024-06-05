/* 
🌟 APP: Tip Calculator

3 functions👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

the DIV ID👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

const billTotalInputDiv = document.getElementById("billTotalInput");
const tipInputDiv = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");


let numPeople = Number(numberOfPeopleDiv.innerText);  
let totalBill = Number(billTotalInputDiv.value);


// ** Calculate the total bill per person **
const calculateBill = () => {

    const tipPercentage = Number(tipInputDiv.value) / 100; 
    const totalTip = totalBill * tipPercentage; 
    const totalAmount = totalBill + totalTip; 
    const totalPerPerson = totalAmount / numPeople;
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${totalPerPerson.toFixed(2)}`; 
    //perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`

  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {

    // CANNOT take DIV to calculate -> numberOfPeopleDiv += 1; 
    numPeople += 1; 

    // LeftValue -> numberOfPeople= Number(numberOfPeopleDiv.innerText); 
    numberOfPeopleDiv.innerText = numPeople; 

    calculateBill();


  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {

    // The `return` statement itself does not return any specific value; it simply exits the function.
    if (numPeople <= 1 ) {
      return ; 
    }

    numPeople -= 1; 
  
    numberOfPeopleDiv.innerText = numPeople; 
  
    calculateBill();
  }