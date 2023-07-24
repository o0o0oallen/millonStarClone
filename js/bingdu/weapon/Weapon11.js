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
var Weapon11 = /** @class */ (function (_super) {
    __extends(Weapon11, _super);
    function Weapon11() {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.bs = null;
        _this.b = null;
        _this.steupOrder = null;
        _this.step = 1;
        _this.szTarget = [];
        _this.shootDelay = 0;
        Weapon11.ME = _this,
            _this.skin = _this._skin = new ui.WP11UI(),
            Plane.ME.skin.addChild(_this._skin),
            _this.bs = [],
            _this.steupOrder = [];
        for (var t, i = 0; i < 2; i++)
            _this.b = new Buttle11(),
                _this.b.id = i,
                t = _this._skin["p" + i],
                _this.b.sitX = t.x,
                _this.b.sitY = t.y,
                _this.b.sitXOff = t.x - Plane.ME.skin.jiTou.x,
                _this.b.sitYOff = t.y - Plane.ME.skin.jiTou.y,
                _this.b.lr = 0 == i || 2 == i,
                _this.b.sit(),
                _this.bs.push(_this.b),
                _this.inOrder(_this.b),
                _this._skin.addChild(_this.b.skin);
        null == Weapon11.animBoom && (Weapon11.animBoom = new ImgAnim(Game.ME.layerBoom),
            Weapon11.animBoom.init("wuqi/11/bz", 12, 1, false, true)),
            UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r),
            UIHelper.dosave(_this._skin.p0),
            UIHelper.dosave(_this._skin.p1);
        return _this;
    }
    Weapon11.prototype.broken = function (t) {
        var e, i = 0;
        if (t)
            for (Plane.ME.explode(this._skin.l),
                Plane.ME.explode(this._skin.r),
                Plane.ME.explode(this._skin.p0),
                Plane.ME.explode(this._skin.p1),
                i = 0; i < 2; i++)
                (e = this.bs[i]).isSit && Plane.ME.explode(e.skin);
        else
            for (UIHelper.reset(this._skin.l),
                UIHelper.reset(this._skin.r),
                UIHelper.reset(this._skin.p0),
                UIHelper.reset(this._skin.p1),
                i = 0; i < 2; i++)
                (e = this.bs[i]).skin.alpha = 1,
                    e.skin.scale(1, 1, true),
                    e.sit();
    };
    Weapon11.prototype.setVisible = function (e) {
        _super.prototype.setVisible.call(this, e);
        this.SetAnim(e);
    };
    Weapon11.prototype.SetAnim = function (e) {
        //console.log("setanim====",e);
        for (var i = 0; i < 2; i++)
            this.bs[i].skin.visible = e,
                e && (this.bs[i].sit(), this.bs[i].AppearAnim());
    };
    Weapon11.prototype.initData = function () {
        Weapon11.buttleScale = Cfg.fNum3 / 1e3;
        Weapon11.rBoom = Weapon11.rBase * Weapon11.buttleScale;
        //this.setVisible(true);
        for (var e = 0; e < 2; e++)
            this.bs[e].skin.visible = true, this.bs[e].sit();
    };
    Weapon11.prototype.updateData = function () {
        Weapon11.buttleScale = Cfg.fNum3 / 1e3;
        Weapon11.rBoom = Weapon11.rBase * Weapon11.buttleScale;
    };
    Weapon11.prototype.planetkill = function (t) {
        // var npos = this.szTarget.indexOf(t);
        // if (npos != -1) {
        //     this.szTarget.splice(npos, 1);
        //     // if (this.szTarget.length == 0)
        //     //     Weapon11.ME.toshoot();
        // }
    };
    Weapon11.prototype.back = function (t) {
        this._skin.addChild(t.skin);
        this.inOrder(t);
        t.sit();
        this.step = 1;
    };
    Weapon11.prototype.inOrder = function (t) {
        this.steupOrder.push(t);
    };
    // public toshoot() {
    //     for (var e = 0; e < 2; e++)this.bs[e].toshoot();
    // }
    Weapon11.prototype.update = function () {
        var t = 0;
        switch (this.step) {
            case 1:
                this.step = 2;
                break;
            case 2:
                if (Game.isGameStart) {
                    for (t = 0; t < this.bs.length; t++) {
                        this.b = this.bs[t];
                        Laya.timer.once(600, this.b, this.b.send, [t]);
                    }
                    this.step = 22;
                }
                break;
            case 22:
                this.step = 3, this.steupOrder = [];
                break;
            case 3:
                if (Game.isGameStart || Game.ME.playMode == 1) {
                }
                else
                    for (t = 0; t < 2; t++)
                        this.bs[t].back();
                break;
        }
        var e, b = true;
        for (t = 0; t < 2; t++) {
            e = this.bs[t];
            e.updateBut();
            if (!e.shootAble) {
                b = false;
            }
        }
        b && Game.time > this.shootDelay && (this.shootDelay = Game.time + Cfg.fNum2, this.szTarget = [], this.bs[0].toshoot(), this.bs[1].toshoot());
    };
    Weapon11.ME = null;
    Weapon11.animBoom = null;
    Weapon11.rBoom = 90;
    Weapon11.buttleScale = 1;
    Weapon11.rBase = 90;
    return Weapon11;
}(Weapon));
//# sourceMappingURL=Weapon11.js.map