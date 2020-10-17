'use strict';

// $(document).ready(function(){
//   $("button").click(function(){
//     $(this).hide();
//   });
// });

$(document).ready(function(){

  $(".test_div").click(function(){
    $(this).hide();
  });

  $(".reset button").click(function(){
    $(".test_div").show();
  });

  $(".lorem h5").click(function(){
    $(this).css("background-color" , "orange");
  });
});

// $(document).ready(function(){
//   $(".reset button").click(function(){
//     $(".test_div").show();
//   });
// });

