$(document).ready(function () {
  
  if ($(window).width() > 992) {
    $(".navbarMenu  .dropdown").hover(
      function () {
        $(this).find(".dropdown-menu").first().stop(true, true).slideDown(200);
        $(this).children(".dropdown-toggle").addClass("active");
      },
      function () {
        $(this).find(".dropdown-menu").first().stop(true, true).slideUp(200);
        $(this).children(".dropdown-toggle").removeClass("active");
      }
    );
  }
   
/*
  function modifyFontSize(MyElement,flag){

    var HtmlElement = $(MyElement);
    var currentFontSize = parseInt (HtmlElement.css('font-size'));
    
    if (flag =='increase' & currentFontSize < 19 )
        currentFontSize += 1;
    else if (flag == 'decrease' & currentFontSize >= 16 )
        currentFontSize -= 1;
    else if (flag == 'reset')
    currentFontSize = 16;

    HtmlElement.css('font-size', currentFontSize);

    // console.log(currentFontSize);

  }
    */



});
