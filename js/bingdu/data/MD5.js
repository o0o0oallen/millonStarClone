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
var MD5 = /** @class */ (function (_super) {
    __extends(MD5, _super);
    function MD5() {
        var _this = _super.call(this) || this;
        _this.md5 = null;
        _this.isOk = false;
        MD5.ME = _this;
        _this.checkJSLoad();
        return _this;
    }
    MD5.prototype.checkJSLoad = function () {
        null == this.md5 ? this.md5 = laya.utils.Browser.window.md5 : this.ok();
    };
    MD5.prototype.ok = function () {
        this.isOk || (this.isOk = true, this.event("ok"), Laya.timer.clear(this, this.checkJSLoad)); //
    };
    MD5.prototype.hash = function (t) {
        // console.log("this.md5", this.md5, t);
        if (this.md5) {
            this.md5(t);
        }
        else {
            //console.log("md5 no data");
        }
    };
    return MD5;
}(Game_Event));
//# sourceMappingURL=MD5.js.map