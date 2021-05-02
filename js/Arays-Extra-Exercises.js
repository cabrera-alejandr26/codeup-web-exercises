'use strict';

//Exercise #1
var fruits = ['apple','banana','orange','apple','pineapple','grapes'];

function allIndexesOf(x,y){
    var theIndex = x.indexOf(y);
    if(Array.isArray(x) === true){
        return "The index for " + y + " in the array of " + fruits + " is: " + theIndex;
    }
}

console.log(allIndexesOf(fruits,'grapes'));

//Exercise #2
var bugs = ["mosquito","ant","scorpion","ant","ant","scorpion","typo",'reference error',"type error"];

function removeAll(x,y){
    for(let i = 0; i < x.length; i++){
        if(x[i] === y){
            x.splice(i,1);

        }

    }
    return x;
}
console.log('The array bugs without any changes is: ' + bugs);
console.log(removeAll(bugs,"ant"));

//Exercise #3
//Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.

function randomIntBetween(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomIntBetween(4,10));

//Exercise #4
//Make a function called coinFlip() that returns either 0 or 1, randomly.
function coinFlip(){
    var theCoin = Math.floor(Math.random() + Math.random() - 1 );
    if(theCoin === -1){
        return 1;
    }
    else
        {
        return theCoin;
    }
}

console.log(coinFlip());

//Exercise #5
//Make a function called twoDice() that returns the sum of rolling two six sided dice.
//I have decided that the two dices will be based of six sided dice.

function bothDice() {
    console.log('The value of dice1 is: ' + diceUno);
    console.log('The value of dice1 is: ' + diceDos);

    console.log('The total value of both dice is: ' + (diceDos + diceUno));

}

function dice1(max,min) {
    var dice1Value = Math.floor(Math.random() * (max -min) + 1);
    var theValue1 = dice1Value;
    console.log(theValue1);
    return theValue1;
}
function dice2(max,min) {
    var dice2Value = Math.floor(Math.random() * (max -min) + 1);
    var theValue2 = dice2Value;
    console.log(theValue2);
    return theValue2;
}

var diceUno = dice1(6,0);
var diceDos = dice2(6,0);

bothDice();

var equation = 10 % 3;

console.log(equation);
