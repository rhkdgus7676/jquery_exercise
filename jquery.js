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



$(document).ready(function(){

  $("li").hover(function(){
    $(this).css("background-color" , "yellow");
  },
  function(){
    $(this).css("background-color" , "inherit");
  }
  );

});


// $(document).ready(function(){
//   $(".reset button").click(function(){
//     $(".test_div").show();
//   });
// });

