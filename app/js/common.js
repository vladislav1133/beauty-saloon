$(function () {

    $('#my-menu').mmenu({
        extensions: ['position-right', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты">'
        }

    })

    var API = $('#my-menu').data( "mmenu" )



    API.bind( "open:finish", function() {

            $('.hamburger').addClass('is-active')

    })
    API.bind( "close:finish", function() {

            $('.hamburger').removeClass('is-active')

    })

    $('.carousel-services').on('initialized.owl.carousel',function(){

        setTimeout(function () {
            carouselService()
        },200)

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
    
    function carouselService() {

        $('.carousel-services-item').each(function () {
            var ths = $(this)
            var thsHeight = ths.find('.carousel-services-content').outerHeight()
            ths.find('.carousel-services-image').css('min-height',thsHeight)

        })
    }

    $('.carousel-services-composition .h3').each(function () {
        var ths = $(this)
        ths.html(ths.html().replace(/(\S+)\s*$/,'<span>$1</span>'))
    })
    //Resize window
    function onResize() {
        $('.carousel-services-content').equalHeights()
        
    }

    window.onresize = function(){onResize()}
});
