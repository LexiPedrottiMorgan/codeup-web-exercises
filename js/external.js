"use strict";

console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

var favoriteColor = prompt("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color, too!");

//Exercise 3: Movie Rental
const pricePerDay = 3;
var littleMermaidDays = prompt("How many days do you want to keep The Little Mermaid?");
var littleMermaidCost = pricePerDay * littleMermaidDays;

var brotherBearDays = prompt("How many days do you want to keep Brother Bear?");
var brotherBearCost = pricePerDay * brotherBearDays;

var herculesDays = prompt("How many days do you want to keep Hercules?");
var herculesCost = pricePerDay * herculesDays;

var totalMovieCost = littleMermaidCost + brotherBearCost + herculesCost;

alert ("The total cost to rent The Little Mermaid for " + littleMermaidDays + " days, Brother Bear for " + brotherBearDays + " days and Hercules for " + herculesDays + " days is $" + totalMovieCost.toFixed(2) + ".");

//Exercise 3: Google, Amazon, Facebook
alert("Next you will see how much money you made this week.");
var googleHourly = 400;
var amazonHourly = 380;
var facebookHourly = 350;

var googlePay = googleHourly * 6;
var amazonPay = amazonHourly * 4;
var facebookPay = facebookHourly * 10;

var totalPay = googlePay + amazonPay + facebookPay;

alert ("You made $" + totalPay.toFixed(2) + " total this week. You made $" + googlePay.toFixed(2) + " working for Google, $" + amazonPay.toFixed(2) + " working for Amazon, and $" + facebookPay.toFixed(2) + " working for Facebook.");

//Exercise 3: class scheduling

var classNotFull = true;
var noSchedulingConflict = confirm("Are you available to take this class Tuesday/Thursday at 8:00am?");
var canTakeTheClass = classNotFull && noSchedulingConflict;
 if (canTakeTheClass == true) {
     alert("You've been added to the class!");
 } else {
     alert("You can't take this class.")
 }


//Exercise 3: coupon - not working correctly, revisit 

// var validCoupon = prompt("Is the coupon still valid? (Check the expiration date)");
// var premiumMember = prompt("Are you a Premium Member?");
// var itemsBought = prompt("How many items did you buy?");
//
//
//
// var couponApplied = validCoupon && (premiumMember || itemsBought > 2);
// alert("it is " + couponApplied + " that the coupon can be applied");
