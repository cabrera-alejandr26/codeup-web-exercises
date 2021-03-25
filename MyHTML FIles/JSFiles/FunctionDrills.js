//Function isOdd:
function isOdd(x){
    if(x % 2 !== 0){
        return true;
    }
    else{
        return  false;
    }
}
console.log(isOdd(11));

//Function isEven:
function isEven(x){
    if(x % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(44));

//Function identity:
function identity(x){
    return x;
}
console.log(identity("hello"));

//Function isFive:
function isFive(x){
    if(x === 5){
        return true;
    }
    if(x === "five"){
        return true;
    }
    else{
        return false;
    }
}
console.log(isFive("five"));

//Function addFive:
function addFive(x){
    return parseFloat(x) + 5;
}
console.log(addFive(10));

//Function isMultipleOfFive:
function isMultipleOfFive(x)
{
    if(x % 5 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isMultipleOfFive(10009));

//Function isThree:
function isThree(x){
    if(x === 3){
        return true;
    }
    if(x === "three"){
        return true;
    }
    else{
        return false;
    }
}
console.log(isThree("three"));

//Function isMultipleOfThree:
function isMultipleOfThree(x){
    if(x % 3 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isMultipleOfThree(55));

//Function isMultipleOfThreeAndFive:
function isMultipleOfThreeAndFive(x){
    if(x % 3 === 0 && x % 5 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isMultipleOfThreeAndFive(45));


