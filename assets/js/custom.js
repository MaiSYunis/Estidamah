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


  // function changeFontSize(increase = true) {
  //   // Select all elements in the body
  //   const elements = document.querySelectorAll('body *');
    
  //   // Iterate over each element
  //   elements.forEach(element => {
  //     // Get the current font size
  //     const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  //     const currentSize = parseFloat(style);

  //     // Increase or decrease the font size
  //     if (increase) {
  //       element.style.fontSize = (currentSize + 1) + 'px';// Increase font size by 2px
  //     } else {
  //       element.style.fontSize = (currentSize - 1) + 'px'; // Decrease font size by 2px
  //     }
  //   });
  // }

  // document.getElementById('increaseFont').addEventListener('click', () => changeFontSize(true));
  // document.getElementById('decreaseFont').addEventListener('click', () => changeFontSize(false));



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
