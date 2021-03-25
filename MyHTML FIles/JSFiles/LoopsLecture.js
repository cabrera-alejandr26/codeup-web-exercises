//While loop example:
//The Pizza Loop!
// var slices = 8;
// while (slices > 0){
//     console.log("I'll have a slice!");
//     slices = slices - 1;
//
//     if(slices > 1){
//         console.log("Now there's " + slices + " slices left!");
//     }
//     if(slices <= 2){
//         console.log("We're almost done...");
//     }
// }
// console.log("No more pizza!");


//Pseudocode

//Ask the user for input
//Get the user input
//Declare a user input variable
//Store user input in the variable
//Declare a variable to store the total (accumulator)
//Add the cost of the new item to the total
//Keep storing the new totals in the accumulator variable
//Tell the user how to end the program (sentinel value)
//Loop back around and do it all again, over and over, until the user tells us to stop.


// var priceOfItem = parseFloat(prompt("Enter the price of your first item."));
// alert('This is the price of your first item: $' + priceOfItem.toFixed(2));
//
// var totalCost = totalCost;//The accumulator
// var userInput = "";
//
//
//
// //Sentinel Value
// while(userInput !== "STOP" ) {//While userInput does not equal STOP
//     userInput = (prompt("Enter the price of your next item\r\n Enter STOP when you are done. "));
//
//     if (userInput === "STOP") {
//
//         alert("Ok. Your final total is: $" + totalCost.toFixed(2));
//     }
//     else{
//         priceOfItem = parseFloat(userInput);
//         totalCost = totalCost + priceOfItem;
//         alert("Your total is now $" + totalCost.toFixed(2));
//     }
//
// }

var priceOfItem = parseFloat(prompt("Enter the price of your first item"));
alert("The price of your item was " + priceOfItem.toFixed(2));
// create accumulator variable
var totalCost = priceOfItem;
var userInput = "";

// create a sentinel value
while(userInput !== "STOP") {
    userInput = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done");

    if (userInput === "STOP") {
        alert("OK. Your final total is " + totalCost.toFixed(2));
    } else {
        priceOfItem = parseFloat(userInput);
        totalCost = totalCost + priceOfItem;
        alert("Your total is now " + totalCost.toFixed(2));
    }
}





