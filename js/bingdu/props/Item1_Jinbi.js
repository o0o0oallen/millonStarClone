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
var Item1_Jinbi = /** @class */ (function (_super) {
    __extends(Item1_Jinbi, _super);
    function Item1_Jinbi() {
        var _this = _super.call(this) || this;
        _this.type = 9,
            _this.skin = new laya.display.Sprite();
        _this.icon = new laya.ui.Image();
        _this.icon.source = Laya.loader.getRes("icons/starcore.png");
        _this.icon.pivotX = .5 * _this.icon.source.width,
            _this.icon.pivotY = .5 * _this.icon.source.height,
            // this.imgCircle = new Laya.Image(),
            // this.imgCircle.skin = "icons/hongquan.png",
            // this.imgCircle.pivotX = .5 * this.imgCircle.source.width,
            // this.imgCircle.pivotY = .5 * this.imgCircle.source.height,
            //this.imgCircle.pos(this.skin.pivotX, this.skin.pivotY, true),
            _this.skin.addChild(_this.icon);
        // this.skin.addChild(this.imgCircle);
        _this.animImg = new Laya.Image();
        _this.skin.addChild(_this.animImg);
        _this.lanCircle.play(_this.animImg);
        return _this;
    }
    Item1_Jinbi.prototype.start = function (e, i) {
        _super.prototype.start.call(this, e, i);
    };
    Item1_Jinbi.prototype.kill = function () {
        _super.prototype.kill.call(this);
    };
    Item1_Jinbi.prototype.action = function () {
        _super.prototype.action.call(this);
        console.log("action***", this.id);
        //Cfg.AddItem(1001, new math_BigUInt().one(), "item1_jinbi");
        //SV.ME.itemgold.plus();
        //添加获得效果
    };
    Item1_Jinbi.prototype.unaction = function () {
        _super.prototype.unaction.call(this);
    };
    Item1_Jinbi.oCoin = null;
    return Item1_Jinbi;
}(Buff));
//# sourceMappingURL=Item1_Jinbi.js.map