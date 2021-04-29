"use strict";

//#2
    function showMultiplicationTable(x){
        for(let i = 1; i < 13; i++){
            var theResult = (x * i);
            console.log(theResult);
        }

    }
console.log(showMultiplicationTable(6));


//#3
for(var i = 0; i < 10; i++){
    var random = Math.floor(Math.random()*181) + 20;
        if (random % 2 === 0){
            console.log(random + " is even...");
        }
        else{
            console.log( random + " is odd...")
        }
}

//#4
    for(let i = 0; i < 10 ; i++ ){
        var number = i;
        var count = 0;
        var outputString = "";

        while(count < number){
                outputString = outputString + number.toString();
                count = count + 1;
        }
            console.log(outputString);
    }


//#5
for(let q = 100; q > 0 ; q =  q - 5){
    console.log(q);
}





