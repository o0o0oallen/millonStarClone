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
var Weapon8 = /** @class */ (function (_super) {
    __extends(Weapon8, _super);
    function Weapon8() {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.bs = null;
        _this.b = null;
        _this.pgsI = 6;
        _this.gamestate = false;
        _this.alphas = [];
        _this.alphaI = 0;
        _this.startTime1 = NaN;
        _this.startTime2 = NaN;
        _this.bLR = false;
        //f1num显示值f2num充能速度f3num范围
        Weapon8.ME = _this,
            _this.skin = _this._skin = new ui.WP8UI(),
            Plane.ME.skin.addChild(_this._skin),
            _this.bs = [];
        for (var t, i = 0; i < 2; i++)
            _this.b = new Buttle8(),
                _this.b.id = i,
                t = _this._skin["p" + i],
                _this.b.sitX = t.x,
                _this.b.sitY = t.y,
                _this.b.sitXOff = _this.b.sitX - Plane.ME.skin.jiTou.x,
                _this.b.sitYOff = _this.b.sitY - Plane.ME.skin.jiTou.y,
                _this.b.lr = 0 == i || 2 == i,
                _this.b.sit(),
                _this.b.light(6),
                _this.bs.push(_this.b),
                _this._skin.addChild(_this.b.skin);
        for (var i = 0; i < 20; i++)
            _this.alphas.push(Math.round(100 * (.8 * Math.random() + .2)) / 100);
        if (null == Weapon8.animJuneng) {
            Weapon8.animJuneng = new AnimImg();
            Weapon8.animJuneng.init("wuqi/08/z", 2, 6, true, true);
            Weapon8.animJuneng.play(_this._skin.l2);
            Weapon8.animJuneng.play(_this._skin.r2);
        }
        // Buttle5.imgPool = new ImgPool(),
        //     Buttle5.imgPool.setInitFun(this, this.initButtleImg),
        UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r),
            UIHelper.dosave(_this._skin.zy),
            UIHelper.dosave(_this._skin.yy);
        return _this;
        //UIHelper.dosave(this._skin.p2),
        //UIHelper.dosave(this._skin.p3);
    }
    Weapon8.prototype.initButtleImg = function (t) {
        t.source = Laya.loader.getRes("wuqi/05/zidan.png"),
            t.pivotX = .5 * t.source.width,
            t.pivotY = .5 * t.source.height,
            Game.ME.layerPlane.addChild(t);
    };
    Weapon8.prototype.broken = function (t) {
        var e, i = 0;
        if (t)
            for (Plane.ME.explode(this._skin.l),
                Plane.ME.explode(this._skin.r),
                Plane.ME.explode(this._skin.zy),
                Plane.ME.explode(this._skin.yy),
                i = 0; i < 2; i++)
                (e = this.bs[i]).isSit && Plane.ME.explode(e.skin);
        else
            for (UIHelper.reset(this._skin.l),
                UIHelper.reset(this._skin.r),
                UIHelper.reset(this._skin.zy),
                UIHelper.reset(this._skin.yy),
                i = 0; i < 2; i++)
                (e = this.bs[i]).skin.alpha = 1,
                    e.skin.scale(1, 1, true),
                    e.sit("broken");
    };
    Weapon8.prototype.setVisible = function (e) {
        _super.prototype.setVisible.call(this, e);
        e && Plane.ME.skin.setChildIndex(this._skin, Plane.ME.skin.numChildren - 1);
        for (var i = 0; i < 2; i++)
            this.bs[i].skin.visible = e,
                e && this.bs[i].sit("vis");
    };
    Weapon8.prototype.initData = function () {
        for (var t, e = 0; e < 2; e++)
            (t = this.bs[e]).light(0),
                t.sit("init");
        this.bLR = true;
        this.pgsI = 6;
        this.startTime1 = Game.time;
    };
    Weapon8.prototype.back = function (t) {
        //console.log("weapon8*******back****",t.id),
        this._skin.addChild(t.skin),
            t.sit("back"),
            t.light(0);
    };
    Weapon8.prototype.update = function () {
        var t = 0;
        this.alphaI++,
            this.alphaI >= 20 && (this.alphaI = 0),
            this._skin.l1.alpha = this._skin.r1.alpha = this.alphas[this.alphaI];
        if (Game.isGameStart) {
            if (this.bLR && Game.time > this.startTime1 && this.bs[0].isSit) {
                this.startTime1 = Game.time + Cfg.fNum2 / 6,
                    this.pgsI++,
                    this.pgsI >= 6 ? (this.bs[0].light(6),
                        this.bs[0].send(0),
                        this.pgsI = 0,
                        this.bLR = !this.bLR,
                        this.startTime2 = Game.time + 1.2) : this.bs[0].light(this.pgsI);
            }
            else if (!this.bLR && Game.time > this.startTime2 && this.bs[1].isSit) {
                this.startTime2 = Game.time + Cfg.fNum2 / 6,
                    this.pgsI++,
                    this.pgsI >= 6 ? (this.bs[1].light(6),
                        this.bs[1].send(1),
                        this.pgsI = 0,
                        this.bLR = !this.bLR,
                        this.startTime1 = Game.time + 1.2) : this.bs[1].light(this.pgsI);
            }
            for (t = 0; t < 2; t++)
                this.bs[t].update();
        }
        else {
            if (this.gamestate) {
                //console.log("weapon7*******gamestart*****"+Game.isGameStart);
                this.bs[0].back();
                this.bs[0].light(6);
                this.bs[1].back();
                this.bs[1].light(6);
            }
        }
        this.gamestate = Game.isGameStart;
    };
    Weapon8.ME = null;
    Weapon8.animJuneng = null;
    return Weapon8;
}(Weapon));
//# sourceMappingURL=Weapon8.js.map