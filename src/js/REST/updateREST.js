function updateREST(obj) {

    let updateUrl = `${appData.url}?action=2&id=${obj.restID}&name=${obj.name}&score=${obj.score}`;
    console.log(updateUrl);
    fetch(updateUrl, {
        metod: "post",
        mode: 'cors',
        headers:{
            'Access-Control-Allow-Origin':'*'
        }

    }).catch(function (error) {
        console.log('updateREST: Fetch Error : ', error);
    });
}