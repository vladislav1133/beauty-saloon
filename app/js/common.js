$(function () {

    $('#my-menu').mmenu({
        extensions: ['position-right', 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты">'
        },

        hooks: {
            "openPanel:start": function () {
                console.log('open11')
            },
            "openPanel:finish": function () {
                console.log('open11')
            },
            "closePanel": function () {
                console.log('close')
            }
        }
    })

    //var api = $('#my-menu').data('mmenu')

    //console.log(api)


    // api
    //     .bind('opened', function () {
    //         $('.hamburger').addClass('is-active')
    //     })
    //     .bind('closed', function () {
    //         $('.hamburger').removeClass('is-active')
    //     })
});
