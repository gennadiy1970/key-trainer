function addListeners () {

    activeBtn();

    /* ======================== смена языка раскладки ====================== */
    languageButtons.addEventListener('click', resetKeyboardLetters);

    /* ============= добавить пользователя ====================== */
    sbmt.addEventListener('click', addUser);

    /* ============= показать скрытое окно для ввода текста ============= */
    btnShow.addEventListener('click', showTextArea);

    /* ============= добавить новый текст ============= */
    btnTextAdding.addEventListener('click', setNewPhrase);

    /* ========================= начинаем сравнение кликов клавиш с текстом ========== */
    beginButton.addEventListener('click', beginType);
}