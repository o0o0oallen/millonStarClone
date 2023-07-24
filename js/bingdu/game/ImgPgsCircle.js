/*
* name;
*/
var ImgPgsCircle = /** @class */ (function () {
    function ImgPgsCircle(t) {
        this.img = null;
        this.sprite = null;
        this.r = NaN;
        this.img = t,
            this.sprite = t.removeChildAt(0),
            this.sprite.rotation = -90,
            this.r = this.sprite.width,
            t.mask = this.sprite,
            t.ui = this;
    }
    ImgPgsCircle.prototype.setPgs = function (t) {
        return this.sprite.graphics.clear(),
            t < 1 ? this.sprite.graphics.drawPie(0, 0, this.r, 0, 360 * t, "#00ffff") : this.sprite.graphics.drawCircle(0, 0, this.r, "#00ffff"),
            this;
    };
    return ImgPgsCircle;
}());
//# sourceMappingURL=ImgPgsCircle.js.map