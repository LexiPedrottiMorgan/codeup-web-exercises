"use strict";

// Exercise #1
// Write a program that computes the sum all of the odd numbers between 1 and 1000.
// var sum;
 function sumAll() {
     var sum;
     for (var i = 1; i <= 1000; i += 2) {
         i+=i;
         console.log(i);
     }
 }

 sumAll();





// Exercise #2
// Write a program that computes the product of all integers divisible by 3 that are in-between 1 and 100.


// Exercise #3
// Write a program that outputs all the integers from 1 to 100.
// If a number is evenly divisible by 3, then output the string “Fizz” instead of the number
// For numbers evenly divisible by 5, output the string “Buzz” instead of the number
// For numbers that are divisible by both 3 and 5, output the string “FizzBuzz”
// For all other numbers, print the number itself.





// More practice w/ loops and arrays:

// Write a function named oneHundred() that returns an array with integers starting at 1 and ending at 100;


// Exercise 2:
// Write a function named reverse() that takes in an array and returns a reversed copy of the provided array. This function should not alter the orignal array sent into it.


// Exercise 3:
// Write a function named sumAll() that takes in an array of numbers and returns the sum of all the numbers. Use sumAll() on oneHundred() to get the sum of all numbers 1 + 2 + 3... + 100


// Exercise 4:
// Write a function named multiplyAll() that takes in an array of numbers and returns the product of all numbers. Use multiplyAll on oneOnehundred() to get the product of 1*2*3*...100//