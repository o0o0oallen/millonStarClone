/*
* name;
*/
var fxPaiticle = /** @class */ (function () {
    function fxPaiticle(t) {
        this.pool = null;
        this.pCount = 0;
        this.chips = null;
        this.runs = null;
        this.rCount = 0;
        this.isUpdate = false;
        this.parent = null;
        this.time = 0;
        this.parent = t,
            this.pool = [],
            this.runs = [],
            this.chips = {};
    }
    fxPaiticle.prototype.init = function (t, e) {
        for (var s, n = 0, a = e.length; n < a; n++)
            s = Laya.loader.getRes(t + e[n] + ".png"),
                this.chips[e[n]] = {
                    tex: s,
                    pivotX: Math.round(.5 * s.width),
                    pivotY: Math.round(.5 * s.height)
                };
    };
    fxPaiticle.prototype.getOne = function () {
        for (var t, e = 0; e < this.pCount; e++)
            if ((t = this.pool[e]).useAble)
                return t.useAble = false,
                    t;
        var i = new laya.ui.Image();
        return this.parent.addChild(i),
            t = {
                useAble: false,
                img: i,
                delay: 0,
                startV: 0,
                dura: 0,
                deltaV: 1,
                timeEnd: 0,
                timeStart: 0,
                startX: 0,
                startY: 0,
                startS: 0,
                startR: 0,
                deltaX: 0,
                deltaY: 0,
                deltaS: 0,
                deltaR: 0
            },
            this.pool.push(t),
            this.pCount++,
            t;
    };
    fxPaiticle.prototype.play = function (t, e, s, n, a, h) {
        if (n === void 0) { n = 9; }
        if (a === void 0) { a = 0.5; }
        if (h === void 0) { h = true; }
        var r, o, l = t.length - 1, u = NaN, c = 200;
        for (; n--;)
            o = this.chips[t[Math.round(Math.random() * l)]],
                (r = this.getOne()).img.source = o.tex,
                r.img.pivotX = o.pivotX,
                r.img.pivotY = o.pivotY,
                r.img.visible = true,
                r.timeStart = this.time + .1 * Math.random(),
                r.dura = .4 * Math.random() + .2,
                r.timeEnd = r.timeStart + r.dura,
                r.startX = e,
                r.startY = s,
                r.startS = 0,
                r.deltaS = .4 * Math.random() + .3,
                u = 6.28 * Math.random(),
                c = 300 * Math.random() + 200,
                r.deltaX = Math.cos(u) * c,
                r.deltaY = Math.sin(u) * c,
                r.startR = 360 * Math.random(),
                r.deltaR = 200 * Math.random() + 100,
                r.img.pos(e, s, true),
                r.img.scale(r.startS, r.startS, true),
                r.img.rotation = r.startR,
                r.img.alpha = 1,
                this.rCount++,
                this.runs.push(r);
        return this.isUpdate || (this.isUpdate = true, Laya.timer.loop(1, this, this.update)),
            r;
    };
    fxPaiticle.prototype.update = function () {
        var t, e = this.rCount, s = NaN;
        for (this.time += .016; e--;)
            t = this.runs[e],
                this.time > t.timeStart && (this.time > t.timeEnd ? (t.useAble = true, t.img.visible = false, this.runs.splice(e, 1), this.rCount--, 0 == this.rCount && (Laya.timer.clear(this, this.update), this.isUpdate = false)) : (s = laya.utils.Ease.expoOut(this.time - t.timeStart, t.startV, t.deltaV, t.dura), t.img.x = t.startX + s * t.deltaX, t.img.y = t.startY + s * t.deltaY, t.img.rotation = t.startR + s * t.deltaR, s = t.startS + s * t.deltaS, t.img.scale(s, s, true), s = laya.utils.Ease.expoIn(this.time - t.timeStart, 1, -1, t.dura), t.img.alpha = s));
    };
    return fxPaiticle;
}());
//# sourceMappingURL=fxPaiticle.js.map