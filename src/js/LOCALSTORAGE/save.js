// key =  'thisUser'

function save (key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}