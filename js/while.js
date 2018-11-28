"use strict";

//times 2
var i = 2;

while (i <= 65536) {
    console.log(i);
    i *= 2;
}

//Ice cream cones
var allCones = Math.floor(Math.random() * 50) + 50;
var conesOrdered;

do {
    conesOrdered = Math.floor(Math.random() * 5) + 1;
    if (allCones >= conesOrdered) {
        allCones = allCones - conesOrdered;
        console.log(conesOrdered + " cones sold. There are " + allCones + " cones left to sell.");
    }
    else if (conesOrdered > allCones) {
        console.log(conesOrdered + " cones ordered. We don't have that many cones left. We only have " + allCones);
    }

} while (allCones !== 0);

console.log("Yay! I sold them all!");

