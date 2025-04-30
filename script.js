// When clicking the button, add "open" class to header to trigger animation
$("button").click(function(){
  if(!$("header").hasClass("open")){
    $("header").addClass("open");
  }
  else if($("header").hasClass("open")){
    $("header").addClass("");
  }
});

