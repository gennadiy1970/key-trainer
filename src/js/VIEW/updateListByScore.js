function updateListByScore () {
    // console.log('updateListByScore');
    const userListScores = document.querySelectorAll('.user-list__item');
    let tmp = Array.from(userListScores);
    tmp.sort((a, b) => b.lastChild.textContent - a.lastChild.textContent);
    Array.from(userListScores, elem => elem.remove());
    tmp.map(elem => userListParent.appendChild(elem));
}