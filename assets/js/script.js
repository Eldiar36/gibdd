$(document).ready(function(){
    $(".licenses-slider").owlCarousel({
        items: 6,
        loop:true,
        nav:true,
        navText:true,
        margin:60,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            767:{
                items:2,
                nav:true
            },
            991:{
                items:4,

            },
            1200:{
                items:6
            }
        }
    });
});
$(document).ready(function(){
    $(".branches-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:true,
        margin:0,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            767: {
                items: 1,
                nav: true
            }
        }

    });
});
$(document).ready(function(){
    $(".menu-slider").owlCarousel({
        items: 2,
        loop:true,
        nav:false,
        dots:false,
        navText:true,
        margin:0,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            767: {
                items: 2,
                nav: false
            }
        }

    });
});
$(document).ready(function(){
    $(".footer-branches-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        navText:true,
        margin:0,
    });
});
(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find(".link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());
    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }else  {
            $("body").css("overflow","visible")
        }
    }
}
burgerMenu('.burger-menu');