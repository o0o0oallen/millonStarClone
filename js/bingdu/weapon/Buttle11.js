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
var Buttle11 = /** @class */ (function () {
    function Buttle11() {
        this.skin = null;
        this.id = 0;
        this.x = NaN;
        this.y = NaN;
        this.lr = false;
        this.targetRoundX = NaN;
        this.targetRoundY = NaN;
        this.targetOffsetX = NaN;
        this.targetOffsetY = NaN;
        this.step = 0;
        this.isSit = false;
        this.sitX = NaN;
        this.sitY = NaN;
        this.shootAble = false;
        this.shootDelay = 0;
        this.skin = new ui.Buttle11UI();
        this.skin.fire.visible = false;
        this.skin.ani1.on("complete", this, this.ShowTailEff, [true]);
        this.skin.ani2.on("complete", this, this.ShowTailEff, [false]);
        this.skin.ani4.on("complete", this, this.JunengEff);
    }
    Buttle11.prototype.AppearAnim = function () {
        this.shootAble = false;
        //console.log("AppearAnim=========");
        this.skin.ani2.play(0, false);
    };
    Buttle11.prototype.ShowTailEff = function (t) {
        t ? (this.step = 2,
            this.shootAble = true,
            this.skin.taileff.visible = true,
            this.skin.ani3.play(0, true)) : (this.step = 0,
            this.shootAble = false,
            this.skin.ani3.stop(),
            this.skin.fire.visible = false,
            this.skin.taileff.visible = false);
    };
    Buttle11.prototype.JunengEff = function () {
        this.shoot();
    };
    Buttle11.prototype.sit = function () {
        this.isSit = true;
        this.step = 0;
        this.skin.x = this.x = this.sitX;
        this.skin.y = this.y = this.sitY;
        this.skin.rotation = 0;
        this.skin.fire.visible = false;
    };
    Buttle11.prototype.toshoot = function () {
        this.skin.fire.visible ? "" : this.skin.fire.visible = true,
            this.skin.ani4.play(0, false);
        // this.shoot();
    };
    Buttle11.prototype.shoot = function () {
        //console.log("shoot***",this.id);
        var point = this.skin.fire.localToGlobal(new Laya.Point(0, 0));
        this.skin.fire.visible = false;
        var nr = Math.random() * 80 + 20;
        FPool.ME.createByFun(this.NewButtle111).sendBy(1800, point.x + nr, point.y + nr / 2, point.x + nr, 0, 0, -1);
        FPool.ME.createByFun(this.NewButtle111).sendBy(1800, point.x - nr, point.y - nr / 2, point.x - nr, 0, 0, -1);
        // FPool.ME.createByFun(this.NewButtle111).sendBy(1800, point.x, point.y, point.x, 0, 0, -1);
        // FPool.ME.createByFun(this.NewButtle111).sendBy(1800, point.x, point.y, point.x, 0, 0, -1);
    };
    Buttle11.prototype.NewButtle111 = function () {
        return new Buttle111();
    };
    Buttle11.prototype.send = function (e) {
        //console.log("buttle5send*****",e,this.id);
        this.isSit = false;
        Game.ME.layerPlane.addChild(this.skin);
        this.targetOffsetX = this.skin.x - Plane.ME.skin.jiTou.x;
        this.targetOffsetY = this.skin.y - Plane.ME.skin.jiTou.y;
        //console.log("send********",this.id,this.skin.x,this.skin.y,this.targetOffsetX,this.targetOffsetY,Plane.ME.x,Plane.ME.y),
        this.skin.x = this.x = Plane.ME.x + this.targetOffsetX;
        this.skin.y = this.y = Plane.ME.y + this.targetOffsetY;
        this.skin.scaleX = this.skin.scaleY = .8;
        this.open(true);
    };
    Buttle11.prototype.back = function () {
        this.isSit && 3 != this.step || (this.step = 0, Weapon11.ME.back(this), this.open(false));
    };
    Buttle11.prototype.open = function (t) {
        t ? (this.skin.ani1.play(0, false)
        //this.skin.fire.visible ? "" : this.skin.fire.visible = true
        //this.skin.ani4.play(0, false)
        ) : (this.skin.ani4.stop(),
            //console.log("open=========",t),
            this.skin.ani2.play(0, false));
    };
    Buttle11.prototype.updateBut = function () {
        var e = NaN, i = NaN, s = NaN, n = NaN;
        switch (this.step) {
            case 2:
                this.targetRoundX = Plane.ME.x + this.targetOffsetX;
                this.targetRoundY = Plane.ME.y + this.targetOffsetY;
                this.x += (this.targetRoundX - this.x);
                this.y += (this.targetRoundY - this.y);
                this.skin.pos(this.x, this.y, true);
                //this.shootAble && Game.time > this.shootDelay && (this.shootDelay = Game.time + 3, this.toshoot());
                break;
        }
    };
    return Buttle11;
}());
/*
* name;
*/
var Buttle111 = /** @class */ (function (_super) {
    __extends(Buttle111, _super);
    function Buttle111() {
        var _this = _super.call(this) || this;
        _this.fire = null;
        _this.timeEnd = NaN;
        _this.target = null;
        _this.rButtle = 12;
        _this.dura = 5;
        _this.nScale = 1;
        _this.indexid = 0;
        _this.isFu = true;
        _this.indexid = Game.time;
        //console.log("this.timeid~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",this.indexid);
        _this.img = new ui.Buttle111UI;
        //this.img.ani1.play(0, true);
        Game.ME.layerPlane.addChild(_this.img);
        return _this;
    }
    //this.speed, this.xStartPos, this.yStartPos, this.xEndPos
    Buttle111.prototype.sendBy = function (t, s, n, a, h, r, o) {
        this.target = null,
            this.x = this.startX = s,
            this.y = this.startY = n,
            this.xOffPos = a - s,
            this.xDir = r,
            this.yDir = o,
            Buttle.add(this),
            this.complete = false,
            this.img.visible = true,
            this.img.pos(this.x, this.y, true),
            this.nScale = .7,
            this.img.scale(0.7, 0.7, true),
            this.xPresent = 0,
            this.timeEnd = Game.time + this.dura,
            this.speed = 0,
            this.findTarget(),
            //this.img.rotation += .5 * (Math.atan2(this.target.y - this.y, this.target.x - this.x) / 3.14 * 180 - this.img.rotation + 90),
            laya.utils.Tween.to(this, {
                speed: t
            }, 1e3, Laya.Ease.quartIn);
    };
    Buttle111.prototype.findTarget = function () {
        var szplanet = Planet.all.sort(Planet.byLevel);
        var i, t;
        for (i = 0; i < szplanet.length; i++) {
            t = szplanet[i];
            this.target = t;
            if (Weapon11.ME.szTarget.indexOf(t) == -1) {
                //console.log("findtarget=====",t.id);
                Weapon11.ME.szTarget.push(t);
                break;
            }
        }
    };
    Buttle111.prototype.kill = function (t) {
        laya.utils.Tween.clearTween(this),
            this.complete = true,
            this.img.visible = false,
            Weapon11.animBoom.play(this.x, this.y, Weapon11.buttleScale),
            Laya.timer.once(100, this, this.boom);
    };
    Buttle111.prototype.boom = function () {
        for (var t, e = Planet.countAll, i = 0, s = 0; e--;)
            (t = Planet.all[e]).attackAble && (i = t.x - this.x, s = (s = t.y - this.y) * s + (i *= i), i = Weapon11.rBoom + t.r, s < (i *= i) && t.hit(Cfg.fDamage));
        MSound.ME.playSoundLimit("w_buttle4");
    };
    Buttle111.prototype.testHit = function (t) {
        var i = 0, s = 0;
        return i = t.x - this.x,
            s = t.y - this.y,
            i *= i,
            s = s * s + i,
            i = this.rButtle + t.r,
            i *= i,
            s < i;
    };
    // public update() {
    //     if (this.img.visible) {
    //         if (this.target == null || this.target.complete || this.target.y > Plane.ME.y) {
    //             this.findTarget();
    //         }
    //         if (this.target && !this.target.complete) {
    //             this.x = (this.target.x - this.startX) * this.speed + this.startX;
    //             this.y = (this.target.y - this.startY) * this.speed + this.startY;
    //             this.img.pos(this.x, this.y, true);
    //             this.img.rotation = Math.atan2(this.target.x - this.x, Math.abs(this.target.y - this.y)) / 3.14 * 180
    //             if (PosTool.dis2PointSqr(this, this.target.x, this.target.y) < this.target.rSqr) {
    //                 // this.img.visible = false;
    //                 // FPool.ME.createByFun(Buttle.createFxHit).play(this.x, this.y);
    //                 // this.target.hit(Cfg.fDamage);
    //                 // MSound.ME.playSoundLimit("w_buttle5");
    //                 this.kill(this.target);
    //             }
    //         }
    //     }
    // }
    Buttle111.prototype.update = function () {
        if (this.y += this.speed * this.yDir * Game.dTime,
            this.x += this.speed * this.xDir * Game.dTime,
            this.img.pos(this.x, this.y, true),
            this.nScale = Math.min(3, this.nScale + .05),
            this.img.scale(this.nScale, this.nScale, true),
            null != this.target) {
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
    return Buttle111;
}(Buttle));
//# sourceMappingURL=Buttle11.js.map