"use strict";

//Make a function named isOdd(number)
function isOdd(number) {
    return number % 2 !== 0;
}
//testing inputs
console.log(isOdd(4));
console.log(isOdd(5));


//Make a function named isEven(number)
function isEven(number) {
   return number % 2 === 0;
}
//testing inputs
console.log(isEven(2));
console.log(isEven(3));


//Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}
//testing inputs
console.log(identity("Lexi"));
console.log(identity("Aaron"));
console.log(identity("This is the identity function"));

//Make a function named isFive(input)

function isFive(input) {
    return input === 5;
}
//testing inputs
console.log(isFive(8));
console.log(isFive(5));
console.log(isFive("banana"));

//Make a function named addFive(input) that adds five to some input.

function addFive(input) {
    return parseFloat(input) + 5;
}
//testing inputs
console.log(addFive(7));
console.log(addFive(5));

// Make a function named isMultipleOfFive(input)

function isMultipleOfFive(input) {
    return parseFloat(input) % 5 === 0;
}
//testing inputs
console.log(isMultipleOfFive(25));
console.log(isMultipleOfFive(43));
console.log(isMultipleOfFive(99));
console.log(isMultipleOfFive(100));


//Make a function named isThree(input)

function isThree(input) {
   return input === 3;
}
//testing inputs
console.log(isThree(3));
console.log(isThree(6));
console.log(isThree("banana"));


//Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input) {
    return (parseFloat(input) % 3) === 0;
}

console.log(isMultipleOfThree(6));
console.log(isMultipleOfThree(19));
console.log(isMultipleOfThree(7));
console.log(isMultipleOfThree(300));


// Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive (input) {
    return ((parseFloat(input) % 3) === 0 && (parseFloat(input) % 5) === 0);
}
//testing inputs
console.log(isMultipleOfThreeAndFive(15));
console.log(isMultipleOfThreeAndFive(30));
console.log(isMultipleOfThreeAndFive(40));


//Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

function isMultipleOf(target, n) {
    return target % n === 0;
}

//testing inputs
console.log(isMultipleOf(25, 5));
console.log(isMultipleOf(12, 3));
console.log(isMultipleOf(43, 7));


//Make a function named isTrue(boolean)

function isTrue(boolean) {
   return boolean === true;
}

//testing inputs
console.log(isTrue(true));
console.log(isTrue(false));

// Make a function named isFalse(boolean)

function isFalse(boolean) {
    return boolean === false;
}

//testing inputs
console.log(isFalse(true));
console.log(isFalse(false));

//Make a function named isTruthy(input),
//remember that values other than true will behave like true
//made 2 versions (isTruthyAgain- not sure which is better to use (have different results))

function isTruthy(input) {
    return input != false;
}

//testing inputs
console.log(isTruthy(0));
console.log(isTruthy(1));
console.log(isTruthy(true));
console.log(isTruthy(false));
console.log(isTruthy(12));
console.log(isTruthy("banana"));


function isTruthyAgain(input) {
    return input == true;
}

//testing inputs
console.log(isTruthyAgain(0));
console.log(isTruthyAgain(1));
console.log(isTruthyAgain(true));
console.log(isTruthyAgain(false));
console.log(isTruthyAgain(12));
console.log(isTruthyAgain("banana"));

//Make a function named isFalsy(input),
// remember that values other than false behave like false

function isFalsy(input) {
    return input == false;
}

//testing inputs
console.log(isTruthyAgain(0));
console.log(isTruthyAgain(1));
console.log(isTruthyAgain(true));
console.log(isTruthyAgain(false));
console.log(isTruthyAgain(12));
console.log(isTruthyAgain("banana"));

//Make a function named isVowel(letter)

function isVowel(letter) {
    var letter = letter.toLowerCase();
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
        return true;
    } else {
        return false;
    }
}

//testing inputs
console.log(isVowel("c"));
console.log(isVowel("b"));
console.log(isVowel("u"));
console.log(isVowel("z"));
console.log(isVowel("y"));
console.log(isVowel("E"));
console.log(isVowel("i"));
console.log(isVowel("O"));
console.log(isVowel("a"));

//Make a function named isConsonant(letter)

function isConsonant(letter) {
    var letter = letter.toLowerCase();
    if (letter !== "a" && letter !== "e" && letter !== "i" && letter!== "o" && letter !== "u" && letter !== "y") {
        return true;
    } else {
        return false;
    }
}

//testing inputs
console.log(isConsonant("a"));
console.log(isConsonant("e"));
console.log(isConsonant("i"));
console.log(isConsonant("z"));
console.log(isConsonant("b"));
console.log(isConsonant("Z"));
console.log(isConsonant("X"));
console.log(isConsonant("M"));
console.log(isConsonant("O"));

//Make a function named isCapital(letter)

function isCapital(letter) {

}