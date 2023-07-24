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
var Planet8_Boom = /** @class */ (function (_super) {
    __extends(Planet8_Boom, _super);
    function Planet8_Boom() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.childs = null;
        _this.child = null;
        _this.round = 0;
        _this.time = 0;
        _this.time2 = 0;
        _this.cs = NaN;
        _this.sBi = NaN;
        _this.s = NaN;
        _this.px = 0;
        _this.py = 0;
        _this.fIndex = 0;
        _this.delay = 0;
        _this.type = 8;
        _this.rBase = 125;
        _this.skin = _this.sui = new ui.Planet8UI();
        Game.ME.layerBug.addChild(_this.skin);
        _this.t = Cfg.imgTextBug.clone(new laya.display.Sprite());
        _this.t.space = 0;
        _this.skin.addChild(_this.t.sprite);
        _this.shock = _this.sui.c;
        // this.dzs = [];
        var t = 0.6 * _this.rBase;
        var i = 0;
        // for (i = 0; i < 10; i++) {
        //     this.dz = new PlanetSplit();
        //     this.dz.r = t;
        //     this.skin.addChildAt(this.dz.img, this.skin.numChildren - 2);
        //     this.dzs.push(this.dz);
        // }
        for (_this.childs = [], i = 0; i < 7; i++)
            _this.child = new Planet8_Boom_Child(_this.sui.getChildAt(i)),
                _this.childs.push(_this.child);
        return _this;
    }
    Planet8_Boom.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.b.skin = "BugB/" + t + ".png",
            //     this.sui.c.skin = "Cir/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
            // for (e = 0; e < 7; e++) this.sui.getChildAt(e).skin = "BugL/" + t + ".png";
        }
    };
    Planet8_Boom.prototype.send = function () {
        _super.prototype.send.call(this),
            this.round = 6 * Math.random();
        for (var e = 0; e < 7; e++)
            this.child = this.childs[e],
                this.child.delay = Game.time + e * Planet8_Boom_Child.diffTime;
        Laya.timer.loop(1, this, this.anim);
        // Laya.timer.loop(300, this, this.anim2);
    };
    Planet8_Boom.prototype.anim = function () {
        this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        this.sui.b.rotation += .5; //ltt
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
        for (var t = 0; t < 7; t++)
            this.childs[t].update();
    };
    Planet8_Boom.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet8_Boom.prototype.kill = function (t) {
        if (t === void 0) { t = false; }
        var nid = this.id;
        Laya.timer.clear(this, this.anim2),
            t ? this._kill(t) : 1 == this.level ? (this.id = ++Cfg.ID, this.attackAble = false, this.moveAble = false, this.complete2 = true, Laya.timer.loop(1200, this, this._kill), Laya.timer.loop(10, this, this.xuLi), this.sBi = 1, this.px = this.skin.x, this.py = this.skin.y, this.fIndex = -1) : this._kill();
        //this.complete2 && this.drawButtle && this.drawButtle.planetkill(nid, "kill");
    };
    Planet8_Boom.prototype.xuLi = function () {
        this.sBi += .005,
            this.s = this.scale * this.sBi,
            this.skin.scale(this.s, this.s, true),
            this.x = this.px + 10 * Math.random(),
            this.y = this.py + 10 * Math.random();
    };
    Planet8_Boom.prototype._kill = function (e) {
        if (e === void 0) { e = false; }
        if (!e && 1 == this.level && (AreaCircle.start("xingqiu/quan.png", this.skin), Game.ME.plane.attackAble)) {
            var s = 0, n = 0;
            s = Plane.ME.x - this.x,
                n = (n = Plane.ME.y - this.y) * n + (s *= s),
                s = 210 + Plane.ME.r,
                n < (s *= s) && Game.ME.fail();
        }
        this.skin.filters = null,
            Laya.timer.clear(this, this.anim),
            Laya.timer.clear(this, this._kill),
            Laya.timer.clear(this, this.xuLi);
        _super.prototype.kill.call(this, e);
    };
    return Planet8_Boom;
}(Planet));
//# sourceMappingURL=Planet8_Boom.js.map