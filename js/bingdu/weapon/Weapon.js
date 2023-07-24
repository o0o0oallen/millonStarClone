/*
* name;
*/
var Weapon = /** @class */ (function () {
    function Weapon() {
        this.plane = null;
        this.skin = null;
        this.xStartPos = 0;
        this.xEndPos = 0;
        this.yStartPos = 0;
        this.xDir1 = NaN;
        this.yDir1 = NaN;
        this.xDir2 = NaN;
        this.yDir2 = NaN;
        this.speed = 50;
        this.buttle = null;
        this.xCountMax = 1;
        this.xCount = 1;
        this.space = 28;
        this.timeSend = 0;
        this.offsetLen1 = 0;
        this.offsetRad1 = NaN;
        this.offsetLen2 = 0;
        this.offsetRad2 = NaN;
        this.huoYanScale1 = 1;
        this.huoYanScale2 = 1;
        this.sourceUrl = null;
        this.space_2 = .5 * this.space;
    }
    Weapon.prototype.initData = function () { };
    Weapon.prototype.updateData = function () { };
    Weapon.prototype.setVisible = function (t) {
        UIHelper.showHide(t, this.skin);
    };
    Weapon.prototype.setOffset1 = function (t, e) {
        this.offsetLen1 = Math.sqrt(t * t + e * e);
        this.offsetRad1 = Math.atan2(e, t);
    };
    Weapon.prototype.setOffset2 = function (t, e) {
        this.offsetLen2 = Math.sqrt(t * t + e * e);
        this.offsetRad2 = Math.atan2(e, t);
    };
    Weapon.prototype.broken = function (t) { };
    Weapon.prototype.updateDir = function () {
        this.xDir1 = Math.cos(this.plane.rad);
        this.yDir1 = Math.sin(this.plane.rad);
    };
    Weapon.prototype.update = function () { };
    Weapon.prototype.load = function (t, e) {
        null != Laya.loader.getRes(this.sourceUrl) ? e.call(t) : Laya.loader.load(this.sourceUrl, laya.utils.Handler.create(t, e));
    };
    return Weapon;
}());
//# sourceMappingURL=Weapon.js.map