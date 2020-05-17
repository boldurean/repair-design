// //Ждём пока загрузится DOM
// document.addEventListener("DOMContentLoaded", function (event) {
//
//     //получаем кнопки
//     const modal = document.querySelector('.modal');
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//     const closeBtn = document.querySelector('.modal__close');
//
//
//     //функция добавления класса
//     const switchModal = () => {
//         modal.classList.toggle('modal--visible');
//     }
//
//     //добавляем события
//
//     //прослушка кнопок "открыть"
//     modalBtn.forEach(element => {
//        element.addEventListener('click', switchModal);
//     });
//
//     //прослушка кнопки "закрыть"
//     closeBtn.addEventListener('click', switchModal);
//
//     //закрытие окна по клику мимо
//     window.onclick = function(event) {
//         if (event.target === modal) {
//             modal.classList.remove('modal--visible');
//         }
//     }
//     //событие по кнопке ESC
//     window.addEventListener('keydown', function (event) {
//         if (event.key === 'Escape') {
//             modal.classList.remove('modal--visible');
//         }
//     })
// })

$(document).ready(function () {
    const modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');


    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    })
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    })
    $(document).keydown(function (event) {
        if (event.keyCode === 27) {
            $(modal).removeClass('modal--visible');
        }
    });
    $(document).click(function (event) {
        if ($(event.target).is(modal)) {
            $(modal).removeClass('modal--visible');
        }
    });
    //Проверим если скролла нет, тогда не показываем кнопку
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Клик событие, чтобы проскролить вверх
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    //Клик событие, чтобы проскролить вниз
    $('.hero__scroll-down').click(function () {
        $("html, body").animate({scrollTop: ($(window).height()) - ($('header').outerHeight())}, 600);
        return false;
    })

    //initialize swiper when document ready
    new Swiper('.projects__swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.projects__swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.projects__swiper-button-next',
            prevEl: '.projects__swiper-button-prev',
        },


    });


    const next = $('.projects__swiper-button-next');
    const prev = $('.projects__swiper-button-prev');
    const bullets = $('.swiper-pagination');


    next.css('left', prev.width() + 10 + bullets.width() + 35);
    bullets.css('left', prev.width() + 10);


    //SWIPER ONE

    const swiperStepsOne = new Swiper('.steps__swiper-container-one', {
        pagination: {
            el: '.steps__swiper-pagination--fraction',
            type: 'fraction',
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' of ' +
                '<span class="' + totalClass + '"></span>';
        },

    });

    //SWIPER TWO
    const swiperStepsTwo = new Swiper ('.steps__swiper-container-two', {
        pagination: {
            el: '.steps__swiper-pagination--bullets',
            type: 'bullets',
        },

        navigation: {
            nextEl: '.steps__swiper-button-next',
            prevEl: '.steps__swiper-button-prev',
        },



    });

    swiperStepsTwo.controller.control = swiperStepsOne;

    const stepNext = $('.steps__swiper-button-next');
    const stepPrev = $('.steps__swiper-button-prev');
    const stepBullets = $('.steps__swiper-pagination--bullets');

    stepNext.css('left', stepPrev.width() + 10 + stepBullets.width() + 35);

    $(".button-0").click(function () {
        swiperStepsTwo.slideTo(0);
    });
    $(".button-1").click(function () {
        swiperStepsTwo.slideTo(1);
    });
    $(".button-2").click(function () {
        swiperStepsTwo.slideTo(2);
    });
    $(".button-3").click(function () {
        swiperStepsTwo.slideTo(3);
    });
    $(".button-4").click(function () {
        swiperStepsTwo.slideTo(4);
    });
    $(".button-5").click(function () {
        swiperStepsTwo.slideTo(5);
    });


    swiperStepsTwo.on('slideChange', function () {
        var activeSlide = ('.button-' + swiperStepsTwo.realIndex);
        var prevSlide = ('.button-' + swiperStepsTwo.previousIndex);
        $(activeSlide).removeClass('not-active');
        $(prevSlide).addClass('not-active');
    });

})