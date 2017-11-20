function addtoResultsArray(array, object) {
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            array.push(new UserResult(key, object[key]));
        }
    }
}
