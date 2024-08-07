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
  $(".toggleOptions").click(function (e) {
    e.preventDefault();
    $(".navActions").toggleClass("show");
  });
  
  $("#contrastId").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("contrast");
  });






  if ($(".rating-star").length) {
    $(".rating-star")
      .on("mouseover", function (e) {
        var rating = $(e.target).data("rating");

        $(".rating-star").addClass("active");

        $(".rating-star").removeClass("icon-star-half-alt");

        $(".rating-star#rating-" + rating + " ~ .rating-star")
          .removeClass("active")
          .addClass("icon-star");
      })
      .on("mouseleave", function (e) {
        $(".rating-star")
          .not(".selected")
          .removeClass("active")
          .removeClass("icon-star-half-alt")
          .addClass("icon-star");
        setCurrentRating();
      });
  }



  // function modifyFontSize(MyElement,flag){

  //   var HtmlElement = $(MyElement);
  //   var currentFontSize = parseInt (HtmlElement.css('font-size'));

  //   if (flag =='increase' & currentFontSize < 19 )
  //       currentFontSize += 1;
  //   else if (flag == 'decrease' & currentFontSize >= 16 )
  //       currentFontSize -= 1;
  //   else if (flag == 'reset')
  //   currentFontSize = 16;

  //   HtmlElement.css('font-size', currentFontSize);

  //   console.log(currentFontSize);

  // }

  // /* --- Font sizing Function --- */
  // $('#fontIncrease').click(function(){
  //   modifyFontSize('html','increase');
  // });
  // $('#fontDecrease').click(function(){
  //   modifyFontSize('html','decrease')
  // });

  // const body = document.body;
  // const increaseFontBtn = document.getElementById("fontIncrease");
  // const decreaseFontBtn = document.getElementById("fontDecrease");

  // function changeFontSize(increase = true) {
  //   const style = window
  //     .getComputedStyle(body, null)
  //     .getPropertyValue("font-size");
  //   const currentSize = parseFloat(style);

  //   if (increase) {
  //     body.style.fontSize = currentSize + 2 + "px"; // Increase font size by 2px
  //   } else {
  //     body.style.fontSize = currentSize - 2 + "px"; // Decrease font size by 2px
  //   }
  // }

  // increaseFontBtn.addEventListener("click", () => changeFontSize(true));
  // decreaseFontBtn.addEventListener("click", () => changeFontSize(false));
});




/*

  font increase & decrease functions per pixels
*/
$(function() {

let count = 0;


$(".fontDecrease").click(function(e) {
 
  count -= 1;
  // console.log(count);
  if (count == -3) {
    $(this).toggleClass('click'); 
  }
  $(".fontIncrease").removeClass('click')
  $("*").children().each(function() {
    var size = parseInt($(this).css("font-size"));
    size = size - 1 + "px";
    
    $(this).css({
      'font-size': size
    });
  });
  e.stopPropagation();
});
$(".fontIncrease").on("click",function(e) {
  count += 1;
  // console.log(count);
  if (count >= 3) {
    $(this).toggleClass('click'); 

  }
  $(".fontDecrease").removeClass('click')
  $("*").children().each(function() {
    var size = parseInt($(this).css("font-size"));
    size = size + 1 + "px";
    $(this).css({
      'font-size': size
    });
  });
  e.stopPropagation();
});
});
