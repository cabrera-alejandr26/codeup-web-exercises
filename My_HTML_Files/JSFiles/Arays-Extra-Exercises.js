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
            i--;
        }

    }
    return x;
}

console.log(removeAll(bugs,"mosquito"));

//Exercise #3

function randomIntBetween(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomIntBetween(4,8));

//Exercise #6
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