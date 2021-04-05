"use strict";

var theTruck = {
    make: "Toyota",
    model: "Tacoma",
    truck: true,
    seat: 5,
    color: "Voodoo Blue",
    mileage: 10,
    drive: function(){
        console.log("Vrom, Vrom!");
    }
}

// Returns a random integer between min and max.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInt(1,10));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
console.log(getRandomInt(5,10));

Math.round(20.49);  // 20
Math.round(20.5);   // 21
Math.round(-20.5);  // -20
Math.round(-20.51); // -21