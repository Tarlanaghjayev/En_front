$(document).ready(function () {
    var stiky = $('#navigation');
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 121) {
            stiky.addClass('sticky');
        }
        else { stiky.removeClass('sticky'); }
    });
    $(window).on('load', function () {
        var $container = $('.work-filter');
        var $filter = $('#menu-filter');
        $container.isotope({
            filter: '*',
            layoutMode: 'masonry',
            animationOptions: {
                duration: 750,
                easing: 'linear'
            }
        });
        $filter.find('a').on("click", function () {
            var selector = $(this).attr('data-filter');

            $filter.find('a').removeClass('active');
            $(this).addClass('active');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });
            return false;
        });
    });
    $('.mag-pop').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 121 || document.documentElement.scrollTop > 121) {
            $('#to-top').css("display", "block");
        } else {
            $("#to-top").css("display", "none");
        }
    }
    $("#to-top").on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
    $(".search").on("click", function (e) {
        e.preventDefault();
        $(".search-box").slideToggle();
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 120) {
            $('.search-box').css("top", "60px");
        } else {
            $(".search-box").css("top", "180px");
        }
    });


});










