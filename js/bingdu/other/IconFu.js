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
* other.IconFu
*/
var IconFu = /** @class */ (function (_super) {
    __extends(IconFu, _super);
    function IconFu() {
        var _this = _super.call(this) || this;
        _this.skin = null;
        _this.btn = null;
        _this.id = 0;
        _this.lock = false;
        _this.skin = new ui.IconFuUI(),
            _this.btn = new ImgBtn(),
            _this.btn.setSkin(_this.skin.btn),
            _this.btn.on(Laya.Event.MOUSE_DOWN, _this, _this.onmousedown),
            _this.btn.on(Laya.Event.MOUSE_UP, _this, _this.onmouseup),
            // this.btn.iconFu = this,
            _this.state(false, "try"),
            _this.state(false, "new");
        return _this;
    }
    IconFu.prototype.setTryIcon = function (t) {
        this.skin.jiao.skin = t;
    };
    IconFu.prototype.onmousedown = function () {
        //console.log("iconfu***onmousedown***");
        this.event(Laya.Event.MOUSE_DOWN);
    };
    IconFu.prototype.onmouseup = function () {
        //console.log("iconfu***onmousedown***");
        this.event(Laya.Event.MOUSE_UP);
    };
    IconFu.prototype.state = function (t, e) {
        var i;
        switch (e) {
            case "new":
                i = this.skin.tipNew;
                break;
            case "try":
                i = this.skin.tipTry;
        }
        UIHelper.showHide(t, i);
    };
    IconFu.prototype.SetSelect = function (s) {
        this.skin.slcimg.visible = s;
    };
    return IconFu;
}(Game_Event));
//end other.IconFu
//# sourceMappingURL=IconFu.js.map