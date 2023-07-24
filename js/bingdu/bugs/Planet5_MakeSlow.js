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
var Planet5_MakeSlow = /** @class */ (function (_super) {
    __extends(Planet5_MakeSlow, _super);
    function Planet5_MakeSlow() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.r2Sqr = 0;
        _this.time = 0;
        _this.time2 = 0;
        _this.rSpeed = .2;
        _this.rSpeedScale = 1;
        _this.isNotSlow = true;
        _this.imgLink = null;
        _this.rBase = 125;
        _this.type = 5;
        _this.skin = _this.sui = new ui.Planet5UI();
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
    Planet5_MakeSlow.prototype.setLevel = function (e) {
        _super.prototype.setLevel.call(this, e);
        var i = 300 + 3 * this.r;
        i *= .85,
            this.r2Sqr = i * i,
            this.rSpeed = Math.random() > .5 ? 1 : -1;
    };
    Planet5_MakeSlow.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.r.skin = "BugD/" + t + ".png",
            //     this.sui.c.skin = "Cir/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
        }
    };
    Planet5_MakeSlow.prototype.send = function () {
        _super.prototype.send.call(this),
            Laya.timer.loop(1, this, this.anim),
            // Laya.timer.loop(300, this, this.anim2),
            Laya.timer.loop(200, this, this.checkDis);
    };
    Planet5_MakeSlow.prototype.anim = function () {
        this.sui.r.rotation += this.rSpeed * this.rSpeedScale,
            this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
    };
    Planet5_MakeSlow.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet5_MakeSlow.prototype.checkDis = function () {
        var t = 0, e = 0;
        t = this.x - Plane.ME.x,
            e = this.y - Plane.ME.y,
            (t *= t) + (e *= e) < this.r2Sqr && this.y < Game.ME.BB_100 ? this.isNotSlow && (this.isNotSlow = false,
                Plane.ME.setSlowRate(this.id, .1),
                this.imgLink = ImgLink.start("uipic/jiansu.png", this.skin, Plane.ME.skin),
                this.rSpeedScale = .1) :
                this.isNotSlow || (this.isNotSlow = true,
                    Plane.ME.setSlowRate(this.id, 1),
                    ImgLink.stop(this.imgLink),
                    this.rSpeedScale = 1);
    };
    Planet5_MakeSlow.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        this.isNotSlow || (this.isNotSlow = true, Plane.ME.setSlowRate(this.id, 1), ImgLink.stop(this.imgLink), this.rSpeedScale = 1),
            Laya.timer.clear(this, this.anim),
            // Laya.timer.clear(this, this.anim2),
            Laya.timer.clear(this, this.checkDis),
            _super.prototype.kill.call(this, e);
    };
    return Planet5_MakeSlow;
}(Planet));
//# sourceMappingURL=Planet5_MakeSlow.js.map