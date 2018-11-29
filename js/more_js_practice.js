// Exercise 1:
// Write a function named oneHundred() that returns an array with integers
// starting at 1 and ending at 100;


//walkthrough


function oneHundred() {
    var array = [];
    for (var i = 0; i <= 99; i++) {
        array[i] = i+1;
     }
     return array;
    }

console.log(oneHundred());

 // //my version
 // var oneHundredArray = [];
 //
 //      for (var i = 0; i <= 100; i++) {
 //          oneHundredArray = [oneHundredArray.push(i)];
 //          console.log(i);
 //
 //      }
 //
 // console.log(oneHundredArray);



// Exercise 2:
// Write a function named reverse() that takes in an array and returns a
// reversed copy of the provided array. This function should not alter the original array sent into it.

function reverse(input) {
    var output = [];
    for (var i = input.length - 1; i >= 0; i--) {
        output.push(input[i]);
    }
    return output;
}
console.log(reverse(oneHundred()));

// Exercise 3:
// Write a function named sumAll() that takes in an array of numbers and
// returns the sum of all the numbers. Use sumAll() on oneHundred() to get
// the sum of all numbers 1 + 2 + 3... + 100


function sumAll(numbers) {
    var sum = 0;
    numbers.forEach(function(number) {
        sum = sum + number;
    });
    return sum;
}
console.log(sumAll(oneHundred()));

// Exercise 4:
// Write a function named multiplyAll() that takes in an array of
// numbers and returns the product of all numbers. Use multiplyAll on oneOnehundred()
// to get the product of 1*2*3*...100

function multiplyAll(numbers) {
    var product = 1;
    numbers.forEach(function(number) {
        product *= number;
    });
    return product;
}

console.log(multiplyAll(oneHundred()));
