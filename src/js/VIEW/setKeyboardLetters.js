/*
  Запонение клавиатруы символами выбранного языка
 */

function setKeyboardLetters(language, buttons){
    for (let i = 0, limit = buttons.length; i < limit; i = i + 1) {
        buttons[i].textContent = language[i];
    }
}