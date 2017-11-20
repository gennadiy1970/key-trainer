const appData = {
    currentSetting: {
        lang: 'en',
        setKeyboard:  () => appData.language[appData.currentSetting.lang],
        setTypingText:() => appData.typingText[appData.currentSetting.lang]
    },
    currentType: {
        type: -1,
        text: '',
        errors: 0,
        position: 0
    },
    interval: 0,
    language: {
        en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ",
        ua: "йцукенгшщзхїфівапролджєячсмитьбю. ",
        ru: "йцукенгшщзхъфывапролджэячсмитьбю. "
    },
    records: {},
    results: [],
    timerCurrent: 0,
    typingText: {
        en: "the quick brown fox jumps over the lazy dog.",
        ua: "хвацький юшковар філіп щодня готує сім'ї вечерю з жаб.",
        ru: "съешь же ещё этих мягких французских булок, да выпей чаю."
    },
    // currentUser
    userCurrent: {
        id: 'id-User',
        restID: -1,
        name: 'User',
        score: 0
    },
    // savedUser
    userSaved: false,
    url    : 'http://fecore.net.ua/rest/'
};

