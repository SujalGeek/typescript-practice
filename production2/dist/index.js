"use strict";
class Instgram {
    constructor(camerPhoto, filter, burst) {
        this.camerPhoto = camerPhoto;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(camerPhoto, filter, burst, short) {
        this.camerPhoto = camerPhoto;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created");
    }
}
