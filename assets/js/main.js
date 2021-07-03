(function ($) {
    "use strict";

     /* image magnific popup */
     $('.project-popup').magnificPopup({
         type: 'image',
         gallery: {
             enabled: true
         }
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




})(jQuery);





