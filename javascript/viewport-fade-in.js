(function ($) {


     // scroll functions
     $(window).scroll(function(e) {
     
          scroll = $(window).scrollTop()

            

          if(scroll >= 150){
               $('.animated')['addClass']('visible');
          }
     
     });
     
 })(jQuery);  
 
 $(function() {
  $('.heading-logo').addClass('visible');
});