/*
* name;
*/
var Buttle10 = /** @class */ (function () {
    function Buttle10() {
        this.skin = null;
        this.id = 0;
        this.x = 0;
        this.y = 0;
        this.sitX = NaN;
        this.sitY = NaN;
        this.step = 0;
        this.isSit = false;
        this.LOrR = 0;
        this.atkState = 0;
        this.skin = new ui.Buttle10UI();
        this.skin.rangeimg.size(MStage.ME.GetWinWidth(), 100);
        this.skin.ani1.on(Laya.Event.COMPLETE, this, this.ShowMove);
        this.skin.ani5.play(0, true);
    }
    Buttle10.prototype.sit = function (a) {
        if (a === void 0) { a = ""; }
        //console.log("buttle***sit***"+a+"**"+this.skin.buttleobj.rotation);
        Laya.Tween.clearAll(this);
        Laya.Tween.clearAll(this.skin);
        Laya.Tween.clearAll(this.skin.juneng);
        Laya.Tween.clearAll(this.skin.rangeimg);
        this.id > 1 && (this.skin.visible = false);
        this.isSit = true;
        this.atkState = 0;
        this.step = 0;
        this.skin.rotation = 0;
        this.skin.x = this.x = this.sitX;
        this.skin.y = this.y = this.sitY;
        this.skin.scale(.6, .6, true);
        this.skin.rangeimg.alpha = 0;
        this.skin.p0.alpha = 0;
        this.skin.p1.alpha = 0;
        this.skin.p2.alpha = 0;
        this.skin.juneng.rotation = 0;
        this.skin.ani1.stop();
    };
    Buttle10.prototype.testHit = function () {
        var e, s, n, mx, my, hitx, hity;
        var i;
        if (this.atkState == 0 || this.LOrR == 1)
            return;
        for (i = 0; i < Planet.countAll; i++) {
            e = Planet.all[i];
            if (e.attackAble) {
                n = e.x - 0;
                s = e.y - this.y;
                hitx = n + 0;
                hity = s + this.y;
                // mx = Math.min(n, MStage.ME.GetWinWidth() / 2);
                // mx = Math.max(mx, -MStage.ME.GetWinWidth() / 2);
                my = Math.min(s, 100 / 2);
                my = Math.max(my, -100 / 2);
                if ((my - s) * (my - s) <= e.rSqr) {
                    e.hit(Cfg.fDamage);
                    this.hitFx(hitx, hity);
                }
            }
        }
    };
    Buttle10.prototype.hitFx = function (nx, ny) {
        //MSound.ME.playSoundLimit("w_buttle7"),
        FPool.ME.createByFun(Buttle.createFxHit).play(nx, ny);
    };
    Buttle10.prototype.send = function (e) {
        //console.log("weapon8****send***",e);
        this.isSit = false;
        this.skin.visible = true;
        Game.ME.layerPlane.addChild(this.skin);
        this.skin.scale(1, 1, true);
        this.skin.x = this.x = this.skin.x + Plane.ME.x - Plane.ME.skin.jiTou.x;
        this.skin.y = this.y = this.skin.y + Plane.ME.y - Plane.ME.skin.jiTou.y;
        this.skin.juneng.rotation = 0;
        this.skin.rangeimg.alpha = 0;
        this.step = 0;
        //this.LOrR = e;
        this.atkState = 0;
        this.ShowMove();
        //MSound.ME.playSoundLimit("w_buttle8_f");
    };
    Buttle10.prototype.ShowMove = function () {
        var _this = this;
        var nx, ny;
        //console.log("showmove====",Cfg.fNum3);
        if (this.step == 0) {
            this.step = 1;
            this.LOrR == 0 ? nx = 0 + 124 / 2 : nx = MStage.ME.GetWinWidth() - 124 / 2;
            ny = this.skin.y - 120 * MStage.ME.GetScaleY() + Math.floor(this.id / 2) * 120 * MStage.ME.GetScaleY();
            Laya.Tween.to(this, { x: nx, y: ny }, 500, Laya.Ease.linearNone, null, 100);
            Laya.Tween.to(this.skin, { x: nx, y: ny }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, this.ShowMove), 100);
        }
        else if (this.step == 1) {
            this.step = 2;
            this.skin.ani1.play(0, false);
            this.id == 6 && MSound.ME.playSoundLimit("w_buttle10_a");
        }
        else if (this.step == 2) {
            this.step = 3;
            this.LOrR == 0 ? nx = 0 + 90 : nx = 0 - 90;
            Laya.Tween.to(this.skin.juneng, { rotation: nx }, Cfg.fNum3 / 4 * 3 * 200, Laya.Ease.linearNone, Laya.Handler.create(this, this.ShowMove));
        }
        else if (this.step == 3) {
            this.LOrR == 0 && (this.atkState = 1, Laya.Tween.to(this.skin.rangeimg, { alpha: 1 }, 100, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                Laya.Tween.to(_this.skin.rangeimg, { alpha: 0 }, 100, Laya.Ease.linearNone, Laya.Handler.create(_this, function () {
                    _this.atkState = 0;
                }));
            })));
            this.id == 6 && MSound.ME.playSoundLimit("w_buttle10_b");
            this.LOrR == 0 ? nx = this.skin.juneng.rotation + 120 : nx = this.skin.juneng.rotation - 120;
            Laya.Tween.to(this.skin.juneng, { rotation: nx }, Cfg.fNum3 * 200, Laya.Ease.linearNone, Laya.Handler.create(this, this.ShowMove));
        }
    };
    Buttle10.prototype.back = function () {
        Laya.Tween.clearAll(this);
        Laya.Tween.clearAll(this.skin);
        Laya.Tween.clearAll(this.skin.juneng);
        Laya.Tween.clearAll(this.skin.rangeimg);
        this.skin.rangeimg.alpha = 0;
        this.skin.juneng.rotation = 0;
        this.step = 0;
        this.atkState = 0;
        Weapon10.ME.back(this);
    };
    Buttle10.prototype.light = function (t) {
        this.skin.juneng.skin = this.isSit ? "wuqi/10/" + t + ".png" : "wuqi/10/0.png";
    };
    Buttle10.prototype.updateBut = function () {
        switch (this.step) {
            case 3:
                this.y -= Game.dTime * 300;
                this.y < 108 / 2 ? this.back() : this.testHit();
                this.skin.pos(this.x, this.y, true);
                break;
        }
    };
    return Buttle10;
}());
//# sourceMappingURL=Buttle10.js.map