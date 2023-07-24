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
var Weapon4 = /** @class */ (function (_super) {
    __extends(Weapon4, _super);
    function Weapon4() {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.startTime1 = NaN;
        _this.startTime2 = NaN;
        _this.bLR = false;
        _this.r1 = 0;
        _this.r2 = 0;
        _this.bL = null;
        _this.bR = null;
        _this.setOffset1(-66, -96),
            _this.setOffset2(-66, 96),
            _this.skin = _this._skin = new ui.WP4UI(),
            Plane.ME.skin.addChild(_this._skin),
            _this.speed = 1800,
            null == Weapon4.animFire && (Weapon4.animFire = new AnimImg(),
                Weapon4.animBoom = new ImgAnim(Game.ME.layerBoom),
                Weapon4.animFire.init("wuqi/04/w", 5, 1, true),
                Weapon4.animBoom.init("wuqi/04/b", 10, 1, false, true)),
            _this.addBL(),
            _this.addBR(),
            UIHelper.dosave(_this._skin.dkld),
            UIHelper.dosave(_this._skin.dkll),
            UIHelper.dosave(_this._skin.dklr),
            UIHelper.dosave(_this._skin.dkrd),
            UIHelper.dosave(_this._skin.dkrl),
            UIHelper.dosave(_this._skin.dkrr),
            UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r);
        return _this;
    }
    Weapon4.prototype.initData = function () {
        Weapon4.buttleScale = Cfg.fNum3 / 1e3,
            Weapon4.rBoom = Weapon4.rBase * Weapon4.buttleScale;
    };
    Weapon4.prototype.updateData = function () {
        Weapon4.buttleScale = Cfg.fNum3 / 1e3,
            Weapon4.rBoom = Weapon4.rBase * Weapon4.buttleScale;
    };
    Weapon4.prototype.setVisible = function (i) {
        _super.prototype.setVisible.call(this, i);
        i && Plane.ME.skin.setChildIndex(this._skin, 0);
    };
    Weapon4.prototype.addBL = function () {
        null == this.bL && (this.bL = FPool.ME.createByFun(this.NewButtle4),
            this._skin.addChildAt(this.bL.img, 0),
            this.bL.img.rotation = 0,
            this.bL.img.pos(this._skin.l.x, this._skin.l.y, true),
            this.bL.img.scale(1, 1, true),
            this.bL.img.visible = true,
            UIHelper.dosave(this.bL.img)),
            laya.utils.Tween.to(this.bL.img, {
                x: this._skin.l.x
            }, 300);
    };
    Weapon4.prototype.addBR = function () {
        null == this.bR && (this.bR = FPool.ME.createByFun(this.NewButtle4),
            this._skin.addChildAt(this.bR.img, 0),
            this.bR.img.rotation = 0,
            this.bR.img.pos(this._skin.r.x, this._skin.r.y, true),
            this.bR.img.scale(1, 1, true),
            this.bR.img.visible = true,
            UIHelper.dosave(this.bR.img)),
            laya.utils.Tween.to(this.bR.img, {
                x: this._skin.r.x
            }, 300);
    };
    Weapon4.prototype.broken = function (t) {
        if (t) {
            Plane.ME.explode(this._skin.l),
                Plane.ME.explode(this._skin.r),
                Plane.ME.explode(this._skin.dkld),
                Plane.ME.explode(this._skin.dkll),
                Plane.ME.explode(this._skin.dklr),
                Plane.ME.explode(this._skin.dkrd),
                Plane.ME.explode(this._skin.dkrl),
                Plane.ME.explode(this._skin.dkrr);
            this.bL && Plane.ME.explode(this.bL.img);
            this.bR && Plane.ME.explode(this.bR.img);
            this.timeSend = Number.MAX_VALUE; //防止失败后产生新的炸弹, 导致炸弹位置出粗
        }
        else {
            UIHelper.reset(this._skin.l),
                UIHelper.reset(this._skin.r),
                UIHelper.reset(this._skin.dkld),
                UIHelper.reset(this._skin.dkll),
                UIHelper.reset(this._skin.dklr),
                UIHelper.reset(this._skin.dkrd),
                UIHelper.reset(this._skin.dkrl),
                UIHelper.reset(this._skin.dkrr);
            this.timeSend = 0;
            this.bL && UIHelper.reset(this.bL.img);
            this.bR && UIHelper.reset(this.bR.img);
        }
    };
    Weapon4.prototype.update = function () {
        Game.isGameStart && Game.time > this.timeSend && (
        //   console.log("SendOne"),
        this.timeSend = Game.time + Cfg.fNum2,
            this.bLR ? (this._skin.dkl.play(0, false),
                this.startTime1 = Game.time,
                this.huoYanScale1 = 0,
                this.xEndPos = this.plane.x + Math.cos(this.plane.rad + this.offsetRad1) * this.offsetLen1,
                this.xStartPos = this.xEndPos - 60,
                this.yStartPos = this.plane.y + Math.sin(this.plane.rad + this.offsetRad1) * this.offsetLen1,
                this.buttle = this.bL,
                this.bL = null,
                Laya.timer.once(1500, this, this.addBL)) : (this._skin.dkr.play(0, false),
                this.startTime2 = Game.time,
                this.huoYanScale2 = 0,
                this.xEndPos = this.plane.x + Math.cos(this.plane.rad + this.offsetRad2) * this.offsetLen2,
                this.xStartPos = this.xEndPos + 60,
                this.yStartPos = this.plane.y + Math.sin(this.plane.rad + this.offsetRad2) * this.offsetLen2,
                this.buttle = this.bR,
                this.bR = null,
                Laya.timer.once(1500, this, this.addBR)),
            this.buttle.sendBy(this.speed, this.xStartPos, this.yStartPos, this.xEndPos, 0, 0, -1),
            Game.ME.layerPlane.addChild(this.buttle.img),
            this.bLR = !this.bLR);
    };
    Weapon4.prototype.NewButtle4 = function () {
        //console.log("NewOne")
        return new Buttle4();
    };
    Weapon4.rBoom = 120;
    Weapon4.animFire = null;
    Weapon4.animBoom = null;
    Weapon4.buttleScale = NaN;
    Weapon4.rBase = 120;
    return Weapon4;
}(Weapon));
//# sourceMappingURL=Weapon4.js.map