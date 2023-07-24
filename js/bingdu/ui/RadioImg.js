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
var RadioImg = /** @class */ (function (_super) {
    __extends(RadioImg, _super);
    function RadioImg(t) {
        var _this = _super.call(this) || this;
        _this.skin = null;
        _this.userData = null;
        _this.isSelected = false;
        _this.g = null;
        _this.img1 = null;
        _this.img2 = null;
        _this.skin = t,
            t.on("click", _this, _this.onClick),
            _this.setSelected(false),
            _this.img1 = t.getChildAt(0),
            _this.img2 = t.getChildAt(1),
            UIHelper.dohide(_this.img2),
            t.ui = _this;
        return _this;
    }
    RadioImg.prototype.onClick = function (t) {
        null != this.g ? this.isSelected || this.setSelected(true) : this.setSelected(!this.isSelected, true);
    };
    RadioImg.prototype.setSelected = function (t, e) {
        if (e === void 0) { e = false; }
        this.isSelected = t,
            UIHelper.showHide(!t, this.img1),
            UIHelper.showHide(t, this.img2),
            e && this.event("change");
    };
    return RadioImg;
}(Game_Event));
//# sourceMappingURL=RadioImg.js.map