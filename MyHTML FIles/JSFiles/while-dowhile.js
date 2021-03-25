// //While Loop Code
// var two = 1;
// console.log(two);
// while(two < 65536){
//      two = two * 2;
//      console.log(two);
//
// }
//
// var number = Math.floor(Math.random() * 6) + 1;
// var guess;
//
// do{
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// }while (guess !== number);
//
// alert("Your guess of " + guess + " matches the number " + number + "!");




function WeScream4IceCream(){
    var allCones = Math.floor(Math.random() * 50) + 50;

    var purchased;
    var keepNum;
    var purchased2;

    do{
        var sold = Math.floor(Math.random() * 5) + 1;
        alert("At this moment we have " + allCones + " available.");
        alert("You randomly purchased " + sold + " cones.")
        purchased = (allCones - sold);
        keepNum =  alert("There are " + purchased + " cones left!");//Accumulator

        while(keepNum !== 0){
            sold = Math.floor(Math.random() * 5) + 1;
            keepNum = purchased;
            alert("At this very moment you have " + keepNum + " cones!");
            alert("You randomly purchased " + sold + " cones.");
            purchased = keepNum - sold;
            purchased2 = alert("There are " + purchased + " cones left!");
            if (purchased <=0) {
                alert("There are no more cones to sell!");
                break;
            }

        }

    }while(allCones <= 0);

    alert("We don't have anymore cones!");
}

console.log(WeScream4IceCream());