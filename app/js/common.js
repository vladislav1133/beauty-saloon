$(function () {

    $('#my-menu').mmenu({
        extensions: ['position-right', 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты">'
        }

    })

    var API = $('#my-menu').data( "mmenu" );



    API.bind( "open:start", function() {

            $('.hamburger').addClass('is-active')
       ;
    });
    API.bind( "close:finish", function() {

            $('.hamburger').removeClass('is-active')

    });
});
