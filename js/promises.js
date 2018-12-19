"use strict";

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(seconds){
    return new Promise((resolve, reject) => {
            if (seconds > 0) {
        setTimeout(() => {
            console.log("You'll see this after " + seconds + " seconds")
        }, seconds * 1000);
                resolve();
            } else {
                console.log("rejected");
                reject("rejected");

            }
        });
    }


wait(1);
wait(3);
wait(5);
wait(7);


console.log("-----------------");



var username = $("#submitButton").click(function(){
    let username = $("#input").val();
    console.log(username);
    return username;
});
//
// //---------------------------------------------------------
//
// function getGithubUser() {
//
//     const API_TOKEN = '59276d5fc7d825c6b07d5fe312dbf8f52960600f';
//
//     const fetchOptions = {
//         headers: {'Authorization': `token ${API_TOKEN}`}
//     };
//
// // formatted like example:
// const checkResponseForErrors = response => {
//     console.group("checkResponseForErrors")
//     console.log(response)
//     console.groupEnd()
//     if (response.status !== 200) {
//         return Promise.reject(response);
//     }
//     return Promise.resolve(response);
// };
//
// const parseResponseAsJson = response => {
//     console.group("parseResponseAsJson")
//     console.log(response)
//     console.groupEnd();
// };
//
// const getFirstElement = ([first, second]) => first;
//
//
// function getLastCommitDate(githubApiObject) {
//     console.group("getLastCommit")
//     console.log(githubApiObject)
//     console.groupEnd()
//     return githubApiObject.created_at;
// }
//
//
// function logData(data){
//     console.group("logData")
//     console.log(data);
//     console.groupEnd();
// }
//
//
// function fetchJson(url) {
//     return fetch(url, fetchOptions)
//         .then(checkResponseForErrors)
//         .then(parseResponseAsJson)
// }
//
//
// fetchJson("https://api.github.com/users/LexiPedrottiMorgan/events")
//     .then(getFirstElement)
//     .then(getLastCommitDate)
//     .then(logData);
//
//
//
// //my attempt:
// fetch('https://api.github.com/users/LexiPedrottiMorgan/events', fetchOptions)
//         .then(function (response) {
//             if (response.status !== 200) {
//                 return Promise.reject(response);
//             }
//             return Promise.resolve(response)
//         })
//         .then(function (response) {
//             const jsonResponse = response.json();
//             return jsonResponse;
//         })
//     .then(function (data) {
//             console.log(data);
//     });
//     console.log("The last commit was on " + getLastCommitDate);
//
// };
//
// getGithubUser(username);


//copy and paste from the example but changed to get commit date instead of id:
function getUserInfo() {
    const API_TOKEN = "ENTER_API_KEY_HERE";

    const fetchOptions = {
        headers: {'Authorization': `token ${API_TOKEN}`}
    }

    const checkResponseForErrors = response => {
        console.group('checkResponseForErrors')
        console.log(response)
        console.groupEnd()
        if (response.status !== 200) {
            return Promise.reject(response);
        }
        return Promise.resolve(response);
    }

    const parseResponseAsJson = response => {
        console.group('parseResponseAsJson')
        console.log(response)
        console.groupEnd()
        const jsonResponse = response.json();
        return jsonResponse;
    }

// es5
// function getSecondElement(data) {
//     return data[1];
// }
// es6 arrow function
// const getSecondElement = (data) => {
//     return data[1];
// }
// es6 arrow function with implicit return
// const getSecondElement = (data) => data[1];
// es6 arrow function with implicit return and destructuring syntax
    const getSecondElement = ([first, second]) => first;

    function getId(githubApiObject) {
        console.group('getId')
        console.log(githubApiObject)
        console.groupEnd()
        return githubApiObject.created_at;
    }

    function logData(data) {
        console.group('logData')
        console.log(data);
        console.groupEnd();
    }

    function fetchJson(url) {
        return fetch(url, fetchOptions)
            .then(checkResponseForErrors)
            .then(parseResponseAsJson)
    }

    //doesn't work with the :username instead of my username yet:
    fetchJson('https://api.github.com/users/LexiPedrottiMorgan/events')
        .then(getSecondElement)
        .then(getId)
        .then(logData);
}

getUserInfo();