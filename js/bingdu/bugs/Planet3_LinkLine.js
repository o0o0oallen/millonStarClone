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
var Planet3_LinkLine = /** @class */ (function (_super) {
    __extends(Planet3_LinkLine, _super);
    function Planet3_LinkLine() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.r2Sqr = 0;
        _this.time = 0;
        _this.time2 = 0;
        _this.rSpeed = .2;
        _this.catched = null;
        _this.type = 3;
        _this.rBase = 125;
        _this.skin = _this.sui = new ui.Planet3UI();
        Game.ME.layerBug.addChild(_this.skin);
        _this.t = Cfg.imgTextBug.clone(new laya.display.Sprite());
        _this.t.space = 0;
        _this.skin.addChild(_this.t.sprite);
        _this.shock = _this.sui.c;
        // this.dzs = [];
        // var t = 0.6 * this.rBase;
        // var i = 0;
        // for (i = 0; i < 10; i++) {
        //     this.dz = new PlanetSplit();
        //     this.dz.r = t;
        //     this.skin.addChildAt(this.dz.img, this.skin.numChildren - 2);
        //     this.dzs.push(this.dz);
        // }
        _this.catched = new laya.utils.Dictionary();
        return _this;
    }
    Planet3_LinkLine.prototype.setLevel = function (e) {
        _super.prototype.setLevel.call(this, e);
        var i = 300 + 3 * this.r;
        this.r2Sqr = i * i,
            this.rSpeed = Math.random() > .5 ? .5 : -.5;
    };
    Planet3_LinkLine.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.r.skin = this.sui.r1.skin = this.sui.r2.skin = this.sui.r3.skin = "BugE/" + t + ".png",
            //     this.sui.c.skin = "Cir/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
            for (var e = this.catched.keys.length; e--;)
                this.catched.values[e].setFace("xingqiu/lianxian.png");
        }
    };
    Planet3_LinkLine.prototype.send = function () {
        _super.prototype.send.call(this),
            Laya.timer.loop(1, this, this.anim),
            // Laya.timer.loop(300, this, this.anim2),
            Laya.timer.loop(200, this, this.checkDis);
    };
    Planet3_LinkLine.prototype.anim = function () {
        var t = NaN;
        this.sui.r.rotation += this.rSpeed,
            this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(t = .95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true),
            this.sui.r1.scale(t, t, true),
            this.sui.r2.scale(t, t, true),
            this.sui.r3.scale(t, t, true);
        // for (var e = 0; e < 10; e++) this.dzs[e].update();
    };
    Planet3_LinkLine.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet3_LinkLine.prototype.checkDis = function () {
        var t, e, i = Planet.countAll, s = 0, n = 0, a = 0;
        for (; i--;)
            (t = Planet.all[i]).id != this.id && t.type != this.type && (t.complete || (e = this.catched.get(t),
                s = t.x - this.x,
                n = t.y - this.y,
                s *= s,
                n *= n,
                a = this.r + t.r + 300,
                s + n < (a *= a) && t.y < Game.ME.BB_100 && this.y < Game.ME.BB_100 && t.lifeBase.bigger(t.life) ?
                    (null == t.lifeBack && (t.lifeBack = new math_BigUInt(),
                        t.lifeBack.copy(t.lifeBase),
                        t.lifeBack.div10(2).mult(2),
                        t.lifeBack.isZero() && t.lifeBack.one()),
                        t.life.plus(t.lifeBack),
                        Game.ME.plus(t.lifeBack),
                        t.updateLife2(),
                        Game.time > t.lifeBackDelay && (t.lifeBackDelay = Game.time + .18,
                            FxPlus.start("xingqiu/jia.png", t.skin)),
                        e || this.catched.set(t, ImgLink.start("xingqiu/lianxian.png", this.skin, t.skin))) : e && (ImgLink.stop(e),
                    this.catched.remove(t))));
        for (i = this.catched.keys.length; i--;)
            (e = this.catched.keys[i]).complete && (ImgLink.stop(this.catched.values[i]),
                this.catched.keys.splice(i, 1),
                this.catched.values.splice(i, 1));
    };
    Planet3_LinkLine.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        Laya.timer.clear(this, this.anim),
            // Laya.timer.clear(this, this.anim2),
            Laya.timer.clear(this, this.checkDis);
        for (var s = this.catched.keys.length; s--;)
            ImgLink.stop(this.catched.values[s]);
        this.catched.clear(),
            _super.prototype.kill.call(this, e);
    };
    return Planet3_LinkLine;
}(Planet));
//# sourceMappingURL=Planet3_LinkLine.js.map