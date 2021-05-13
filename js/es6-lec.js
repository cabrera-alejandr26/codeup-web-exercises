"use strict";

//Exponatiation Methods
var oldWay = Math.pow(4,3);
console.log(oldWay);
var newWay = 4**3;
console.log(newWay);

//var vs let

//VAR
//Variables declared with var are function-scoped. This means that if variable is declared anywhere else besides a function using var, it will always exist in the global scope.

//EX: This is our

for (var i = 0; i < 5; i++){
    console.log(i);
}

//re-assigning the variable i
i = "hello";
console.log(i);

if(i === "hello"){
    var bubbles = 'Bububububles';
}
console.log(bubbles);

bubbles = 'pop';//re-assigned variable bubbles
console.log(bubbles);


//Anything declared within a function cannot be used anywhere else, or outside the scope.
function test(){
    var logMe = 'Hello';
    bubbles = 'floating bubbles';

    return logMe;
}

console.log(test());


//CONST
//Const is blocked-scoped
//This means that a variable declared with const cannot be redeclared or reassigned.

const num = 4;
console.log(num);

//Const cannot be redefined
// num = 6;
// console.log(num);


//LET
//Let keyword lets you defined variables that are block-scoped. As with variables declared with const, the variables with let cannot be redeclared.

let name = 'Alejandro';
name = 'Marisol';
console.log(name);

function foo(n){
    if(n == 6 ){
        let num = 2;
    }
    console.log(num);
}

foo(6);


for(let i = 0; i < 3; i++){
    console.log(i);//This will log!
}

console.log("i outside the loop" + i);

//TEMPLATE STRINGS
//Template strings allow for interpolation in string. Variables and expressions can be read in template strings.Template strings use BACK TICKS to recognize variables and expressions.

name = 'Alejandro';
console.log(`My name is ${name}`);
console.log(`My name is ${name.toUpperCase()}`);

let Parks = ['National', 'Egg', 'River'];

let parksList = `
<p>"Hello There!</p>
<ul>
<li>${Parks[0]}</li>
<li>${Parks[1]}</li>
<li>${Parks[2]}</li>
</ul>`;

 document.write(parksList);

 Parks.forEach(function(park,index){
     console.log(park,index);
});

 //ES6 For of LOOP
//
// for(variable of iterable){
//     statement
// }

for(let park of Parks){
    console.log(park);
}

//ARROW FUNCTIONS

function test1() {
    return "hello";
}

console.log(test1());

//ES6 Way

const test3 = ()=> "Hello There";

console.log(test3());

const sayHello = (name) => {
    return name;
}

console.log(sayHello("ALejandro"));


//OBJECTS
let Trailname = 'Loopy Trail';
let distance = 4.6;
let difficulty = 'moderate';
let isPaved = true;

let trail = {
    Trailname,
    distance,
    difficulty,
    isPaved
}

console.log(trail);



//OBJECT DESTRUCTORING

//ES5
// let nameOfTrail = trail.name;
// let distanceOfLoopTrail = trail.distance;
//
// console.log(nameOfTrail);
// console.log(distanceOfLoopTrail);

//ES6
let myObject =  {
    movieName :'The Incredibles',
    length: '1hr 43min'
}

let {movieName ,length } = myObject;

console.log(movieName, length);

//ES5 function for object deconstructing
function describeTrail(trailObj){
    var name = trailObj.Trailname;
    var distance = trailObj.distance;
    return Trailname + " " + "is " + distance + " miles long";
}

console.log(describeTrail(trail));

//ES6 function for object deconstructing
let describeTrail2 = trailObj => {
    return Trailname + " " + "is " + distance + " miles long";
}

console.log(describeTrail2(trail));



