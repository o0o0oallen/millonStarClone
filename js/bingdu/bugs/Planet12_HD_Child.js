/*
* name;
*/
var Planet12_HD_Child = /** @class */ (function () {
    function Planet12_HD_Child(t, e, i) {
        this.parent = null;
        this.index = 0;
        this.img = null;
        this.scale = NaN;
        this._scale = NaN;
        this.step = 0;
        this.scaleDiff = NaN;
        this.endTime = NaN;
        this.startTime = NaN;
        this.delay = 0;
        this.diffTime2 = 2 * Planet12_HD_Child.diffTime;
        this.diffTime_2 = .5 * Planet12_HD_Child.diffTime;
        this.img = t,
            this.parent = e,
            this.index = i,
            t.scale(0, 0, true),
            this.step = 3;
    }
    Planet12_HD_Child.prototype.update = function () {
        switch (this.step) {
            case 1:
                Game.time < this.endTime ? (this._scale = laya.utils.Ease.cubicOut(Game.time - this.startTime, 0, this.scale, this.diffTime2), this.img.scale(this._scale, this._scale, true)) : (this.step = 2, this.startTime = Game.time, this.endTime = this.startTime + this.diffTime_2, this.delay = Math.random() * this.diffTime2);
                break;
            case 2:
                Game.time < this.endTime ? (this._scale = laya.utils.Ease.cubicIn(Game.time - this.startTime, this.scale, -this.scale, this.diffTime_2), this.img.scale(this._scale, this._scale, true)) : (this.scale = .2 + .6 * Math.random(), this.startTime = Game.time, this.endTime = this.startTime + this.diffTime2, this.parent.round += Math.random() + 1, this.img.x = 90 * Math.cos(this.parent.round) + 50 * (1 - this.scale), this.img.y = 90 * Math.sin(this.parent.round) + 50 * (1 - this.scale), this.step = 1);
                break;
            case 3:
                Game.time > this.delay && (this.step = 1);
        }
    };
    Planet12_HD_Child.diffTime = 1;
    return Planet12_HD_Child;
}());
//# sourceMappingURL=Planet12_HD_Child.js.map