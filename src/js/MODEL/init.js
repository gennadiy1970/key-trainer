function init () {
    addListeners();
    showModal();
    /*
    задаем дефолтные значения выбору языка
     */
    setKeyboardLetters(appData.currentSetting.setKeyboard(), keyboardButtons);

    /*
      добавляет текст в  typable
    */
    fillTypableChars(typableChars, appData.currentSetting.setTypingText());
    hideTypeElements(typableChars, appData.currentSetting.setTypingText());
   console.log('1 ' + appData.userCurrent.score );
    appData.userSaved = load('thisUser');

    if (appData.userSaved) {
        appData.userCurrent.id     = appData.userSaved.id;
        appData.userCurrent.name   = appData.userSaved.name;
        appData.userCurrent.score  = appData.userSaved.score;
        console.log('2 ' + appData.userCurrent.score );
        appData.userCurrent.restID = appData.userSaved.restID;
        appData.records[appData.userCurrent.name] = appData.userCurrent.score;
        sbmt.removeEventListener('click', addUser);
        hideElem(sectionUser);
        appData.userCurrent.id = 'id-' + appData.userCurrent.name;
        getRESTIdUser();
    } else {
        console.log('3 ' + appData.userCurrent.score );
        appData.records[appData.userCurrent.name] = appData.userCurrent.score;
    }

    readREST();

}