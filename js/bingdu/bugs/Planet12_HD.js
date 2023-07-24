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
var Planet12_HD = /** @class */ (function (_super) {
    __extends(Planet12_HD, _super);
    function Planet12_HD() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.time = 0;
        _this.time2 = 0;
        _this.childs = null;
        _this.child = null;
        _this.round = 0;
        _this.cs = NaN;
        _this.rBase = 125;
        _this.type = 12;
        _this.nextCount = 3;
        _this.skin = _this.sui = new ui.Planet12UI();
        Game.ME.layerBug.addChild(_this.skin);
        _this.t = Cfg.imgTextBug.clone(new laya.display.Sprite());
        _this.t.space = 0;
        _this.skin.addChild(_this.t.sprite);
        _this.shock = _this.sui.c;
        // this.dzs = [];
        // var t = 0.6 * this.rBase;
        var i = 0;
        // for (i = 0; i < 10; i++) {
        //     this.dz = new PlanetSplit();
        //     this.dz.r = t;
        //     this.skin.addChildAt(this.dz.img, this.skin.numChildren - 2);
        //     this.dzs.push(this.dz);
        // }
        for (_this.childs = [], i = 0; i < 6; i++)
            _this.child = new Planet12_HD_Child(_this.sui.getChildAt(i), _this, i),
                _this.childs.push(_this.child);
        return _this;
    }
    Planet12_HD.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.c.skin = "Cir/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
            // for (e = 0; e < 7; e++) this.sui.getChildAt(e).skin = "BugB/" + t + ".png";
        }
    };
    Planet12_HD.prototype.send = function () {
        _super.prototype.send.call(this),
            this.round = 6 * Math.random();
        for (var e = 0; e < 6; e++)
            this.child = this.childs[e],
                this.child.delay = Game.time + e * Planet12_HD_Child.diffTime,
                this.child.step = 3;
        Laya.timer.loop(1, this, this.anim);
        // Laya.timer.loop(300, this, this.anim2);
    };
    Planet12_HD.prototype.anim = function () {
        this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        this.sui.bg.rotation += .5; //ltt
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
        for (var t = 0; t < 6; t++)
            this.childs[t].update();
    };
    Planet12_HD.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet12_HD.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        Laya.timer.clear(this, this.anim),
            Laya.timer.clear(this, this.anim2);
        _super.prototype.kill.call(this, e);
    };
    return Planet12_HD;
}(Planet));
//# sourceMappingURL=Planet12_HD.js.map