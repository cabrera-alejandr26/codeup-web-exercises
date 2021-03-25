"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color){
    var lowerC = color.toLowerCase();

    if(lowerC === "blue"){
        return color + " is the color of the sky.";
    }
    else if (lowerC === "red"){
       return "Strawberries are red.";
    }
    else{
        return "I don't know anything of that color...";
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(randomColor);
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor2(c) {
    var Lcase = c.toLowerCase();

    switch (Lcase) {
        case "blue":
            return "Blue is the color of the sky.";
            break;
        case"red":
            return "Strawberries are red.";
            break;
        default:
            return "I don't know anything of that color...";
    }
}
console.log(analyzeColor2(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var question = prompt("What is your favorite color?");

console.log(analyzeColor(question));
alert(analyzeColor(question));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calulateTotal(a,b){
    var luckyNum = a;
    var totalAmm = b;

    if(luckyNum == 1){
        var ten = (.10 * b);
        return ("You get 10% off and your new price is: $" + (b - ten) + "!");
    }
    else if(luckyNum == 2){
        var twenty5 = (.25 * b);
        return ("You get 25% off and your new price is:$ " + (b - twenty5) + "!");
    }
    else if(luckyNum == 3){
        var thirty5 = (.35 * b);
        return ("You get 35% off and your new price is:$" + (b - thirty5) + "!");
    }
    else if(luckyNum == 4){
        var fifty = (.50 * b);
        return ("You get 50% off and your new price is:$ " + (b - fifty) + "!");
    }
    else if(luckyNum == 0){
        return ("You get all for free!");
    }
    else{
        return ("That's not a lucky number!");
    }

}

console.log(calulateTotal(1,400));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var thePrompt = prompt("What is your total bill amount?");

console.log(calulateTotal(luckyNumber,thePrompt));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function evenOrOdd(x) {
    if (x % 2 == 0) {
        return ("Your number is even.");
    } else {
        return ("Your number is odd.");
    }
}
function plusOnehundred(x){
        var add100 =  parseFloat(x) + (100);
        return ("Your number plus 100 is: " + add100 + ".");
}

    function plusOrNegative(x){
        if(x <= 0 ){
            return ("Your Number is a negative.");
        }
        else if(x >= 0){
            return ("Your number is positive;");
        }
        else{
            return("That is not a number!");
        }



    }

var askNum = confirm("Would you like to enter a number?");
if (askNum == true){
    var theNum = prompt("Please type in your number");
    alert(theNum + " is your number!");
    alert(evenOrOdd(theNum));
    alert(plusOnehundred(theNum));
    alert(plusOrNegative(theNum));
}
else{
    alert("Well, have a nice day!");
}