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

    //Контроллер вторым слайдером - первый
    swiperStepsTwo.controller.control = swiperStepsOne;

    const stepNext = $('.steps__swiper-button-next');
    const stepPrev = $('.steps__swiper-button-prev');
    const stepBullets = $('.steps__swiper-pagination--bullets');

    stepNext.css('left', stepPrev.width() + 10 + stepBullets.width() + 35);

    //Получаем кнопки + события по клику

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

    //добавляем и убираем нужный класс чтобы покрасить активный слайд в белый.
    swiperStepsTwo.on('slideChange', function () {
        let activeSlide = ('.button-' + swiperStepsTwo.realIndex);
        let prevSlide = ('.button-' + swiperStepsTwo.previousIndex);
        $(activeSlide).removeClass('not-active');
        $(prevSlide).addClass('not-active');
    });

    //валидация формы
    $('.modal__form').validate({
        errorClass: 'invalid',
        errorElement: 'div',
        rules: {
            // срочное правило
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userPhone: "required",
            // правило-объект
            userEmail: {
                required: true,
                email: true
            }
        }, //сообщения
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя должно быть не короче 2-х букв",
                maxlength: "Имя не должно быть длиннее 15-и букв"
            },
            userPhone: "Заполните поле",
            userEmail: {
                required: "Заполните поле",
                email: "Введите корректный email",
            }
        }
    });

    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});


    $(".modal__form").validate({
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .addClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .removeClass(errorClass);
        }

    });

    //  yandex map api
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [47.244729, 39.723187],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/location.png',
                // Размеры метки.
                iconImageSize: [32, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });

        myMap.geoObjects
            .add(myPlacemark)
    });

});