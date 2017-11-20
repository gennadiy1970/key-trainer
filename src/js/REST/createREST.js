function createREST (obj) {
    let createUrl = `${appData.url}?action=1&name=${obj.name}&score=${obj.score}`;
    console.log(createUrl);

    fetch(createUrl, {
        metod: "post"
    })
    .catch(function (error) {
        console.log('CreateREST: Fetch Error :-S', error);
    });
}