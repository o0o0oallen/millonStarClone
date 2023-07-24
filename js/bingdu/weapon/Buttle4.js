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
var Buttle4 = /** @class */ (function (_super) {
    __extends(Buttle4, _super);
    function Buttle4() {
        var _this = _super.call(this) || this;
        _this.skin = null;
        _this.fire = null;
        _this.timeEnd = NaN;
        _this.target = null;
        _this.rButtle = 12;
        _this.dura = 5;
        _this.indexid = 0;
        _this.isFu = true;
        _this.indexid = Game.time;
        // console.log("this.timeid~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",this.indexid);
        _this.skin = new ui.Buttle4UI(),
            _this.img = _this.skin.base,
            _this.skin.fire.visible = false;
        return _this;
    }
    //this.speed, this.xStartPos, this.yStartPos, this.xEndPos
    Buttle4.prototype.sendBy = function (t, s, n, a, h, r, o) {
        this.target = null,
            this.x = this.startX = s,
            this.y = this.startY = n,
            this.xOffPos = a - s,
            this.xDir = r,
            this.yDir = o,
            Buttle.add(this),
            this.img.visible = true,
            this.complete = false,
            this.img.pos(this.x, this.y, true),
            this.img.scale(0.7, 0.7, true),
            this.xPresent = 0,
            this.timeEnd = Game.time + this.dura,
            this.speed = 0,
            laya.utils.Tween.to(this, {
                speed: t
            }, 2e3, laya.utils.Ease.quartIn),
            Laya.timer.once(1e3, this, this.findTarget),
            Weapon4.animFire.play(this.skin.fire),
            this.skin.fire.visible = true,
            this.skin.fire.scale(0, 0, true),
            laya.utils.Tween.to(this.skin.fire, {
                scaleX: 1,
                scaleY: 1
            }, 400);
    };
    Buttle4.prototype.findTarget = function () {
        this.target = Planet.getBeggest();
    };
    Buttle4.prototype.kill = function (t) {
        laya.utils.Tween.clearTween(this),
            this.complete = true,
            this.img.visible = false,
            Weapon4.animBoom.play(this.x, this.y, Weapon4.buttleScale),
            Laya.timer.once(100, this, this.boom),
            Weapon4.animFire.stop(this.skin.fire),
            this.skin.fire.visible = false;
    };
    Buttle4.prototype.boom = function () {
        for (var t, e = Planet.countAll, i = 0, s = 0; e--;)
            (t = Planet.all[e]).attackAble && (i = t.x - this.x, s = (s = t.y - this.y) * s + (i *= i), i = Weapon4.rBoom + t.r, s < (i *= i) && t.hit(Cfg.fDamage));
        MSound.ME.playSoundLimit("w_buttle4");
    };
    Buttle4.prototype.testHit = function (t) {
        var i = 0, s = 0;
        return i = t.x - this.x,
            s = t.y - this.y,
            i *= i,
            s = s * s + i,
            i = this.rButtle + t.r,
            i *= i,
            s < i;
    };
    Buttle4.prototype.update = function () {
        if (this.y += this.speed * this.yDir * Game.dTime, this.x += this.speed * this.xDir * Game.dTime, this.img.pos(this.x, this.y, true), null != this.target) {
            if (this.target.complete) {
                (this.target = null);
                return;
            }
            var t = NaN, e = NaN, i = NaN;
            e = this.target.x - this.x,
                i = this.target.y - this.y,
                e *= t = 1 / Math.sqrt(e * e + i * i),
                i *= t,
                this.xDir += .02 * (e - this.xDir),
                this.yDir += .02 * (i - this.yDir),
                this.img.rotation = Math.atan2(this.yDir, this.xDir) / 3.14 * 180 + 90;
        }
        else
            Game.time > this.timeEnd && this.kill(null);
    };
    return Buttle4;
}(Buttle));
//# sourceMappingURL=Buttle4.js.map