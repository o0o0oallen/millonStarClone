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
var Buttle9 = /** @class */ (function (_super) {
    __extends(Buttle9, _super);
    function Buttle9() {
        var _this = _super.call(this) || this;
        _this.skin = null;
        _this.id = 0;
        _this.sitX = NaN;
        _this.sitY = NaN;
        _this.sitXOff = NaN;
        _this.sitYOff = NaN;
        _this.x = NaN;
        _this.y = NaN;
        _this.speed = .001;
        _this.lr = false;
        _this.xDir = NaN;
        _this.yDir = NaN;
        _this.lights = null;
        _this.targetRoundX = NaN;
        _this.targetRoundY = NaN;
        _this.targetOffsetX = NaN;
        _this.targetOffsetY = NaN;
        _this.step = 0;
        _this.timeBack = NaN;
        _this._timeBack = NaN;
        _this.shootDelay = 0;
        _this.isSit = false;
        _this.dirDamp = NaN;
        _this.posDamp = NaN;
        _this.lCount = -1;
        _this.hitX = NaN;
        _this.hitY = NaN;
        _this.rButtle = 118;
        _this.isFu = true;
        _this.skin = new ui.Buttle9UI();
        _this.skin.ani2.play(0, true);
        _this.skin.animimg.visible = false;
        _this.skin.effimg.visible = false;
        _this.light(0);
        return _this;
    }
    Buttle9.prototype.testHit = function (t) {
        //console.log("testHit11***",t.id,this.step);
        var e = 0, i = 0;
        e = t.x - this.x,
            i = t.y - this.y,
            this.hitX = e + this.x,
            this.hitY = i + this.y,
            e *= e,
            i = i * i + e,
            e = Buttle9.rRound * Weapon9.buttleScale + t.r,
            e *= e;
        //if(i < e)console.log("testHit***",t.id,this.step,i,e,Buttle9.rRound,this.skin.scaleX,t.r);
        return this.step == 2 && (i < e);
    };
    Buttle9.prototype.hitFx = function () {
        //console.log("hitFx***");
        //MSound.ME.playSoundLimit("w_buttle8");
        FPool.ME.createByFun(Buttle.createFxHit).play(this.hitX, this.hitY);
    };
    Buttle9.prototype.kill = function (e) {
        //super.kill(e);
    };
    Buttle9.prototype.sit = function () {
        this.isSit = true,
            this.step = 0,
            this.skin.x = this.x = this.sitX,
            this.skin.y = this.y = this.sitY,
            this.skin.rotation = 0,
            this.skin.p0.rotation = 50,
            this.skin.p1.rotation = 80,
            this.skin.p2.rotation = 110;
    };
    Buttle9.prototype.send = function (e) {
        //console.log("send***",e)
        Buttle.add(this);
        this.complete = false;
        this.isSit = false,
            Game.ME.layerPlane.addChild(this.skin);
        this.x = this.skin.x + Plane.ME.x - Plane.ME.skin.jiTou.x,
            this.y = this.skin.y + Plane.ME.y - Plane.ME.skin.jiTou.y,
            this.skin.pos(this.x, this.y, true),
            this.lr ? this.xDir = 1 : this.xDir = -1,
            this.yDir = -0.5,
            this.speed = 0,
            laya.utils.Tween.to(this, {
                speed: 400
            }, 200, laya.utils.Ease.quintIn, null, 100 + 100 * (1 - e)),
            this.open(true);
    };
    Buttle9.prototype.back = function () {
        //console.log("back*****", this.isSit, this.step);
        !this.isSit && 2 == this.step && (this.step = 3);
    };
    Buttle9.prototype.open = function (t) {
        if (t) {
            this.skin.ani3.play(0, false);
            this.skin.ani3.off(Laya.Event.COMPLETE, this, this.OpenOver);
            this.skin.ani3.on(Laya.Event.COMPLETE, this, this.OpenOver);
        }
        else {
            this.skin.animimg.visible = false;
            this.skin.zidan.visible = true;
            this.skin.effimg.visible = false;
            this.skin.ani1.gotoAndStop(0);
            this.skin.ani4.play(0, false);
            this.skin.ani4.off(Laya.Event.COMPLETE, this, this.CloseOver);
            this.skin.ani4.on(Laya.Event.COMPLETE, this, this.CloseOver);
        }
    };
    Buttle9.prototype.OpenOver = function () {
        this.skin.animimg.visible = true;
        this.skin.zidan.visible = false;
        this.skin.effimg.visible = true;
        var ntemp = Buttle9.rRound * Weapon9.buttleScale / 250;
        this.skin.effimg.scale(ntemp, ntemp, true);
        this.skin.ani1.play(0, true);
        this.step = 2;
        //console.log("OpenOver***", this.lr, this.step);
    };
    Buttle9.prototype.CloseOver = function () {
        this.skin.p0.rotation = 50,
            this.skin.p1.rotation = 80,
            this.skin.p2.rotation = 110;
    };
    Buttle9.prototype.light = function (t) {
        this.skin.juneng.skin = "wuqi/09/y" + (t + 1) + ".png";
    };
    Buttle9.prototype.update = function () {
    };
    Buttle9.prototype.Moveupdate = function () {
        var _this = this;
        //console.log("buttle9*****Moveupdate****");
        var e = NaN, i = NaN, s = NaN, n = NaN;
        switch (this.step) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                //console.log("buttle9*****update****",this.speed,this.xDir,Game.dTime);
                this.x += this.speed * this.xDir * Game.dTime,
                    this.x + Buttle9.rRound * Weapon9.buttleScale > Game.ME.BR ? (this.xDir = -1) :
                        this.x - Buttle9.rRound * Weapon9.buttleScale < Game.ME.BL && (this.xDir = 1),
                    this.y += this.speed * this.yDir * Game.dTime,
                    this.skin.pos(this.x, this.y),
                    this.y - Buttle9.rRound * Weapon9.buttleScale < Game.ME.BT && (_super.prototype.kill.call(this, this), this.step = 3);
                MSound.ME.playSoundLimit("w_buttle9_b");
                break;
            case 3:
                //console.log("buttle9*****Moveupdate****", this.skin.y, Buttle9.rRound * Weapon9.buttleScale, Game.ME.BT);
                this.targetRoundX = Plane.ME.x + this.sitXOff,
                    this.targetRoundY = Plane.ME.y + this.sitYOff,
                    this.step = 0,
                    MSound.ME.playSoundLimit("w_buttle9_c"),
                    Laya.Tween.to(this.skin, { x: this.targetRoundX, y: this.targetRoundY }, 600, Laya.Ease.quintIn, Laya.Handler.create(this, function () {
                        _this.x = _this.skin.x;
                        _this.y = _this.skin.y;
                        Weapon9.ME.back(_this);
                        _this.open(false);
                    }), 0);
                break;
        }
    };
    Buttle9.target = null;
    Buttle9.rRound = 125;
    Buttle9.imgPool = null;
    return Buttle9;
}(Buttle));
//# sourceMappingURL=Buttle9.js.map