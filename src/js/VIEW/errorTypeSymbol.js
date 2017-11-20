function errorTypeSymbol () {
    typableChars[appData.currentType.position].classList.add('typable__char--error');
    errors.textContent = appData.currentType.errors;
}