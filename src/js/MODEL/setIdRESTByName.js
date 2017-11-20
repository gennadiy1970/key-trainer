function setIdRESTByName(arr) {
    arr.map(elem => {
        if (elem.name === appData.userCurrent.name) {
            appData.userCurrent.restID = elem["id"];
        }
    });
}