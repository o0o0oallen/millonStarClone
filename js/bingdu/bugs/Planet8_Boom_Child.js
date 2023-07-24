/*
* name;
*/
var Planet8_Boom_Child = /** @class */ (function () {
    function Planet8_Boom_Child(t) {
        // public parent = null;
        this.index = 0;
        this.img = null;
        this.bi = NaN;
        this.step = 0;
        this.scaleDiff = NaN;
        this.endTime = 0;
        this.startTime = 0;
        this.endX = 0;
        this.endY = 0;
        this.delay = 0;
        this.diffTime2 = 2 * Planet12_HD_Child.diffTime;
        this.diffTime_2 = 0.5 * Planet12_HD_Child.diffTime;
        this.randomPos = function () {
            var t = 360 * Math.random();
            this.img.rotation = t + 90,
                this.img.scaleX = 2 * Math.random() + 1;
            var e = t / 180 * 3.14159;
            this.endX = 50 * Math.cos(e),
                this.endY = 50 * Math.sin(e);
        };
        this.img = t;
        this.randomPos();
        this.step = 1;
    }
    Planet8_Boom_Child.prototype.update = function () {
        switch (this.step) {
            case 1:
                Game.time < this.endTime ? (this.bi = laya.utils.Ease.cubicOut(Game.time - this.startTime, 0, 1, this.diffTime2), this.img.pos(this.bi * this.endX, this.bi * this.endY)) : (this.step = 2, this.startTime = Game.time, this.endTime = this.startTime + this.diffTime_2, this.delay = Game.time + Math.random() * this.diffTime2);
                break;
            case 2:
                Game.time < this.endTime ? (this.bi = laya.utils.Ease.cubicIn(Game.time - this.startTime, 1, -1, this.diffTime_2), this.img.pos(this.bi * this.endX, this.bi * this.endY)) : this.step = 3;
                break;
            case 3:
                Game.time > this.delay && (this.step = 1, this.randomPos(), this.startTime = Game.time, this.endTime = this.startTime + this.diffTime2);
        }
    };
    Planet8_Boom_Child.diffTime = 0.5;
    return Planet8_Boom_Child;
}());
//# sourceMappingURL=Planet8_Boom_Child.js.map