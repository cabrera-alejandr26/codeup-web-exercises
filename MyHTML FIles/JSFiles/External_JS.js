"use strict";

var message = "Hello from JavaScript!";
console.log(message);

var NewMessage = alert("Welcome to my website!");
console.log(NewMessage);

var FavoriteColor = prompt("What is your favorite color?");

var Response = alert(FavoriteColor + " is also my favorite color!");
console.log(FavoriteColor);

//Exercise 3 Questions
var MLMDays = parseFloat(prompt("For how many days have you rented My Little Mermaid?"));
var MLMAlert = alert("You entered " + MLMDays + " days.");

var BBDays = parseFloat(prompt("For how many days have you rented Big Brother?"));
var BBAlert = alert("You entered " + BBDays + " days.");

var HercDays = parseFloat(prompt("For how many days have you rented Hercules?"));
var HercAlert = alert("You entered " + HercDays + " days.");

var RentalRate = 3;
var totalCost = (MLMDays + BBDays + HercDays) * RentalRate;
    alert("Your rental rate is $3.00.");
    alert("Your total cost for all three movies will be: $" + totalCost.toFixed(2));


//#3.2

var googleRate = parseFloat(prompt("What is your pay rate at Google?"));
var googleResp = alert("You entered: $" + googleRate + " per hour.");
var googleHR = parseFloat(prompt("How many hours did you work this week?"));
var googleResp2 = alert("You entered: " + googleHR + " hours.");
console.log(googleRate, googleHR);

var AMZNRate = parseFloat(prompt("What is your pay rate at Amazon?"));
var AMZNResp = alert("You entered: $" + AMZNRate + " per hour.");
var AMZNHR = parseFloat(prompt("How many hours did you work this week?"));
var AMZNResp2 = alert("You entered: " + AMZNHR + " hours.")

var FBRate = parseFloat(prompt("What is your pay rate at Facebook?"));
var FBResp = alert("You entered: $" + FBRate + " per hour.")
var FBHR = parseFloat(prompt("How many hours did you work this week?"));
var FBResp2 = alert("You entered: " + FBHR + " hours.");

var totalPay = (googleHR * googleRate) + (AMZNHR * AMZNRate) + (FBHR * FBRate);
console.log(totalPay);

alert("Your total pay is: $" + totalPay);

function increment(someNumber) {
    return someNumber + 1;
    console.log('you will never see this.');
    return someNumber + 2; // This will never run
}

    var number = increment(5);
    console.log(number);
