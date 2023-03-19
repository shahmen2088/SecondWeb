$(function () {

    // Fixed header
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPosition = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(introH, scrollPosition);

    $(window).on('scroll resize', function () {
        introH = intro.innerHeight();
        scrollPosition = $(this).scrollTop();
        checkScroll(introH, scrollPosition);
    });
    header.addClass('fixed');

    function checkScroll(introH, scrollPosition) {
        if (scrollPosition > introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }
    // Smooth scroll 
    $('[data-scrolls]').on('click', function (event) {
        event.preventDefault();

        let elementId = $(this).data('scrolls');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 700)
    });


    // Nav Toggle 
    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    // Reviews https://kenwheeler.github.io/slick/ 
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
});

