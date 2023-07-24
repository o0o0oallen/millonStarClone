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
var Weapon9 = /** @class */ (function (_super) {
    __extends(Weapon9, _super);
    function Weapon9() {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.bs = null;
        _this.b = null;
        _this.steupOrder = null;
        _this.dura_12 = NaN;
        _this.duraShot = NaN;
        _this.tpSteup = NaN;
        _this.pgsI = 0;
        _this.sendI = 0;
        _this.pgsCount = 8;
        _this.tpSend = 0;
        _this.step = 1;
        _this.topID = 0;
        _this.bugID = 0;
        _this.delayFind = NaN;
        Weapon9.ME = _this,
            _this.skin = _this._skin = new ui.WP9UI(),
            Plane.ME.skin.addChild(_this._skin),
            _this.bs = [],
            _this.steupOrder = [];
        for (var t, i = 0; i < 2; i++)
            _this.b = new Buttle9(),
                _this.b.id = i,
                t = _this._skin["p" + i],
                _this.b.sitX = t.x,
                _this.b.sitY = t.y,
                _this.b.sitXOff = _this.b.sitX - Plane.ME.skin.jiTou.x,
                _this.b.sitYOff = _this.b.sitY - Plane.ME.skin.jiTou.y,
                _this.b.lr = 0 == i,
                _this.b.lr ? _this.b.skin.skewY = -180 : _this.b.skin.skewY = 0,
                _this.b.sit(),
                _this.b.light(3),
                _this.bs.push(_this.b),
                _this.inOrder(_this.b),
                _this._skin.addChild(_this.b.skin);
        // Buttle5.imgPool = new ImgPool(),
        //     Buttle5.imgPool.setInitFun(this, this.initButtleImg),
        UIHelper.dosave(_this._skin.zy),
            UIHelper.dosave(_this._skin.yy),
            UIHelper.dosave(_this._skin.p0),
            UIHelper.dosave(_this._skin.p1);
        return _this;
        //UIHelper.dosave(this._skin.p2),
        //UIHelper.dosave(this._skin.p3);
    }
    Weapon9.prototype.broken = function (t) {
        var e, i = 0;
        if (t)
            for (Plane.ME.explode(this._skin.zy),
                Plane.ME.explode(this._skin.yy),
                Plane.ME.explode(this._skin.p0),
                Plane.ME.explode(this._skin.p1),
                //Plane.ME.explode(this._skin.p2),
                //Plane.ME.explode(this._skin.p3),
                i = 0; i < 2; i++)
                (e = this.bs[i]).isSit && Plane.ME.explode(e.skin);
        else
            for (UIHelper.reset(this._skin.zy),
                UIHelper.reset(this._skin.yy),
                UIHelper.reset(this._skin.p0),
                UIHelper.reset(this._skin.p1),
                //UIHelper.reset(this._skin.p2),
                //UIHelper.reset(this._skin.p3),
                i = 0; i < 2; i++)
                (e = this.bs[i]).skin.alpha = 1,
                    e.skin.rotation = 0,
                    e.skin.scale(1, 1, true),
                    e.sit();
    };
    Weapon9.prototype.setVisible = function (e) {
        _super.prototype.setVisible.call(this, e);
        //console.log("setVisible****weapon9***", e);
        e && Plane.ME.skin.setChildIndex(this._skin, Plane.ME.skin.numChildren - 1);
        for (var i = 0; i < 2; i++)
            this.bs[i].skin.visible = e,
                e && this.bs[i].sit();
    };
    Weapon9.prototype.initData = function () {
        this.tpSteup = Game.time + Cfg.fNum3 / 3;
        Weapon9.buttleScale = Cfg.fNum1 * 2 / 1e3;
        for (var t, e = 0; e < 2; e++)
            (t = this.bs[e]).light(0),
                t.sit();
        this.pgsI = 0;
        this.step = 1;
        //console.log("initData***weapon9***", this.tpSteup, Weapon9.buttleScale);
    };
    Weapon9.prototype.updateData = function () {
        this.step != 1 && (this.tpSteup = Game.time + Cfg.fNum3 / 3);
        Weapon9.buttleScale = Cfg.fNum1 * 2 / 1e3;
        //console.log("updateData***weapon9***", this.tpSteup, Weapon9.buttleScale);
    };
    Weapon9.prototype.back = function (t) {
        this._skin.addChild(t.skin),
            this.inOrder(t),
            t.sit(),
            t.light(0),
            this.pgsCount >= 8 && (this.step = 1, this.tpSteup = Game.time + Cfg.fNum3 / 3);
        //console.log("weapon***back***",t.lr,t.id,this.pgsCount,this.steupOrder.length);
    };
    Weapon9.prototype.inOrder = function (t) {
        this.steupOrder.push(t),
            this.pgsCount = 4 * this.steupOrder.length;
    };
    Weapon9.prototype.update = function () {
        var t, s;
        //console.log("weapon--update--",this.step,this.sendI);
        switch (this.step) {
            case 1:
                Game.time >= this.tpSteup && (this.tpSteup = Game.time + Cfg.fNum3 / 3,
                    this.pgsI++,
                    this.steupOrder[1].light(this.pgsI),
                    this.steupOrder[0].light(this.pgsI),
                    this.pgsI >= 3 && (this.pgsCount = 0,
                        this.tpSend = Game.time + .25,
                        this.pgsI = 0,
                        this.sendI = 0,
                        this.step = 2));
                break;
            case 2:
                Game.isGameStart && (this.sendI < 2 ?
                    Game.time > this.tpSend && (this.b = this.bs[this.sendI],
                        this.sendI < 2 ?
                            laya.utils.Tween.to(this.b.skin, { x: this.b.lr ? this.b.x - 100 : this.b.x + 100, y: this.b.y + 100 }, 600, laya.utils.Ease.circOut, laya.utils.Handler.create(this.b, this.b.send, [this.sendI]))
                            : "",
                        this.sendI++,
                        this.b = this.bs[this.sendI],
                        this.sendI < 2 ?
                            laya.utils.Tween.to(this.b.skin, { x: this.b.lr ? this.b.x - 100 : this.b.x + 100, y: this.b.y + 100 }, 600, laya.utils.Ease.circOut, laya.utils.Handler.create(this.b, this.b.send, [this.sendI]))
                            : "",
                        this.sendI++,
                        MSound.ME.playSoundLimit("w_buttle9_a"))
                    : (this.tpSend = Game.time + .8, this.step = 22));
                break;
            case 22:
                Game.time > this.tpSend && (this.step = 3, this.steupOrder = []);
                break;
            case 3:
                if (Game.isGameStart) {
                    for (t = 0; t < 2; t++) {
                        if (this.bs[t].y < 0)
                            this.bs[t].back();
                    }
                }
                else {
                    for (t = 0; t < 2; t++) {
                        Weapon9.ME.back(this.bs[t]);
                        this.bs[t].open(false);
                        this.bs[t].light(3);
                    }
                    this.step = 0;
                }
                break;
        }
        for (t = 0; t < 2; t++)
            this.bs[t].Moveupdate();
    };
    Weapon9.ME = null;
    Weapon9.buttleScale = NaN;
    return Weapon9;
}(Weapon));
//# sourceMappingURL=Weapon9.js.map