const timer = {
    startTime: 0,
    stopTime : 0,
    interval : 0,

    start: function () {
        this.startTime = new Date();
        this.interval = setInterval(function () {
            let tmp = new Date();
            let delta = tmp.getTime() - timer.startTime.getTime();
            let sec = dateFormat(delta);
            showTimer(sec);
        }, 40);
    },

    stop: function () {
        this.stopTime = new Date();
        let delta = this.stopTime.getTime() - this.startTime.getTime();
        let sec = dateFormat(delta);
        showTimer(sec);
        clearInterval(this.interval);
        this.startTime = 0;
        this.stopTime = 0;
        this.interval = 0;
        return sec;
    }
};