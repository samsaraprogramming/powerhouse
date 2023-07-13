var prevScroll = 0;

(function ($) {

     prevScroll = $(window).scrollTop();

     // scroll functions
     $(window).scroll(function(e) {
     
          scroll = $(window).scrollTop()

          
          // add/remove class to navbar when scrolling to hide/show
          $('.navbar')[(scroll - prevScroll >= 30 && $(window).scrollTop() >= 50) ? 'addClass' : 'removeClass']('navbar-hide');
     
          //if(scroll -prevScroll >= 10){
          prevScroll = scroll;
          //}
     
     });
     
 })(jQuery);    