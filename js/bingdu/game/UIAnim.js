/*
* name;
*/
var UIAnim = /** @class */ (function () {
    function UIAnim(t) {
        this.pool = null;
        this.pCount = 0;
        this.frames = null;
        this.fCount = 0;
        this.pivotXs = null;
        this.pivotYs = null;
        this.runs = null;
        this.rCount = 0;
        this.isUpdate = false;
        this.ui = null;
        this.fDelay = 0;
        this.fLoop = false;
        this.fCenter = false;
        this.blendMode = "";
        this.ui = t,
            this.pool = [],
            this.frames = [],
            this.runs = [],
            this.pivotXs = [],
            this.pivotYs = [];
    }
    UIAnim.prototype.init = function (PicName, _fCount, _fDelay, _fLoop, _fCenter) {
        if (_fDelay === void 0) { _fDelay = 2; }
        if (_fLoop === void 0) { _fLoop = false; }
        if (_fCenter === void 0) { _fCenter = false; }
        var h;
        this.fCount = _fCount;
        this.fDelay = _fDelay;
        this.fLoop = _fLoop;
        this.fCenter = _fCenter;
        for (var r = 1; r <= _fCount; r++) {
            h = Laya.loader.getRes(PicName + r + ".png"),
                this.frames.push(h),
                this.pivotXs.push(Math.round(.5 * h.width)),
                this.pivotYs.push(Math.round(.5 * h.height));
        }
    };
    UIAnim.prototype.getOne = function () {
        for (var e, i = 0; i < this.pCount; i++)
            if ((e = this.pool[i]).useAble)
                return e.useAble = false,
                    e;
        return "" != this.blendMode && (this.ui.blendMode = this.blendMode),
            this.ui.pivotX = this.pivotXs[0],
            this.ui.pivotY = this.pivotYs[0],
            e = {
                useAble: false,
                img: this.ui,
                index: 0
            },
            this.pool.push(e),
            this.pCount++,
            e;
    };
    UIAnim.prototype.play = function (scale, n) {
        if (scale === void 0) { scale = 1; }
        if (n === void 0) { n = true; }
        // void 0 === s && (s = 1);
        // void 0 === n && (n = true);
        var r = this.getOne();
        return r.index = 0,
            r.img.source = this.frames[r.index],
            //console.log("`````````````````", this.frames.length, this.rCount,this.runs.length),
            r.img.visible = true,
            r.img.pos(this.ui.x, this.ui.y, true),
            r.img.scale(scale, scale, true),
            this.rCount++,
            this.runs.push(r),
            this.isUpdate || (this.isUpdate = true, Laya.timer.loop(1, this, this.update)),
            r;
    };
    UIAnim.prototype.update = function () {
        var t;
        var e = this.rCount;
        for (; e--;) {
            (t = this.runs[e]).delay > 0 ?
                t.delay--
                : (t.delay = this.fDelay,
                    t.index++,
                    t.index < this.fCount ? (t.img.source = this.frames[t.index],
                        this.fCenter && (t.img.pivotX = this.pivotXs[t.index],
                            t.img.pivotY = this.pivotYs[t.index])) :
                        this.fLoop ? (t.index = 0,
                            t.img.source = this.frames[t.index],
                            this.fCenter && (t.img.pivotX = this.pivotXs[t.index],
                                t.img.pivotY = this.pivotYs[t.index])) :
                            (t.useAble = true,
                                // t.img.visible = false,
                                //console.log("`````````````````", this.frames.length, this.rCount, this.runs.length),
                                this.runs.splice(e, 1),
                                this.rCount--,
                                0 == this.rCount && (Laya.timer.clear(this, this.update),
                                    this.isUpdate = false)));
        }
    };
    UIAnim.prototype.stop = function (t) {
        for (var e = this.rCount; e--;) {
            if (t == this.runs[e]) {
                t.useAble = true,
                    t.img.visible = false,
                    this.runs.splice(e, 1),
                    this.rCount--,
                    0 == this.rCount && (Laya.timer.clear(this, this.update), this.isUpdate = false);
                break;
            }
        }
    };
    return UIAnim;
}());
//# sourceMappingURL=UIAnim.js.map