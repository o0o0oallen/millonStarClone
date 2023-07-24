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
var Buttle1 = /** @class */ (function (_super) {
    __extends(Buttle1, _super);
    function Buttle1() {
        var _this = _super.call(this) || this;
        _this.skin = null;
        _this.xDirU = NaN;
        _this.yDirU = NaN;
        _this.life = 0;
        _this.roat = 0;
        _this.hitX = NaN;
        _this.hitY = NaN;
        _this.isFu = true,
            _this.skin = new ui.Buttle1UI(),
            _this.img = _this.skin.base;
        // this.img = new laya.ui.Image(),
        // this.img.source = Laya.loader.getRes("wuqi/01/zd.png"),
        // this.img.pivotX = Math.round(.5 * this.img.source.width),
        // this.img.pivotY = Math.round(.5 * this.img.source.height),
        Game.ME.layerPlane.addChildAt(_this.img, 0);
        return _this;
    }
    Buttle1.prototype.sendBy = function (t, e, i, s, n, a, h) {
        this.x = this.startX = e,
            this.y = this.startY = i,
            this.xDir = a,
            this.yDir = h,
            this.xDirU = Math.abs(this.xDir),
            this.yDirU = Math.abs(this.yDir),
            Buttle.add(this),
            this.complete = false,
            this.img.visible = true,
            this.life = 3,
            this.img.scale(.229, .229, true),
            this.speed = 0,
            laya.utils.Tween.to(this, {
                speed: t * 3
            }, 400),
            laya.utils.Tween.to(this.img, {
                scaleX: Weapon1.buttleScale,
                scaleY: Weapon1.buttleScale
            }, 600);
        Weapon1.animBall.play(this.img);
    };
    Buttle1.prototype.testHit = function (t) {
        var e = 0, i = 0;
        e = t.x - this.x,
            i = t.y - this.y,
            this.hitX = e + this.x,
            this.hitY = i + this.y,
            e *= e,
            i = i * i + e,
            e = Weapon1.rButtle + t.r,
            e *= e;
        return (i < e);
    };
    Buttle1.prototype.hitFx = function () {
        MSound.ME.playSoundLimit("w_buttle1"),
            FPool.ME.createByFun(Buttle.createFxHit).play(this.hitX, this.hitY);
    };
    Buttle1.prototype.kill = function (e) {
        if (this.life--, this.life < 0 || null == e) {
            Weapon1.animBoom.play(this.x, this.y, Weapon1.buttleScale);
            _super.prototype.kill.call(this, e);
        }
        else {
            e.xDir = e.x - this.x,
                e.yDir = e.y - this.y;
            var i = 1 / Math.sqrt(e.xDir * e.xDir + e.yDir * e.yDir);
            e.xDir *= i,
                e.yDir *= i,
                e.xDirU = Math.abs(this.xDir),
                e.xDirU = Math.abs(this.yDir),
                e.fast();
        }
    };
    Buttle1.prototype.kill2 = function () {
        this.life--;
        if (this.life < 0) {
            this.img.visible = false;
        }
        _super.prototype.kill.call(this, null);
    };
    Buttle1.prototype.update = function () {
        this.x += this.speed * this.xDir * Game.dTime,
            this.x < Game.ME.BL && (this.xDir = this.xDirU, this.kill2()),
            this.y += this.speed * this.yDir * Game.dTime,
            this.y > Game.ME.BB && (this.yDir = -this.yDirU, this.kill2()),
            this.img.pos(this.x, this.y, true),
            this.roat += 2;
        // this.img.rotation = this.roat;
    };
    return Buttle1;
}(Buttle));
//# sourceMappingURL=Buttle1.js.map