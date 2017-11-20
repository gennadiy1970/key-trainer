/*
   Подсветка клавиатуры: клавиша, которую следует нажать.
 */

function lightButton (charText) {
        Array.from(keyboardButtons, elem => {
        if (elem.classList.contains('keyboard__btn--active')) {
            elem.classList.remove('keyboard__btn--active');
        }
        if (elem.textContent === charText) {
            elem.classList.add('keyboard__btn--active');
        }
    });
}