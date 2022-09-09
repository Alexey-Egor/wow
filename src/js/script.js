$(document).ready(function(){
    $(window).on("scroll", function() {
        $('.header').toggleClass("active", $(this).scrollTop() > $(window).height() / 3);
      });

    $('a[href^="#"]').click(function() {
      let anchor = $(this).attr('href');
      $('html, body').animate({
      scrollTop:  $(anchor).offset().top
      }, 600);
    });

    $(document).on("scroll", onScroll);
    $("a[href^='#']").click(function(e){
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });

    var menu_selector = ".nav__items";
    function onScroll(){
        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top - 20 <= scroll_top && target.position().top + target.outerHeight() - 20 > scroll_top) {
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }


    $('.burger-close').click(function() {
        $('.nav__center.only_phone').toggleClass('active');
        $('.burger-close').toggleClass('open');
        $('body').toggleClass('hidden');
        const items = document.querySelectorAll('.nav__item a');
        items.forEach(element => {
            $(element).removeClass('active');
        });
	});

    const item = document.querySelectorAll('.nav__item');
    $(item).click(function() {
        $('body').removeClass('hidden');
        $('.nav__center.only_phone').toggleClass('active');
	});

});


