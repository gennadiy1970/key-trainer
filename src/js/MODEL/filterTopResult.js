function filterTopResult (arr) {
    let tmp = [];
    if(arr.length > 10) {
        tmp = arr.slice(0, 9);
        return tmp;
    }
    return arr;
}