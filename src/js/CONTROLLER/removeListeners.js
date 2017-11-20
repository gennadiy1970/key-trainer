function removeListeners () {
    // console.log('remove listeners');

    /* ======================== смена языка раскладки ====================== */
    languageButtons.removeEventListener('click', resetKeyboardLetters);

    /* ============= добавить пользователя ====================== */
    sbmt.removeEventListener('click', addUser);

    /* ============= показать скрытое окно для ввода текста ============= */
    btnShow.removeEventListener('click', showTextArea);

    /* ============= добавить новый текст ============= */
    btnTextAdding.removeEventListener('click', setNewPhrase);

    /* ========================= начинаем сравнение кликов клавиш с текстом ========== */
    beginButton.removeEventListener('click', beginType);

    desactiveBtn();
}