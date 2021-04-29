

//IF/ELSE IF/ELSE = A chain of if/ else statements to give different result conditions.
 var hasCow = false;
var hasGoat = false;

if (hasCow){
    console.log("I'm milkin Bessie!");
} else if (hasGoat){
    console.log("I'm milking Gertrude!");
} else {
    console.log("I'm going to H-E-B!")
}

//In order to break the hierarchy within the if/else satements, you need to create two if statements
//instead of just one.

function isThisThirtyFive(parameter){
    if (parameter === 35){
        return "Yep that's Thirty-Five alright.";
    }
    else if (parameter < 35) {
        return "Aw dang, " + parameter + " is less than 35";
    }
    else {
        return "Shoot, " + " is greater than 35...";
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(67));
console.log(isThisThirtyFive(35));

//TERNARY EXPRESSION: An expression to set a value based on boolean evaluation.
// var message = (booleanValue) ? "Operation was true." : "Operations was false";

/* "Are we out of milk?" If we are: I'll head out to the store,
 but if we do have milk: I want to make a bowl of cereal"
 */

//var action = (doWeHaveMilk) ? makePunchBowlofCeral() : goToStore();

function isItANumber(parameter) {
    if (typeof parameter === "number") {
        return "Yep, that sure is a number."
    } else {
        return "Nope that is not a number";

    }
}

var isGreater = (6 > 12) ? true : false;
console.log(isGreater);

//SWITCH STATEMENT
var color = prompt("What is your favorite color?");

switch(color) {
    case "green":
        alert("What a coincidence, that's my favorite!");
        break;
    case "orange" :
        alert("That's my brother's favorite color!");
        break;
    default:
        alert(color + " is a weird color, my dude...");
        break;
}

var animal = "goat";
switch(animal) {
    case "cow":
        ;
        console.log("Milkin' Betty");
        break;
    case"goat":
        console.log("Milkin' Bellie!");
        break;
    case "camel":
        ;
        console.log("Milkin' Delilah");
        break;
    default:
        console.log("Go to Kroger.");
        break;

}

var lunchMeat = prompt("What is your favorite lunch meat?").toLowerCase();

switch(lunchMeat){
    case"olive loaf":
        alert("Bold choice!");
        break;
    case"brisket":
        alert("Yeah, you are a real Texan ain't ya?");
        break;
    default:
        alert("I mean that's fine I guess...");
        break;

}