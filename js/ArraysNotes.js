"use strict";
//An array is a collection of data. Data held within an array is held in an order.

var testArray = [];

var instructors = ["David","Jay","Javier","Cody the Duck"];

//We can count the length of our Arrays:

console.log(instructors.length);
console.log([].length);

var randomIndex = Math.floor(Math.random()*instructors.length);
alert("One of your instructors is named: " + instructors[randomIndex]);

for(let i = 0; i < instructors.length;i++){
        console.log("One of your instructors is named: " + instructors[i]);
}

//ArrayOfSorts.forEach(function(element,index,array){
            //we do things here...
//})

//Using all three parameters in a forEach loop
// instructors.forEach(function(instructor,index,array){
//     if(index % 2 !== 0){
//         console.log("Instructor #" + (index + 1) + " of " + array.length + " is named " + instructor);
//     }
// });

//forEach loop example
    var numbers = [17,22,34,52,6]

    numbers.forEach(function(number,index){
        if(index % 2 === 0){
            console.log(number * 2);
        }
    });

