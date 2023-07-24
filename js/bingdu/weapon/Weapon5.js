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
var Weapon5 = /** @class */ (function (_super) {
    __extends(Weapon5, _super);
    function Weapon5() {
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
        _this.pgsCount = 12;
        _this.tpSend = 0;
        _this.step = 1;
        _this.topID = 0;
        _this.bugID = 0;
        _this.delayFind = NaN;
        Weapon5.ME = _this,
            _this.skin = _this._skin = new ui.WP5UI(),
            Plane.ME.skin.addChild(_this._skin),
            UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r),
            _this.bs = [],
            _this.steupOrder = [];
        for (var t, i = 0; i < 2; i++)
            _this.b = new Buttle5(),
                _this.b.id = i,
                t = _this._skin["p" + i],
                _this.b.sitX = t.x,
                _this.b.sitY = t.y,
                _this.b.sitXOff = t.x - Plane.ME.skin.jiTou.x,
                _this.b.sitYOff = t.y - Plane.ME.skin.jiTou.y,
                _this.b.lr = 0 == i || 2 == i,
                _this.b.sit(),
                _this.b.light(3),
                _this.bs.push(_this.b),
                _this.inOrder(_this.b),
                _this._skin.addChild(_this.b.skin);
        Buttle5.imgPool = new ImgPool(),
            Buttle5.imgPool.setInitFun(_this, _this.initButtleImg),
            UIHelper.dosave(_this._skin.l),
            UIHelper.dosave(_this._skin.r),
            UIHelper.dosave(_this._skin.p0),
            UIHelper.dosave(_this._skin.p1);
        return _this;
        //UIHelper.dosave(this._skin.p2),
        //UIHelper.dosave(this._skin.p3);
    }
    Weapon5.prototype.initButtleImg = function (t) {
        t.source = Laya.loader.getRes("wuqi/fuani/zidan.png"),
            t.pivotX = .5 * t.source.width,
            t.pivotY = .5 * t.source.height,
            Game.ME.layerPlane.addChild(t);
    };
    Weapon5.prototype.broken = function (t) {
        var e, i = 0;
        if (t)
            for (Plane.ME.explode(this._skin.l),
                Plane.ME.explode(this._skin.r),
                Plane.ME.explode(this._skin.p0),
                Plane.ME.explode(this._skin.p1),
                //Plane.ME.explode(this._skin.p2),
                //Plane.ME.explode(this._skin.p3),
                i = 0; i < 2; i++)
                (e = this.bs[i]).isSit && Plane.ME.explode(e.skin);
        else
            for (UIHelper.reset(this._skin.l),
                UIHelper.reset(this._skin.r),
                UIHelper.reset(this._skin.p0),
                UIHelper.reset(this._skin.p1),
                //UIHelper.reset(this._skin.p2),
                //UIHelper.reset(this._skin.p3),
                i = 0; i < 2; i++)
                (e = this.bs[i]).skin.alpha = 1,
                    e.skin.scale(1, 1, true),
                    e.sit();
    };
    Weapon5.prototype.setVisible = function (e) {
        _super.prototype.setVisible.call(this, e);
        //console.log("weapon5visible*****",e);
        this.SetAnim(e);
    };
    Weapon5.prototype.SetAnim = function (e) {
        for (var i = 0; i < 2; i++)
            this.bs[i].skin.visible = e,
                e && (this.bs[i].sit(), this.bs[i].AppearAnim());
    };
    Weapon5.prototype.initData = function () {
        this.dura_12 = Cfg.fNum3 / 12,
            //this.tpSteup = Game.time + this.dura_12;
            this.setVisible(true);
        for (var t, e = 0; e < 2; e++)
            (t = this.bs[e]).light(3),
                t.sit();
        //this.pgsI = 0;
    };
    Weapon5.prototype.updateData = function () {
        this.dura_12 = Cfg.fNum3 / 12;
    };
    Weapon5.prototype.back = function (t) {
        this._skin.addChild(t.skin),
            this.inOrder(t),
            t.sit(),
            t.light(3),
            this.step = 1;
        //this.pgsCount >= 6 && (this.step = 1);
    };
    Weapon5.prototype.inOrder = function (t) {
        this.steupOrder.push(t),
            this.pgsCount = 3 * this.steupOrder.length;
    };
    Weapon5.prototype.update = function () {
        var t = 0;
        switch (
        //this.pgsI < 6 ? this.pgsI < this.pgsCount && Game.time >= this.tpSteup && (
        //this.pgsI++ ,
        //this.pgsI >= 10 ? this.steupOrder[3].light(this.pgsI - 9) :
        //this.pgsI >= 7 ? this.steupOrder[2].light(this.pgsI - 6) :
        //this.pgsI >= 4 ? this.steupOrder[1].light(this.pgsI - 3) :
        //    this.steupOrder[0].light(this.pgsI),
        //this.tpSteup = Game.time + this.dura_12) :
        1 == this.step && (Buttle5.target = Planet.getNear(),
            //console.log("weapon5***update111***",this.step,Buttle5.target),
            null == Buttle5.target ? (this.delayFind = Game.time + .2, this.step = 12) : (this.bugID = Buttle5.target.id,
                //this.pgsCount = 0,
                //this.tpSend = Game.time + .25,
                //this.pgsI = 0,
                this.sendI = 0,
                Buttle5.target = Planet.getNear(),
                this.bugID = Buttle5.target.id,
                Buttle5.rRound = 6.28 * Math.random(),
                this.step = 2)), this.step) {
            case 2:
                // Game.isGameStart && (this.sendI < 2 ? Game.time > this.tpSend && 
                //  (this.b = this.bs[this.sendI],
                //     this.sendI < 2 ? laya.utils.Tween.to(this.b.skin, { x: this.b.lr ? this.b.x : this.b.x, y: this.b.y }, 600, laya.utils.Ease.circOut, laya.utils.Handler.create(this.b, this.b.send, [this.sendI]))
                //         //laya.utils.Tween.to(this.b.skin, {rotation: -90,x: this.b.lr ? this.b.x - 100 : this.b.x + 100,y: this.b.y + 100},600, laya.utils.Ease.circOut, laya.utils.Handler.create(this.b, this.b.send, [this.sendI]))
                //         : "",
                //     //laya.utils.Tween.to(this.b.skin, {rotation: -90,x: this.b.lr ? this.b.x - 200 : this.b.x + 200,y: this.b.y + 100},600, laya.utils.Ease.circOut, laya.utils.Handler.create(this.b, this.b.send, [this.sendI])),
                //     this.tpSend = Game.time + .05,
                //     this.sendI++) : (this.tpSend = Game.time + .8, this.step = 22));
                Game.isGameStart && (this.sendI < 2 ? (this.b = this.bs[this.sendI],
                    laya.utils.Tween.to(this.b.skin, { x: this.b.lr ? this.b.x : this.b.x, y: this.b.y }, 600, laya.utils.Ease.circOut, laya.utils.Handler.create(this.b, this.b.send, [this.sendI])),
                    this.sendI++) : this.step = 22);
                break;
            case 22:
                //Game.time > this.tpSend && (this.step = 3, this.steupOrder = []);
                this.step = 3, this.steupOrder = [];
                break;
            case 3:
                if (Game.isGameStart || Game.ME.playMode == 1) {
                    //console.log("weapon5***update333***",this.step,Buttle5.target.complete,Buttle5.target.id,this.bugID,Buttle5.target.y,Plane.ME.y);
                    var e = Buttle5.target;
                    if (Buttle5.target.complete || Buttle5.target.id != this.bugID || Buttle5.target.y > Plane.ME.y) {
                        e = Planet.getNear();
                    }
                    if (null == e)
                        for (this.delayFind = Game.time + .2, this.step = 32, t = 0; t < 2; t++)
                            this.bs[t].shootAble = false;
                    else
                        for (Buttle5.target = e, Buttle5.rRound = 6.28 * Math.random(), this.bugID = Buttle5.target.id, t = 0; t < 2; t++)
                            this.bs[t].shootAble = true;
                }
                else
                    for (t = 0; t < 2; t++)
                        this.bs[t].back();
                break;
            case 12:
                Game.time > this.delayFind && (this.step = 1);
                break;
            case 32:
                Game.time > this.delayFind && (this.step = 3);
        }
        for (t = 0; t < 2; t++)
            this.bs[t].update();
    };
    Weapon5.ME = null;
    return Weapon5;
}(Weapon));
//# sourceMappingURL=Weapon5.js.map