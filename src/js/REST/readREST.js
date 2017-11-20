function readREST() {
    fetch(appData.url, {
        metod: "get",
        mode: 'cors',
        headers:{
        'Access-Control-Allow-Origin':'*'
    }
    })
        .then((response) => {
            let json = response.json();
            if (response.status >= 200 && response.status < 300) {
                return json;
            } else {
                return error;
            }
        }).then((json) => {
        let tmp = arrayToObj(json);
        // если список больше 10, то сохраним userRec
        let userRec = appData.records;
        appData.records = Object.assign(appData.records, tmp);

        addtoResultsArray(appData.results, appData.records);
        sortByScore(appData.results);
        // получить список максимум из 10-ти топ результатов
        filterTopResult(appData.results);

        appData.records = Object.assign(appData.records, userRec);
        sortByScore(appData.results);

        appData.results.map(elem => addToScoreList(elem.name, elem.score, userListParent));
        // console.log('appData.userCurrent.id = ', appData.userCurrent.id);
        userId = document.getElementById(appData.userCurrent.id);
        paintUserScore();
    })
        .catch(function (error) {
            console.log('Fetch Error :-S', error);
        });
}

