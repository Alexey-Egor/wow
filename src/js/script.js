$(document).ready(function(){
    $(window).on("scroll", function() {
        $('.header').toggleClass("active", $(this).scrollTop() > $(window).height() / 3);
      });
}); 
