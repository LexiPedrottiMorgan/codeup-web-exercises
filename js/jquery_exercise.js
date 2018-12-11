"use strict";
 $(document).ready(function() {
     alert( 'The DOM has finished loading!' );

//Exercise 1: Id selectors

// var header = $('#fancy-header').html();
// alert(header);

// Exercise 2: class selectors
// $(".codeup").css("border-style", "solid", "1px").css("border-color", "red");

//Exercise 3: Element Selectors

  $("li").css("font-size", "20px");
  // $("li").css("background-color", "yellow");
  // $("p").css("background-color", "yellow");
  // $("h1").css("background-color", "yellow");

  alert($('h1').html());

//Exercise 4: Multiple Selectors
  $("li, h1, p").css("background-color", "yellow");




// keep this at the end of the page
});