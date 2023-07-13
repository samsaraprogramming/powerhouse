var prevScroll = 0;

(function ($) {

     prevScroll = $(window).scrollTop();

     // scroll functions
     $(window).scroll(function(e) {
     
          scroll = $(window).scrollTop()
         // add/remove class to navbar when scrolling to hide/show
         $('.navbar')[(prevScroll - scroll <= 10 && $(window).scrollTop() >= 50) ? 'addClass' : 'removeClass']('navbar-hide');

         prevScroll = scroll;
     
     });
     
 })(jQuery);    