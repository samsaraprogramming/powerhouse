var prevScroll = 0;

(function ($) {

     // scroll functions
     $(window).scroll(function(e) {
     
          scroll = $(window).scrollTop()

          if(scroll <= 60){
               $('.navbar')['removeClass']('navbar-hide');
          }else if(scroll - prevScroll >= 20){
               $('.navbar')['addClass']('navbar-hide');
               prevScroll = scroll;
          }
          else if(prevScroll - scroll >= 20) {
               $('.navbar')['removeClass']('navbar-hide');
               prevScroll = scroll;
          }
          //}
     
     });
     
 })(jQuery);    