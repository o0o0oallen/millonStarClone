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
var DeBuff2_JiaSu = /** @class */ (function (_super) {
    __extends(DeBuff2_JiaSu, _super);
    function DeBuff2_JiaSu() {
        var _this = _super.call(this) || this;
        _this.type = 5,
            _this.skin = new laya.display.Sprite();
        _this.icon = new laya.ui.Image();
        _this.icon.source = Laya.loader.getRes("icons/b" + _this.type + ".png");
        _this.icon.pivotX = .5 * _this.icon.source.width,
            _this.icon.pivotY = .5 * _this.icon.source.height,
            // this.imgCircle.skin = "icons/hongquan.png",
            // this.imgCircle.pos(this.skin.pivotX, this.skin.pivotY, true),
            _this.skin.addChild(_this.icon);
        // this.skin.addChild(this.imgCircle);
        _this.animImg = new Laya.Image();
        _this.skin.addChild(_this.animImg);
        _this.hongCircle.play(_this.animImg);
        return _this;
    }
    DeBuff2_JiaSu.prototype.start = function (e, i) {
        _super.prototype.start.call(this, e, i);
    };
    DeBuff2_JiaSu.prototype.kill = function () {
        _super.prototype.kill.call(this);
    };
    DeBuff2_JiaSu.prototype.action = function () {
        _super.prototype.action.call(this);
        Planet.setFastRate(this.id, 1.5);
    };
    DeBuff2_JiaSu.prototype.unaction = function () {
        _super.prototype.unaction.call(this);
        Planet.setFastRate(this.id, 1);
    };
    return DeBuff2_JiaSu;
}(Buff));
//# sourceMappingURL=DeBuff2_JiaSu.js.map