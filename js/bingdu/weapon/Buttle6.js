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
var Buttle6 = /** @class */ (function (_super) {
    __extends(Buttle6, _super);
    function Buttle6() {
        var _this = _super.call(this) || this;
        _this.skin = null;
        _this.xDirU = NaN;
        _this.yDirU = NaN;
        _this.life = 0;
        _this.roat = 0;
        _this.hitX = NaN;
        _this.hitY = NaN;
        _this.maxY = NaN;
        _this.isFu = true,
            _this.skin = new ui.Buttle6UI(),
            _this.img = _this.skin.base;
        _this.img.visible = false;
        // this.img = new laya.ui.Image(),
        // this.img.source = Laya.loader.getRes("wuqi/01/zd.png"),
        // this.img.pivotX = Math.round(.5 * this.img.source.width),
        // this.img.pivotY = Math.round(.5 * this.img.source.height),
        Game.ME.layerPlane.addChildAt(_this.img, 0);
        return _this;
    }
    Buttle6.prototype.sendBy = function (t, e, i, s, n, a, h) {
        //console.log("buttle6sendby***",this.img.visible);
        this.x = this.startX = e,
            this.y = this.startY = i,
            this.img.pos(this.x, this.y, true),
            this.maxY = 0, //i - 700,
            this.xDir = a,
            this.yDir = h,
            this.xDirU = Math.abs(this.xDir),
            this.yDirU = Math.abs(this.yDir),
            Buttle.add(this),
            this.complete = false,
            this.life = 4,
            this.img.scaleX = this.img.scaleY = .2,
            this.speed = 0,
            laya.utils.Tween.to(this, {
                speed: t * 3
            }, 400),
            laya.utils.Tween.to(this.img, {
                scaleX: Weapon6.buttleScale,
                scaleY: Weapon6.buttleScale
            }, 600),
            this.img.visible = true;
        //this.skin.ani1.play(0, false);
        //Weapon6.animBall.play(this.img);
    };
    Buttle6.prototype.testHit = function (t) {
        var e, i, rectx, recty, rectw, recth;
        var minX, maxX, minY, maxY;
        e = t.x - this.x;
        i = t.y - this.y;
        this.hitX = e + this.x;
        this.hitY = i + this.y;
        minX = Math.min(e, 340 * this.img.scaleX / 2);
        maxX = Math.max(minX, -340 * this.img.scaleX / 2);
        minY = Math.min(i, 100 * this.img.scaleX / 2);
        maxY = Math.max(minY, -100 * this.img.scaleX / 2);
        return (maxX - e) * (maxX - e) + (maxY - i) * (maxY - i) <= t.rSqr;
        // rectw = 480;
        // recth = 150;
        // rectx = this.x - rectw / 2;
        // recty = this.y - recth / 2;
        // console.log("testhit***",rectx,recty,rectw,recth);
        // if((rectx - t.x) * (rectx - t.x) + (recty - t.y) * (recty - t.y) <= t.rSqr)
        //     return true;
        // if((rectx + rectw - t.x) * (rectx + rectw - t.x) + (recty - t.y) * (recty - t.y) <= t.rSqr)
        //     return true;
        // if((rectx - t.x) * (rectx - t.x) + (recty + recth - t.y) * (recty + recth - t.y) <= t.rSqr)
        //     return true;
        // if((rectx + rectw - t.x) * (rectx + rectw - t.x) + (recty + recth - t.y) * (recty + recth - t.y) <= t.rSqr)
        //     return true;
        // return false;
    };
    Buttle6.prototype.hitFx = function () {
        //MSound.ME.playSoundLimit("w_buttle8");
        FPool.ME.createByFun(Buttle.createFxHit).play(this.hitX, this.hitY);
    };
    Buttle6.prototype.kill = function (e) {
        if (this.life--, this.life < 0 || null == e) {
            //Weapon6.animBoom.play(this.x, this.y,  Weapon6.buttleScale);
            this.img.visible = false;
            _super.prototype.kill.call(this, e);
        }
        else {
            // e.xDir = e.x - this.x,
            //     e.yDir = e.y - this.y;
            // var i = 1 / Math.sqrt(e.xDir * e.xDir + e.yDir * e.yDir);
            // e.xDir *= i,
            //     e.yDir *= i,
            //     e.xDirU = Math.abs(this.xDir),
            //     e.xDirU = Math.abs(this.yDir),
            e.back();
        }
    };
    Buttle6.prototype.kill2 = function () {
        this.life--;
        if (this.life < 0) {
            this.img.visible = false;
        }
        _super.prototype.kill.call(this, null);
    };
    Buttle6.prototype.update = function () {
        //this.x += this.speed * this.xDir * Game.dTime,
        this.x < Game.ME.BL && (this.xDir = this.xDirU, this.kill2()),
            this.y += this.speed * this.yDir * Game.dTime,
            //this.y > Game.ME.BB && (this.yDir = -this.yDirU, this.kill2()),
            (this.y <= this.maxY || this.y < 0) && (this.yDir = -this.yDirU, this.kill2()),
            this.img.pos(this.x, this.y, true),
            this.roat += 2;
        // this.img.rotation = this.roat;
    };
    return Buttle6;
}(Buttle));
//# sourceMappingURL=Buttle6.js.map