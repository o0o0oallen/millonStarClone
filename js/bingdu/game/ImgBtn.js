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
var ImgBtn = /** @class */ (function (_super) {
    __extends(ImgBtn, _super);
    function ImgBtn() {
        var _this = _super.call(this) || this;
        _this.skin = null;
        _this.icon = null;
        _this.it = null;
        _this.urlBg = null;
        _this.urlIcon = null;
        _this.enable = true;
        _this.bgName = null;
        _this.ui = null;
        _this.nodisable = false;
        return _this;
    }
    ImgBtn.prototype.setSkin = function (t, e, i, nodis) {
        if (e === void 0) { e = true; }
        if (i === void 0) { i = true; }
        if (nodis === void 0) { nodis = false; }
        return t.ui = this,
            this.skin = t,
            this.nodisable = nodis,
            t.on(Laya.Event.MOUSE_DOWN, this, this.onMD, [e]),
            // t.on(Laya.Event.CLICK, this, this.onClick),
            i && (this.urlBg = t.source.url,
                this.urlBg = this.urlBg.substring(0, this.urlBg.lastIndexOf("_") + 1),
                this.icon = t.getChildAt(0),
                this.icon && (this.urlIcon = this.icon.source.url,
                    this.urlIcon = this.urlIcon.substring(0, this.urlIcon.lastIndexOf("_") + 1))),
            this;
    };
    ImgBtn.prototype.setBgByName = function (t) {
        if (t === void 0) { t = ""; }
        return this.bgName = t,
            this.skin.skin = this.urlBg + t + ".png",
            this;
    };
    ImgBtn.prototype.setIconByName = function (t) {
        if (t === void 0) { t = ""; }
        return this.icon.once("loaded", this, this.centerIcon),
            this.icon.skin = this.urlIcon + t + ".png",
            this;
    };
    ImgBtn.prototype.centerIcon = function () {
        this.icon.x = .5 * (this.skin.width - this.icon.width),
            this.icon.y = .5 * (this.skin.height - this.icon.height);
    };
    ImgBtn.prototype.initImgText = function (t, e, i) {
        if (e === void 0) { e = "left"; }
        if (i === void 0) { i = ""; }
        return this.it = t.clone(this.skin.getChildAt(1)),
            this.it.setAlign(e),
            "" != i && this.it.setColor(i),
            this;
    };
    ImgBtn.prototype.setText = function (t) {
        this.it.setText(t);
    };
    ImgBtn.prototype.onClick = function () {
        (this.enable || this.nodisable) && this.event(Laya.Event.CLICK, this);
    };
    ImgBtn.prototype.onMD = function (e) {
        if (this.enable || this.nodisable) {
            laya.utils.Tween.to(this.skin, { scaleX: .9, scaleY: .9 }, 100);
            Laya.stage.once("mouseup", this, this.onMU, [e]);
            this.event("mousedown", this);
        }
    };
    ImgBtn.prototype.onMU = function (e) {
        if (e === void 0) { e = true; }
        e && (laya.utils.Tween.to(this.skin, {
            scaleX: 1,
            scaleY: 1
        }, 100), this.event("mouseup", this));
    };
    return ImgBtn;
}(laya.events.EventDispatcher));
//# sourceMappingURL=ImgBtn.js.map