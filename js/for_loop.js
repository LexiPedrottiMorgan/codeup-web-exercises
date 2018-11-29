"use strict";



// NOTES FOR LOOPS TO HELP IT MAKE SENSE
// example: these are the exact same for and while (to see where everything should go)
// var i = 0;
//
// while (i < 10) {
//     console.log(i);
//     i++;
// }
//
//
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }





//multiplication table
var i = 0;

function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}

showMultiplicationTable(5);

//Odd or Even
var number;

function oddOrEven(number) {

    for (var i = 0; i < 10; i++) {
        number = Math.floor(Math.random() * 180) + 20;
       // (180 is the range of numbers and 20 is the start number)

       if (i % 2 !== 0) {
            console.log(i + " is odd.");
        } else {
            console.log(i + " is even.");
        }
    }

}

oddOrEven();

//number tree


function numberTree(number) {

    for (var i = 1; i < 10; i++) {
        var number = "";
        for (var num = 0; num < i; num++) {
            number = number + i;
        }
        console.log(number);
    }
}

numberTree();



//100 counting backwards by 5

var countBackwardsByFives = function () {
    for (var i = 100; i >= 5; i-=5)  {
        console.log(i);
    }
}
countBackwardsByFives();



