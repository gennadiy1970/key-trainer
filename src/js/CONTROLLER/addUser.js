function addUser (e) {
    // TODO сделать проверку на уникальность имени
    e.preventDefault();
    let name = user.value;
    sectionUser.style.display = 'none';
    userId = document.getElementById('id-User');
    userId.textContent = name;
    paintUserScore();
    appData.userCurrent.name  = name;
    appData.userCurrent.score = userId.nextSibling.textContent;
    createREST(appData.userCurrent);
    save('thisUser', appData.userCurrent);
}