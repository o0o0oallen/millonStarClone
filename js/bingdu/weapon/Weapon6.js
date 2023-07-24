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
var Weapon6 = /** @class */ (function (_super) {
    __extends(Weapon6, _super);
    function Weapon6(t) {
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
        //public dura = 6;
        //public zoom = NaN;
        _this.tFile = 0;
        _this.dou = NaN;
        _this.plane = t,
            _this.setOffset1(0, -85),
            _this.setOffset2(0, 85),
            _this.skin = _this._skin = new ui.WP6UI(),
            t.skin.addChild(_this._skin),
            _this.speed = 360,
            _this.dirLX = -.197,
            _this.dirLY = -.98,
            _this.dirRX = .199,
            _this.dirRY = -.979,
            // this._skin.hY1.scale(0, 0, true),
            // this._skin.hY2.scale(0, 0, true),
            // UIHelper.dosave(this._skin.hY1),
            // UIHelper.dosave(this._skin.hY2),
            UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r),
            UIHelper.dosave(_this._skin.firel),
            UIHelper.dosave(_this._skin.firer);
        // UIHelper.dosave(this._skin.barl);
        // UIHelper.dosave(this._skin.barr);
        // UIHelper.dosave(this._skin.r1),
        // UIHelper.dosave(this._skin.r2);
        if (null == Weapon6.animBall) {
            Weapon6.animPaol = new UIAnim(_this._skin.barl);
            Weapon6.animPaol.init("wuqi/06/x", 5, 75, false, true); // 75 是6秒的测量值
            Weapon6.animPaor = new UIAnim(_this._skin.barr);
            Weapon6.animPaor.init("wuqi/06/x", 5, 75, false, true); // 75 是6秒的测量值
            // Weapon6.animBall = new AnimImg();
            // Weapon6.animBall.init("wuqi/01/f", 8, 5, true);
            // Weapon6.animBoom = new ImgAnim(Game.ME.layerBoom);
            // Weapon6.animBoom.init("wuqi/01/b", 8, 5, false, true);
        }
        return _this;
    }
    Weapon6.prototype.initData = function () {
        //num1--39//num2--5.4//num3--1.8
        Weapon6.buttleScale = Cfg.fNum1 * 2 / 1e3;
        //Weapon6.rButtle = Weapon6.rBase * Weapon6.buttleScale,
        //this.zoom = 1 / this.dura / 60;
        //console.log("weapon6***initdata***",Weapon6.rBase,Weapon6.buttleScale,Weapon6.rButtle);
    };
    Weapon6.prototype.updateData = function () {
        Weapon6.buttleScale = Cfg.fNum1 * 2 / 1e3;
    };
    Weapon6.prototype.broken = function (t) {
        if (t) {
            Plane.ME.explode(this._skin.l),
                Plane.ME.explode(this._skin.r);
            Plane.ME.explode(this._skin.firel);
            Plane.ME.explode(this._skin.firer);
            // Plane.ME.explode(this._skin.barl);
            // Plane.ME.explode(this._skin.barr);
        }
        else {
            // UIHelper.reset(this._skin.hY1),
            //     UIHelper.reset(this._skin.hY2),
            UIHelper.reset(this._skin.l),
                UIHelper.reset(this._skin.r);
            UIHelper.reset(this._skin.firel);
            UIHelper.reset(this._skin.firer);
            // UIHelper.reset(this._skin.barl);
            // UIHelper.reset(this._skin.barr);
            // UIHelper.reset(this._skin.r1),
            // UIHelper.reset(this._skin.r2);
        }
        //this.bLPlay = false;
    };
    Weapon6.prototype.setVisible = function (i) {
        _super.prototype.setVisible.call(this, i);
        //console.log("setvisible******");
    };
    Weapon6.prototype.update = function () {
        this.shoot();
    };
    Weapon6.prototype.shoot = function () {
        if (Game.isGameStart && Game.time > this.timeSend) {
            this.timeSend = Game.time + 2.5;
            if (this.bLR) {
                this.startTime1 = Game.time;
                if (this.bLPlay == false) {
                    Weapon6.animPaol.play();
                }
                var pointObj = this._skin.firel.localToGlobal(new Laya.Point(0, 0));
                this.xEndPos = this.xStartPos = pointObj.x + 28, //this.plane.x + Math.cos(this.plane.rad + this.offsetRad1) * this.offsetLen1,
                    this.yStartPos = pointObj.y, //this.plane.y + Math.sin(this.plane.rad + this.offsetRad1) * this.offsetLen1,
                    this.CreateButtle(this.speed, this.xStartPos, this.yStartPos, this.xEndPos, 0, this.dirLX, this.dirLY);
                //this.buttle = FPool.ME.createByFun(this.NewButtle6),
                //this.buttle.sendBy(this.speed, this.xStartPos, this.yStartPos, this.xEndPos, 0, this.dirLX, this.dirLY);
            }
            else {
                this.startTime2 = Game.time;
                if (this.bRPlay == false) {
                    Weapon6.animPaor.play();
                }
                var pointObj = this._skin.firer.localToGlobal(new Laya.Point(0, 0));
                this.xEndPos = this.xStartPos = pointObj.x + 28, //this.plane.x + Math.cos(this.plane.rad + this.offsetRad2) * this.offsetLen2,
                    this.yStartPos = pointObj.y, //this.plane.y + Math.sin(this.plane.rad + this.offsetRad2) * this.offsetLen2,
                    this.CreateButtle(this.speed, this.xStartPos, this.yStartPos, this.xEndPos, 0, this.dirRX, this.dirRY);
                //this.buttle = FPool.ME.createByFun(this.NewButtle6),
                //this.buttle.sendBy(this.speed, this.xStartPos, this.yStartPos, this.xEndPos, 0, this.dirRX, this.dirRY);
            }
            this.bLR = !this.bLR;
        }
    };
    Weapon6.prototype.CreateButtle = function (t, e, i, s, n, a, h) {
        var j;
        for (j = 0; j < 6; j++) {
            Laya.timer.once(j * 40, this, this.GetOneButtle, [t, e, i, s, n, a, h], false);
        }
        MSound.ME.playSoundLimit("w_buttle8");
    };
    Weapon6.prototype.GetOneButtle = function (t, e, i, s, n, a, h) {
        //console.log("GetOneButtle***", t, e, i, s, n, a, h);
        this.buttle = FPool.ME.createByFun(this.NewButtle6),
            this.buttle.sendBy(t, e, i, s, n, a, h);
    };
    Weapon6.prototype.NewButtle6 = function () {
        return new Buttle6();
    };
    Weapon6.buttleScale = NaN;
    Weapon6.rBase = 36;
    Weapon6.rButtle = NaN;
    Weapon6.animPaol = null;
    Weapon6.animPaor = null;
    Weapon6.animBall = null;
    Weapon6.animBoom = null;
    return Weapon6;
}(Weapon));
//# sourceMappingURL=Weapon6.js.map