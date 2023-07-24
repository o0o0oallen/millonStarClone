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
var Planet1_Default = /** @class */ (function (_super) {
    __extends(Planet1_Default, _super);
    function Planet1_Default() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.time = 0;
        _this.time2 = 0;
        _this.type = 1;
        _this.rBase = 125;
        _this.skin = _this.sui = new ui.Planet1UI();
        Game.ME.layerBug.addChild(_this.skin);
        _this.t = Cfg.imgTextBug.clone(new laya.display.Sprite());
        _this.t.space = 0;
        _this.skin.addChild(_this.t.sprite);
        _this.shock = _this.sui.c;
        // this.dzs = [];
        var t = 0.6 * _this.rBase;
        var i = 0;
        return _this;
        // for (i = 0; i < 10; i++) {
        //     this.dz = new PlanetSplit();
        //     this.dz.r = t;
        //     this.skin.addChildAt(this.dz.img, this.skin.numChildren - 2);
        //     this.dzs.push(this.dz);
        // }
    }
    Planet1_Default.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.r1.skin = this.sui.r2.skin = "BugA/" + t + ".png",
            //     this.sui.c.skin = "Cir/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
        }
    };
    Planet1_Default.prototype.send = function () {
        //console.log("t.prototype", null, " t.prototype.send=", this.send, "t.prototype.send.call=", this.send.call, "this=", this);
        _super.prototype.send.call(this),
            Laya.timer.loop(1, this, this.anim);
        // Laya.timer.loop(300, this, this.anim2);
    };
    Planet1_Default.prototype.anim = function () {
        this.sui.r1.rotation += .5,
            this.sui.r2.rotation -= .5,
            this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
    };
    Planet1_Default.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet1_Default.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        Laya.timer.clear(this, this.anim);
        // Laya.timer.clear(this, this.anim2);
        _super.prototype.kill.call(this, e);
    };
    return Planet1_Default;
}(Planet));
//# sourceMappingURL=Planet1_Default.js.map