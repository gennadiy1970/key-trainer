function getRESTIdUser () {
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
        setIdRESTByName(json);
    })
        .catch(function (error) {
            console.log('Fetch Error :-S', error);
        });
}