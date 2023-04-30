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

const home__swiper = new Swiper('.home__swiper', {
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

// const gallery__swiper = new Swiper('.gallery__swiper', {
//     loop: true,
//     slidesPerView: 3,
//     grid: {
//         rows: 2,
//       },
//     autoHeight: false,
//     spaceBetween: 30,
// });

Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });