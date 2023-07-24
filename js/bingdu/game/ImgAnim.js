/*
* name;
*/
var ImgAnim = /** @class */ (function () {
    function ImgAnim(t) {
        this.pool = null;
        this.pCount = 0;
        this.frames = null;
        this.fCount = 0;
        this.pivotXs = null;
        this.pivotYs = null;
        this.runs = null;
        this.rCount = 0;
        this.isUpdate = false;
        this.parent = null;
        this.fDelay = 0;
        this.fLoop = false;
        this.fCenter = false;
        this.blendMode = "";
        this.parent = t,
            this.pool = [],
            this.frames = [],
            this.runs = [],
            this.pivotXs = [],
            this.pivotYs = [];
    }
    ImgAnim.prototype.init = function (PicName, _fCount, _fDelay, _fLoop, _fCenter) {
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
    ImgAnim.prototype.getOne = function (t) {
        for (var e, i = 0; i < this.pCount; i++)
            if ((e = this.pool[i]).useAble)
                return e.useAble = false,
                    e;
        return null == t && (t = new laya.ui.Image()),
            "" != this.blendMode && (t.blendMode = this.blendMode),
            t.pivotX = this.pivotXs[0],
            t.pivotY = this.pivotYs[0],
            this.parent.addChild(t),
            e = {
                useAble: false,
                img: t,
                index: 0
            },
            this.pool.push(e),
            this.pCount++,
            e;
    };
    ImgAnim.prototype.play = function (x, y, scale, n, a, h) {
        if (scale === void 0) { scale = 1; }
        if (n === void 0) { n = true; }
        if (a === void 0) { a = null; }
        if (h === void 0) { h = null; }
        // void 0 === s && (s = 1);
        // void 0 === n && (n = true);
        var r = this.getOne(a);
        return r.index = -1,
            r.img.source = this.frames[r.index],
            r.img.visible = true,
            r.img.pos(x, y, true),
            r.img.scale(scale, scale, true),
            h && (r.parent = h, h.addChild(r.img)),
            n && (r.img.rotation = 360 * Math.random()),
            this.rCount++,
            this.runs.push(r),
            this.isUpdate || (this.isUpdate = true, Laya.timer.loop(1, this, this.update)),
            r;
    };
    ImgAnim.prototype.update = function () {
        for (var t, e = this.rCount; e--;)
            (t = this.runs[e]).delay > 0 ? t.delay-- : (t.delay = this.fDelay, t.index++, t.index < this.fCount ? (t.img.source = this.frames[t.index], this.fCenter && (t.img.pivotX = this.pivotXs[t.index], t.img.pivotY = this.pivotYs[t.index])) : this.fLoop ? (t.index = 0, t.img.source = this.frames[t.index], this.fCenter && (t.img.pivotX = this.pivotXs[t.index], t.img.pivotY = this.pivotYs[t.index])) : (t.useAble = true, t.img.visible = false, t.parent && (t.parent = null, this.parent.addChild(t.img)), this.runs.splice(e, 1), this.rCount--, 0 == this.rCount && (Laya.timer.clear(this, this.update), this.isUpdate = false)));
    };
    ImgAnim.prototype.stop = function (t) {
        for (var e = this.rCount; e--;)
            if (t == this.runs[e]) {
                t.useAble = true,
                    t.img.visible = false,
                    this.runs.splice(e, 1),
                    this.rCount--,
                    0 == this.rCount && (Laya.timer.clear(this, this.update), this.isUpdate = false);
                break;
            }
    };
    return ImgAnim;
}());
//# sourceMappingURL=ImgAnim.js.map