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
var BtnImg = /** @class */ (function (_super) {
    __extends(BtnImg, _super);
    function BtnImg(t) {
        var _this = _super.call(this) || this;
        _this.skin = null;
        _this.enable = true;
        _this.sx = NaN;
        _this.sy = NaN;
        _this._sx = NaN;
        _this._sy = NaN;
        _this.skin = t,
            t.pivotX = Math.round(.5 * t.width),
            t.pivotY = Math.round(.5 * t.height),
            _this.sx = t.scaleX,
            _this.sy = t.scaleY,
            t.x += t.pivotX * (_this.sx > 0 ? 1 : -1),
            t.y += t.pivotY * (_this.sy > 0 ? 1 : -1),
            _this._sx = .9 * _this.sx,
            _this._sy = .9 * _this.sy,
            t.on("mousedown", _this, _this._onMD);
        return _this;
    }
    BtnImg.prototype._onMD = function () {
        this.enable && (laya.utils.Tween.to(this.skin, {
            scaleX: this._sx,
            scaleY: this._sy
        }, 100), Laya.stage.once("mouseup", this, this._onMU), this.event("mousedown"));
    };
    BtnImg.prototype._onMU = function () {
        laya.utils.Tween.to(this.skin, {
            scaleX: this.sx,
            scaleY: this.sy
        }, 100);
    };
    return BtnImg;
}(Game_Event));
//# sourceMappingURL=BtnImg.js.map