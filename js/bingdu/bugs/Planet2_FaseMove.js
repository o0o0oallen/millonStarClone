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
var Planet2_FaseMove = /** @class */ (function (_super) {
    __extends(Planet2_FaseMove, _super);
    function Planet2_FaseMove() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.scaleR1 = 2;
        _this.time = 0;
        _this.time2 = 0;
        _this.moveFast = function () {
            var t = this.speed;
            this.speed += 10,
                this.scaleR1 = 12,
                laya.utils.Tween.to(this, {
                    speed: t,
                    scaleR1: 3
                }, 1300, laya.utils.Ease.cubicIn);
        };
        _this.type = 2;
        _this.rBase = 125;
        _this.skin = _this.sui = new ui.Planet2UI();
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
    Planet2_FaseMove.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.c.skin = "Cir/" + t + ".png",
            //     this.sui.b.skin = "BugB/" + t + ".png",
            //     this.sui.r1.skin = this.sui.r2.skin = "BugJ/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
        }
    };
    Planet2_FaseMove.prototype.send = function () {
        //console.log("t.prototype", null, " t.prototype.send=", this.send, "t.prototype.send.call=", this.send.call, "this=", this);
        _super.prototype.send.call(this),
            Laya.timer.loop(1, this, this.anim),
            // Laya.timer.loop(300, this, this.anim2),
            Laya.timer.loop(2e3, this, this.moveFast);
    };
    Planet2_FaseMove.prototype.anim = function () {
        this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
        this.sui.r1.rotation -= this.scaleR1,
            this.sui.r2.rotation += this.scaleR1;
        this.sui.b.rotation += .5; //ltt
    };
    Planet2_FaseMove.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet2_FaseMove.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        Laya.timer.clear(this, this.anim),
            // Laya.timer.clear(this, this.anim2),
            // Laya.timer.clear(this, this.moveFast), //ltt 不知道是否是他们代码写措了
            _super.prototype.kill.call(this, e);
    };
    return Planet2_FaseMove;
}(Planet));
//# sourceMappingURL=Planet2_FaseMove.js.map