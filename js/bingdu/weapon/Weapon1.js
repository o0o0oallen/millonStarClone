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
var Weapon1 = /** @class */ (function (_super) {
    __extends(Weapon1, _super);
    function Weapon1(t) {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.dirLX = NaN;
        _this.dirLY = NaN;
        _this.dirRX = NaN;
        _this.dirRY = NaN;
        _this.startTime1 = NaN;
        _this.startTime2 = NaN;
        _this.bLR = false;
        _this.bLPlay = false;
        _this.bRPlay = false;
        // public r1 = 0;
        // public r2 = 0;
        _this.dura = 6;
        _this.zoom = NaN;
        _this.tFile = 0;
        _this.dou = NaN;
        _this.plane = t,
            _this.setOffset1(0, -85),
            _this.setOffset2(0, 85),
            _this.skin = _this._skin = new ui.WP1UI(),
            t.skin.addChild(_this._skin),
            _this.speed = 180,
            _this.dirLX = -.197,
            _this.dirLY = -.98,
            _this.dirRX = .199,
            _this.dirRY = -.979,
            // this._skin.hY1.scale(0, 0, true),
            // this._skin.hY2.scale(0, 0, true),
            // UIHelper.dosave(this._skin.hY1),
            // UIHelper.dosave(this._skin.hY2),
            UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r);
        // UIHelper.dosave(this._skin.r1),
        // UIHelper.dosave(this._skin.r2);
        if (null == Weapon1.animBall) {
            // Weapon1.animPao = new AnimImg();
            // Weapon1.animPao.init("wuqi/01/a", 5, 75, true, true);// 75 是6秒的测量值
            Weapon1.animPaol = new UIAnim(_this._skin.l);
            Weapon1.animPaol.init("wuqi/fuani/a", 5, 50, false, true); // 75 是6秒的测量值
            Weapon1.animPaor = new UIAnim(_this._skin.r);
            Weapon1.animPaor.init("wuqi/fuani/a", 5, 50, false, true); // 75 是6秒的测量值
            Weapon1.animBall = new AnimImg();
            Weapon1.animBall.init("wuqi/fuani/ff", 4, 5, true);
            Weapon1.animBoom = new ImgAnim(Game.ME.layerBoom);
            Weapon1.animBoom.init("wuqi/01/b", 8, 5, false, true);
        }
        return _this;
    }
    Weapon1.prototype.initData = function () {
        Weapon1.buttleScale = Cfg.fNum1 * 2 / 1e3,
            Weapon1.rButtle = Weapon1.rBase * Weapon1.buttleScale,
            this.zoom = 1 / this.dura / 60;
        //console.log("initData***", Weapon1.buttleScale, Weapon1.rButtle, Cfg.fNum1);
        // Weapon1.animPao.break(-1);
        // Weapon1.animPaol.fDelay = Weapon1.rButtle;
    };
    Weapon1.prototype.updateData = function () {
        Weapon1.buttleScale = Cfg.fNum1 * 2 / 1e3,
            Weapon1.rButtle = Weapon1.rBase * Weapon1.buttleScale;
        //console.log("updateData***", Weapon1.buttleScale, Weapon1.rButtle, Cfg.fNum1);
    };
    Weapon1.prototype.broken = function (t) {
        if (t) {
            // Plane.ME.explode(this._skin.hY1),
            //     Plane.ME.explode(this._skin.hY2),
            // Weapon1.animPao.break(4);
            Plane.ME.explode(this._skin.l),
                Plane.ME.explode(this._skin.r);
            // Plane.ME.explode(this._skin.r1),
            // Plane.ME.explode(this._skin.r2);
        }
        else {
            // UIHelper.reset(this._skin.hY1),
            //     UIHelper.reset(this._skin.hY2),
            UIHelper.reset(this._skin.l),
                UIHelper.reset(this._skin.r);
            // UIHelper.reset(this._skin.r1),
            // UIHelper.reset(this._skin.r2);
        }
        //this.bLPlay = false;
    };
    Weapon1.prototype.setVisible = function (i) {
        _super.prototype.setVisible.call(this, i);
        // if (i) {
        //     Weapon1.animPao.play(this._skin.l),
        //         Weapon1.animPao.play(this._skin.r);
        // } else {
        //     Weapon1.animPao.stop(this._skin.l),
        //         Weapon1.animPao.stop(this._skin.r);
        // }
    };
    Weapon1.prototype.update = function () {
        this.shoot();
        // this.tFile += .4;
        // this.dou = Math.abs(.1 * Math.sin(this.tFile));
        // if (this.huoYanScale1 < 1) {
        //     this.huoYanScale1 += this.zoom;
        //     if (this.huoYanScale1 * 5 > 2)
        //         this._skin.l.source = Weapon1.animPao.getOne();
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
        //         this._skin.r.source = Weapon1.animPao.getOne();
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
    Weapon1.prototype.shoot = function () {
        if (Game.isGameStart && Game.time > this.timeSend) {
            this.timeSend = Game.time + 2;
            if (this.bLR) {
                this.startTime1 = Game.time;
                if (this.bLPlay == false) {
                    //this.bLPlay = true;
                    Weapon1.animPaol.play();
                    // Weapon1.animPao.play(this._skin.l.x, this._skin.l.y, 1, true, this._skin.l);
                }
                // this.huoYanScale1 = 0,
                // this._skin.hY1.scale(0, 0, true),
                this.xEndPos = this.xStartPos = this.plane.x + Math.cos(this.plane.rad + this.offsetRad1) * this.offsetLen1,
                    this.yStartPos = this.plane.y + Math.sin(this.plane.rad + this.offsetRad1) * this.offsetLen1,
                    this.buttle = FPool.ME.createByFun(this.NewButtle1),
                    this.buttle.sendBy(this.speed, this.xStartPos, this.yStartPos, this.xEndPos, 0, this.dirLX, this.dirLY);
            }
            else {
                this.startTime2 = Game.time;
                if (this.bRPlay == false) {
                    // this.bRPlay = true;
                    Weapon1.animPaor.play();
                    //  Weapon1.animPao.play(this._skin.r.x, this._skin.r.y, 1, true, this._skin.r);
                }
                // this.huoYanScale2 = 0,
                // this._skin.hY2.scale(0, 0, true),
                this.xEndPos = this.xStartPos = this.plane.x + Math.cos(this.plane.rad + this.offsetRad2) * this.offsetLen2,
                    this.yStartPos = this.plane.y + Math.sin(this.plane.rad + this.offsetRad2) * this.offsetLen2,
                    this.buttle = FPool.ME.createByFun(this.NewButtle1),
                    this.buttle.sendBy(this.speed, this.xStartPos, this.yStartPos, this.xEndPos, 0, this.dirRX, this.dirRY);
            }
            this.bLR = !this.bLR;
        }
    };
    Weapon1.prototype.NewButtle1 = function () {
        return new Buttle1();
    };
    Weapon1.buttleScale = NaN;
    Weapon1.rBase = 36;
    Weapon1.rButtle = NaN;
    Weapon1.animPaol = null;
    Weapon1.animPaor = null;
    Weapon1.animBall = null;
    Weapon1.animBoom = null;
    return Weapon1;
}(Weapon));
//# sourceMappingURL=Weapon1.js.map