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
var Buff1_HuoLi = /** @class */ (function (_super) {
    __extends(Buff1_HuoLi, _super);
    function Buff1_HuoLi() {
        var _this = _super.call(this) || this;
        _this.type = 1;
        _this.skin = new laya.display.Sprite();
        _this.icon = new laya.ui.Image();
        _this.icon.source = Laya.loader.getRes("icons/b" + _this.type + ".png");
        _this.icon.pivotX = .5 * _this.icon.source.width;
        _this.icon.pivotY = .5 * _this.icon.source.height;
        // this.imgCircle.skin = "icons/lanquan.png";
        // this.imgCircle.pos(this.skin.pivotX, this.skin.pivotY, true);
        _this.skin.addChild(_this.icon);
        _this.animImg = new Laya.Image();
        _this.skin.addChild(_this.animImg);
        // this.skin.addChild(this.imgCircle);
        _this.lanCircle.play(_this.animImg);
        return _this;
    }
    Buff1_HuoLi.prototype.start = function (e, i) {
        _super.prototype.start.call(this, e, i);
    };
    Buff1_HuoLi.prototype.kill = function () {
        _super.prototype.kill.call(this);
    };
    Buff1_HuoLi.prototype.action = function () {
        _super.prototype.action.call(this);
        Game.ME.playMode == 1 && (Cfg.upLevelDamage(true),
            Game.ME.EndlessBuffTip(this.type, true),
            Cfg.upLevelDamage2(true, SV.ME.curFu),
            Game.ME.EndlessBuffTip(this.type, false));
        Cfg.setDamageRate(this.id, Math.max(8 - SV.ME.level / 12, 2.1));
    };
    Buff1_HuoLi.prototype.unaction = function () {
        _super.prototype.unaction.call(this);
        Cfg.setDamageRate(this.id, 1);
    };
    return Buff1_HuoLi;
}(Buff));
//# sourceMappingURL=Buff1_HuoLi.js.map