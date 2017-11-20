/*
 Заполнение TYPABLE AREA текстом для набора
 */
function fillTypableChars(arr, str) {
    Array.from(arr, (elem, i) => elem.textContent = str[i]);
}
