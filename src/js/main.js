//Ждём пока загрузится DOM
document.addEventListener("DOMContentLoaded", function (event) {

    //получаем кнопки
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggle=modal');
    const closeBtn = document.querySelector('.modal__close');


    //функция добавления класса
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    }


    //добавляем события:

    //прослушка кнопок "открыть"
    modalBtn.forEach(element => {
       element.addEventListener('click', switchModal);
    });
    //прослушка кнопки "закрыть"
    closeBtn.addEventListener('click', switchModal);

    //закрытие окна по клику мимо
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove('modal--visible');
        }
    }
    //событие по кнопке ESC
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            modal.classList.remove('modal--visible');
        }
    })

})