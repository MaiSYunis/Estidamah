$(document).ready(function () {

  var swiper = new Swiper(".homBanner", {
    pagination: {
      el: ".homBanner .swiper-pagination",
      clickable: true
    },
  });
  var swiper = new Swiper(".mySwiperNews", {
    pagination: {
      el: ".mySwiperNews .swiper-pagination",
      clickable: true
    },
  });

  var swiper = new Swiper(".mySwipeOffer", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiperOffer .swiper-button-next",
      prevEl: ".swiperOffer .swiper-button-prev",
    },
        breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }
  });
  var swiper = new Swiper(".mySwipeOffer2", {
    slidesPerView: 3,
    spaceBetween: 24,
    navigation: {
      nextEl: ".mySwipeOffer2 .swiper-button-next",
      prevEl: ".mySwipeOffer2 .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }
  });
  var swiper = new Swiper(".mySwiperElect", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
      el: ".electWrapper .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    }
  });

  if( $('.ourNumSec').length ) {
    $('body').addClass('whiteBg')
    jQuery(function ($) {
      "use strict";
    
      var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
    
      var $counters = $(".counter");
    
      /* Start counting, do this on DOM ready or with Waypoints. */
      $counters.each(function (ignore, counter) {
        var waypoint = new Waypoint({
          element: $(this),
          handler: function () {
            counterUp(counter, {
              duration: 2000,
              delay: 10,
            });
            // this.destroy();
          },
          offset: "bottom-in-view",
        });
      });
    });
    
  }



});



