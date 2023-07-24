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
var Planet10_ZuiZhong = /** @class */ (function (_super) {
    __extends(Planet10_ZuiZhong, _super);
    function Planet10_ZuiZhong() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.r2Sqr = 0;
        _this.time = 0;
        _this.time2 = 0;
        _this.xxyy = null;
        _this.isFind = false;
        _this.isShow = false;
        _this.rBase = 125;
        _this.type = 10;
        _this.skin = _this.sui = new ui.Planet10UI();
        Game.ME.layerBug.addChild(_this.skin);
        _this.t = Cfg.imgTextBug.clone(new laya.display.Sprite());
        _this.t.space = 0;
        _this.skin.addChild(_this.t.sprite);
        _this.shock = _this.sui.c;
        // this.dzs = [];
        var t = 0.6 * _this.rBase;
        var i = 0;
        // for (i = 0; i < 10; i++) {
        //     this.dz = new PlanetSplit();
        //     this.dz.r = t;
        //     this.skin.addChildAt(this.dz.img, this.skin.numChildren - 2);
        //     this.dzs.push(this.dz);
        // }
        var n = 0;
        if (null == _this.xxyy)
            for (_this.xxyy = [], n = 0; n < 16; n++)
                _this.xxyy.push({
                    x: 30 * Math.cos(22.5 * n / 180 * 3.14),
                    y: 30 * Math.sin(22.5 * n / 180 * 3.14),
                    x2: 60 * Math.cos(22.5 * n / 180 * 3.14),
                    y2: 60 * Math.sin(22.5 * n / 180 * 3.14)
                });
        var tt, ii;
        for (n = 0; n < 16; n++)
            tt = _this.xxyy[n],
                (ii = _this.sui.getChildAt(n)).x = tt.x,
                ii.y = tt.y,
                ii.rotation = 22.5 * n + 90;
        return _this;
    }
    Planet10_ZuiZhong.prototype.setLevel = function (e) {
        _super.prototype.setLevel.call(this, e);
        var i = 300 + 3 * this.r;
        i *= .85,
            this.r2Sqr = i * i;
    };
    Planet10_ZuiZhong.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.b.skin = "BugB/" + t + ".png",
            //     this.sui.c.skin = "Cir/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
            // var i = "BugG2/" + t + ".png";
            // for (e = 0; e < 16; e++) this.sui.getChildAt(e).skin = i;
        }
    };
    Planet10_ZuiZhong.prototype.send = function () {
        _super.prototype.send.call(this),
            Laya.timer.loop(1, this, this.anim),
            // Laya.timer.loop(300, this, this.anim2),
            Laya.timer.loop(200, this, this.checkDis);
    };
    Planet10_ZuiZhong.prototype.anim = function () {
        this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        this.sui.b.rotation += .5; //ltt
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
    };
    Planet10_ZuiZhong.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet10_ZuiZhong.prototype.checkDis = function () {
        if (this.moveAble && !this.isFast) {
            var t, i, s = 0, n = 0, a = 0, h = NaN, r = NaN, o = NaN, l = NaN, u = 0;
            if (s = Plane.ME.x - this.x, n = Plane.ME.y - this.y, s *= s, n *= n, a = 5 * this.r + Plane.ME.r, a *= a, this.isFind = s + n < a, this.isFind) {
                if (o = Plane.ME.x - this.x, l = Plane.ME.y - this.y, h = Math.sqrt(o * o + l * l), r = 1 / h, o *= r, l *= r, this.xDir += .3 * (o - this.xDir), this.yDir += .3 * (l - this.yDir), this.xDirU = Math.abs(this.xDir), this.yDirU = Math.abs(this.yDir), !this.isShow)
                    for (this.isShow = true, u = 0; u < 16; u++)
                        i = this.xxyy[u],
                            t = this.sui.getChildAt(u),
                            laya.utils.Tween.to(t, {
                                x: i.x2,
                                y: i.y2
                            }, 600, laya.utils.Ease.backOut, null, 50 * u);
            }
            else if (this.isShow)
                for (this.isShow = false, u = 0; u < 16; u++)
                    i = this.xxyy[u],
                        t = this.sui.getChildAt(u),
                        laya.utils.Tween.to(t, {
                            x: i.x,
                            y: i.y
                        }, 600, laya.utils.Ease.backIn, null, 50 * u);
        }
    };
    Planet10_ZuiZhong.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        Laya.timer.clear(this, this.anim),
            // Laya.timer.clear(this, this.anim2),
            Laya.timer.clear(this, this.checkDis);
        _super.prototype.kill.call(this, e);
    };
    return Planet10_ZuiZhong;
}(Planet));
//# sourceMappingURL=Planet10_ZuiZhong.js.map