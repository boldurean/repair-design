$(document).ready(function () {

    const modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        modalSuccess = $('.modal-success'),
        closeSuccess = $('.success-dialog__button');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    })
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');

    })
    $(document).keydown(function (event) {
        if (event.keyCode === 27) {
            $(modal).removeClass('modal--visible');
            $(modalSuccess).removeClass('visible')
        }
    });
    $(document).click(function (event) {
        if ($(event.target).is(modal) || $(event.target).is(modalSuccess)) {
            $(modal).removeClass('modal--visible');
            $(modalSuccess).removeClass('visible');
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


    //валидация форм  на сайте
    $("form").each( function() {
        $(this).validate({
            errorElement: "div",
            errorClass: "invalid",
            rules: {
                userName: {
                    required: true,
                    minlength: 2,
                    maxlength: 15
                },
                userPhone: {
                    required: true,
                    minlength: 17
                },
                userEmail: {
                    required: true,
                    email: true
                },
                userQuestion: {
                    required: true,
                    minlength: 15
                },
                policyCheckbox: "required"
            },
            //сообщения ошибок
            messages: {
                userName: {
                    required: "Заполните поле",
                    minlength: "Имя должно быть не короче 2 букв",
                    maxlength: "Имя должно быть не длинее 15 букв"
                },
                userPhone: {
                    required: "Заполните поле",
                    minlength: "Введите полный номер телефона"
                },
                userEmail: {
                    required: "Заполните поле",
                    email: "Введите корректный Email в формате name@domain.com"
                },
                userQuestion: {
                    required: "Задайте Ваш вопрос",
                    minlength: "Вопрос должен быть не короче 15 символов"
                },
                policyCheckbox: "Примите соглашение"
            },
            submitHandler: function (form) {
                $.ajax( {
                    type: 'post',
                    url: 'send.php',
                    data: $(form).serialize(),
                    success: function (response) {
                        $(form)[0].reset();
                        $(modal).removeClass('modal--visible');
                        $(modalSuccess).addClass('visible')
                    }
                });
            }
        });
    });

    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона"});


    //  yandex map api
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [47.244729, 39.723187],
                zoom: 18,
                controls: ['geolocationControl', 'zoomControl']
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
        myMap.behaviors.disable('scrollZoom');
    });

    new WOW().init();

    closeSuccess.on('click', function () {
        modalSuccess.removeClass('visible')
    })

});
