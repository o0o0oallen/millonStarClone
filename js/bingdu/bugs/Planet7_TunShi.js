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
var Planet7_TunShi = /** @class */ (function (_super) {
    __extends(Planet7_TunShi, _super);
    function Planet7_TunShi() {
        var _this = _super.call(this) || this;
        _this.sui = null;
        // public dzs = null;
        // public dz = null;
        _this.r2Sqr = 0;
        _this.time = 0;
        _this.time2 = 0;
        _this.rSpeed = .2;
        _this.yyy = 10;
        _this.catched = null;
        _this.catchedX = NaN;
        _this.catchedY = NaN;
        _this.lastEatTime = 0;
        _this.isEating = false;
        _this.startEat = function () {
            this.catched.skin == Game.ME.layerBug && Game.ME.layerBug.setChildIndex(this.catched.skin, Game.ME.layerBug.numChildren - 1),
                laya.utils.Tween.to(this.catched, {
                    x: this.x,
                    y: this.y
                }, 1e3, laya.utils.Ease.circIn, laya.utils.Handler.create(this, this.eat, [this.catched])),
                this.catched.skin.rotation = 0,
                laya.utils.Tween.to(this.catched.skin, {
                    scaleX: .1,
                    scaleY: .1,
                    rotation: 360
                }, 1e3, laya.utils.Ease.circIn);
        };
        _this.eat = function (t) {
            this.catched.skin.visible = false,
                this.yyy = 30,
                Laya.timer.once(2e3, this, this.create);
        };
        _this.create = function () {
            var t = new Planet7_TunShi();
            this.isEating = false,
                this.yyy = 10,
                t.type = this.type,
                t.x = this.x,
                t.y = this.y,
                t.setLevel(this.level),
                t.lifeBase.copy(this.catched.life),
                t.lifeNext.copy(t.lifeBase),
                t.life.copy(t.lifeBase),
                t.send();
            var i = this.catchedX - this.x, s = this.catchedY - this.y, n = 1 / Math.sqrt(i * i + s * s);
            i *= n,
                s *= n,
                t.xDir = i,
                t.yDir = s,
                t.xDirU = Math.abs(t.xDir),
                t.yDirU = Math.abs(t.yDir),
                Game.ME.minus(Cfg.getBugValue(this.catched.type, this.catched.level - 1, this.catched.life)),
                Game.ME.plus(Cfg.getBugValue(t.type, t.level - 1, t.life)),
                this.catched.kill(true),
                Planet.add(t),
                t.skin.scale(.1, .1, true),
                laya.utils.Tween.to(t, {
                    x: this.x + t.xDir * (this.r + t.r),
                    y: this.y + t.yDir * (this.r + t.r)
                }, 600, laya.utils.Ease.expoOut),
                laya.utils.Tween.to(t.skin, {
                    scaleX: t.scale,
                    scaleY: t.scale
                }, 600, laya.utils.Ease.expoOut),
                this.moveAble = true,
                this.attackAble = true;
        };
        _this.type = 7;
        _this.rBase = 125;
        _this.skin = _this.sui = new ui.Planet7UI();
        Game.ME.layerBug.addChild(_this.skin);
        _this.t = Cfg.imgTextBug.clone(new laya.display.Sprite());
        _this.t.space = 0;
        _this.skin.addChild(_this.t.sprite);
        _this.shock = _this.sui.c;
        return _this;
        // this.dzs = [];
        // var t = 0.6 * this.rBase;
        // var i = 0;
        // for (i = 0; i < 10; i++) {
        //     this.dz = new PlanetSplit();
        //     this.dz.r = t;
        //     this.skin.addChildAt(this.dz.img, this.skin.numChildren - 2);
        //     this.dzs.push(this.dz);
        // }
    }
    Planet7_TunShi.prototype.setLevel = function (e) {
        _super.prototype.setLevel.call(this, e);
        var i = 2 * this.r;
        this.r2Sqr = i * i;
    };
    Planet7_TunShi.prototype.setColor = function (t) {
        if (this.colorIndex != t) {
            this.colorIndex = t;
            //     this.sui.r1.skin = this.sui.r2.skin = "BugH/" + t + ".png",
            //     this.sui.c.skin = "Cir/" + t + ".png";
            // for (var e = 0; e < 10; e++) this.dzs[e].setColor(t);
        }
    };
    Planet7_TunShi.prototype.send = function () {
        _super.prototype.send.call(this),
            Laya.timer.loop(1, this, this.anim),
            // Laya.timer.loop(300, this, this.anim2),
            Laya.timer.loop(100, this, this.checkDis),
            this.lastEatTime = Game.time + 6;
    };
    Planet7_TunShi.prototype.anim = function () {
        this.time += .15,
            this.time2 += .1,
            this.shock.skewX = 2 * Math.sin(this.time),
            this.shock.skewY = 2 * Math.cos(this.time2),
            this.shock.scale(.95 + .05 * Math.sin(this.time), .95 + .05 * Math.cos(this.time2), true);
        // this.sui.r1.y = 2 * Math.sin(this.time) * this.yyy, //ltt 上下运动
        // this.sui.r2.y = 2 * Math.cos(this.time) * this.yyy;
        // for (var t = 0; t < 10; t++) this.dzs[t].update();
        this.sui.r1.rotation += .5; //ltt
    };
    Planet7_TunShi.prototype.anim2 = function () {
        // if (this.dianZhuiAble) for (var t = 0; t < 10; t++) if (this.dz = this.dzs[t], !this.dz.isStart) {
        //     this.dz.start();
        //     break;
        // }
    };
    Planet7_TunShi.prototype.checkDis = function () {
        if (this.moveAble && Game.time > this.lastEatTime) {
            this.lastEatTime = Game.time + 5;
            for (var t, e = Planet.countAll, s = 0, n = 0, a = 0; e--;)
                if ((t = Planet.all[e]).moveAble && t.id != this.id && !t.complete && t.type != this.type && !(t.level >= this.level) && (s = t.x - this.x, n = t.y - this.y, s *= s, n *= n, a = 2 * this.r, a *= a, s + n < a)) {
                    this.moveAble = false,
                        this.attackAble = false,
                        t.moveAble = false,
                        t.attackAble = false,
                        this.isEating = true,
                        this.catched = t,
                        this.catchedX = this.catched.x,
                        this.catchedY = this.catched.y,
                        Laya.timer.once(500, this, this.startEat);
                    break;
                }
        }
    };
    Planet7_TunShi.prototype.kill = function (e) {
        if (e === void 0) { e = false; }
        this.isEating && (Laya.timer.clear(this, this.startEat), laya.utils.Tween.clearTween(this.catched), laya.utils.Tween.clearTween(this.catched.skin), Laya.timer.clear(this, this.create), this.catched.skin.scale(this.catched.scale, this.catched.scale, true), this.catched.skin.rotation = 0, this.catched.attackAble = true, this.catched.moveAble = true),
            Laya.timer.clear(this, this.anim),
            // Laya.timer.clear(this, this.anim2),
            Laya.timer.clear(this, this.checkDis),
            _super.prototype.kill.call(this, e);
    };
    return Planet7_TunShi;
}(Planet));
//# sourceMappingURL=Planet7_TunShi.js.map