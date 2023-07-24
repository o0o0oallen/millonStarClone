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
var Buttle2 = /** @class */ (function (_super) {
    __extends(Buttle2, _super);
    function Buttle2() {
        var _this = _super.call(this) || this;
        _this.fire = null;
        _this.timeEnd = NaN;
        _this.rButtle = 12;
        _this.dura = .4;
        _this.isFu = true;
        _this.img = new laya.ui.Image(),
            _this.img.source = Laya.loader.getRes("wuqi/02/zd2.png"),
            _this.img.pivotX = Math.round(.5 * _this.img.source.width),
            _this.img.pivotY = Math.round(.5 * _this.img.source.height),
            Game.ME.layerPlane.addChild(_this.img);
        return _this;
    }
    Buttle2.prototype.sendBy = function (t, i, s, n, a, h, r) {
        this.x = this.startX = i,
            this.y = this.startY = s,
            this.xOffPos = n - i,
            this.xDir = h,
            this.yDir = r,
            Buttle.add(this),
            this.img.visible = true,
            this.complete = false,
            this.img.pos(this.x, this.y, true),
            this.xPresent = 0,
            this.timeEnd = Game.time + this.dura,
            this.speed = t,
            //  this.speed = 1,
            this.img.scale(.6, .6, true),
            laya.utils.Tween.to(this.img, {
                scaleX: 1,
                scaleY: 1
            }, 200, laya.utils.Ease.expoIn);
        // Weapon2.animBall.play(this.img);
    };
    Buttle2.prototype.kill = function (t) {
        this.complete = true,
            this.img.visible = false,
            Weapon2.animBoom.play(this.x, this.y, 1),
            this.boom();
    };
    Buttle2.prototype.boom = function () {
        for (var t, e = Planet.countAll, i = 0, s = 0; e--;)
            (t = Planet.all[e]).attackAble && (i = t.x - this.x, s = (s = t.y - this.y) * s + (i *= i), i = Weapon2.rBoom + t.r, s < (i *= i) && t.hit(Cfg.fDamage));
        MSound.ME.playSoundLimit("w_buttle2");
    };
    Buttle2.prototype.testHit = function (t) {
        var i = 0, s = 0;
        return i = t.x - this.x,
            s = t.y - this.y,
            i *= i,
            s = s * s + i,
            i = this.rButtle + t.r,
            i *= i,
            s < i;
    };
    Buttle2.prototype.update = function () {
        this.y += this.speed * this.yDir * Game.dTime,
            this.x += this.speed * this.xDir * Game.dTime,
            this.img.pos(this.x, this.y, true),
            Game.time > this.timeEnd && this.kill(null);
    };
    return Buttle2;
}(Buttle));
//# sourceMappingURL=Buttle2.js.map