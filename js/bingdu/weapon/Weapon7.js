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
var Weapon7 = /** @class */ (function (_super) {
    __extends(Weapon7, _super);
    function Weapon7(t) {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.dirLX = NaN;
        _this.dirLY = NaN;
        _this.dirRX = NaN;
        _this.dirRY = NaN;
        _this.startTime1 = 0;
        _this.startTime2 = 0;
        _this.countl = 0;
        _this.countr = 0;
        _this.gamestate = false;
        _this.bLR = false;
        _this.bLPlay = false;
        _this.bRPlay = false;
        // public r1 = 0;
        // public r2 = 0;
        _this.dura = 6;
        _this.zoom = NaN;
        _this.tFile = 0;
        _this.dou = NaN;
        _this.testI = 0;
        _this.testWidth = 10;
        _this.isTestStart = false;
        _this.testStartX = NaN;
        _this.testStartY = NaN;
        _this.testY = NaN;
        _this.testStep = 100;
        _this.plane = t,
            _this.setOffset1(0, -85),
            _this.setOffset2(0, 85),
            _this.skin = _this._skin = new ui.WP7UI(),
            t.skin.addChild(_this._skin),
            _this.speed = 180,
            _this.dirLX = -.197,
            _this.dirLY = -.98,
            _this.dirRX = .199,
            _this.dirRY = -.979,
            Game.ME.layerPlane.addChild(_this._skin.guang),
            _this._skin.guang.visible = false;
        _this._skin.junengl.visible = false;
        _this._skin.junengr.visible = false;
        _this._skin.juguangl.visible = false;
        _this._skin.juguangr.visible = false;
        // this._skin.hY1.scale(0, 0, true),
        // this._skin.hY2.scale(0, 0, true),
        // UIHelper.dosave(this._skin.hY1),
        // UIHelper.dosave(this._skin.hY2),
        UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r);
        UIHelper.dosave(_this._skin.yy);
        UIHelper.dosave(_this._skin.zy);
        // UIHelper.dosave(this._skin.r1),
        // UIHelper.dosave(this._skin.r2);
        if (null == Weapon7.animBoom) {
            // Weapon7.animPao = new AnimImg();
            // Weapon7.animPao.init("wuqi/01/a", 5, 75, true, true);// 75 是6秒的测量值
            // Weapon7.animPao = new AnimImg();
            // Weapon7.animPao.init("wuqi/07/p", 4, 50, true, true);// 75 是6秒的测量值
            // Weapon7.animPaor = new UIAnim(this._skin.r);
            // Weapon7.animPaor.init("wuqi/07/p", 4, 50, false, true);// 75 是6秒的测量值
            Weapon7.animJuneng = new AnimImg();
            Weapon7.animJuneng.init("wuqi/07/pk", 6, 2, true);
            // Weapon7.animJunengr = new UIAnim(this._skin.junengr);
            // Weapon7.animJunengr.init("wuqi/07/pk", 6, 5, true);
            Weapon7.animBoom = new ImgAnim(Game.ME.layerBoom);
            Weapon7.animBoom.init("wuqi/07/bz", 9, 5, false, true);
        }
        return _this;
    }
    Weapon7.prototype.broken = function (t) {
        if (t) {
            // Plane.ME.explode(this._skin.hY1),
            //     Plane.ME.explode(this._skin.hY2),
            // Weapon7.animPao.break(4);
            Plane.ME.explode(this._skin.l),
                Plane.ME.explode(this._skin.r);
            Plane.ME.explode(this._skin.yy);
            Plane.ME.explode(this._skin.zy);
            // Plane.ME.explode(this._skin.r1),
            // Plane.ME.explode(this._skin.r2);
        }
        else {
            // UIHelper.reset(this._skin.hY1),
            //     UIHelper.reset(this._skin.hY2),
            UIHelper.reset(this._skin.l),
                UIHelper.reset(this._skin.r);
            UIHelper.reset(this._skin.yy);
            UIHelper.reset(this._skin.zy);
            // UIHelper.reset(this._skin.r1),
            // UIHelper.reset(this._skin.r2);
        }
    };
    Weapon7.prototype.initData = function () {
        //console.log("weapon7*********initdata");
        this.countl = 0;
        this.countr = 0;
        this.startTime1 = 0;
        this.startTime2 = 0;
        Weapon7.animJuneng.play(this._skin.junengl);
        Weapon7.animJuneng.play(this._skin.junengr);
        // this.xulil();
        // Laya.timer.once((Cfg.fNum2 * 1000 + 800) / 2, this, this.xulir);
    };
    Weapon7.prototype.updateData = function () {
        //console.log("updateData***")
        this.countl = 0;
        this.countr = 0;
        this.startTime1 = 0;
        this.startTime2 = 0;
        Laya.timer.clear(this, this.xulil);
        Laya.timer.clear(this, this.xulir);
        Laya.Tween.clearAll(this._skin.guang);
        Laya.Tween.clearAll(this._skin.junengl);
        Laya.Tween.clearAll(this._skin.junengr);
        Laya.Tween.clearAll(this._skin.juguangl);
        Laya.Tween.clearAll(this._skin.juguangr);
    };
    Weapon7.prototype.setVisible = function (i) {
        _super.prototype.setVisible.call(this, i);
        i && this.plane.skin.setChildIndex(this._skin, this.plane.skin.numChildren - 1);
    };
    Weapon7.prototype.update = function () {
        this.shoot();
        // this.tFile += .4;
        // this.dou = Math.abs(.1 * Math.sin(this.tFile));
        // if (this.huoYanScale1 < 1) {
        //     this.huoYanScale1 += this.zoom;
        //     if (this.huoYanScale1 * 5 > 2)
        //         this._skin.l.source = Weapon7.animPao.getOne();
        // }
        // else {
        //     this.huoYanScale1 = 1 + this.dou;
        //     if (this.bLR) {
        //         this.shoot();
        //     }
        // }
        // if (this.huoYanScale2 < 1) {
        //     this.huoYanScale2 += this.zoom;
        //     if (this.huoYanScale2 * 5 > 2)
        //         this._skin.r.source = Weapon7.animPao.getOne();
        // }
        // else {
        //     this.huoYanScale2 = 1 + this.dou;
        //     if (!this.bLR) {
        //         this.shoot();
        //     }
        // }
        // this._skin.hY1.scale(this.huoYanScale1, this.huoYanScale1, true);
        // this._skin.hY2.scale(this.huoYanScale2, this.huoYanScale2, true);
    };
    Weapon7.prototype.shoot = function () {
        if (Game.isGameStart) {
            //console.log("shoot******", this.startTime1,this.startTime2);
            if (this.startTime1 == 0) {
                this.send(0);
                this.startTime1 = Game.time + (Cfg.fNum2 * 1000 + 1200) / 2 / 1000;
                //this.startTime2 = Game.time + (Cfg.fNum2 * 1000 + 1200) / 2 / 1000;
                this.startTime2 = 0;
                // Weapon7.animJuneng.play(this._skin.junengl);
                // Weapon7.animJuneng.play(this._skin.junengr);
            }
            if (Game.time > this.startTime1) {
                this.startTime1 = Game.time + (Cfg.fNum2 * 1000 + 1200) / 1000;
                this.xulil();
            }
            if (Game.time > this.startTime2) {
                this.startTime2 = Game.time + (Cfg.fNum2 * 1000 + 1200) / 1000;
                this.xulir();
            }
            //this.bLR = !this.bLR;
            this.isTestStart && this.hitTest();
        }
        else {
            if (this.gamestate) {
                //console.log("weapon7*******gamestart*****"+Game.isGameStart);
                Laya.timer.clear(this, this.xulil);
                Laya.timer.clear(this, this.xulir);
                this._skin.l.skin = "wuqi/07/p1.png";
                this._skin.r.skin = "wuqi/07/p1.png";
                Weapon7.animJuneng.stop(this._skin.junengl);
                Weapon7.animJuneng.stop(this._skin.junengr);
                this._skin.junengl.visible = false;
                this._skin.juguangl.visible = false;
                this._skin.junengr.visible = false;
                this._skin.juguangr.visible = false;
            }
        }
        this.gamestate = Game.isGameStart;
    };
    Weapon7.prototype.xulil = function () {
        this.countl++;
        if (this.countl > 4) {
            this.countl = 0;
            this.send(0);
            return;
        }
        this._skin.l.skin = "wuqi/07/p" + this.countl + ".png";
        var ndelay = Cfg.fNum2 * 1000;
        Laya.timer.once(ndelay / 4, this, this.xulil);
        if (this.countl == 1) {
            this._skin.junengl.visible = true;
            this._skin.junengl.y = -41;
            this._skin.junengl.scale(1.4, 1.4, true);
            Laya.Tween.to(this._skin.junengl, { scaleX: .2, scaleY: .2, y: -9 }, ndelay);
            this._skin.juguangl.visible = true;
            this._skin.juguangl.y = -2;
            this._skin.juguangl.scale(.2, .2, true);
            Laya.Tween.to(this._skin.juguangl, { scaleX: 1, scaleY: 1, y: -18 }, ndelay);
        }
    };
    Weapon7.prototype.xulir = function () {
        this.countr++;
        if (this.countr > 4) {
            this.countr = 0;
            this.send(1);
            return;
        }
        this._skin.r.skin = "wuqi/07/p" + this.countr + ".png";
        var ndelay = Cfg.fNum2 * 1000;
        Laya.timer.once(ndelay / 4, this, this.xulir);
        if (this.countr == 1) {
            this._skin.junengr.visible = true;
            this._skin.junengr.y = -41;
            this._skin.junengr.scale(1.4, 1.4, true);
            Laya.Tween.to(this._skin.junengr, { scaleX: .2, scaleY: .2, y: -9 }, ndelay);
            this._skin.juguangr.visible = true;
            this._skin.juguangr.y = -2;
            this._skin.juguangr.scale(.2, .2, true);
            Laya.Tween.to(this._skin.juguangr, { scaleX: 1, scaleY: 1, y: -18 }, ndelay);
        }
    };
    Weapon7.prototype.send = function (idx) {
        if (idx == 0) {
            this._skin.junengl.visible = false,
                this._skin.juguangl.visible = false,
                this._skin.guang.visible = true,
                this._skin.guang.height = Cfg.fNum3,
                this._skin.guang.pivotY = this.testWidth = .5 * Cfg.fNum3,
                this._skin.guang.width = 250,
                this._skin.guang.alpha = 1,
                this._skin.guang.scaleY = 0,
                this._skin.guang.x = Plane.ME.x - 88,
                this._skin.guang.y = Plane.ME.y,
                laya.utils.Tween.to(this._skin.guang, {
                    scaleY: 1,
                    width: 2100
                }, 150, laya.utils.Ease.linearNone, laya.utils.Handler.create(this, this.onCom, [idx]), 0, true);
        }
        else {
            this._skin.junengr.visible = false,
                this._skin.juguangr.visible = false,
                this._skin.guang.visible = true,
                this._skin.guang.height = Cfg.fNum3,
                this._skin.guang.pivotY = this.testWidth = .5 * Cfg.fNum3,
                this._skin.guang.width = 250,
                this._skin.guang.alpha = 1,
                this._skin.guang.scaleY = 0,
                this._skin.guang.x = Plane.ME.x + 88,
                this._skin.guang.y = Plane.ME.y,
                laya.utils.Tween.to(this._skin.guang, {
                    scaleY: 1,
                    width: 2100
                }, 150, laya.utils.Ease.linearNone, laya.utils.Handler.create(this, this.onCom, [idx]), 0, true);
        }
        MSound.ME.playSoundLimit("w_buttle9"),
            this.testI = 0,
            this.testStartX = this.plane.x,
            this.testStartY = this.plane.y,
            this.testY = this.testStartY - 80,
            this.isTestStart = true;
    };
    Weapon7.prototype.hitTest = function () {
        if (this.testI++, this.testY < 0)
            this.isTestStart = false;
        else {
            for (var t, e = Planet.countAll, i = 0, s = 0, n = false; e--;)
                (t = Planet.all[e]).attackAble && (i = t.x - this.testStartX, s = (s = t.y - this.testY) * s + (i *= i), i = this.testWidth + t.r, s < (i *= i) && (t.hit(Cfg.fDamage), t.slow(.1, 1e3), n = true));
            n && Weapon7.animBoom.play(this.testStartX, this.testY, 2),
                this.testY -= this.testStep;
        }
    };
    Weapon7.prototype.onCom = function (idx) {
        this.hitTest();
        if (idx == 0) {
            laya.utils.Tween.to(this._skin.guang, {
                alpha: 0,
                scaleY: 0
            }, 900, laya.utils.Ease.quintOut, laya.utils.Handler.create(this, this.onCom2, [idx]), 150, true);
        }
        else {
            laya.utils.Tween.to(this._skin.guang, {
                alpha: 0,
                scaleY: 0
            }, 900, laya.utils.Ease.quintOut, laya.utils.Handler.create(this, this.onCom2, [idx]), 150, true);
        }
    };
    Weapon7.prototype.onCom2 = function (idx) {
        if (idx == 0)
            this._skin.guang.visible = false;
        else
            this._skin.guang.visible = false;
    };
    Weapon7.buttleScale = NaN;
    Weapon7.rBase = 36;
    Weapon7.rButtle = NaN;
    Weapon7.animPao = null;
    Weapon7.animPaor = null;
    Weapon7.animJuneng = null;
    Weapon7.animJunengr = null;
    Weapon7.animBoom = null;
    return Weapon7;
}(Weapon));
//# sourceMappingURL=Weapon7.js.map