var prevScroll = 0;

(function ($) {

     prevScroll = $(window).scrollTop();

     // scroll functions
     $(window).scroll(function(e) {
     
         // add/remove class to navbar when scrolling to hide/show
         $('.navbar')[(prevScroll - $(window).scrollTop() <= 10 && $(window).scrollTop() >= 50) ? 'addClass' : 'removeClass']('navbar-hide');

         prevScroll = $(window).scrollTop();
     
     });
     
 })(jQuery);    