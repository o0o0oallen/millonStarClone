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
/**
* name
*/
var Buff2_FanWei = /** @class */ (function (_super) {
    __extends(Buff2_FanWei, _super);
    function Buff2_FanWei() {
        var _this = _super.call(this) || this;
        _this.type = 2,
            _this.skin = new laya.display.Sprite();
        _this.icon = new laya.ui.Image();
        _this.icon.source = Laya.loader.getRes("icons/b" + _this.type + ".png");
        _this.icon.pivotX = .5 * _this.icon.source.width,
            _this.icon.pivotY = .5 * _this.icon.source.height,
            // this.imgCircle.skin = "icons/lanquan.png",
            // this.imgCircle.pos(this.skin.pivotX, this.skin.pivotY, true),
            _this.skin.addChild(_this.icon);
        // this.skin.addChild(this.imgCircle);
        _this.animImg = new Laya.Image();
        _this.skin.addChild(_this.animImg);
        // this.skin.addChild(this.imgCircle);
        _this.lanCircle.play(_this.animImg);
        return _this;
    }
    Buff2_FanWei.prototype.start = function (e, i) {
        _super.prototype.start.call(this, e, i);
    };
    Buff2_FanWei.prototype.kill = function () {
        _super.prototype.kill.call(this);
    };
    Buff2_FanWei.prototype.action = function () {
        _super.prototype.action.call(this);
        if (Game.ME.playMode == 1) {
            Cfg.upLevelCount(true);
            Game.ME.EndlessBuffTip(this.type, true);
            if (SV.ME.lCount % 10 == 0) {
                Cfg.upLevelCount2(true, SV.ME.curFu);
                Game.ME.EndlessBuffTip(this.type, false);
            }
            Game.ME.plane.wp.updateData();
        }
        Cfg.setBCountRate(this.id, Math.max(8 - SV.ME.level / 12, 2.1));
    };
    Buff2_FanWei.prototype.unaction = function () {
        _super.prototype.unaction.call(this);
        Cfg.setBCountRate(this.id, 1);
    };
    return Buff2_FanWei;
}(Buff));
//# sourceMappingURL=Buff2_FanWei.js.map