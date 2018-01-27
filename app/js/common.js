$(function () {

    init();


});

function init() {

    initMenu();
    initCarouselService();
    initStyles();
    initEvents();
    initForm();
    initCarouselReviews();
    initCarouselPartners();
    initMap();
    initReturnButton();
    initPreloader();
}

function initMenu() {
    $('#my-menu').mmenu({
        extensions: ['position-right', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты">'
        }

    })

    var API = $('#my-menu').data("mmenu")


    API.bind("open:finish", function () {

        $('.hamburger').addClass('is-active')

    })
    API.bind("close:finish", function () {

        $('.hamburger').removeClass('is-active')

    })
}

function initCarouselService() {

    $('.carousel-services').on('initialized.owl.carousel', function () {

        setTimeout(function () {
            resizeCarouselService()
        }, 200)
    })

    $('.carousel-services').owlCarousel({
        smartSpeed: 700,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-angle-double-left"></i>',
            '<i class="fa fa-angle-double-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {

                items: 3
            }
        }

    })

    $('.carousel-services-content').equalHeights()


}

function initStyles() {
    $('.carousel-services-composition .h3').each(function () {
        var ths = $(this)
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
    })

    $('section .h2').each(function () {
        var ths = $(this)
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
    })

    $('select').selectize({});
}

function initEvents() {
    window.onresize = function () {
        onResize()
    }
}

function initForm() {

    //E-mail Ajax Send
    $("form.callback").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $(th).find('.access').addClass('active').css('display', 'flex').hide().fadeIn();

            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                $(th).find('.success').removeClass('active').fadeOut()
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });
}

function initCarouselReviews() {
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        nav: false,
        autoHeight: true
    });
}

function initCarouselPartners() {
    $('.partners').owlCarousel({
        loop: true,
        smartSpeed: 700,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
}

function initMap() { 
    var uluru = {lat: 49.9947277, lng: 36.1457403};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function initReturnButton() {
    $(window).scroll(function() {
        if($(this).scrollTop() > $(this).height()){
            $('.top').addClass('active')
        } else {
            $('.top').removeClass('active')
        }
    })

    $('.top').click(function () {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing')
    })
}


function onResize() {
    $('.carousel-services-content').equalHeights()

}

function resizeCarouselService() {

    $('.carousel-services-item').each(function () {
        var ths = $(this)
        var thsHeight = ths.find('.carousel-services-content').outerHeight()
        ths.find('.carousel-services-image').css('min-height', thsHeight)

    })
}

function initPreloader() {
    $(window).on('load', function() {
        $('.preloader').delay(1000).fadeOut('slow');
    })
}