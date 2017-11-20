function beginType () {
    // beginType () flag = true  -> stopType() flag = false
    // appData.currentType.typing = true;

    // beginType() add listener -> stopType() remove listener
    document.addEventListener('keypress', checkKey);

    //
    removeListeners();

    // beginType () appData.timer.start -> stopType() appData.timer.stop
    // appData.timer.start = window.performance.now();
    // console.log(appData.timer.start);


    // array из строки для проверки - pop()
    let tmp = appData.currentSetting.setTypingText();
    appData.currentType.text = tmp.split('').reverse();
    // console.log(appData.currentType.text);

    //timer
    timer.start();

    // Errors - показать текущее состояние
    errors.textContent = appData.currentType.errors;

    modal.style.transform = 'translateY(-110%)';
    modalP.textContent = '';
}