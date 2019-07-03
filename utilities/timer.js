const { PerformanceObserver, performance } = require("perf_hooks");

class Timer {
    constructor() {
        this.timeStart = null;
    }

    start() {
        console.log("< --- timer set --- >");
        this.timeStart = performance.now();
    }

    check() {
        console.log(`${performance.now() - this.timeStart} Milliseconds|check`);
    }
    checkSeconds() {
        console.log(`${(performance.now() - this.timeStart) / 1000} Seconds|check`);
    }

    reset() {
        this.check();
        console.log("< --- reset --- >");
        this.timeStart = performance.now();
    }

    resetSeconds() {
        this.checkSeconds();
        console.log("< --- reset --- >");
        this.timeStart = performance.now();
    }

}

const timer = new Timer();


module.exports = timer;