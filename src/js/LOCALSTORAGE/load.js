// key =  'thisUser'

function load (key) {
    return JSON.parse(localStorage.getItem(key));
}