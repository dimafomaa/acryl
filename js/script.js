$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .menu, .header__btn').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu').toggleClass('open');
    });
    $('.menu__link').click(function (event) {
        $('.header__burger, .menu, .header__btn').removeClass('active');
        $('body').removeClass('lock');
    });

});

const swiper = new Swiper('.home__swiper', {
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});