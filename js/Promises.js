"use strict";

// const promiseEx = fetch('https://api.github.com/users/{username}/events', {headers: {'Authorization': PROMISES_KEY}});
// promiseEx.then(response => console.log(response))
// promiseEx.catch(error => console.log(error));



const username = fetch('https://api.github.com/users', {headers: {'Authorization': PROMISES_KEY}});
username.then(response => {
  response.json().then(users =>{
      console.log(users);
  })
});
username.catch(error => console.log(error));

console.log(username);
