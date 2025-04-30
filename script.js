$("button").click(function(){
  if($("header").hasClass("open")){
    // If header is open, remove the class to close it
    $("header").removeClass("open");
  } else {
    // If header is closed, add the class to open it
    $("header").addClass("open");
  }
});