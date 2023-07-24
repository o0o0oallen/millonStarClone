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
var Planet11_Children = /** @class */ (function (_super) {
    __extends(Planet11_Children, _super);
    function Planet11_Children() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.time = 0;
        _this.time2 = 0;
        _this.cs = NaN;
        _this.sendDelay = 0;
        _this.sendCount = 0;
        _this.childLife = new math_BigUInt();
        _this.rBase = 125;
        _this.type = 11;
        _this.skin = _this.sui = new ui.Planet11UI();
        Game.ME.layerBug.addChildAt(_this.skin, 0);
        _this.t = Cfg.imgTextBug.clone(new laya.display.Sprite());
        _this.t.space = 0;
        _this.skin.addChild(_this.t.sprite);
        _this.shock = _this.sui.c;
        return _this;
        // this.dzs = [];
        // var t = 0.6 * this.rBase;
        // var i = 0;
        // for (i = 0; i < 10; i++) {
        //     this.dz = new PlanetSplit();
        //     this.dz.r = t;
        //     this.skin.addChildAt(this.dz.img, this.skin.numChildren - 2);
        //     this.dzs.push(this.dz);
        // }
    }
    Planet11_Children.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.c.skin = "Cir/" + t + ".png",
            //     this.sui.b.skin = "BugK/h" + t + ".png",
            //     this.sui.t.skin = "BugK/t" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
        }
    };
    Planet11_Children.prototype.send = function () {
        _super.prototype.send.call(this),
            Laya.timer.loop(1, this, this.anim),
            this.level > 1 && Laya.timer.loop(500, this, this.anim2),
            Laya.timer.loop(2e3, this, this.anim3),
            this.childLife.copy(this.life).div10(2),
            this.childLife.isZero() && this.childLife.one(),
            1 == this.tag && (this.speed = this.speedBase + 10, laya.utils.Tween.to(this, {
                speed: 0
            }, 300, null, laya.utils.Handler.create(this, this.speedNormal))),
            // this.onChageDir(), //碰撞后旋转一定角度
            this.sendDelay = 3 * Math.random() + 2;
    };
    Planet11_Children.prototype.speedNormal = function () {
        laya.utils.Tween.to(this, {
            speed: this.speedBase
        }, 300, null, null, 500);
    };
    Planet11_Children.prototype.update = function () {
        this.moveAble && (this.x += this.speed * this.xDir * Planet.speedRate * this.hitSlow * Game.dTime,
            this.x + this.r > Game.ME.BR ? (this.xDir = -this.xDirU,
                this.checkDir(),
                this.onChageDir()) :
                this.x - this.r < Game.ME.BL && (this.xDir = this.xDirU,
                    this.checkDir(),
                    this.onChageDir()),
            this.y += this.speed * this.yDir * Planet.speedRate * this.hitSlow * Game.dTime,
            this.y - this.r > Game.ME.BB ? (this.y = -this.r, this.onBtm2Top()) :
                this.y - this.r < Game.ME.BT && (this.yDir = this.yDirU,
                    this.onChageDir()), this.scale2 < this.scale ? (this.scale2 < this.scale && (this.scale2 += .05),
            this.skin.scale(this.scale2, this.scale2, true)) :
            this.scale2 = this.scale),
            this.draw();
    };
    Planet11_Children.prototype.onChageDir = function () {
        // laya.utils.Tween.to(this.sui.r, {
        //     rotation: Math.atan2(this.yDir, this.xDir) / 3.1415926 * 180
        // },
        //     200);
    };
    Planet11_Children.prototype.anim = function () {
        this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        this.sui.b.rotation += .5; //ltt
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
    };
    Planet11_Children.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
        Game.time > this.sendDelay && Planet.countAll < 50 && (this.sendCount-- ? this.life.bigger(this.childLife) ? (this.create(this.x + this.xDir * this.r, this.y + this.yDir * this.r), this.life.minus(this.childLife), Game.ME.minus(this.childLife), this.updateLife()) : Laya.timer.clear(this, this.anim2) : (this.sendCount = Math.round(6 * Math.random()) + 3, this.sendDelay = Game.time + 5));
    };
    Planet11_Children.prototype.anim3 = function () {
        laya.utils.Tween.to(this.sui.t, {
            scaleX: 1.6
        }, 600, laya.utils.Ease.cubicIn, laya.utils.Handler.create(this, this._anim3));
    };
    Planet11_Children.prototype._anim3 = function () {
        laya.utils.Tween.to(this.sui.t, {
            scaleX: .8
        }, 1e3);
    };
    Planet11_Children.prototype.create = function (t, i) {
        var s = new Planet11_Children();
        s.type = this.type,
            s.tag = 1,
            s.setLevel(1),
            s.x = t,
            s.y = i;
        var n = Math.atan2(this.yDir, this.xDir) + (Math.random() > .5 ? .45 : -.45);
        s.xDir = Math.cos(n),
            s.yDir = Math.sin(n),
            s.onChageDir(),
            s.lifeBase.copy(this.childLife),
            s.lifeNext.copy(s.lifeBase),
            s.life.copy(s.lifeBase),
            s.send(),
            Planet.add(s);
    };
    Planet11_Children.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        Laya.timer.clear(this, this.anim),
            Laya.timer.clear(this, this.anim2),
            Laya.timer.clear(this, this.anim3);
        _super.prototype.kill.call(this, e);
    };
    return Planet11_Children;
}(Planet));
//# sourceMappingURL=Planet11_Children.js.map