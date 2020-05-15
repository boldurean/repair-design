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
    $(document).keydown(function(event) {
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
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Клик событие, чтобы проскролить вверх
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    //Клик событие, чтобы проскролить вниз
    $('.hero__scroll-down').click(function () {
        $("html, body").animate({ scrollTop: ($(window).height()) - ($('header').height())}, 600);
        return false;
    })
})