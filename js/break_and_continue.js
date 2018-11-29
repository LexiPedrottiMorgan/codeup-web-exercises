"use strict";

//this is working for odd numbers- doesn't work for even numbers or NaNs (should prompt for a new number)
//
// function pickOddNumber(input) {
//         var input = prompt("Pick an odd number between 1 - 50.");
//         console.log("Number to skip is: " + input);
//             for (var i = 0; i < 50; i++) {
//                 i += 1;
//                 console.log("Here is an odd number: " + i);
//                 if (i === parseFloat(input)) {
//                     console.log("Yikes! Skipping number: " + input);
//                 }
//             }
// }

// pickOddNumber();

//class walkthrough
function isNumeric (num) {
    return (!isNaN(parseFloat(num)));
}
var userInput;

do {
    userInput = prompt("Please enter an odd number between 1-50.");
    userInput = parseFloat(userInput);
//    we want to keep asking until we get a good answer
} while (!isNumeric(userInput) || userInput % 2 === 0 || userInput < 50 || userInput > 1);
console.log(userInput);

for (var i = 1; i<=50; i+=2) {
    if (i === userInput) {
        console.log("Yikes! Skipping the number: " + userInput);
    } else {
        console.log("Here is an odd number " + i);
    }

}