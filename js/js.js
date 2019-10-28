$(document).ready(function () {

    $(".menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('#up').click(function () {
        $('body,html').animate({scrollTop: 0}, 500);
        return false;
    });

    $('.gallery').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        delegate: 'a'

    });

    $('#foto').on('click', function (event) {
        event.preventDefault();


        $('.mask').addClass('active');
        $('.foto').addClass('active');
    });

    $('.mask').on('click', function () {
        $('.mask').removeClass('active');
        $('.foto').removeClass('active');
    });

});