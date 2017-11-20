function resetKeyboardLetters(e) {
    appData.currentSetting.lang = e.target.textContent;
    setKeyboardLetters(appData.currentSetting.setKeyboard(), keyboardButtons);
    Array.from(langBtns, elem => elem.classList.remove('lang-ctrls__btn--active'));
    e.target.classList.add('lang-ctrls__btn--active');
    fillTypableChars(typableChars, appData.currentSetting.setTypingText());
    hideTypeElements(typableChars, appData.currentSetting.setTypingText());
    // clear();

    let text = appData.currentSetting.setTypingText();
    // подсветка текущей буквы
    // console.log(text);
    lightButton(text[0]);
}