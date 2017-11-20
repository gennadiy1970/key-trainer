// keyboard
const keyboardButtons = document.querySelectorAll(".keyboard__btn");

// TYPABLE AREA
let typableChars = document.querySelectorAll(".typable__char");

// lang btn
const langBtns = document.querySelectorAll(".lang-ctrls__btn");
const languageButtons = document.querySelector(".lang-ctrls__body");

// START TYPING btn
const beginButton = document.getElementById("beginBtn");

// TEXT AREA
// textArea wrapper
const wrpTextArea = document.querySelector(".inputText");
// show textArea
const btnShow = document.getElementById("btnTextArea");
// insert from textArea
const btnTextAdding = document.getElementById("btnAddText");
// radio
const radioLang = document.querySelectorAll('input[name="langSelect"]');
// textarea
const elemTextArea = document.querySelector("textarea");

// clock
const clock = document.querySelector(".clock__time");
// timer
const speed = document.querySelector(".results__value--speed");
const errors = document.querySelector(".results__value--errors");

// modal
const modal = document.querySelector(".modal");
const modalP = document.querySelector(".modal > p");


// user
const user = document.getElementById("inputUsersNameID");
const sbmt = document.getElementById("submitUsersNameID");
// user-list
// const userList = document.querySelectorAll(".user-list");
// let userListScores;
const userListParent = document.querySelector(".user-list");
// const userNames = document.querySelectorAll(".user-list__name");
const sectionUser = document.querySelector(".user");
let userId; // document.getElementById('id-User');
