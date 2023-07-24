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
var Buff5_JinBi = /** @class */ (function (_super) {
    __extends(Buff5_JinBi, _super);
    function Buff5_JinBi() {
        var _this = _super.call(this) || this;
        _this.type = 8,
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
        _this.lanCircle.play(_this.animImg);
        return _this;
    }
    Buff5_JinBi.prototype.start = function (e, i) {
        _super.prototype.start.call(this, e, i);
    };
    Buff5_JinBi.prototype.kill = function () {
        _super.prototype.kill.call(this);
    };
    Buff5_JinBi.prototype.action = function () {
        _super.prototype.action.call(this);
        Game.ME.playMode == 1 && (Cfg.upLevelJiaZhi(true), Game.ME.EndlessBuffTip(this.type, false));
        Planet.hitCoin.add(this.id, 1),
            Plane.ME.wps[0].updateButtleFace();
        // Buff5_JinBi.oCoin || (
        //     Plane.ME.wps[0].updateButtleFace()
        //     // Buff5_JinBi.oCoin = Game.ME.fxJinBi.play(0, 0, 1.2, false)
        //     // Plane.ME.skin.addChild(Buff5_JinBi.oCoin.img),
        //     // Buff5_JinBi.oCoin.img.pos(Plane.ME.skin.jiTou.x, Plane.ME.skin.jiTou.y - 90, true)
        // );
    };
    Buff5_JinBi.prototype.unaction = function () {
        _super.prototype.unaction.call(this);
        Planet.hitCoin.remove(this.id),
            !Planet.hitCoin.state && Plane.ME.wps[0].updateButtleFace();
        // !Planet.hitCoin.state && Buff5_JinBi.oCoin && (
        //     Plane.ME.wps[0].updateButtleFace(),
        //     // Game.ME.fxJinBi.stop(Buff5_JinBi.oCoin),
        //     // Game.ME.fxJinBi.parent.addChild(Buff5_JinBi.oCoin.img),
        //     Buff5_JinBi.oCoin = null
        // );
    };
    Buff5_JinBi.oCoin = null;
    return Buff5_JinBi;
}(Buff));
//# sourceMappingURL=Buff5_JinBi.js.map