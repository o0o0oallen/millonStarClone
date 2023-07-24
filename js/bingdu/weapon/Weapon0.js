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
* 基本子弹类;
*/
var Weapon0 = /** @class */ (function (_super) {
    __extends(Weapon0, _super);
    function Weapon0(t) {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.pool = 0;
        _this.addbullet = 0;
        _this.isadd = true;
        _this.timeShow = 0;
        _this.plane = t;
        _this.setOffset1(100, 0);
        _this.skin = _this._skin = new ui.WP0UI();
        t.skin.addChild(_this._skin);
        return _this;
    }
    Weapon0.prototype.ResetButtleParam = function () {
        switch (SV.ME.useButtleId) {
            case 1:
            case 0:
            case 2:
                Weapon0.xSpace = 28; //子弹x轴间隔
                Weapon0.xSpace_2 = .5 * Weapon0.xSpace;
                Weapon0.nButtleType = 0;
                break;
            case 4:
            case 3:
                Weapon0.xSpace = 200; //子弹x轴间隔
                Weapon0.xSpace_2 = .5 * Weapon0.xSpace;
                Weapon0.nButtleType = 1;
                break;
        }
    };
    Weapon0.prototype.initData = function () {
        //console.log("weapon0=====initdata");
        this.pool = 0;
    };
    Weapon0.prototype.broken = function (t) {
        // t || Weapon0.backAttack.reset(),
        Plane.ME.wps[0].updateButtleFace();
    };
    Weapon0.prototype.update = function () {
        this.plane.shootAble && this.shoot();
        this.huoYanScale1 >= 0 && (this._skin.hY1.scale(this.huoYanScale1, this.huoYanScale1, true), this.huoYanScale1 -= .1);
    };
    Weapon0.prototype.shoot = function () {
        var nXNum;
        if ((Game.isGameStart || Game.isShowBullet) && Game.time > this.timeSend) {
            this.huoYanScale1 = 1;
            //this.plane.mainType == 1 && console.log("shoot111*****",this.pool, Cfg.bPreCount, this.timeSend);
            this.pool += Cfg.bPreCount;
            this.xCount = Math.ceil(this.pool / Cfg.bSendMax);
            this.pool -= this.xCount;
            //this.plane.mainType == 1 && console.log("shoot222*****", this.xCount, this.pool);
            nXNum = this.xCount;
            if (Game.isShowBullet) {
                if (Game.time > this.timeShow) {
                    this.isadd ? this.addbullet++ : this.addbullet--;
                }
                nXNum += this.addbullet;
                if (nXNum > 22) {
                    nXNum = 22;
                    this.isadd && (this.isadd = false, this.timeShow = Game.time + 1 + Math.random() * 4);
                }
                else if (nXNum < this.xCount) {
                    nXNum = this.xCount;
                    !this.isadd && (this.isadd = true, this.timeShow = Game.time + 1 + Math.random() * 4);
                }
            }
            else {
                this.addbullet = 0;
            }
            this.timeSend = Game.time + Cfg.bDelay; //Cfg.bDelay;
            this.xStartPos = this.plane.x + Math.cos(this.plane.rad + this.offsetRad1) * this.offsetLen1;
            this.yStartPos = this.plane.y + Math.sin(this.plane.rad + this.offsetRad1) * this.offsetLen1;
            this.xEndPos = this.xStartPos - nXNum * Weapon0.xSpace_2 - Weapon0.xSpace_2;
            for (var t = 0; t < nXNum; t++)
                this.xEndPos += Weapon0.xSpace,
                    this.buttle = FPool.ME.createByFun(this.NewButtle0),
                    this.buttle.setFace(Weapon0.faceName),
                    this.buttle.nType = Weapon0.nButtleType,
                    this.buttle.sendBy(this.speed, this.xStartPos, this.yStartPos + Weapon0.yCheck, this.xEndPos, 0, this.xDir1, this.yDir1);
        }
    };
    Weapon0.prototype.updateButtleFace = function () {
        //// this._skin.hY1.visible = true;
        this.ResetButtleParam();
        Cfg.stateDamage.state &&
            Planet.hitCoin.state ?
            Weapon0.faceName = "d" + SV.ME.useButtleId + "_4" :
            Cfg.stateDamage.state ?
                Weapon0.faceName = "d" + SV.ME.useButtleId + "_3" :
                Planet.hitCoin.state ?
                    (Weapon0.faceName = "d" + SV.ME.useButtleId + "_2"
                    // this._skin.hY1.visible = false
                    ) :
                    Weapon0.faceName = "d" + SV.ME.useButtleId + "_1";
        //  console.log("getBuff in",Weapon0.faceName);
        // // this._skin.hY1.visible = !0,
        // Cfg.stateDamage.state && Planet.hitCoin.state && Weapon0.backAttack.state ?
        //     this.faceName = "db04_RS" :
        //     Cfg.stateDamage.state && Weapon0.backAttack.state ? this.faceName = "db02_RS" :
        //         Cfg.stateDamage.state && Planet.hitCoin.state ? this.faceName = "da04_RS" :
        //             Planet.hitCoin.state && Weapon0.backAttack.state ? (
        //                 this.faceName = "db03_RS"
        //                 // ,this._skin.hY1.visible = !1
        //             ) :
        //                 Cfg.stateDamage.state ? this.faceName = "da02_RS" :
        //                     Planet.hitCoin.state ? (
        //                         this.faceName = "da03_RS"
        //                         // , this._skin.hY1.visible = !1
        //                     ) :
        //                         this.faceName = Weapon0.backAttack.state ? "db01_RS" : "da01_RS"
    };
    Weapon0.prototype.NewButtle0 = function () {
        var t = new Buttle0();
        return t.setFace(Weapon0.faceName),
            Game.ME.layerPlane.addChild(t.img),
            t;
    };
    Weapon0.prototype.load = function (t, e) { };
    Weapon0.faceName = "d0_1";
    Weapon0.backAttack = new StateVal();
    Weapon0.yCheck = 161; //发射口y轴偏移
    Weapon0.nButtleType = 0; //0原射击1散射
    Weapon0.xSpace = 28;
    Weapon0.xSpace_2 = 14;
    return Weapon0;
}(Weapon));
//# sourceMappingURL=Weapon0.js.map