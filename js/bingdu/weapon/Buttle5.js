/*
* name;
*/
var Buttle5 = /** @class */ (function () {
    function Buttle5() {
        this.skin = null;
        this.id = 0;
        this.x = NaN;
        this.y = NaN;
        this.speed = .001;
        this.lr = false;
        this.xDir = NaN;
        this.yDir = NaN;
        this.lights = null;
        this.targetRoundX = NaN;
        this.targetRoundY = NaN;
        this.targetOffsetX = NaN;
        this.targetOffsetY = NaN;
        this.step = 0;
        this.timeBack = NaN;
        this._timeBack = NaN;
        this.shootDelay = 0;
        this.isSit = false;
        this.fScale = NaN;
        this.sitX = NaN;
        this.sitY = NaN;
        this.sitXOff = NaN;
        this.sitYOff = NaN;
        this.dirDamp = NaN;
        this.posDamp = NaN;
        this.lCount = -1;
        this.shootAble = false;
        this.isAnimPlay = false;
        this.skin = new ui.Buttle5UI(),
            this.lights = [],
            //this.lights.push(this.skin.p0),
            //this.lights.push(this.skin.p1),
            //this.lights.push(this.skin.p2),
            //this.light(0),
            this.skin.fire.scale(0, 0, true);
        this.skin.ani1.on("complete", this, this.AnimPlayOver);
    }
    Buttle5.prototype.AppearAnim = function () {
        this.isAnimPlay = true;
        this.skin.ani1.play(0, false);
    };
    Buttle5.prototype.AnimPlayOver = function () {
        this.isAnimPlay = false;
    };
    Buttle5.prototype.sit = function () {
        this.isSit = true,
            this.skin.x = this.x = this.sitX,
            this.skin.y = this.y = this.sitY,
            this.skin.rotation = this.lr ? 0 : 0;
    };
    Buttle5.prototype.shoot = function () {
        //console.log("shoot***",this.id);
        var e = Buttle5.imgPool.getOne(), i = laya.utils.Handler.create(this, this.imgUpdate, [e, Buttle5.target], false);
        e.rotation = this.skin.rotation,
            e.x = e.sx = this.x,
            e.y = e.sy = this.y,
            e.p = 0,
            e.visible = true,
            this.fScale = 1,
            laya.utils.Tween.to(e, {
                p: 1,
                update: i
            }, 300, null, laya.utils.Handler.create(this, this.imgEnd, [e, i]));
    };
    Buttle5.prototype.imgUpdate = function (t, e) {
        t.visible && (t.x = (e.x - t.sx) * t.p + t.sx, t.y = (e.y - t.sy) * t.p + t.sy, PosTool.dis2PointSqr(t, e.x, e.y) < e.rSqr && (t.visible = false, FPool.ME.createByFun(Buttle.createFxHit).play(t.x, t.y), e.hit(Cfg.fDamage), MSound.ME.playSoundLimit("w_buttle5")));
    };
    Buttle5.prototype.imgEnd = function (e, i) {
        e.visible && (e.visible = false, Buttle5.target.hit(Cfg.fDamage)),
            e.name = "",
            i.recover();
    };
    Buttle5.prototype.send = function (e) {
        //console.log("buttle5send*****",e,this.id);
        this.isSit = false,
            //this._timeBack = this.timeBack = Cfg.fNum2,
            Game.ME.layerPlane.addChild(this.skin);
        //Buttle5.target.r;
        Buttle5.rRound += 2 * Math.random() + .8,
            this.targetOffsetX = this.skin.x - Plane.ME.skin.jiTou.x,
            this.targetOffsetY = this.skin.y - Plane.ME.skin.jiTou.y,
            //console.log("send********",this.id,this.skin.x,this.skin.y,this.targetOffsetX,this.targetOffsetY,Plane.ME.x,Plane.ME.y),
            this.skin.x = this.x = Plane.ME.x + this.targetOffsetX,
            this.skin.y = this.y = Plane.ME.y + this.targetOffsetY,
            this.skin.scaleX = this.skin.scaleY = .8,
            this.lr,
            this.xDir = 0,
            this.yDir = -1,
            this.speed = 0,
            this.posDamp = .1 * Math.random() + .07,
            this.dirDamp = 1.2,
            laya.utils.Tween.to(this, {
                speed: 1800
            }, 200, laya.utils.Ease.quintIn, null, 100 + 100 * e),
            this.step = 2,
            this.open(true);
    };
    Buttle5.prototype.send2 = function () {
    };
    Buttle5.prototype.back = function () {
        this.isSit && 3 != this.step || (this.step = 0, Weapon5.ME.back(this), this.open(false));
    };
    Buttle5.prototype.open = function (t) {
        laya.utils.Tween.to(this.skin.chiL, {
            rotation: t ? -30 : -90
        }, 100, null, null, 0, true),
            laya.utils.Tween.to(this.skin.chiR, {
                rotation: t ? -150 : -90
            }, 100, null, null, 0, true);
    };
    Buttle5.prototype.light = function (t) {
        // if (this.lCount != t) {
        //     this.lCount = t;
        //     for (var e = 0; e < t; e++) this.lights[e].visible = false;//this.lights[e].visible = true;
        //     for (e = t; e < 3; e++) this.lights[e].visible = false;
        // }
    };
    Buttle5.prototype.update = function () {
        var e = NaN, i = NaN, s = NaN, n = NaN;
        switch (this.step) {
            case 0:
                break;
            case 2:
                this.targetRoundX = Plane.ME.x + this.targetOffsetX,
                    this.targetRoundY = Plane.ME.y + this.targetOffsetY,
                    // this.x += .1 * (this.targetRoundX - this.x),
                    // this.y += .1 * (this.targetRoundY - this.y),
                    this.x += (this.targetRoundX - this.x),
                    this.y += (this.targetRoundY - this.y),
                    this.skin.pos(this.x, this.y, true),
                    //this.skin.rotation += .5 * (Math.atan2(Buttle5.target.y - this.y, Buttle5.target.x - this.x) / 3.14 * 180 - this.skin.rotation + 90),
                    //console.log("buttle5***",this.shootAble,!this.isAnimPlay),
                    this.shootAble && !this.isAnimPlay && (this.skin.rotation += .5 * (Math.atan2(Buttle5.target.y - this.y, Buttle5.target.x - this.x) / 3.14 * 180 - this.skin.rotation + 90),
                        //this.timeBack -= Game.dTime, 
                        //this.timeBack < 0 ?
                        //(this.step = 3, this.light(0))
                        //: this.light(Math.ceil(this.timeBack / this._timeBack * 3)),
                        Game.time > this.shootDelay && (this.shootDelay = Game.time + Weapon5.ME.dura_12, this.shoot()));
                break;
            case 3:
                this.targetRoundX = Plane.ME.x + this.sitXOff,
                    this.targetRoundY = Plane.ME.y + this.sitYOff,
                    this.y += this.speed * this.yDir * Game.dTime,
                    this.x += this.speed * this.xDir * Game.dTime,
                    this.skin.pos(this.x, this.y, true),
                    s = this.targetRoundX - this.x,
                    n = this.targetRoundY - this.y,
                    s *= i = 1 / (e = Math.sqrt(s * s + n * n)),
                    n *= i,
                    this.xDir += (s - this.xDir) * this.dirDamp * Game.dTime * 5,
                    this.yDir += (n - this.yDir) * this.dirDamp * Game.dTime * 5,
                    this.skin.rotation = Math.atan2(this.yDir, this.xDir) / 3.14 * 180,
                    e < 50 && (this.step = 0, Weapon5.ME.back(this), this.open(false));
                //this.step = 0, Weapon5.ME.back(this), this.open(false);
                break;
        }
        this.fScale > 0 && (this.fScale -= .1, this.skin.fire.scale(this.fScale, this.fScale, true));
    };
    Buttle5.target = null;
    Buttle5.rRound = 0;
    Buttle5.imgPool = null;
    return Buttle5;
}());
//# sourceMappingURL=Buttle5.js.map