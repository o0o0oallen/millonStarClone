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
* 基本子弹;
*/
var Buttle0 = /** @class */ (function (_super) {
    __extends(Buttle0, _super);
    function Buttle0() {
        return _super.call(this) || this;
    }
    Buttle0.prototype.setFace = function (t) {
        this.bName != t && (this.bName = t, this.img.source = Laya.loader.getRes("spaceship/" + t + ".png"), this.img.pivotX = Math.round(.5 * this.img.source.width), this.img.pivotY = this.img.source.height);
    };
    Buttle0.prototype.sendBy = function (t, e, i, s, n, a, h) {
        //console.log("sendBy",t, e, i, s, n, a, h);
        this.speed = t,
            this.x = this.startX = e,
            this.y = this.startY = i,
            this.xOffPos = s - e,
            this.xDir = a,
            this.yDir = h,
            Buttle.add(this),
            this.img.visible = true,
            this.complete = false,
            this.img.pos(this.x, this.y, true),
            this.xPresent = 0;
    };
    Buttle0.prototype.update = function () {
        //console.log("update~~~~~~~~~~~~~~~~",Cfg.kuoSanFrameCount);
        var frameCount = this.nType == 1 ? 50 : Game.isShowBullet ? 5 : Cfg.kuoSanFrameCount; //保持扩散的排数，基础值是5（5排后不再发散）
        this.xPresent < frameCount && (this.xPresent++, this.x = this.startX + this.xPresent / frameCount * this.xOffPos),
            this.y += this.speed * this.yDir * 1.6,
            Game.isShowBullet ? this.img.scale(0.77, 0.77, true) : this.img.scale(1, 1, true);
        //console.log("update~~~~~~~~~~~~~~~~",Math.abs(this.y - this.img.y),this.x - this.img.x, Math.atan2(this.x - this.img.x, Math.abs(this.y - this.img.y)) / 3.14 * 180),
        this.nType == 1 ? this.img.rotation = Math.atan2(this.x - this.img.x, Math.abs(this.y - this.img.y)) / 3.14 * 180 : this.img.rotation = 0, //子弹角度
            (this.x < -10 || this.y < -10 || this.x > Game.hideX || this.y > Game.hideY) && this.kill(null),
            this.img.pos(this.x, this.y, true);
    };
    Buttle0.prototype.kill = function (e) {
        _super.prototype.kill.call(this, e);
        if (e == null)
            return;
        if (Cfg.nButtleType == 4)
            e.back(Cfg.nButtleRate);
    };
    return Buttle0;
}(Buttle));
//# sourceMappingURL=Buttle0.js.map