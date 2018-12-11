"use strict";
 $(document).ready(function() {
     alert( 'The DOM has finished loading!' );

//Exercise 1: Id selectors

// var header = $('#fancy-header').html();
// alert(header);

// Exercise 2: class selectors
// $(".codeup").css("border-style", "solid", "1px").css("border-color", "red");

//Exercise 3: Element Selectors

  // $("li").css("font-size", "20px");
  // $("li").css("background-color", "yellow");
  // $("p").css("background-color", "yellow");
  // $("h1").css("background-color", "yellow");

  // alert($('h1').html());

//Exercise 4: Multiple Selectors
//   $("li, h1, p").css("background-color", "yellow");



//Mouse events exercise:

// Add jQuery code that will change the background color of a h1 element when clicked.

    $("h1").click(function(){
        $(this).css("background-color", "papayawhip");
    });


// Make all paragraphs have a font size of 18px when they are double clicked.

     $("p").dblclick(function(){
         $(this).css("font-size", "18px");
     });


// Set all li text color to red when the mouse is hovering, reset to black when it is not.

     $("li").hover(function(){
         $(this).css("color", "red");
     }, function(){
         $(this).css("color", "");
     });






// keep this at the end of the page
});