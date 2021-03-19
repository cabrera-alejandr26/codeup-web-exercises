"use strict";

//Immediately Invoked Function Expression
(function () {

    console.log("Hello World.");

    console.log(parseInt("17 dogs."));

    var whatIsTheWord = prompt("What is your favorite word?");
    console.log(whatIsTheWord);

//Let's define a function
    function doTheThing(input) {
        var output = input + " was pulled into the function. Now it is this concatenated string. :)";
        return output;
    }

    console.log(doTheThing("Hot Dog"));

    function addStuff(x, y) {
        return x + y;
    }

    console.log(addStuff(17, 18));

    function addingToString(str) {
        var finalString = str + " is a string."
        console.log(typeof finalString);
        finalString += "And if it wasn't originally a string it sure is now!";
        return finalString;
    }

    alert(addingToString("Antelope"));

//Global VS Local Variables

    var global = "Earth";
    console.log(global);

    function getGlobalAndLogIt() {
        var local = ("Neptune");
        console.log(local)
        console.log(global);
    }

})();
