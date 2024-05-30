/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billTotalInputDiv = document.getElementsById("billTotalInput");
const tipInputDiv = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

// Get number of people from number of people div
numPeople = Number(numberOfPeopleDiv.innerText);  



// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    totalBill = Number(billTotalInputDiv.innerText);

  
    // get the tip from user & convert it into a percentage (divide by 100)
    tipPercentage = Number(tipInputDiv.innerText) / 100; 
  
    // get the total tip amount
    totalTip = totalBill * tipPercentage; 
  
    // calculate the total (tip amount + bill)
    totalAmount = totalBill + totalTip; 
  
    // calculate the per person total (total divided by number of people)
    totalPerPerson = totalAmount / numPeople;
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = totalPerPerson; 
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    
    // decrement the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }