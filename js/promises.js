"use strict";

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(seconds){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("You'll see this after " + seconds + " seconds")
        }, seconds * 1000);
                resolve();

        });
    }

    wait(1);
    wait(2);


console.log("-----------------");



var username = $("#submitButton").click(function(){
    let username = $("#input").val();
    console.log("The username is: " + username);
    return username;
    getMostRecentCommitDate(username)
        .then(commitDate => {
            const output = document.querySelector("#output")
            output.html = `The last commit for ${username} was: `
        })
});

//
// //---------------------------------------------------------


function getUserInfo() {
    //don't commit to github with this key in here
    const API_TOKEN = "3fdab93482f2dfe42d8324d58233719164a78bb8";

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

    function getLastCommit(githubApiObject) {
        console.group('getLastCommit')
        console.log(githubApiObject)
        console.groupEnd()
        return githubApiObject.created_at;
    }

    function logData(data) {
        console.group('logData')
        console.log("The users last commit was on: " + data);
        console.groupEnd();
    }

    function fetchJson(url) {
        return fetch(url, fetchOptions)
            .then(checkResponseForErrors)
            .then(parseResponseAsJson)
    }


    function filterNonPushEvents(events){
        const onlyThePushEvents = [];
        events.forEach(function(event){
            if (event.type === "pushEvent") {
                onlyThePushEvents.push(event);
            }
        })
        return onlyThePushEvents;
    }


    function getMostRecentCommitDate(username){

    //doesn't work with the :username instead of my username yet:
    return fetchJson('https://api.github.com/users/${username}/events', fetchOptions)
        .then(getSecondElement)
        .then(getLastCommit)
        //only want push events not any other events
        .then(filterNonPushEvents)
        .then(mostRecentPushEvent => mostRecentPushEvent.created_at)

    }
getMostRecentCommitDate("LexiPedrottiMorgan")
        .then(function(date){
            console.log("The last commit was: " + date)
        })
    }


