"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//Problem #2
let Lang = users.filter(function(n) {
    return n.languages[2];
}).map(user => {
    user = user.name;
    return user;
});

console.log(Lang);


//Problem #3
let emails = users.map((user) => {
    user = user.email;
    return user;
})

emails.forEach((email) =>{
    let output = "";
    output += `<p>${email}</p>`;
    document.write(output);
});


//Problem #4
//Making a new array for yearsOfExperience
 let yearsEx = users.map((users)=>{
     users = users.yearsOfExperience;
     return users;
 })

//Finding the total amount
let totalYears = yearsEx.reduce((acc,val) => acc + val);
console.log(totalYears);

//Finding the average
let  average = ((a ,b) => a/b.length);

//This is the total average
console.log(average(totalYears, yearsEx));


//Problem #5
let longestEmail = emails.reduce((a,b) => b < a ? b : a);
console.log(longestEmail);

//Problem #6
// let allNames = users.reduce((acc, val) => acc + val.name);
// console.log(allNames);

let theNames = users.map((users) =>{
    users = users.name;
    return users;
});

const allNames = users.reduce((total, person,index) => {
    let newTotal = total + ",";
    let names =  newTotal + person.name;
    let newArr = names.split(",");

    return newArr.unshift("These are your new instructors: ");
});
console.log(typeof allNames);
//Bonus

