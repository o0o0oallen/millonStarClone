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
var Weapon3 = /** @class */ (function (_super) {
    __extends(Weapon3, _super);
    // public static animBall = null;
    function Weapon3() {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.dirLX = NaN;
        _this.dirLY = NaN;
        _this.dirRX = NaN;
        _this.dirRY = NaN;
        _this.r2 = 0;
        _this.alphas = [];
        _this.alphaI = 0;
        _this.scaleBall = 0;
        _this.animBoom = null;
        _this.testI = 0;
        _this.testStep = 100;
        _this.testWidth = 10;
        _this.isTestStart = false;
        _this.testStartX = NaN;
        _this.testStartY = NaN;
        _this.testY = NaN;
        _this.timeStart = 0;
        _this.setOffset1(50, -85),
            _this.setOffset2(50, 85),
            _this.skin = _this._skin = new ui.WP3UI(),
            Plane.ME.skin.addChild(_this._skin),
            _this.speed = 1800;
        var t = -1.57;
        _this.dirLX = Math.cos(t),
            _this.dirLY = Math.sin(t),
            t = -1.57,
            _this.dirRX = Math.cos(t),
            _this.dirRY = Math.sin(t),
            Game.ME.layerPlane.addChild(_this._skin.guang),
            _this._skin.guang.visible = false;
        for (var i = 0; i < 20; i++)
            _this.alphas.push(Math.round(100 * (.8 * Math.random() + .2)) / 100);
        null == Weapon3.animLight && (Weapon3.animLight = new AnimImg(),
            // Weapon3.animBall = new AnimImg(),
            Weapon3.animLight.init("wuqi/03/d", 10, 1, true),
            // Weapon3.animBall.init("wuqi/03/d", 10, 1, true),
            _this.animBoom = new ImgAnim(Game.ME.layerBoom),
            _this.animBoom.init("wuqi/03/b", 10, 2, false, true)),
            UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r),
            UIHelper.dosave(_this._skin.sl),
            UIHelper.dosave(_this._skin.sr),
            UIHelper.dosave(_this._skin.l1),
            UIHelper.dosave(_this._skin.r1);
        return _this;
    }
    Weapon3.prototype.setVisible = function (i) {
        _super.prototype.setVisible.call(this, i);
        i ? (Weapon3.animLight.play(this._skin.lAnim),
            Weapon3.animLight.play(this._skin.rAnim, true)) : (Weapon3.animLight.stop(this._skin.lAnim),
            Weapon3.animLight.stop(this._skin.rAnim) //ltt 直觉认为这里他们的代码有问题
        );
    };
    Weapon3.prototype.broken = function (t) {
        t ? (Plane.ME.explode(this._skin.l),
            Plane.ME.explode(this._skin.r),
            Plane.ME.explode(this._skin.sl),
            Plane.ME.explode(this._skin.sr),
            Plane.ME.explode(this._skin.l1),
            Plane.ME.explode(this._skin.r1)) : (UIHelper.reset(this._skin.l),
            UIHelper.reset(this._skin.r),
            UIHelper.reset(this._skin.sl),
            UIHelper.reset(this._skin.sr),
            UIHelper.reset(this._skin.l1),
            UIHelper.reset(this._skin.r1));
    };
    Weapon3.prototype.update = function () {
        this.alphaI++,
            this.alphaI >= 20 && (this.alphaI = 0),
            this._skin.l1.alpha = this._skin.r1.alpha = this.alphas[this.alphaI],
            Game.isGameStart && (Game.time > this.timeSend ? (this.timeStart = Game.time,
                this.timeSend = Game.time + Cfg.fNum2,
                laya.utils.Tween.to(this._skin.sl, {
                    rotation: 30
                }, 500, laya.utils.Ease.circIn),
                laya.utils.Tween.to(this._skin.sr, {
                    rotation: -30
                }, 500, laya.utils.Ease.circIn, laya.utils.Handler.create(this, this.send))) : (this.scaleBall = (Game.time - this.timeStart) / Cfg.fNum2 * .8 + .2)),
            this.isTestStart && this.hitTest();
    };
    Weapon3.prototype.send = function () {
        this._skin.lAnim.scale(0, 0, true),
            this._skin.rAnim.scale(0, 0, true),
            laya.utils.Tween.to(this._skin.sl, {
                rotation: 0
            }, 500, laya.utils.Ease.backOut),
            laya.utils.Tween.to(this._skin.sr, {
                rotation: 0
            }, 500, laya.utils.Ease.backOut, laya.utils.Handler.create(this, this.xuli)),
            MSound.ME.playSoundLimit("w_buttle3"),
            this._skin.guang.visible = true,
            this._skin.guang.height = Cfg.fNum3,
            this._skin.guang.pivotY = this.testWidth = .5 * Cfg.fNum3,
            this._skin.guang.width = 250,
            this._skin.guang.alpha = 1,
            this._skin.guang.scaleY = 0,
            this._skin.guang.x = Plane.ME.x,
            this._skin.guang.y = Plane.ME.y - 60,
            laya.utils.Tween.to(this._skin.guang, {
                scaleY: 1,
                width: 2100
            }, 100, laya.utils.Ease.linearNone, laya.utils.Handler.create(this, this.onCom)),
            this.testI = 0,
            this.testStartX = this.plane.x,
            this.testStartY = this.plane.y,
            this.testY = this.testStartY - 80,
            this.isTestStart = true;
    };
    Weapon3.prototype.xuli = function () {
        laya.utils.Tween.to(this._skin.lAnim, {
            scaleX: 1,
            scaleY: 1
        }, 1e3),
            laya.utils.Tween.to(this._skin.rAnim, {
                scaleX: 1,
                scaleY: 1
            }, 1e3);
    };
    Weapon3.prototype.hitTest = function () {
        if (this.testI++, this.testY < 0)
            this.isTestStart = false;
        else {
            for (var t, e = Planet.countAll, i = 0, s = 0, n = false; e--;)
                (t = Planet.all[e]).attackAble && (i = t.x - this.testStartX, s = (s = t.y - this.testY) * s + (i *= i), i = this.testWidth + t.r, s < (i *= i) && (t.hit(Cfg.fDamage), t.slow(.1, 1e3), n = true));
            n && this.animBoom.play(this.testStartX, this.testY, 2),
                this.testY -= this.testStep;
        }
    };
    Weapon3.prototype.onCom = function () {
        this.hitTest(),
            laya.utils.Tween.to(this._skin.guang, {
                alpha: 0,
                scaleY: 0
            }, 600, laya.utils.Ease.quintOut, laya.utils.Handler.create(this, this.onCom2), 100);
    };
    Weapon3.prototype.onCom2 = function () {
        this._skin.guang.visible = false;
    };
    Weapon3.animLight = null;
    return Weapon3;
}(Weapon));
//# sourceMappingURL=Weapon3.js.map