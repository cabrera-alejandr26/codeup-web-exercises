"use strict";

//#6
var YourNumber = parseInt(prompt("Please enter an odd number between 1 and 50"));
var even = parseInt(YourNumber) % 2 === 0;


if(even === true || isNaN(YourNumber) === true){
    console.log("You can't input even numbers, or strings!");

}

else{
    for(let i = 1; i <= 50; i = i + 2){

        if( YourNumber === i.toString()){

            console.log("Yikes! Skipping number: " + YourNumber + "!");

            continue;
        }
        console.log(i);
    }
}


