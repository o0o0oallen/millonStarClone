/*
* name;
*/
var AnimImg = /** @class */ (function () {
    function AnimImg() {
        this.pool = null;
        this.pCount = 0;
        this.frames = null;
        this.fCount = 0;
        this.pivotXs = null;
        this.pivotYs = null;
        this.runs = null;
        this.rCount = 0;
        this.isUpdate = false;
        this.fDelay = 0;
        this.fLoop = false;
        this.fCenter = false;
        this.tBreak = -1;
        this.pool = [],
            this.frames = [],
            this.runs = [],
            this.pivotXs = [],
            this.pivotYs = [];
    }
    AnimImg.prototype.init = function (filepath, _fCount, _fDelay, _fLoop, _fCenter) {
        if (_fDelay === void 0) { _fDelay = 2; }
        if (_fLoop === void 0) { _fLoop = false; }
        if (_fCenter === void 0) { _fCenter = false; }
        var h;
        this.fCount = _fCount;
        this.fDelay = _fDelay;
        this.fLoop = _fLoop;
        this.fCenter = _fCenter;
        for (var r = 1; r <= _fCount; r++)
            h = Laya.loader.getRes(filepath + r + ".png"),
                this.frames.push(h),
                this.pivotXs.push(Math.round(.5 * h.width)),
                this.pivotYs.push(Math.round(.5 * h.height));
    };
    AnimImg.prototype.getOne = function () {
        var t;
        for (var e = 0; e < this.pCount; e++) {
            if ((t = this.pool[e]).useAble)
                return t.useAble = false, t;
        }
        return t = {
            useAble: false,
            img: null,
            index: 0
        },
            this.pool.push(t),
            this.pCount++,
            t;
    };
    AnimImg.prototype.play = function (t, e) {
        if (e === void 0) { e = false; }
        // void 0 === e && (e = false);
        this.stop(t);
        var s = this.getOne();
        s.index = e ? Math.round(.5 * this.fCount) - 1 : -1;
        s.img = t,
            t.source = this.frames[s.index],
            this.rCount++,
            this.runs.push(s),
            this.isUpdate || (this.isUpdate = true, Laya.timer.loop(1, this, this.update));
    };
    AnimImg.prototype.stop = function (t) {
        var e;
        var s = this.rCount;
        for (; s--;) {
            e = this.runs[s];
            if (e.img == t) {
                e.useAble = true,
                    this.runs.splice(s, 1),
                    this.rCount--,
                    0 == this.rCount && (Laya.timer.clear(this, this.update),
                        this.isUpdate = false);
                break;
            }
        }
    };
    AnimImg.prototype.break = function (iStopWhere) {
        this.tBreak = iStopWhere;
    };
    AnimImg.prototype.update = function () {
        for (var t, e = this.rCount; e--;) {
            if ((t = this.runs[e]).delay > 0) {
                t.delay--;
            }
            else {
                t.delay = this.fDelay,
                    t.index++,
                    (this.tBreak != -1) && (t.index = this.tBreak),
                    t.index < this.fCount ? (t.img.source = this.frames[t.index],
                        this.fCenter && (t.img.pivotX = this.pivotXs[t.index],
                            t.img.pivotY = this.pivotYs[t.index])) :
                        this.fLoop ? (t.index = 0,
                            t.img.source = this.frames[t.index],
                            this.fCenter && (t.img.pivotX = this.pivotXs[t.index],
                                t.img.pivotY = this.pivotYs[t.index])) : (t.useAble = true,
                            t.img.visible = false,
                            this.runs.splice(e, 1),
                            this.rCount--,
                            0 == this.rCount && (Laya.timer.clear(this, this.update),
                                this.isUpdate = false));
            }
        }
    };
    return AnimImg;
}());
//# sourceMappingURL=AnimImg.js.map