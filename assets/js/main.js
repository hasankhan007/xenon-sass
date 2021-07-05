(function ($) {
    "use strict";

     /* image magnific popup */
     $('.project-popup').magnificPopup({
         type: 'image',
         gallery: {
             enabled: true
         }
     });
     /* video magnific popup */
     $('.video').magnificPopup({
        type: 'iframe'

     });

     /* counterup activation */
     $('.counter').counterUp();

     /* slick slider */
     $('.testimonials').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
     });

     /* Top to back */
     $(".top").on('click', function () {
         $("body, html").animate({
             scrollTop: 0
         }, 1000);
         return false;
     });

     /* Top to backbtn Auto hide */
     $(window).on('scroll', function () {
         if ($(this).scrollTop() > 40) {
             $('.top').fadeIn(1000);
         } else {
             $('.top').fadeOut(1000);
         }
     });

     /* Social Button Auto hide */
     $(window).on('scroll', function () {
         if ($(this).scrollTop() > 40) {
             $('.socialBtn').fadeIn(500);
         } else {
             $('.socialBtn').fadeOut(500);
         }
     });


     /* TOP Menu Stick  */
     $(window).on('scroll', function () {
         if ($(this).scrollTop() > 100) {
             $('#sticky-header').addClass("sticky");
         } else {
             $('#sticky-header').removeClass("sticky");
         }
     });


     /* One page scroll smooth  */
     $('#nav').onePageNav();




})(jQuery);





