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
var Weapon10 = /** @class */ (function (_super) {
    __extends(Weapon10, _super);
    function Weapon10() {
        var _this = _super.call(this) || this;
        _this._skin = null;
        _this.bs = null;
        _this.b = null;
        _this.pgsI = 3;
        _this.gamestate = false;
        _this.startTime = 0;
        //f1num显示值f2num充能速度f3num范围
        Weapon10.ME = _this,
            _this.skin = _this._skin = new ui.WP10UI(),
            Plane.ME.skin.addChild(_this._skin),
            _this.bs = [];
        for (var t, i = 0; i < 8; i++)
            _this.b = new Buttle10(),
                _this.b.id = i,
                t = _this._skin["p" + i % 2],
                _this.b.sitX = t.x,
                _this.b.sitY = t.y,
                //this.b.sitXOff = this.b.sitX - Plane.ME.skin.jiTou.x,
                //this.b.sitYOff = this.b.sitY - Plane.ME.skin.jiTou.y,
                _this.b.LOrR = i % 2,
                _this.b.sit(),
                _this.b.light(3),
                _this.bs.push(_this.b),
                _this._skin.addChild(_this.b.skin);
        // if (null == Weapon8.animJuneng) {
        //     Weapon8.animJuneng = new AnimImg();
        //     Weapon8.animJuneng.init("wuqi/08/z", 2, 6, true, true);
        //     Weapon8.animJuneng.play(this._skin.l2);
        //     Weapon8.animJuneng.play(this._skin.r2);
        // }
        UIHelper.dosave(_this._skin.p0),
            UIHelper.dosave(_this._skin.p1),
            UIHelper.dosave(_this._skin.zy),
            UIHelper.dosave(_this._skin.yy);
        _this._skin.ani1.play(0, true);
        _this._skin.ani2.play(0, true);
        _this._skin.ani3.play(0, true);
        _this._skin.ani4.play(0, true);
        return _this;
    }
    Weapon10.prototype.broken = function (t) {
        var e, i = 0;
        if (t)
            for (Plane.ME.explode(this._skin.p0),
                Plane.ME.explode(this._skin.p1),
                Plane.ME.explode(this._skin.zy),
                Plane.ME.explode(this._skin.yy),
                i = 0; i < 8; i++)
                (e = this.bs[i]).isSit && Plane.ME.explode(e.skin);
        else
            for (UIHelper.reset(this._skin.p0),
                UIHelper.reset(this._skin.p1),
                UIHelper.reset(this._skin.zy),
                UIHelper.reset(this._skin.yy),
                i = 0; i < 8; i++)
                (e = this.bs[i]).skin.alpha = 1,
                    e.skin.scale(1, 1, true),
                    e.skin.rotation = 0,
                    e.sit("broken");
    };
    Weapon10.prototype.setVisible = function (e) {
        _super.prototype.setVisible.call(this, e);
        e && Plane.ME.skin.setChildIndex(this._skin, Plane.ME.skin.numChildren - 1);
        // for (var i = 0; i < 2; i++) this.bs[i].skin.visible = e,
        //     e && this.bs[i].sit("vis");
    };
    Weapon10.prototype.initData = function () {
        for (var t, e = 0; e < 8; e++)
            (t = this.bs[e]).light(0),
                t.sit("init");
        this.pgsI = 3;
        this.startTime = Game.time;
    };
    Weapon10.prototype.back = function (t) {
        //console.log("weapon10*******back****",t.id),
        this._skin.addChild(t.skin),
            t.sit("back"),
            t.light(0);
        this.startTime = Game.time + 1;
    };
    Weapon10.prototype.update = function () {
        var t = 0;
        if (Game.isGameStart) {
            var issit = true;
            for (t = 0; t < 8; t++) {
                if (!this.bs[t].isSit) {
                    issit = false;
                    break;
                }
            }
            //console.log("update======",Game.time,this.startTime,issit,this.pgsI);
            if (Game.time > this.startTime && issit) {
                this.startTime = Game.time + 1;
                this.pgsI++;
                if (this.pgsI >= 3) {
                    for (var o, e = 0; e < 8; e++) {
                        (o = this.bs[e]).light(3);
                        o.send(e);
                        this.pgsI = 0;
                    }
                }
                else {
                    this.bs[0].light(this.pgsI);
                    this.bs[1].light(this.pgsI);
                }
            }
            for (t = 0; t < 8; t++)
                this.bs[t].updateBut();
        }
        else {
            if (this.gamestate) {
                //console.log("weapon7*******gamestart*****"+Game.isGameStart);
                for (t = 0; t < 8; t++)
                    this.bs[t].back(), this.bs[t].light(3);
            }
        }
        this.gamestate = Game.isGameStart;
    };
    Weapon10.ME = null;
    Weapon10.animJuneng = null;
    return Weapon10;
}(Weapon));
//# sourceMappingURL=Weapon10.js.map