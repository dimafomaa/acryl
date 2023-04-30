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


Fancybox.bind("[data-fancybox]");


const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
		: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)