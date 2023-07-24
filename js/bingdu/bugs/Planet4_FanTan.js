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
var Planet4_FanTan = /** @class */ (function (_super) {
    __extends(Planet4_FanTan, _super);
    function Planet4_FanTan() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.r2Sqr = 0;
        _this.time = 0;
        _this.time2 = 0;
        _this.delay = 0;
        _this.timeEnd = 0;
        _this.timeStart = NaN;
        _this.startV = 0;
        _this.dura = .3;
        _this.deltaV = 20;
        _this.rBase = 125;
        _this.type = 4;
        _this.skin = _this.sui = new ui.Planet4UI();
        Game.ME.layerBug.addChild(_this.skin);
        _this.t = Cfg.imgTextBug.clone(new laya.display.Sprite());
        _this.t.space = 0;
        _this.skin.addChild(_this.t.sprite);
        _this.shock = _this.sui.c;
        return _this;
        // this.dzs = [];
        // var t = 0.6 * this.rBase;
        // var i = 0;
        // for (i = 0; i < 10; i++) {
        //     this.dz = new PlanetSplit();
        //     this.dz.r = t;
        //     this.skin.addChildAt(this.dz.img, this.skin.numChildren - 2);
        //     this.dzs.push(this.dz);
        // }
    }
    Planet4_FanTan.prototype.setLevel = function (e) {
        _super.prototype.setLevel.call(this, e);
        var i = 2 * this.r;
        this.r2Sqr = i * i;
    };
    Planet4_FanTan.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.r.skin = "BugI/" + t + ".png",
            //     this.sui.c.skin = "Cir/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
        }
    };
    Planet4_FanTan.prototype.send = function () {
        _super.prototype.send.call(this),
            Laya.timer.loop(1, this, this.anim),
            // Laya.timer.loop(300, this, this.anim2),
            Laya.timer.loop(100, this, this.checkDis);
    };
    Planet4_FanTan.prototype.anim = function () {
        this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
        //隔一会旋转一次
        // if (Game.time > this.delay) {
        //     if (Game.time > this.timeEnd) {
        //         (this.timeStart = this.delay = Game.time + 1, this.timeEnd = this.timeStart + this.dura, this.startV = this.sui.r.rotation);
        //     } else {
        //         this.sui.r.rotation = laya.utils.Ease.backOut(Game.time - this.timeStart, this.startV, this.deltaV, this.dura);
        //     }
        // }
        this.sui.r.rotation += .5; //ltt
    };
    Planet4_FanTan.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet4_FanTan.prototype.checkDis = function () {
        for (var t, e = Planet.countAll, i = 0, s = 0, n = 0, a = NaN, h = NaN; e--;)
            if ((t = Planet.all[e]) != this && 9 != t.type && (i = t.x - this.x, s = t.y - this.y, i *= i, s *= s, a = this.r + t.r + 2, n = a * a, i + s < n)) {
                t.xDir = t.x - this.x + 1,
                    t.yDir = t.y - this.y + 1,
                    h = 1 / (a = Math.sqrt(t.xDir * t.xDir + t.yDir * t.yDir)),
                    t.xDir *= h,
                    t.yDir *= h,
                    t.xDirU = Math.abs(t.xDir),
                    t.yDirU = Math.abs(t.yDir),
                    t.fast(7);
                break;
            }
    };
    Planet4_FanTan.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        Laya.timer.clear(this, this.anim),
            // Laya.timer.clear(this, this.anim2),
            Laya.timer.clear(this, this.checkDis);
        _super.prototype.kill.call(this, e);
    };
    return Planet4_FanTan;
}(Planet));
//# sourceMappingURL=Planet4_FanTan.js.map