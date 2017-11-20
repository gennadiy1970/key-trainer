function deleteREST(obj) {
    let updateUrl = `${appData.url}?action=3$id=${obj.restID}`;
// http://fecore.net.ua/rest/?action=3$id=63
// http://fecore.net.ua/rest/?action=3&id=63
    fetch(updateUrl, {
        metod: "post"
    }).catch(function (error) {
        console.log('deleteREST: Fetch Error : ', error);
    });
}