/*
* name;
*/
var manager_MTwinkle = /** @class */ (function () {
    function manager_MTwinkle() {
        this.state = [];
        this.count = 0;
        this.state = [];
        manager_MTwinkle.ME = this;
    }
    manager_MTwinkle.prototype.start = function (t, e, s) {
        if (e === void 0) { e = 300; }
        if (s === void 0) { s = 0; }
        null != t && -1 == this.state.indexOf(t) && (this.state.push(t), this.count = this.state.length, t.tkVis = t.visible, s > 0 && (t.tkEndCount = s, t.tkCount = 0), Laya.timer.clear(this, this.vis), Laya.timer.loop(e, this, this.vis));
    };
    manager_MTwinkle.prototype.vis = function () {
        for (var t, e = this.count; e--;)
            (t = this.state[e]).visible = !t.visible,
                t.tkEndCount && (t.visible && t.tkCount++, t.visible == t.tkVis && t.tkCount >= t.tkEndCount && this.stop(t));
    };
    manager_MTwinkle.prototype.stopAll = function () {
        for (var t = this.count; t--;)
            this.state[t].visible = true;
        this.state = [];
        this.count = 0;
        Laya.timer.clear(this, this.vis);
    };
    manager_MTwinkle.prototype.stop = function (t) {
        if (null != t) {
            var e = this.state.indexOf(t);
            -1 != e && (this.state.splice(e, 1), this.count = this.state.length),
                t.visible = t.tkVis;
        }
    };
    return manager_MTwinkle;
}());
//# sourceMappingURL=MTwinkle.js.map