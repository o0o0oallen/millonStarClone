/*
* name;
*/
var FxHit = /** @class */ (function () {
    function FxHit() {
        this.name = null;
        this.img = null;
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.b = false;
        this.able = false;
        this.scale1 = NaN;
        this.scale2 = NaN;
        this.endTime = NaN;
        this.xDir = NaN;
        this.yDir = NaN;
    }
    FxHit.prototype.play = function (t, e) {
        this.able = true;
        this.b = !this.b;
        this.b ? (this.img1.pos(t, e, true), this.img1.visible = true, this.img2.visible = false, this.img = this.img1) : (this.img2.pos(t, e, true), this.img2.visible = true, this.img1.visible = false, this.img = this.img2);
        this.scale1 = 2;
        this.img.scale(this.scale1, this.scale1, true);
        this.img.rotation = 360 * Math.random();
        this.img3.pos(t, e, true);
        this.img3.rotation = 360 * Math.random();
        var i = (this.img3.rotation + 45) / 180 * Math.PI;
        this.xDir = 8 * Math.cos(i);
        this.yDir = 8 * Math.sin(i);
        this.scale2 = 1;
        this.img3.scale(this.scale2, this.scale2, true);
        this.img3.visible = true;
        this.endTime = Game.time + .2;
    };
    FxHit.prototype.update = function () {
        this.able && (this.scale1 -= .2, this.scale2 -= .1, this.img3.pos(this.img3.x + this.xDir, this.img3.y + this.yDir, true), this.scale2 > 0 ? this.img3.scale(this.scale2, this.scale2, true) : this.img3.visible = false, this.scale1 > 0 ? this.img.scale(this.scale1, this.scale1, true) : this.img.visible = false, Game.time > this.endTime && (this.able = false, this.img1.visible = false, this.img2.visible = false, this.img3.visible = false, this.name = ""));
    };
    return FxHit;
}());
//# sourceMappingURL=FxHit.js.map