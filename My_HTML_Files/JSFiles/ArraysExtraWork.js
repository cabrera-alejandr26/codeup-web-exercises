// Define a function named allIndexesOf that takes in two arguments.
// The first argument should be the array to search and the second argument should be the value you want to search for.
// If the item does not exist in the provided array, return an empty array.
//
//     Given:

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

function allIndexesOf(x,y){
    let theIndex = x.indexOf(y);

    if(theIndex === -1){
        console.log("[]");
    }
    else if(Array.isArray(x) === true && theIndex !== -1){
        console.log (theIndex);
    }
}
allIndexesOf(fruits,"apple");
