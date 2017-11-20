function setNewPhrase(event) {
    event.preventDefault();
    // console.log('setNewPhrase');
    let lng = 'en';

    Array.from(radioLang, elem => {
        if (elem.checked) {
            lng = elem.value;
        }
    });

    appData.typingText[lng] = elemTextArea.value.toLocaleLowerCase();

    hideElem(wrpTextArea);

    /* ================== меняем раскладку клавиатуры ================*/
    setKeyboardLetters(appData.currentSetting.setKeyboard(), keyboardButtons);
    /* =================  добавляет текст в  typable ====================== */
    let text = appData.currentSetting.setTypingText();

    // подсветка текущей буквы
    lightButton(text[0]);


    fillTypableChars(typableChars, text);
    hideTypeElements(typableChars, text);

}