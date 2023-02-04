$(document).ready(function() {
    $('.icon-bar').click(function() {
        $('#nav-mobile').slideToggle();
        $('#subnav-mobile').slideUp();
    })

    $(window).scroll(function() {
        $('#nav-mobile').slideUp();
    })

    $(window).resize(function() {
        $('#nav-mobile').slideUp();
    })

    $('.icon-1').click(function() {
        $(this).toggleClass('open');
        $('#subnav-mobile').slideToggle();

    })
})