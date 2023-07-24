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
var Buff4_ZhaoHuan = /** @class */ (function (_super) {
    __extends(Buff4_ZhaoHuan, _super);
    function Buff4_ZhaoHuan() {
        var _this = _super.call(this) || this;
        _this.type = 7,
            _this.skin = new laya.display.Sprite();
        _this.icon = new laya.ui.Image();
        _this.icon.source = Laya.loader.getRes("icons/b" + _this.type + ".png");
        _this.icon.pivotX = .5 * _this.icon.source.width,
            _this.icon.pivotY = .5 * _this.icon.source.height,
            // this.imgCircle.skin = "icons/lanquan.png",
            // this.imgCircle.pos(this.skin.pivotX, this.skin.pivotY, true),
            // this.skin.addChild(this.imgCircle);
            _this.skin.addChild(_this.icon);
        _this.animImg = new Laya.Image();
        _this.skin.addChild(_this.animImg);
        _this.lanCircle.play(_this.animImg);
        return _this;
    }
    Buff4_ZhaoHuan.prototype.start = function (i, s) {
        _super.prototype.start.call(this, i, s);
        Buff4_ZhaoHuan.initStatic();
        // Buff4_ZhaoHuan.lastG = this;
    };
    Buff4_ZhaoHuan.prototype.kill = function () {
        _super.prototype.kill.call(this);
    };
    Buff4_ZhaoHuan.prototype.action = function () {
        Buff4_ZhaoHuan.curG = this,
            Buff4_ZhaoHuan.state.add(this.id, 1),
            UIHelper.doshow(Buff4_ZhaoHuan.plane.skin),
            Buff4_ZhaoHuan.plane.setShoot(Plane.ME.shootAble),
            Buff4_ZhaoHuan.plane.prop = this,
            _super.prototype.action.call(this),
            this.dura = 8,
            this.endTime = Game.time + this.dura,
            Buff4_ZhaoHuan.flyIn(true);
    };
    Buff4_ZhaoHuan.prototype.update = function () {
        _super.prototype.update.call(this);
        Buff4_ZhaoHuan.curG == this &&
            PosTool.disSqrO(Plane.ME, Buff4_ZhaoHuan.lastPoint) > 2e3 &&
            (++Buff4_ZhaoHuan.writeIndex >= Buff4_ZhaoHuan.saveCount && (Buff4_ZhaoHuan.writeIndex = 0),
                ++Buff4_ZhaoHuan.readIndex >= Buff4_ZhaoHuan.saveCount && (Buff4_ZhaoHuan.readIndex = 0),
                (Buff4_ZhaoHuan.lastPoint = Buff4_ZhaoHuan.path[Buff4_ZhaoHuan.writeIndex]).x = Plane.ME.x,
                Buff4_ZhaoHuan.lastPoint.y = Plane.ME.y,
                Buff4_ZhaoHuan.curPoint = Buff4_ZhaoHuan.path[Buff4_ZhaoHuan.readIndex]),
            !this.step &&
                Buff4_ZhaoHuan.plane &&
                (Buff4_ZhaoHuan.flying ? (Buff4_ZhaoHuan.plane.x += .1 * (Game.centerX + (Buff4_ZhaoHuan.curPoint.x - Game.centerX) * Buff4_ZhaoHuan.flyPgs - Buff4_ZhaoHuan.plane.x),
                    Buff4_ZhaoHuan.plane.y += .1 * (Game.hideY + (Buff4_ZhaoHuan.curPoint.y - Game.hideY) * Buff4_ZhaoHuan.flyPgs - Buff4_ZhaoHuan.plane.y)) : (Buff4_ZhaoHuan.plane.x += .1 * (Buff4_ZhaoHuan.curPoint.x - Buff4_ZhaoHuan.plane.x),
                    Buff4_ZhaoHuan.plane.y += .1 * (Buff4_ZhaoHuan.curPoint.y - Buff4_ZhaoHuan.plane.y),
                    Game.time > this.endTime - 1 && (Buff4_ZhaoHuan.flyIn(false),
                        Buff4_ZhaoHuan.plane.setShoot(false))),
                    Buff4_ZhaoHuan.plane.update(),
                    Buff4_ZhaoHuan.plane.draw());
    };
    Buff4_ZhaoHuan.prototype.unaction = function () {
        _super.prototype.unaction.call(this);
        Buff4_ZhaoHuan.state.remove(this.id),
            !Buff4_ZhaoHuan.state.state &&
                Buff4_ZhaoHuan.plane &&
                Buff4_ZhaoHuan.plane.prop == this &&
                (Buff4_ZhaoHuan.plane.setShoot(false),
                    UIHelper.dohide(Buff4_ZhaoHuan.plane.skin));
    };
    Buff4_ZhaoHuan.reset = function () {
        Buff4_ZhaoHuan.plane && (Buff4_ZhaoHuan.flyPgs = 0,
            Buff4_ZhaoHuan.plane.x = Game.centerX + (Buff4_ZhaoHuan.curPoint.x - Game.centerX) * Buff4_ZhaoHuan.flyPgs,
            Buff4_ZhaoHuan.plane.y = Game.hideY + (Buff4_ZhaoHuan.curPoint.y - Game.hideY) * Buff4_ZhaoHuan.flyPgs);
    };
    Buff4_ZhaoHuan.flyIn = function (t) {
        if (t) {
            1 != Buff4_ZhaoHuan.flyPgs && (Buff4_ZhaoHuan.flying = true, laya.utils.Tween.to(Buff4_ZhaoHuan, {
                flyPgs: 1
            }, (1 - Buff4_ZhaoHuan.flyPgs) / 1 * 600, null, laya.utils.Handler.create(Buff4_ZhaoHuan, Buff4_ZhaoHuan.flyEnd), 0, true),
                Buff4_ZhaoHuan.plane.x = Game.centerX + (Buff4_ZhaoHuan.curPoint.x - Game.centerX) * Buff4_ZhaoHuan.flyPgs,
                Buff4_ZhaoHuan.plane.y = Game.hideY + (Buff4_ZhaoHuan.curPoint.y - Game.hideY) * Buff4_ZhaoHuan.flyPgs);
        }
        else {
            if (!Game.isGameStart)
                return;
            Buff4_ZhaoHuan.flying = true,
                laya.utils.Tween.to(Buff4_ZhaoHuan, {
                    flyPgs: 0
                }, 600, null, laya.utils.Handler.create(Buff4_ZhaoHuan, Buff4_ZhaoHuan.flyEnd), 0, true);
        }
    };
    Buff4_ZhaoHuan.flyEnd = function () {
        Buff4_ZhaoHuan.flying = false;
    };
    Buff4_ZhaoHuan.initStatic = function () {
        if (null == Buff4_ZhaoHuan.plane) {
            (Buff4_ZhaoHuan.plane = new Plane(2)).setFace("fly2"),
                Buff4_ZhaoHuan.plane.addShooter(0),
                Buff4_ZhaoHuan.plane.attackAble = true,
                Buff4_ZhaoHuan.path = [];
            for (var t = 0; t < Buff4_ZhaoHuan.saveCount; t++)
                Buff4_ZhaoHuan.path.push({
                    x: Plane.ME.x + 100,
                    y: Plane.ME.y
                });
            Buff4_ZhaoHuan.lastPoint = Buff4_ZhaoHuan.path[Buff4_ZhaoHuan.writeIndex = 4],
                Buff4_ZhaoHuan.curPoint = Buff4_ZhaoHuan.path[Buff4_ZhaoHuan.readIndex = 0],
                Buff4_ZhaoHuan.plane.x = Buff4_ZhaoHuan.curPoint.x,
                Buff4_ZhaoHuan.plane.y = Buff4_ZhaoHuan.curPoint.y,
                UIHelper.dohide(Buff4_ZhaoHuan.plane.skin),
                Plane.ME.addEvent("setShoot", Buff4_ZhaoHuan, Buff4_ZhaoHuan.setShoot);
        }
    };
    Buff4_ZhaoHuan.setShoot = function () {
        Buff4_ZhaoHuan.state.state && Buff4_ZhaoHuan.plane && Buff4_ZhaoHuan.plane.setShoot(Plane.ME.shootAble);
    };
    Buff4_ZhaoHuan.plane = null;
    Buff4_ZhaoHuan.writeIndex = 0;
    Buff4_ZhaoHuan.readIndex = 0;
    Buff4_ZhaoHuan.curPoint = null;
    Buff4_ZhaoHuan.path = null;
    Buff4_ZhaoHuan.saveCount = 5;
    Buff4_ZhaoHuan.curG = null;
    Buff4_ZhaoHuan.flyPgs = 0;
    Buff4_ZhaoHuan.flying = false;
    Buff4_ZhaoHuan.state = new StateVal();
    Buff4_ZhaoHuan.lastPoint = {
        x: 0,
        y: 0
    };
    return Buff4_ZhaoHuan;
}(Buff));
//# sourceMappingURL=Buff4_ZhaoHuan.js.map