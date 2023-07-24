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
var Weapon2 = /** @class */ (function (_super) {
    __extends(Weapon2, _super);
    // public static animBall: AnimImg = null; //my add 子弹动画
    function Weapon2() {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.dirLX = NaN;
        _this.dirLY = NaN;
        _this.dirRX = NaN;
        _this.dirRY = NaN;
        _this.startTime1 = NaN;
        _this.startTime2 = NaN;
        _this.bLR = false;
        _this.r1 = 0;
        _this.r2 = 0;
        // public setVisible(i) {
        //     super.setVisible(i);
        //     if (i) {
        //         Weapon2.animPao.play(this._skin.l),
        //             Weapon2.animPao.play(this._skin.r);
        //     } else {
        //         Weapon2.animPao.stop(this._skin.l),
        //             Weapon2.animPao.stop(this._skin.r);
        //     }
        // }
        _this.timeSendQK = 0;
        _this.setOffset1(0, -85),
            _this.setOffset2(0, 85),
            _this.skin = _this._skin = new ui.WP2UI(),
            Plane.ME.skin.addChild(_this._skin),
            _this.speed = 1800;
        if (null == Weapon2.animBoom) {
            // Weapon2.animBall = new AnimImg(),
            // Weapon2.animPao = new AnimImg(),
            Weapon2.animBoom = new ImgAnim(Game.ME.layerBoom),
                // Weapon2.animBall.init("wuqi/02/f", 6, 1, true),
                // Weapon2.animPao.init("fu2/b_0", 9, 1, true),
                Weapon2.animBoom.init("wuqi/02/b", 10, 1, false, true);
        }
        UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r);
        UIHelper.dosave(_this._skin.pt1),
            UIHelper.dosave(_this._skin.pt2);
        UIHelper.dosave(_this._skin.r1),
            UIHelper.dosave(_this._skin.r2);
        return _this;
    }
    Weapon2.prototype.broken = function (t) {
        if (t) {
            Plane.ME.explode(this._skin.l),
                Plane.ME.explode(this._skin.r);
            Plane.ME.explode(this._skin.pt1),
                Plane.ME.explode(this._skin.pt2);
            Plane.ME.explode(this._skin.r1),
                Plane.ME.explode(this._skin.r2);
        }
        else {
            UIHelper.reset(this._skin.l),
                UIHelper.reset(this._skin.r);
            UIHelper.reset(this._skin.pt1),
                UIHelper.reset(this._skin.pt2);
            UIHelper.reset(this._skin.r1),
                UIHelper.reset(this._skin.r2);
        }
    };
    Weapon2.prototype.update = function () {
        if (Game.isGameStart) {
            // console.log(Game.time, this.timeSendQK, this.timeSend, Cfg.fNum1);
            // if (Game.time > this.timeSendQK) {
            //     this.timeSendQK = Game.time + Cfg.fNum1 - 5;
            //     if (this.bLR) {
            //         this._skin.kaipaor.play(0, false);
            //     }
            //     else {
            //         this._skin.kaipaol.play(0, false);
            //     }
            // }
            if (Game.time > this.timeSend) {
                this.timeSend = Game.time + Cfg.fNum1;
                if (this.bLR) {
                    this._skin.kaipaor.play(0, false);
                    var t = .2 * -Math.random() - 1.57;
                    this.dirLX = Math.cos(t),
                        this.dirLY = Math.sin(t),
                        this.startTime1 = Game.time,
                        this.huoYanScale1 = 0,
                        this.xEndPos = this.xStartPos = this.plane.x + Math.cos(this.plane.rad + this.offsetRad1) * this.offsetLen1,
                        this.yStartPos = this.plane.y + Math.sin(this.plane.rad + this.offsetRad1) * this.offsetLen1,
                        this.buttle = FPool.ME.createByFun(this.NewButtle2),
                        //this.buttle.img.rotation = t / 3.14 * 180 ,
                        this.buttle.sendBy(this.speed, this.xStartPos, this.yStartPos, this.xEndPos, 0, this.dirLX, this.dirLY);
                }
                else {
                    this._skin.kaipaol.play(0, false);
                    t = .2 * Math.random() - 1.57,
                        this.dirRX = Math.cos(t),
                        this.dirRY = Math.sin(t),
                        this.startTime2 = Game.time,
                        this.huoYanScale2 = 0,
                        this.xEndPos = this.xStartPos = this.plane.x + Math.cos(this.plane.rad + this.offsetRad2) * this.offsetLen2,
                        this.yStartPos = this.plane.y + Math.sin(this.plane.rad + this.offsetRad2) * this.offsetLen2,
                        this.buttle = FPool.ME.createByFun(this.NewButtle2),
                        //this.buttle.img.rotation = t / 3.14 * 180 ,
                        this.buttle.sendBy(this.speed, this.xStartPos, this.yStartPos, this.xEndPos, 0, this.dirRX, this.dirRY);
                }
                this.bLR = !this.bLR;
            }
        }
        this.r1 -= 15,
            this.r2 += 15,
            this._skin.r1.rotation = this.r1,
            this._skin.r2.rotation = this.r2;
    };
    Weapon2.prototype.NewButtle2 = function () {
        return new Buttle2();
    };
    Weapon2.animPao = null;
    Weapon2.rBoom = 100;
    Weapon2.animBoom = null;
    return Weapon2;
}(Weapon));
//# sourceMappingURL=Weapon2.js.map