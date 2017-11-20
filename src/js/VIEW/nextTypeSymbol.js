function nextTypeSymbol () {
    // область набора
    // console.log(typableChars[appData.currentType.position].textContent);
    typableChars[appData.currentType.position].classList.add('typable__char--success');
    typableChars[appData.currentType.position].classList.remove('typable__char--current');
    typableChars[++appData.currentType.position].classList.add('typable__char--current');

    // область клавиатуры


}