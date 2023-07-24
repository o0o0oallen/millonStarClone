var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var Planet9_JieHe = /** @class */ (function (_super) {
    __extends(Planet9_JieHe, _super);
    function Planet9_JieHe() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.r2Sqr = 0;
        _this.catched = null;
        _this.catchR = NaN;
        _this.catchCount = 0;
        _this.time = 0;
        _this.time2 = 0;
        _this.rSpeed = .2;
        _this.rBase = 125;
        _this.type = 9;
        _this.skin = _this.sui = new ui.Planet9UI();
        Game.ME.layerBug.addChild(_this.skin);
        _this.t = Cfg.imgTextBug.clone(new laya.display.Sprite());
        _this.t.space = 0;
        _this.skin.addChild(_this.t.sprite);
        _this.shock = _this.sui.c;
        //this.dzs = [];
        // var t = 0.6 * this.rBase;
        var i = 0;
        // for (i = 0; i < 10; i++) {
        //     this.dz = new PlanetSplit();
        //     this.dz.r = t;
        //     this.skin.addChildAt(this.dz.img, this.skin.numChildren - 2);
        //     this.dzs.push(this.dz);
        // }
        for (_this.catched = [], i = 0; i < 5; i++)
            _this.catched.push(null);
        return _this;
    }
    Planet9_JieHe.prototype.setLevel = function (e) {
        _super.prototype.setLevel.call(this, e);
        var i = 2 * this.r;
        this.r2Sqr = i * i,
            this.rSpeed = Math.random() > .5 ? .5 : -.5,
            this.catchR = this.r;
    };
    Planet9_JieHe.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.r.skin = "BugF/" + t + ".png",
            //     this.sui.c.skin = "Cir/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
        }
    };
    Planet9_JieHe.prototype.send = function () {
        _super.prototype.send.call(this),
            Laya.timer.loop(1, this, this.anim),
            // Laya.timer.loop(300, this, this.anim2),
            Laya.timer.loop(100, this, this.checkDis);
    };
    Planet9_JieHe.prototype.anim = function () {
        this.sui.r.rotation += this.rSpeed,
            this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
    };
    Planet9_JieHe.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet9_JieHe.prototype.checkDis = function () {
        if (this.moveAble && this.catchCount < 5)
            for (var t, e = Planet.countAll, i = 0, s = 0, n = 0; e--;)
                if ((t = Planet.all[e]).moveAble && t.id != this.id && !t.complete && !(t.level > this.level + 1) && (i = t.x - this.x, s = t.y - this.y, i *= i, s *= s, n = this.r + t.r, n *= n, i + s < n)) {
                    t.moveAble = false,
                        this.catched[this.getNearPoint(t)] = {
                            b: t,
                            bId: t.id
                        },
                        this.catchCount++,
                        Game.ME.layerBug.setChildIndex(this.sui, Game.ME.layerBug.numChildren - 1);
                    break;
                }
    };
    Planet9_JieHe.prototype.getNearPoint = function (t) {
        for (var e = 999999, i = 0, s = NaN, n = NaN, a = NaN, h = 0; h < 5; h++)
            null == this.catched[h] && (s = (72 * h + this.sui.r.rotation) / 180 * 3.14159, n = this.x + Math.cos(s) * this.catchR, a = this.y + Math.sin(s) * this.catchR, (n = (n -= t.x) * n + (a -= t.y) * a) < e && (i = h, e = n));
        return i;
    };
    Planet9_JieHe.prototype.update = function () {
        _super.prototype.update.call(this);
        for (var e, i = 6, s = NaN, n = NaN; i--;)
            (e = this.catched[i]) && (e.b.id == e.bId ? (n = this.catchR + e.b.r, s = (72 * i + this.sui.r.rotation) / 180 * 3.14159, e.b.x = this.x + Math.cos(s) * n, e.b.y = this.y + Math.sin(s) * n, e.b.draw()) : (this.catched[i] = null, this.catchCount--));
    };
    Planet9_JieHe.prototype.onBtm2Top = function () {
        this.topID++;
        for (var t, e = 0; e < 6; e++)
            (t = this.catched[e]) && t.b.onBtm2Top();
    };
    Planet9_JieHe.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        for (var s, n = 0; n < 6; n++)
            (s = this.catched[n]) && s.b.id == s.bId && (s.b.moveAble = true),
                this.catched[n] = null;
        this.catchCount = 0,
            Laya.timer.clear(this, this.anim),
            // Laya.timer.clear(this, this.anim2),
            Laya.timer.clear(this, this.checkDis);
        _super.prototype.kill.call(this, e);
    };
    return Planet9_JieHe;
}(Planet));
//# sourceMappingURL=Planet9_JieHe.js.map