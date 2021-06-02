"use strict";

// // const promiseEx = fetch('https://api.github.com/users/{username}/events', {headers: {'Authorization': PROMISES_KEY}});
// // promiseEx.then(response => console.log(response))
// // promiseEx.catch(error => console.log(error));
//
//
//
// // const userLastCommit = username => {
// //     fetch('https://api.github.com/users', {headers: {'Authorization': PROMISES_KEY}});
// //     username.then(response => {
// //         response.json().then(users => {
// //             console.log(users);
// //         })
// //     });
// //     username.catch(error => console.log(error));
// // }
//
// const userLastCommit = username => {
//     return fetch(`https://api.github.com/users/${username}/events', {headers: {`Authorization`: `Token ${PROMISES_KEY}`})
//         .then(resp => resp.json())
//         .then(data =>{
//             console.log(data);
//         })
// }
//
//
// // console.log(username);
// userLastCommit("cabrera-alejandr26");

const userLastCommit = username =>{
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${PROMISES_KEY}`}})
        .then(resp => resp.json())
        .then(data => {
            let lastPush;
            for(let event of data){
                if(event.type === "PushEvent"){
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            console.log(lastPush);
        })
}

userLastCommit("cabrera-alejandr26");
