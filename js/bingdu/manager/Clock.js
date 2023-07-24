/*
* name;
*/
var Clock = /** @class */ (function () {
    function Clock() {
        Clock.ME = this;
    }
    Clock.prototype.start = function () {
        Laya.timer.loop(1, this, this.update);
    };
    Clock.prototype.update = function () {
        Clock.timer += 0.016;
    };
    Clock.timer = 0;
    return Clock;
}());
//# sourceMappingURL=Clock.js.map