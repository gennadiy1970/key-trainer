function arrayToObj (arr) {
    let obj = {};
    arr.map(elem => obj[elem["name"]] = elem["score"]);
    return obj;
}