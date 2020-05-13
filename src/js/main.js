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

    //прослушка кнопок
    modalBtn.forEach(element => {
       element.addEventListener('click', switchModal);
    });

    closeBtn.addEventListener('click', switchModal);

})