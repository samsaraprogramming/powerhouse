var prevScroll = 0;

(function ($) {


     // scroll functions
     $(window).scroll(function(e) {
     
          scroll = $(window).scrollTop()

            

          if(scroll >= 250){
               $('.animated')['addClass']('visible');
          }
     
     });
     
 })(jQuery);  
 
 $(function() {
  $('.heading-logo').addClass('visible');
});