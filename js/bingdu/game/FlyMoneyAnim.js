/*
* name;
*/
var FlyMoneyAnim = /** @class */ (function () {
    function FlyMoneyAnim(t) {
        this.items = null;
        this.a = 3;
        this.a2 = -3;
        this.parent = null;
        this.isUpdate = false;
        this.callBackArg = null;
        this.callBackFun = null;
        this.imgAnim = null;
        this.p2 = 9; //6.28
        this.parent = t,
            this.items = [];
    }
    FlyMoneyAnim.prototype.setCallBack = function (t, e) {
        this.callBackArg = t;
        this.callBackFun = e;
    };
    FlyMoneyAnim.prototype.setImgAnim = function (t) {
        this.imgAnim = t;
    };
    FlyMoneyAnim.prototype.fly = function (t, e, s, n, a, h, r) {
        void 0 === a && (a = 1);
        void 0 === h && (h = 0);
        a > 0 && (this.isUpdate || (this.isUpdate = true, Laya.timer.loop(1, this, this.update)));
        var o, l = this.p2 / a;
        for (0 == h && (h = this.p2 * Math.random()); a--;)
            o = this.imgAnim.play(t, e, 1, false, null, r),
                this.items.push({
                    anim: o,
                    speed: 0,
                    ex: s,
                    ey: n,
                    speed2: 10 * Math.random() + 30,
                    xDir: Math.cos(h),
                    yDir: Math.sin(h)
                }),
                h += l;
    };
    FlyMoneyAnim.prototype.fly2 = function (t, e, s, n, a) {
        void 0 === n && (n = 1);
        void 0 === a && (a = 0);
        n > 0 && (this.isUpdate || (this.isUpdate = true, Laya.timer.loop(1, this, this.update)));
        var h, r = this.p2 / n;
        for (0 == a && (a = this.p2 * Math.random()); n--;)
            h = this.imgAnim.play(t, e, 1, false),
                this.items.push({
                    anim: h,
                    speed: 0,
                    ex: s.x,
                    ey: s.y,
                    endXY: s,
                    speed2: 10 * Math.random() + 30,
                    xDir: Math.cos(a),
                    yDir: Math.sin(a)
                }),
                a += r;
    };
    FlyMoneyAnim.prototype.update = function () {
        for (var t, e = this.items.length, s = NaN, n = NaN, a = NaN, h = NaN; e--;)
            (t = this.items[e]).speed2 > 10 ? (t.speed2 += this.a2,
                t.anim.img.x += t.xDir * t.speed2,
                t.anim.img.y += t.yDir * t.speed2) : (t.speed < 30 && (t.speed += this.a),
                t.endXY && (t.ex = t.endXY.x, t.ey = t.endXY.y),
                (a = (s = t.ex - t.anim.img.x) * s + (n = t.ey - t.anim.img.y) * n) < 300 ? (this.imgAnim.stop(t.anim),
                    this.items.splice(e, 1),
                    this.callBackFun && this.callBackFun.call(this.callBackArg),
                    0 == this.items.length && (Laya.timer.clear(this, this.update),
                        this.isUpdate = false)) : (h = 1 / Math.sqrt(a),
                    t.anim.img.x += s * t.speed * h + t.xDir * t.speed2,
                    t.anim.img.y += n * t.speed * h + t.yDir * t.speed2));
    };
    return FlyMoneyAnim;
}());
//# sourceMappingURL=FlyMoneyAnim.js.map